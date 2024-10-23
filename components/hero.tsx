import React from "react";
import Header from "./header";
import Image from "next/image";
import FormSection from "./form-section";

export default function Hero() {
  return (
    // <section className="w-full bg-[url('/hero-blue.png')] bg-cover bg-center bg-no-repeat">
    //   <Header />
    //   <div className="flex flex-col gap-7 justify-center items-center mx-auto pt-16 pb-72">
    //     <h1 className="mx-auto text-5xl font-cardo text-title-white font-semibold">
    //       Find yout next favorite book
    //     </h1>
    //     <span className="w-20 h-1 bg-secondary"></span>
    //   </div>
    // </section>
    <section className="relative w-full ">
      <Image
        src="/hero-blue.png"
        alt="Hero Background"
        // width={2543}
        // height={350}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        // fill
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="pointer-events-none absolute -z-10"
      />
      <Header />
      <div className="relative flex flex-col gap-7 justify-center items-center mx-auto pt-16 pb-72">
        <h1 className="mx-auto text-5xl font-serif text-title-white font-semibold text-center">
          Find your next book to read
        </h1>
        <span className="w-16 h-1 bg-secondary"></span>

        <p className="max-w-3xl text-center text-title-white/60">
          Get personalized book recommendations tailored to your preferences.
          Answer a few questions, and we&apos;ll suggest books you&apos;ll love!
        </p>
      </div>

      <FormSection />
    </section>
  );
}
