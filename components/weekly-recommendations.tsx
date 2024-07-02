import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function WeeklyRecommendations() {
  return (
    <div className="py-28 px-4">
      <div
        id="weekly-recommendations"
        className="max-w-5xl mx-auto bg-secondary shadow-lg py-20 px-8 md:px-20 lg:px-36 flex flex-col gap-16 rounded-[3px]"
      >
        <div className="flex flex-col gap-6 items-center justify-center">
          <h2 className="text-primary text-3xl font-serif font-semibold text-center">
            Get Weekly Recommendations
          </h2>
          <span className="w-12 h-1 bg-primary block"></span>
          <p className="text-primary text-lg text-center">
            Subscribe with your email to get weekly recommendations based on
            your taste.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input type="email" placeholder="Email" className="bg-card text-lg" />
          <Button className="h-14 px-12 text-lg font-semibold">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
