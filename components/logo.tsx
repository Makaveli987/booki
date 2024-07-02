import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex gap-3 items-center">
      <Image src={"/logo-2.png"} alt={"Logo"} width={35} height={35} />{" "}
      <span className="font-medium text-2xl text-title-white">Booki</span>
    </div>
  );
}
