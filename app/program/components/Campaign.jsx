import React from 'react'
import Link from 'next/link'

const campaign = ({ link }) => {
    return (
        <Link href={link}>
            <div>
                campaign
            </div>
        </Link>
    )
}

export default campaign