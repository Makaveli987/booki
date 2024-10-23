import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="bg-light-blue relative px-4 z-50 text-primary pb-4">
      <div className="max-w-5xl mx-auto text-center py-20">
        <div className="flex flex-col gap-6 mx-auto items-center justify-center max-w-3xl">
          <h2 className="text-se text-3xl font-serif font-semibold text-center">
            Frequently Asked Questions
          </h2>
          <span className="w-12 h-1 bg-secondary block mb-20"></span>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-2"
        >
          <AccordionItem value="item-1" className="bg-white px-4 border-0">
            <AccordionTrigger className="text-lg">
              Are the recommendations free?
            </AccordionTrigger>
            <AccordionContent className="bg-white border-0 text-left text-muted-foreground text-base">
              Yes, getting personalized book recommendations is completely free.
              We aim to help you discover great books without any cost. If you
              choose to purchase a book, we provide links to popular retailers,
              but there’s no obligation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="bg-white px-4 border-0">
            <AccordionTrigger className="text-lg">
              Can I get recommendations for multiple genres?
            </AccordionTrigger>
            <AccordionContent className="bg-white border-0 text-left text-muted-foreground text-base">
              Absolutely! You’re not limited to one genre. When you answer our
              questionnaire, you can choose multiple genres and themes, and
              we’ll provide recommendations that cover a variety of interests.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="bg-white px-4 border-0">
            <AccordionTrigger className="text-lg">
              Can I buy or download the recommended books directly from your
              site?
            </AccordionTrigger>
            <AccordionContent className="bg-white border-0 text-left text-muted-foreground text-base">
              We don’t sell books directly, but we provide convenient links to
              trusted retailers like Amazon, Barnes & Noble, and others. You can
              also find links to borrow books from libraries or access them via
              e-book platforms, depending on availability.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="bg-white px-4 border-0">
            <AccordionTrigger className="text-lg">
              Do I need to create an account to get recommendations?
            </AccordionTrigger>
            <AccordionContent className="bg-white border-0 text-left text-muted-foreground text-base">
              No, you don’t need to create an account to receive personalized
              book suggestions. However, creating an account allows you to save
              your preferences, bookmark favorite books, and receive ongoing
              recommendations based on your reading history.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="bg-white px-4 border-0">
            <AccordionTrigger className="text-lg">
              How often can I get new recommendations?
            </AccordionTrigger>
            <AccordionContent className="bg-white border-0 text-left text-muted-foreground text-base">
              You can return to the site anytime for fresh recommendations!
              Since your reading preferences can evolve, we encourage you to
              revisit whenever you’re looking for something new. You can also
              update your preferences to explore different genres or themes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="bg-white px-4 border-0">
            <AccordionTrigger className="text-lg">
              How accurate are the recommendations?
            </AccordionTrigger>
            <AccordionContent className="bg-white border-0 text-left text-muted-foreground text-base">
              Our recommendations are highly personalized, based on the
              information you provide. While we aim for accuracy, reading
              preferences are subjective, so we recommend trying a few different
              books from your list to see which ones resonate the most with you.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
