import Button from "./components/Button";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["cyrillic"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mt-20 w-full">
        <h4 className="text-[40px] uppercase font-bold leading-9">
          <div className={raleway.className}>Potato Potata Presents</div>
        </h4>
        <h1 className="text-[64px] capitalize w-[60%] mt-7 leading-[5rem] tracking-wider font-medium">
          <div className={raleway.className}>
            A Better Way <span className="lowercase">to</span> Organize{" "}
            <span className="lowercase">your</span> Program
          </div>
        </h1>
        <div className="flex gap-[100px]">
          <Button
            text="Programs"
            link="../joinProgram"
            btnName={"mainpage-btn"}
          />
          <Button
            text="Create Program"
            link="../createProgram"
            btnName={"mainpage-btn"}
          />
        </div>
        <img src="./frontImg.png" alt="" className="w-80 absolute left-5 bottom-6" />
      </div>
      {/* <Button text="Connect Wallet" /> */}
    </>
  );
}
