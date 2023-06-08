"use client";
import React from 'react'
import Button from '../components/Button'
import Campaign from './components/Campaign'
import { useStore } from '../store'
const ProgramPage = () => {
    const currentProgram = useStore((store) => store.currentProgram);
    const program = useStore((store) => store.programs.filter((program) => program.programName == currentProgram));
    console.log(program);

    const campaigns = useStore((store) => store.campaigns.filter((campaign) => campaign.program == currentProgram));

    return (
        <div>
            <h1>{program[0].programName}</h1>
            <p>{program[0].programDescription}</p>
            {
                campaigns.map((campaign) => <Campaign campaign={campaign} />)
            }
            {/* <Campaign /> */}
            <Button text="Create Campaign" link="../program/createCampaign" />
        </div>
    )
}

export default ProgramPage