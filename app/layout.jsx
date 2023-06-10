import "./globals.css";
import { Inter } from "next/font/google";
import Button from "./components/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uniti by PotatoPotata",
  description: "Generated by create next app",
};

var walletAddress = false; //TEMP

export default function RootLayout({ children }) {
  if (!walletAddress) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <div className="flex justify-between">
            <img
              src="./logo.png"
              alt=""
              className="w-[150px] h-[150px] ml-5 mt-4"
            />
            <Button
              text="Connect Wallet"
              btnName={"connect-btn mt-9 border-black border rounded-xl text-lg"}
            />
          </div>
          {children}
        </body>
      </html>
    );
  } else if (walletAddress) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <img
            src="./logo.png"
            alt=""
            className="w-[100px] h-[100px] ml-4 mt-2.5"
          />
          {/* <h4 className={'connect-btn'}>{walletAddress.value}</h4> */}
          {children}
        </body>
      </html>
    );
  }
}
