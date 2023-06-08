import React from 'react'
import Button from '../components/Button'
import Campaign from './components/Campaign'
const ProgramPage = () => {
    return (
        <div>ProgramPage
            <Campaign link='./program/campaign' />
            <Button text="Create Campaign" link="../program/createCampaign" />
        </div>
    )
}

export default ProgramPage