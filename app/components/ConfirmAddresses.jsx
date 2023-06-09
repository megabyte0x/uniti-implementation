"use client";
import React from "react";
import Button from "@/app/components/Button";
import { useStore } from "@/app/store";

const ConfirmAddresses = () => {
  const visibility = useStore((store) => store.visibility);
  var vis;
  if (visibility == 3) {
    vis = "show";
  } else {
    vis = "hide";
  }
  const currentProgram = useStore((store) => store.currentProgram);
  const unsplitWhitelist = useStore((store) =>
    store.whitelists.filter((whitelist) => whitelist.program == currentProgram)
  );
  // console.log(currentProgram);
  // console.log(unsplitWhitelist);
  // console.log(unsplitWhitelist[0].whitelist);
  if (unsplitWhitelist.whitelist !== undefined) {
    const splitWhitelist = unsplitWhitelist[0].whitelist.split(", ");
    console.log(splitWhitelist);
    return (
      <div className={vis}>
        <ol>
          {splitWhitelist.map((address) => (
            <li>{address}</li>
          ))}
        </ol>
        <Button text="Confirm" link="../program" />
      </div>
    );
  } else {
    return <div className={vis}>not defined yet</div>;
  }
};

export default ConfirmAddresses;
