"use server";
import { formSchema } from "@/components/form-section";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { z } from "zod";

export async function getRecommendations(
  payload: z.infer<typeof formSchema>
): Promise<any> {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  console.log("payload", payload);
  const userMessages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "You are an expert in recommending books and you give recommendations based on preferences. Here are information about my reading preferences:",
    },
  ];

  if (payload.genres && payload.genres.length > 0) {
    const genres = payload.genres.join(", ");
    userMessages.push({ role: "user", content: `Favorite genres: ${genres}` });
  }

  if (payload.favoriteAuthors) {
    userMessages.push({
      role: "user",
      content: `Favorite authors: ${payload.favoriteAuthors}`,
    });
  }

  if (payload.recentAndFavoritesBooks) {
    userMessages.push({
      role: "user",
      content: `Recently read and favorite books: ${payload.recentAndFavoritesBooks}`,
    });
  }

  if (payload.specificThemesOrTopics) {
    userMessages.push({
      role: "user",
      content: `Specific topics or interests: ${payload.specificThemesOrTopics}`,
    });
  }
  userMessages.push({
    role: "system",
    content:
      "Based on this information, please provide 5 book recommendations which correspond to my preferences. Explain why each book is a good choice for me taking my preferences into account. Response should look like this: 1. 'Title' ; 'Author' ; 'Description'. Title, author and Description should be separated by ';'",
    // "Na osnovu ovih informacija, molimo vas da pružite 5 preporuka knjiga koje odgovaraju mojim preferencijama. Objasnite zašto je svaka knjiga dobar izbor za mene, uzimajući u obzir moje preferencije. Takodje obezbedi URL za sliku knjige. Odgovor treba da izgleda ovako: 1. 'Naslov' ; 'autor' ; 'opis' ; 'URL'",
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: userMessages,
    temperature: 0,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const parsedResponse = response?.choices[0]?.message?.content
    ?.split("\n\n")
    .filter((entry: any) => entry.trim().length > 0)
    .map((entry: any) => entry.trim());

  console.log("parsed response", transformParsedResponse(parsedResponse));

  const transformedResponse = transformParsedResponse(parsedResponse);

  const booksWithCovers = await Promise.all(
    transformedResponse.map(async (book: any) => {
      const coverUrl = await getBookCover(book.title);
      return { ...book, coverUrl: coverUrl || null };
    })
  );

  console.log("booksWithCovers", booksWithCovers);

  return booksWithCovers;
}

function transformParsedResponse(bookList: any) {
  return bookList.map((item: any) => {
    const [title, author, description] = item.split(" ; ");
    return {
      title: title.replace(/^\d+\.\s*/, ""),
      author: author,
      description: description,
    };
  });
}

export const getBookCover = async (title: string) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        title
      )}&maxResults=1`
    );
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const book = data.items[0];
      return book.volumeInfo.imageLinks?.smallThumbnail || null;
    }

    return null;
  } catch (error) {
    console.error("Error fetching book cover:", error);
    return null;
  }
};
