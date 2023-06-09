import Link from "next/link";
import React from "react";
import { JetBrains_Mono } from "next/font/google";

const jetBrains = JetBrains_Mono({ weight: ["700"], subsets: ["cyrillic"] });

const Button = ({ text, link, btnName }) => {
  return (
    <div className="">
      <Link href={link ? link : "./"}>
        <div className={jetBrains.className}>
          <button className={btnName}>{text}</button>
        </div>
      </Link>
    </div>
  );
};

export default Button;
