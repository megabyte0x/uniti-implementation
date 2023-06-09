"use client";
import React from "react";
import Program from "../components/Program";
import { useStore } from "../store";

const JoinProgramPage = () => {
  const programs = useStore((store) =>
    store.programs.map((program) => program)
  );
  return (
    <div>
      <h1>Programs</h1>
      {programs.map((program) => (
        <Program
          name={program.programName}
          description={program.programDescription}
        />
      ))}
    </div>
  );
};

export default JoinProgramPage;
