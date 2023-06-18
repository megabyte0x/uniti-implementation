import React from 'react';
import { JetBrains_Mono } from "next/font/google";
import Link from 'next/link';

const jetBrains = JetBrains_Mono({ weight: ["500"], subsets: ["cyrillic"] });

const SubmitPage = () => {
    return (
        <div>
            <div className="flex flex-col items-center w-full">
                <form
                    action="#"
                    className="w-[45%] h-[480px] -mt-20 px-14 py-9 text-2xl flex flex-col items-center justify-center bg-[#f4f4f0] border-black border-2 rounded-3xl shadow-[18px_18px_0px_#000000]">
                    <label htmlFor="" className="mx-0 p-0 leading-none my-[24px]">
                        <span className={jetBrains.className}>Submission Link{" "}
                            <div className="text-sm leading-none pt-[9px] m-0 p-0">Please paste submission link according to given guidelines</div>
                        </span>
                    </label>
                    <textarea name="" id="" className="h-96 w-full p-3 rounded-md border-black border-2 mt-2 mb-3 shadow-[0px_4px_0px_#d7d7d7]" />
                    {/* <input type="submit" value="WhiteList" /> */}
                </form>
                <Link href="./program/campaign">
                    <button className="bg-[#7dea95] px-6 py-3 mt-[36px] text-2xl border-black border-2 rounded-[18px] hover:shadow-[8px_8px_0px_#000000] shadow-[4px_4px_0px_#000000]">
                        <span className={jetBrains.className}>Submit</span>
                    </button>
                </Link>
            </div>
            <div className="pl-[45px] text-2xl -mt-[30px]">
                <Link href="./program/campaign">
                    <h1 className={jetBrains.className} >&lt; Back</h1>
                </Link>
            </div>
        </div>
    )
}

export default SubmitPage