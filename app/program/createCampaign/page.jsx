"use client";
import React, { useState } from 'react'
import { useStore } from '@/app/store'

const CreateCampaignPage = () => {
    const currentProgram = useStore((store) => store.currentProgram);
    const [campaignName, setCampaignName] = useState('');
    const [nftName, setNftName] = useState('');
    const [nftAmount, setNftAmount] = useState(0);
    const [nftDescription, setNftDescription] = useState('');
    const [guidelines, setGuidelines] = useState('');

    const addCampaign = useStore((store) => store.addCampaign);
    const campaigns = useStore((store) => store.campaigns);

    console.log(campaigns);

    return (
        <div>CreateCampaignPage
            <form action="">
                <label htmlFor="">Campaign Name</label>
                <input type="text" onChange={(e) => setCampaignName(e.target.value)} value={campaignName} />
                <label htmlFor="">NFT</label>
                <form action="">
                    <input type="text" placeholder='NFT Name' onChange={(e) => setNftName(e.target.value)} value={nftName} />
                    <input type="number" placeholder='Number of NFTs' onChange={(e) => setNftAmount(e.target.value)} value={nftAmount} />
                    <input type="textarea" placeholder='Description' onChange={(e) => setNftDescription(e.target.value)} value={nftDescription} />
                </form>
                <label htmlFor="">Submission Guidelines</label>
                <input type="textarea" onChange={(e) => setGuidelines(e.target.value)} value={guidelines} />
            </form>
            <button onClick={() => {
                addCampaign(currentProgram, campaignName, nftName, nftAmount, nftDescription, guidelines);
            }}>Create</button>
        </div>
    )
}

export default CreateCampaignPage