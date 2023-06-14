"use client";
import React, { useState } from "react";
import { useStore } from "../store.js";
import { JetBrains_Mono } from "next/font/google";
// import ProgramForm from "../components/ProgramForm";
// import WhiteList from "../components/WhiteList";
// import ConfirmAddresses from "../components/ConfirmAddresses";
import Link from "next/link.js";

const jetBrains = JetBrains_Mono({ weight: ["500"], subsets: ["cyrillic"] });

const CreateProgramPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const addProgram = useStore((store) => store.addProgram);
  const changeCurrentProgram = useStore((store) => store.changeCurrentProgram);

  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <form
          action="#"
          className="w-full flex flex-col items-center justify-center mr-0"
        >
          <div
            className="formInput 
                        w-[45%] h-[480px] -mt-20 px-14 py-9
                        text-2xl
                        flex flex-col items-center justify-center  
                        bg-[#f4f4f0] border-black border-2 rounded-3xl
                        shadow-[18px_18px_0px_#000000]"
          >
            <label htmlFor="" className="w-full text-left">
              <span className={jetBrains.className}>NFT Collection Name</span>
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="h-16 w-full p-3 mt-2 mb-3
                          rounded-md border-black border-2 shadow-[0px_4px_0px_#d7d7d7]"
            />
            <label htmlFor="" className="w-full text-left">
              <span className={jetBrains.className}>Description</span>
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="h-36 w-full p-3 rounded-md border-black border-2 mt-2 mb-3 shadow-[0px_4px_0px_#d7d7d7]"
            />
            <label htmlFor="" className="w-full text-left">
              <span className={jetBrains.className}>Upload NFT Image</span>
            </label>
            <input
              type="file"
              name="Upload"
              className={`${jetBrains.className} ml-20`}
              id=""
            />
          </div>
          {/* <input type="submit" value="Create" /> */}
        </form>
        <Link href="./createProgram/whitelist">
          <button
            className={"green-btn"}
            onClick={() => {
              addProgram(name, description);
              changeCurrentProgram(name);
            }}
          >
            <span className={jetBrains.className}>Create</span>
          </button>
        </Link>
      </div>
      <div className="pl-[45px] text-2xl -mt-[30px]">
        <Link href="./">
          <h1
            className={jetBrains.className}
          >&lt; Back</h1>
        </Link>
      </div>
    </div>
  );
};

export default CreateProgramPage;
