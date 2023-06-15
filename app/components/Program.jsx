import Link from "next/link";
import React from "react";
import { useStore } from "@/app/store";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["600"], subsets: ["cyrillic"] });

const program = ({ name, description, image }) => {
  const changeCurrentProgram = useStore((store) => store.changeCurrentProgram);

  return (
    <Link
      href="../../program"
      onClick={() => {
        changeCurrentProgram(name);
      }}
    >
      <div className="grid grid-cols-5 h-[180px] bg-[#f4f4f0] border-black border-2 rounded-xl hover:shadow-[18px_18px_0px_#000000] shadow-[9px_9px_0px_#000000]">
        {/* jugaad on centering using margin*/}
        <div className="p-[9px] py-[24px] text-sm col-span-3">
          <h2 className="text-lg leading-none mb-[6px]">
            <span className={raleway.className}>{name} Program</span>
          </h2>
          <p className="text-justify">{description.slice(0, 90)}...</p>
        </div>
        <div className="outline-title font-bold text-[57px] col-span-2 self-center flex flex-col items-center justify-center h-[120px] w-[120px] bg-[#11a198] rounded-[9px]">
          <img src={image} alt="" className="w-20 h-20" />
        </div>
      </div>
    </Link>
  );
};

export default program;
