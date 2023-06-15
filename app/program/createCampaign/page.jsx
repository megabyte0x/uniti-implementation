"use client";
import React, { useState } from "react";
import { useStore } from "@/app/store";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetBrains = JetBrains_Mono({ weight: ["500"], subsets: ["cyrillic"] });

const CreateCampaignPage = () => {
  const currentProgram = useStore((store) => store.currentProgram);
  const [campaignName, setCampaignName] = useState("");
  const [nftName, setNftName] = useState("");
  const [nftAmount, setNftAmount] = useState();
  const [nftImage, setNftImage] = useState();
  const [nftDescription, setNftDescription] = useState("");
  const [guidelines, setGuidelines] = useState("");

  const addCampaign = useStore((store) => store.addCampaign);
  // const campaigns = useStore((store) => store.campaigns);

  // console.log(campaigns);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full flex flex-col items-center justify-center mr-0">
        <form
          action=""
          className="formInput 
                        w-[45%] h-[450px] -mt-20 px-14 pb-[39px]
                        text-2xl
                        flex flex-col items-center justify-end  
                        bg-[#f4f4f0] border-black border-2 rounded-3xl
                        shadow-[18px_18px_0px_#000000]"
        >
          <label htmlFor="" className="w-full text-left text-xl">
            <span className={jetBrains.className}>Campaign Name</span>
          </label>
          <input
            type="text"
            onChange={(e) => setCampaignName(e.target.value)}
            value={campaignName}
            className="h-[36px] w-full p-3 mt-[3px] mb-3
                          rounded-md border-black border-2 shadow-[0px_4px_0px_#d7d7d7]"
          />
          <label htmlFor="" className="text-xl pt-[18px] w-full text-left">
            <span className={jetBrains.className}>NFT Details</span>
          </label>
          <form
            action=""
            className="grid grid-cols-3 h-auto w-full px-3 pb-[17px] pt-[15px] mt-[3px] mb-3 bg-[#ffffff]
                          rounded-md border-black border-2 shadow-[0px_4px_0px_#d7d7d7]"
          >
            <div className="col-span-2 mt-0 pt-0">
              <div className={`${jetBrains.className} `}>
                <input
                  type="text"
                  placeholder="NFT Name"
                  onChange={(e) => setNftName(e.target.value)}
                  value={nftName}
                  className="h-[15px] w-[90%] text-[15px] py-[9px] border-b-[1px] border-black"
                />
                <input
                  type="number"
                  placeholder="Number of NFTs"
                  onChange={(e) => setNftAmount(e.target.value)}
                  value={nftAmount}
                  className="h-[15px] w-[90%] text-[15px] py-[9px] border-b-[1px] border-black"
                />
                <textarea
                  placeholder="Description"
                  onChange={(e) => setNftDescription(e.target.value)}
                  value={nftDescription}
                  className="h-[15px] w-[90%] text-[15px] py-[9px] border-b-[1px] border-black"
                />
              </div>
            </div>
            <label className="flex h-24 w-25 cursor-pointer items-center justify-center gap-1 rounded-lg text-center text-sm text-black bg-[#11a198]">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <div>Upload</div>
              <input
                type="file"
                onChange={(e) => setNftImage(e.target.files[0])}
                className="hidden"
              />
            </label>
          </form>
          <label htmlFor="" className="text-xl w-full text-left pt-[18px]">
            <span className={jetBrains.className}>
              Submission Guidelines Link
            </span>
          </label>
          <input
            type="textarea"
            onChange={(e) => setGuidelines(e.target.value)}
            value={guidelines}
            className="h-[36px] w-full p-3 mt-[3px] mb-0
                          rounded-md border-black border-2 shadow-[0px_4px_0px_#d7d7d7]"
          />
        </form>
      </div>
      <Link href="./program">
        <button
          onClick={() => {
            addCampaign(
              currentProgram,
              campaignName,
              nftName,
              nftAmount,
              nftDescription,
              nftImage,
              guidelines
            );
          }}
          className={"green-btn"}
        >
          <span className={jetBrains.className}>Create</span>
        </button>
      </Link>
    </div>
  );
};

export default CreateCampaignPage;
