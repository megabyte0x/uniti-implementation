"use client";
import React, { useState } from 'react'
import { useStore } from '../../store.js'
const WhiteList = () => {
    const [whitelist, setWhitelist] = useState('');
    const visibility = useStore((store) => store.visibility);
    const currentProgram = useStore((store) => store.currentProgram);
    var vis;
    if (visibility == 2) {
        vis = "show";
    }
    else {
        vis = "hide"
    }
    const changeVis = useStore((store) => store.changeVis);
    const addWhitelist = useStore((store) => store.addWhitelist);
    // console.log(whitelist);
    console.log(currentProgram);
    return (
        <div className={vis}>
            <form action="#">
                <label htmlFor="">Receipiants Wallet Addressess <span>Please paste a string comprising of all the addresses.</span></label>
                <input type="textarea" name="" id="" onChange={(e) => setWhitelist(e.target.value)} value={whitelist} />
                {/* <input type="submit" value="WhiteList" /> */}
            </form>
            <button onClick={() => {
                changeVis(3);
                addWhitelist(currentProgram, whitelist);
            }}>WhiteList</button>
        </div>
    )
}

export default WhiteList