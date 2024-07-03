"use client";
import Logo from "./logo";
import { MobileNavigation } from "./navigation/navigation";

export default function Header() {
  return (
    <nav className="max-w-5xl mx-auto py-4 sm:py-8 flex justify-between items-center px-4">
      <Logo />
      {/* <MobileNavigation /> */}

      <div className="flex gap-10 text-light-blue">
        {/* <a
          href="/"
          className="hover:text-secondary transition-all cursor-pointer"
        >
          Most Popular
        </a> */}
        <a
          href="#weekly-recommendations"
          className="hover:text-secondary transition-all cursor-pointer"
        >
          Weekly Recommendations
        </a>
      </div>
    </nav>
  );
}
