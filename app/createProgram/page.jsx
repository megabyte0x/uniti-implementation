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
  const [image, setImage] = useState();

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
            <div className="flex w-full">
              <div className="">
                <span className={jetBrains.className}>Upload NFT Image</span>
              </div>
              <label className="flex w-36 ml-5 justify-center items-center cursor-pointer rounded-lg border-[2px] border-black border-solid">
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
                  name="Upload"
                  className={`${jetBrains.className} hidden`}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            </div>
          </div>
          {/* <input type="submit" value="Create" /> */}
        </form>
        <Link href="./createProgram/whitelist">
          <button
            className={"green-btn"}
            onClick={() => {
              addProgram(name, description, image);
              changeCurrentProgram(name);
            }}
          >
            <span className={jetBrains.className}>Create</span>
          </button>
        </Link>
      </div>
      <div className="pl-[45px] text-2xl -mt-[30px]">
        <Link href="./">
          <h1 className={jetBrains.className}>&lt; Back</h1>
        </Link>
      </div>
    </div>
  );
};

export default CreateProgramPage;
