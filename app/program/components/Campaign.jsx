import React from 'react'
import Link from 'next/link'

const campaign = ({ campaign }) => {
    return (
        <Link href="#">
            <div>
                <h2>{campaign.campaignName}</h2>
            </div>
        </Link>
    )
}

export default campaign