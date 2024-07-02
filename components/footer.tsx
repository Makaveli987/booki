import { FacebookIcon, InstagramIcon } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <div className="bg-primary px-4 py-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-3 justify-between sm:items-center">
        <Logo />
        <span className="text-[#b4c7e7]">&copy; All rights reserved</span>
        <div className="flex gap-2">
          <a
            href={"/"}
            className="text-title-white p-2 hover:bg-secondary border border-secondary"
          >
            <FacebookIcon className="size-5" />
          </a>
          <a
            href={"/"}
            className="text-title-white p-2 hover:bg-secondary border border-secondary"
          >
            <InstagramIcon className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
