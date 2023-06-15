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
    <div>
      <h1 className="text-3xl text-center mb-[27px]">
        <span className={raleway.className}>Programs</span>
      </h1>
        <div className="grid grid-cols-2 gap-10 place-content-center mx-52">
          {programs.map((program) => (
            <Program
              name={program.programName}
              description={program.programDescription}
              image={program.programImage}
            />
          ))}
        </div>
      </div>
  );
};

export default JoinProgramPage;
