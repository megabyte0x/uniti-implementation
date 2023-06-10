import Button from "./components/Button";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["cyrillic"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mt-1 w-full">
        <h4 className="text-[27px] uppercase font-bold leading-9">
          <div className={raleway.className}>Potato Potata Presents</div>
        </h4>
        <h1 className="text-[51px] capitalize w-[60%] mt-0 leading-[4rem] tracking-wider font-medium w-4/6">
          <div className={raleway.className}>
            A Better Way <span className="lowercase">to</span> Organize{" "}
            <span className="lowercase">your</span> Programs
          </div>
        </h1>
        <div className="flex gap-[100px]">
          <Button
            text="Programs"
            link="../joinProgram"
            btnName={"mainpage-btn h-20 w-60 border-black border-2 rounded-xl"}
          />
          <Button
            text="Create Program"
            link="../createProgram"
            btnName={"mainpage-btn h-20 w-60 border-black border-2 rounded-xl"}
          />
        </div>
        <img src="./frontImg.png" alt="" className="w-72 absolute left-5 bottom-6" />
      </div >
      {/* <Button text="Connect Wallet" /> */}
    </>
  );
}
