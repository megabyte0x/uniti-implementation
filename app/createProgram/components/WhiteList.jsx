"use client";
import React from 'react'
import { useStore } from '../../store.js'
const WhiteList = () => {
    const visibility = useStore((store) => store.visibility);
    var vis;
    if (visibility == 2) {
        vis = "show";
    }
    else {
        vis = "hide"
    }
    const changeVis = useStore((store) => store.changeVis);
    return (
        <div className={vis}>
            <form action="#">
                <label htmlFor="">Receipiants Wallet Addressess <span>Please paste a string comprising of all the addresses.</span></label>
                <input type="textarea" name="" id="" />
                {/* <input type="submit" value="WhiteList" /> */}
            </form>
            <button onClick={() => {
                changeVis(3);
            }}>WhiteList</button>
        </div>
    )
}

export default WhiteList