"use client";
import React from "react";
import Program from "../components/Program";
import { useStore } from "../store";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["600"], subsets: ["cyrillic"] });

const JoinProgramPage = () => {
  const programs = useStore((store) =>
    store.programs.map((program) => program)
  );
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-[27px]"><span className={raleway.className}>Programs</span></h1>
      <div className="grid grid-cols-2 justify-center items-center">
        {programs.map((program) => (
          <Program
            name={program.programName}
            description={program.programDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default JoinProgramPage;
