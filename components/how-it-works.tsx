import React from "react";
import SectionHeading from "./section-heading";

export default function HowItWorks() {
  return (
    <section className="max-w-5xl mx-auto text-center py-20 mb-2">
      <div className="flex flex-col gap-6 mx-auto items-center justify-center max-w-3xl">
        <h2 className="text-se text-3xl font-serif font-semibold text-center text-primary">
          How It Works
        </h2>
        <span className="w-12 h-1 bg-secondary block"></span>
        <p className="text-muted-foreground text-lg text-center">
          Getting personalized book recommendations is quick and easy. Just
          follow these simple steps, and you’ll be on your way to discovering
          your next favorite read!
        </p>
      </div>

      <div className="mt-20 flex gap-10">
        <div className="w-full  bg-light-blue p-8 flex gap-6 flex-col items-start">
          <span className="size-12 bg-secondary rounded-full flex justify-center items-center text-primary font-serif font-semibold text-xl">
            1.
          </span>
          <h3 className="text-primary text-2xl font-serif font-semibold">
            Share your preferences
          </h3>
          <p className="text-left text-primary">
            Share your reading preferences—genres you like, your favorite
            authors, or even specific themes you’re interested in. Whether
            you’re into thrillers, romance, science fiction, or biographies,
            these questions help us understand your unique taste in books.
          </p>
        </div>
        <div className="w-full  bg-light-blue p-8 flex gap-6 flex-col items-start">
          <span className="size-12 bg-secondary rounded-full flex justify-center items-center text-primary font-serif font-semibold text-xl">
            2.
          </span>
          <h3 className="text-primary text-2xl font-serif font-semibold">
            Get Tailored Recommendations
          </h3>
          <p className="text-left text-primary">
            Based on your answers, our algorithm analyzes thousands of books and
            selects titles that match your preferences. Each recommendation is
            curated to ensure it fits your reading style, whether you’re looking
            for a light read or something more complex.
          </p>
        </div>
      </div>

      <div className="mt-10 flex gap-10">
        <div className="w-full  bg-light-blue p-8 flex gap-6 flex-col items-start">
          <span className="size-12 bg-secondary rounded-full flex justify-center items-center text-primary font-serif font-semibold text-xl">
            3.
          </span>
          <h3 className="text-primary text-2xl font-serif font-semibold">
            Explore Your Recommended Books
          </h3>
          <p className="text-left text-primary">
            Once you receive your personalized list, browse through the
            suggested titles. We provide detailed descriptions, book reviews,
            and ratings to help you decide which one to dive into next. You can
            also explore similar books or even filter recommendations by length,
            mood, or publication date.
          </p>
        </div>
        <div className="w-full  bg-light-blue p-8 flex gap-6 flex-col items-start">
          <span className="size-12 bg-secondary rounded-full flex justify-center items-center text-primary font-serif font-semibold text-xl">
            4.
          </span>
          <h3 className="text-primary text-2xl font-serif font-semibold">
            Start Reading
          </h3>
          <p className="text-left text-primary">
            Found a book that intrigues you? Start reading! We provide easy
            links to purchase or borrow the book from popular retailers and
            libraries, so you can start enjoying your next great read without
            any hassle.
          </p>
        </div>
      </div>
    </section>
  );
}
