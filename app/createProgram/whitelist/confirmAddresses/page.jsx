"use client";
import React from "react";
import Button from "@/app/components/Button";
import { useStore } from "@/app/store";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetBrains = JetBrains_Mono({ weight: ["500"], subsets: ["cyrillic"] });

const ConfirmAddressesPage = () => {
  const currentProgram = useStore((store) => store.currentProgram);
  const unsplitWhitelist = useStore((store) =>
    store.whitelists.filter((whitelist) => whitelist.program == currentProgram)
  );
  const splitWhitelist = unsplitWhitelist[0].whitelist.split(", ");
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <div
          className="w-[45%] h-[] -mt-20 px-12 py-9
                        text-2xl
                        flex flex-col items-center justify-center  
                        bg-[#f4f4f0] border-black border-2 rounded-3xl
                        shadow-[18px_18px_0px_#000000]"
        >
          <ol
            className="w-full h-fit p-[39px]
                        text-[15px] list-decimal
                        flex flex-col items-start justify-top  
                        bg-[#ffffff] border-black border-2 rounded-3xl">
            {splitWhitelist.map((address) => (
              <li className={jetBrains.className}>{address}</li>
            ))}
          </ol>
        </div>
        <Button text="Confirm" link="../../../program" btnName="bg-[#7dea95] px-6 py-3 mt-[36px]
                text-2xl 
                border-black border-2 rounded-[18px] hover:shadow-[8px_8px_0px_#000000] shadow-[4px_4px_0px_#000000] mb-[24px] "/>
      </div>
      <div className="pl-[45px] text-2xl -mt-[30px]">
        <Link href="./createProgram/whitelist">
          <h1
            className={jetBrains.className}
          >&lt; Back</h1>
        </Link>
      </div>
    </div>
  )
}

export default ConfirmAddressesPage;
