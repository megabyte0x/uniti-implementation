import Link from "next/link";
import React from "react";
import { useStore } from "@/app/store";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["600"], subsets: ["cyrillic"] });

const program = ({ name, description }) => {
  const changeCurrentProgram = useStore((store) => store.changeCurrentProgram);

  return (
    <Link
      href="../../program"
      onClick={() => {
        changeCurrentProgram(name);
      }}
    >
      <div className="grid grid-cols-5
                        w-[57%] h-[180px] p-0
                        bg-[#f4f4f0] border-black border-2 rounded-xl
                        shadow-[9px_9px_0px_#000000] ml-[150px]">
        {/* jugaad on centering using margin*/}
        <div className=" p-[9px] py-[24px] text-sm col-span-3">
          <h2 className="text-lg leading-none mb-[6px]"><span className={raleway.className}>{name} Program</span></h2>
          <p className="text-justify">{description.slice(0, 90)}...</p>
        </div>
        <div className="outline-title font-bold text-[57px] col-span-2 self-center flex flex-col items-center justify-center h-[120px] w-[120px] bg-[#11a198] rounded-[9px]">
          NFT
        </div>
      </div>
    </Link>
  );
};

export default program;
