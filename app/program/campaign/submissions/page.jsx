"use client";
import React from "react";
import Button from "@/app/components/Button";
import { useStore } from "@/app/store";
import { Raleway } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({ weight: ["700"], subsets: ["cyrillic"] });
const jetBrains = JetBrains_Mono({ weight: ["500"], subsets: ["cyrillic"] });

const ConfirmAddressesPage = () => {
  const currentProgram = useStore((store) => store.currentProgram);
  const unsplitWhitelist = useStore((store) =>
    store.whitelists.filter((whitelist) => whitelist.program == currentProgram)
  );
  const splitWhitelist = unsplitWhitelist[0].whitelist.split(",");
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-[45%] h-[519px] -mt-5 px-12 py-9 text-2xl flex flex-col items-center bg-[#f4f4f0] border-black border-2 rounded-3xl shadow-[18px_18px_0px_#000000]">
          <h1 className={`${raleway.className} text-4xl`}>Submissions</h1>
          <ol className="text-left mt-5">
            {splitWhitelist.map((address) => (
              <div className="flex gap-2">
                <input type="checkbox" />
                <li className={`${jetBrains.className}`}>{address}</li>
              </div>
            ))}
          </ol>
        </div>
        <div className="flex gap-10 mt-2">
          <Button text="Accept" link="../../../program" btnName={"green-btn"} />
          <Button text="Reject" link="../../../program" btnName={"red-btn"} />
        </div>
      </div>
      <div className="pl-[45px] text-2xl -mt-[30px]">
        <Link href="../../program/campaign">
          <h1 className={jetBrains.className}>&lt; Back</h1>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmAddressesPage;
