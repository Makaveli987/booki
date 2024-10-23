"use client";
import { useRef, useState } from "react";
import { Input } from "./ui/input";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Option } from "./ui/multi-select";

import { getRecommendations } from "@/actions/get-recomendations";
// import { useLoadingDialog } from "@/hooks/useLoadingDialog";
import useLocalStorage from "@/hooks/useLocalStorage";
// import BookCard from "./book-card";
// import ErrorAlert from "./error-alert";
import { saveSearch } from "@/actions/save-search";
import {
  CircleCheckIcon,
  Loader2Icon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import RecommendationCard from "./recommendation-card";
import SectionHeading from "./section-heading";
import { MultiSelect } from "./ui/multiple-select";

const GENRES: Option[] = [
  { label: "Mystery", value: "Mystery" },
  { label: "Fantasy", value: "Fantasy" },
  { label: "Thriller", value: "Thriller" },
  { label: "Romance", value: "Romance" },
  { label: "Biography", value: "Biography" },
  { label: "Psychology", value: "Psychology" },
  { label: "Self-Help", value: "Self-Help" },
  { label: "Business & Economics", value: "Business & Economics" },
  { label: "History", value: "History" },
  { label: "Drama", value: "Drama" },
  { label: "Horror", value: "Horror" },
  { label: "Health & Wellness", value: "Health & Wellness" },
  { label: "Poetry", value: "Poetry" },
  { label: "Spiritual & Religious", value: "Spiritual & Religious" },
];

export const formSchema = z.object({
  genres: z.array(z.string()),
  favoriteAuthors: z.string(),
  recentAndFavoritesBooks: z.string(),
  specificThemesOrTopics: z.string(),
});

export default function FormSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [usefullClicked, setUsefullClicked] = useState(false);

  const recommendationsRef = useRef(null);

  const [recommendations, setRecommendations] = useLocalStorage<string[]>(
    "recommendations",
    []
  );
  // const loadingDialog = useLoadingDialog();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      genres: [],
      favoriteAuthors: "",
      recentAndFavoritesBooks: "",
      specificThemesOrTopics: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    const response = await getRecommendations(values).finally(() => {
      // loadingDialog.close();
      // @ts-ignore
      recommendationsRef?.current?.scrollIntoView();
      setIsLoading(false);
    });

    await saveSearch(values);

    // const parsedResponse = response.choices[0].message.content
    //   .split("\n\n")
    //   .filter((entry: any) => entry.trim().length > 0)
    //   .map((entry: any) => entry.trim());

    setRecommendations(response);
  }

  async function saveIsUsefull(usefull: boolean) {
    setUsefullClicked(true);
    // await saveUsefull(usefull);
  }

  return (
    <section className="bg-light-blue relative px-4 z-50 ">
      <div className="mx-auto sm:max-w-2xl bg-white shadow-custom -translate-y-1/3 p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6 "
          >
            <FormField
              control={form.control}
              name="genres"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Favorites genres</FormLabel>
                  <FormControl>
                    <MultiSelect
                      options={GENRES}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      defaultValue={field.value}
                      placeholder="Select favorites genres"
                      variant="inverted"
                      animation={2}
                      maxCount={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="favoriteAuthors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Favorite Authors</FormLabel>
                  <FormControl>
                    <Input
                      className="p-5 "
                      placeholder="Enter favorite authors"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="recentAndFavoritesBooks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recently Read and Favorite Books</FormLabel>
                  <FormControl>
                    <Input
                      className="p-5 "
                      placeholder="Enter recently read and favorite books"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specificThemesOrTopics"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specific Topics or Interests</FormLabel>
                  <FormControl>
                    <Input
                      className="p-5 "
                      placeholder="Time Management, Entrepreneurship, World War II..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="h-14 bg-secondary text-primary text-lg font-serif font-semibold shadow-none border border-secondary"
              type="submit"
              // size={''}
              // onClick={() => loadingDialog.open()}
            >
              {isLoading ? (
                <>
                  <Loader2Icon className="animate-spin mr-2" /> Searching books
                </>
              ) : (
                <>Get Recommendations</>
              )}
            </Button>
          </form>
        </Form>
      </div>

      <div
        ref={recommendationsRef}
        id="recommendations"
        className="max-w-4xl mx-auto -translate-y-24"
      >
        {recommendations?.length && !hasError ? (
          <>
            <SectionHeading>Recommendations</SectionHeading>
            <div className="flex flex-col gap-10 mt-20">
              {recommendations.map((recommendation, index) => (
                <RecommendationCard
                  key={index}
                  recommendation={recommendation}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border rounded-[4px] p-4 mt-14  bg-primary text-title-white">
              <p className="t text-lg">Was the recommendation helpful?</p>
              {!usefullClicked ? (
                <div className="flex gap-2 sm:gap-1">
                  <Button
                    onClick={() => saveIsUsefull(true)}
                    variant={"ghost"}
                    className="hover:bg-transparent hover:text-emerald-500 px-2"
                  >
                    <ThumbsUpIcon className="size-5" />
                  </Button>
                  <Button
                    onClick={() => saveIsUsefull(false)}
                    variant={"ghost"}
                    className="hover:bg-transparent hover:text-destructive px-2"
                  >
                    <ThumbsDownIcon className="size-5" />
                  </Button>
                </div>
              ) : (
                <div>
                  <CircleCheckIcon className="size-6 text-emerald-500" />
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>

      {/* <div
        ref={recommendationsRef}
        id="recommendations"
        className="max-w-4xl mx-auto -translate-y-24"
      >
        <SectionHeading>Recommendations</SectionHeading>
        <div className="flex flex-col gap-10 mt-20">
          {recommendations.map((recommendation, index) => (
            <RecommendationCard
              key={index}
              recommendation={
                recommendation as unknown as RecommendationCardProps
              }
            />
          ))}
        </div>
      </div> */}
    </section>
  );
}
