"use client";
import React from "react";
import Button from "../components/Button";
import Campaign from "../components/Campaign";
import { useStore } from "../store";
import { Raleway } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetBrains = JetBrains_Mono({ weight: ["800"], subsets: ["cyrillic"] });
const raleway = Raleway({ weight: ["600"], subsets: ["cyrillic"] });
const ralewayp = Raleway({ weight: ["400"], subsets: ["cyrillic"] });

const ProgramPage = () => {
  const currentProgram = useStore((store) => store.currentProgram);
  const program = useStore((store) =>
    store.programs.filter((program) => program.programName == currentProgram)
  );
  console.log(program);

  const campaigns = useStore((store) =>
    store.campaigns.filter((campaign) => campaign.program == currentProgram)
  );

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-10 w-[63%] -mt-16 h-[480px] p-0 pt-9 text-2xl items-center bg-[#f4f4f0] border-black border-2 rounded-3xl shadow-[18px_18px_0px_#000000]">
        <div className="flex flex-col items-center gap-6 text-center h-full w-full col-span-7 border-black border-t-2 border-r-2">
          <h1 className="text-[33px] mt-6 place-self-center">
            <span className={raleway.className}>
              {program[0].programName} Program
            </span>
          </h1>
          <p className="w-[81%] text-lg leading-none">
            <span className={ralewayp.className}>
              {program[0].programDescription.slice(0, 300)}...
            </span>
          </p>
          <div className="border-black border-2 flex flex-col items-center justify-center h-[165px] w-[165px] bg-[#11a198] rounded-[9px]">
            <h1 className={jetBrains.className}>
              <span className="outline-title font-bold text-[57px]">
                <img src={'../ethglobal.jpeg'} className="w-20 h-20" />
              </span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center overflow-scroll h-full w-full col-span-3 border-black border-t-2">
          {campaigns.map((campaign) => (
            <div className="bg-[#ffffff] h-[50%] w-[66%] my-[15px] hover:shadow-[8px_8px_0px_#000000] border-black border-2 rounded-[12px]">
              <Campaign campaign={campaign} />
            </div>
          ))}
        </div>
        {/* <Campaign /> */}
      </div>
      <div className="grid grid-cols-6 w-full">
        <h2 className="justify-self-start self-end mb-[15px] ml-[36px] text-2xl col-span-1"><Link href="./joinProgram"><span className={jetBrains.className}>&lt; Back</span></Link></h2>
        <div className="justify-self-end mr-[36px] mb-[12px] mt-[12px] col-span-5">
          <Button
            btnName={'green-btn'}
            text="Create Campaigns"
            link="../program/createCampaign"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
