import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="sm:hidden" asChild>
        {/* <Button variant="outline">Open</Button> */}
        <MenuIcon className="size-6 text-title-white" />
      </SheetTrigger>
      <SheetContent className="bg-primary border border-primary">
        <div className="flex flex-col justify-center items-center text-center gap-4 mt-20">
          <a
            onClick={() => setIsOpen(false)}
            href="#most-popular"
            className="hover:text-secondary transition-all cursor-pointer text-center text-title-white text-xl"
          >
            Most Popular
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#weekly-recommendations"
            className="hover:text-secondary transition-all cursor-pointer text-center text-title-white text-xl "
          >
            Weekly Recommendations
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
