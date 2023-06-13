"use client";
import React, { useState } from "react";
import { useStore } from "../../store.js";
import Link from "next/link.js";
import { JetBrains_Mono } from "next/font/google";

const jetBrains = JetBrains_Mono({ weight: ["500"], subsets: ["cyrillic"] });

const WhitelistPage = () => {
    const [whitelist, setWhitelist] = useState("");
    const currentProgram = useStore((store) => store.currentProgram);
    const addWhitelist = useStore((store) => store.addWhitelist);

    return (
        <div>
            <div className="flex flex-col items-center w-full">
                <form action="#" className="w-[45%] h-[480px] -mt-20 px-14 py-9
                        text-2xl
                        flex flex-col items-center justify-center  
                        bg-[#f4f4f0] border-black border-2 rounded-3xl
                        shadow-[18px_18px_0px_#000000]">
                    <label htmlFor=""
                        className="mx-0 p-0 leading-none my-[24px]">
                        <span className={jetBrains.className}>Receipiants Wallet Addressess{" "}
                            <span className="text-sm leading-none m-0 p-0">Please paste a string comprising of all the addresses</span>
                        </span>
                    </label>
                    <textarea
                        name=""
                        id=""
                        onChange={(e) => setWhitelist(e.target.value)}
                        value={whitelist}
                        className="h-96 w-full p-3 rounded-md border-black border-2 mt-2 mb-3 shadow-[0px_4px_0px_#d7d7d7]"
                    />
                    {/* <input type="submit" value="WhiteList" /> */}
                </form>
                <Link href="./createProgram/whitelist/confirmAddresses">
                    <button
                        className="bg-[#7dea95] px-6 py-3 mt-[36px]
                text-2xl 
                border-black border-2 rounded-[18px] hover:shadow-[8px_8px_0px_#000000] shadow-[4px_4px_0px_#000000]"
                        onClick={() => {
                            addWhitelist(currentProgram, whitelist);
                        }}
                    >
                        <span className={jetBrains.className}>WhiteList</span>
                    </button>
                </Link>
            </div></div>
    )
}

export default WhitelistPage