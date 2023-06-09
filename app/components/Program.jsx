import Link from "next/link";
import React from "react";
import { useStore } from "@/app/store";

const program = ({ name, description }) => {
  const changeCurrentProgram = useStore((store) => store.changeCurrentProgram);

  return (
    <Link
      href="../../program"
      onClick={() => {
        changeCurrentProgram(name);
      }}
    >
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default program;
