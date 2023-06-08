"use client";
import React from 'react'
import Button from '../components/Button'
import Campaign from './components/Campaign'
import { useStore } from '../store'
const ProgramPage = () => {
    const currentProgram = useStore((store) => store.currentProgram);
    const program = useStore((store) => store.programs.filter((program) => program.programName == currentProgram));
    return (
        <div>ProgramPage
            <Campaign link='./program/campaign' />
            <Button text="Create Campaign" link="../program/createCampaign" />
        </div>
    )
}

export default ProgramPage