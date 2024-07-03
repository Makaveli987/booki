"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const GENRES: string[] = [
  "Mystery",
  "Fantasy",
  "Thriller",
  "Romance",
  "Biography",
  "Psychology",
  "Self-Help",
  "Business & Economics",
  "History",
  "Drama",
  "Horror",
  "Health & Wellness",
  "Poetry",
  "Spiritual & Religious",
];

export default function WeeklyRecommendations() {
  const [selectedGenres, setSelectedgenres] = useState<string[]>([]);
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");

  function validateEmail(email: string): boolean {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleSubscribe() {
    if (validateEmail(userEmail)) {
      console.log("Email is valid: ", userEmail);
      console.log("Genres: ", selectedGenres);
      setError("");
    } else {
      setError("Invalid email");
      console.log("Email is invalid: ", userEmail);
    }
  }

  return (
    <div className="py-28 px-4">
      <div
        id="weekly-recommendations"
        className="max-w-5xl mx-auto bg-secondary shadow-lg py-20 px-8 md:px-20 lg:px-36 flex flex-col gap-12 rounded-[3px]"
      >
        <div className="flex flex-col gap-6 items-center justify-center">
          <h2 className="text-primary text-3xl font-serif font-semibold text-center">
            Get Weekly Recommendations
          </h2>
          <span className="w-12 h-1 bg-primary block"></span>
          <p className="text-primary text-lg text-center">
            Subscribe with your email to receive weekly recommendations tailored
            to your taste. Select your preferred genres to get the most relevant
            suggestions.
          </p>
        </div>
        <ToggleGroup
          type="multiple"
          variant="outline"
          className="flex-wrap"
          onValueChange={(value) => {
            if (value) setSelectedgenres(value);
          }}
        >
          {GENRES.map((genre) => (
            <ToggleGroupItem
              key={genre}
              value={genre}
              aria-label={`Toggle ${genre}`}
              className="border border-primary text-primary data-[state=on]:text-title-white data-[state=on]:bg-primary hover:bg-primary hover:text-title-white whitespace-nowrap"
            >
              {genre}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <Input
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="bg-card text-lg"
            />
            {error && <span className="text-destructive">*{error}</span>}
          </div>
          <Button
            className="h-14 px-12 text-lg font-semibold"
            onClick={handleSubscribe}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
