import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { saveBuy } from "@/actions/save-buy";
import { track } from '@vercel/analytics';


export type RecommendationCardProps = {
  recommendation: {
    title: string;
    author: string;
    description: string;
    coverUrl?: string;
  };
};

export default function RecommendationCard({ recommendation }: any) {
  async function saveClick() {
    await saveBuy(recommendation.title, recommendation.author);
    track('Buy', { book: recommendation.title });
  }

  return (
    <div className="bg-white p-6 flex flex-col items-center md:flex-row md:items-start gap-6 shadow-custom rounded-[3px]">
      <div className="w-32 bg-red-900 shrink-0 overflow-hidden">
        <Image
          src={recommendation.coverUrl}
          alt={"Book cover"}
          objectPosition="center"
          width={128}
          height={198}
        />
      </div>
      <div className="flex flex-col gap-4 py-2">
        <h3 className="text-xl text-primary font-serif font-semibold">
          {recommendation.title} by {recommendation.author}
        </h3>
        <p className="text-muted-foreground">{recommendation.description}</p>
      </div>

      <Button
        className="w-full md:max-w-32 p-0"
        variant={"secondary"}
        size={"lg"}
      >
        <a
          className="w-full h-10 flex text-base items-center justify-center"
          target="_blank"
          href={`https://www.amazon.com/s?k=${encodeURIComponent(
            recommendation.title + " " + recommendation.author
          )}`}
          rel="noopener noreferrer"
          onClick={() => saveClick()}
        >
          Buy Now
        </a>
      </Button>
    </div>
  );
}
