"use client";
import React from "react";
import { useStore } from "@/app/store";
import { Raleway } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import Button from "@/app/components/Button";
import Link from "next/link";

const jetBrains = JetBrains_Mono({ weight: ["600"], subsets: ["cyrillic"] });
const raleway = Raleway({ weight: ["600"], subsets: ["cyrillic"] });
const ralewayp = Raleway({ weight: ["400"], subsets: ["cyrillic"] });

const CampaignPage = () => {
  const currentProgram = useStore((store) => store.currentProgram);
  const currentCampaign = useStore((store) => store.currentCampaign);
  const campaign = useStore((store) =>
    store.campaigns.filter((campaign) => campaign.campaignName == currentCampaign && campaign.program == currentProgram)
  );

  // console.log(currentCampaign)
  // console.log(campaign[0].campaignName)
  // console.log(currentProgram)

  return <div className="flex flex-col items-center justify-items-center h-full w-full">
    <h1 className="text-3xl -mt-[21px] mb-[45px] pb-[12px]"><span className={raleway.className}>{campaign[0].campaignName} Campaign </span></h1>
    <div className="border-black border-2 w-[50%] h-[90%] bg-white grid grid-cols-1 items-center shadow-[12px_12px_0px_#000000] rounded-[9px]">
      <h1 className="px-[24px] pt-[27px] text-3xl"><span className={jetBrains.className}>{campaign[0].nftName}</span></h1>
      <div className="grid grid-cols-3 justify-center">
        <div className=" flex flex-col col-span-1 items-center justify-self-end justify-center h-[180px] w-[180px] bg-[#11a198] rounded-[9px] mt-[18px] mb-[33px] ml-[36px] shadow-[3px_3px_3px_#a9a9a9]">
          <span className="outline-title font-bold text-[90px]">
            <span className={jetBrains.className}>
              NFT
            </span>
          </span>
        </div>
        <div className="flex flex-cols justify-center items-center bg-[#ff90e8] border-black border w-[90%] h-[180px] col-span-2 justify-self-start rounded-[9px] mr-[24px] my-[18px] ml-[18px] shadow-[3px_3px_3px_#a9a9a9]">
          <p className="p-[12px]">{campaign[0].nftDescription}</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 w-full">
      <h2 className="justify-self-start self-end mb-[15px] ml-[36px] text-2xl"><Link href="./program"><span className={jetBrains.className}>&lt; Back</span></Link></h2>
      <div className="justify-self-end mr-[36px] mb-[0] mt-[45px]">
        <Button text="Submissions >" btnName="green-btn" link='./program/campaign/submissions'></Button></div>
      {/* <Button text="Submit >" btnName="green-btn" link='./program/campaign/submit'></Button></div> */}
    </div>
  </div >;
};

export default CampaignPage;
