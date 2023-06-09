import React from "react";
import ProgramForm from "../components/ProgramForm";
import WhiteList from "../components/WhiteList";
import ConfirmAddresses from "../components/ConfirmAddresses";
import Link from "next/link";
import { useStore } from "../store";

const CreateProgramPage = () => {
  return (
    <div>
      <ProgramForm />
      <WhiteList />
      <ConfirmAddresses />
    </div>
  );
};

export default CreateProgramPage;
