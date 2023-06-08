"use client";
import React from 'react'
import Button from '@/app/components/Button'
import { useStore } from '@/app/store';

const ConfirmAddresses = () => {
    const visibility = useStore((store) => store.visibility);
    var vis;
    if (visibility == 3) {
        vis = "show";
    }
    else {
        vis = "hide"
    }
    return (
        <div className={vis}>
            <ol>
                <li>
                    checkaddresslistitem
                </li>
            </ol>
            <Button text='Confirm' link='../program' />
        </div>
    )
}

export default ConfirmAddresses