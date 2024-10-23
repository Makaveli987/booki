import React from "react";

export default function SectionHeading({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="capitalize font-serif text-3xl font-semibold text-primary">
        {children}
      </h2>
      <span className="w-14 h-1 bg-secondary"></span>
    </div>
  );
}
