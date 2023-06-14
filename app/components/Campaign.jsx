import React from "react";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetBrains = JetBrains_Mono({ weight: ["300"], subsets: ["cyrillic"] });

const campaign = ({ campaign }) => {
  return (
    <Link href="#">
      <div className="flex flex-col items-center">
        <h2 className="bg-[#ff90e8] w-[84%] text-lg py-[1px] text-center rounded-[6px] m-[9px] "><span className={jetBrains.className}>{campaign.campaignName}</span></h2>
        <div className="h-[129px] w-[84%] bg-[#11a198] rounded-[9px] flex justify-center items-center">
          <img src={!campaign.nftImage ? '' : '/Logo.png'} alt="" className="w-20 h-20" />
        </div>
      </div>
    </Link>

  );
};

export default campaign;
