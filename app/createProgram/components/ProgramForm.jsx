"use client";
import React, { useState } from 'react'
import { useStore } from '../../store.js'

const ProgramForm = () => {
    const visibility = useStore((store) => store.visibility);
    var vis;
    if (visibility == 1) {
        vis = "show";
    }
    else {
        vis = "hide"
    }

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const addProgram = useStore((store) => store.addProgram);
    const changeVis = useStore((store) => store.changeVis);
    const changeCurrentProgram = useStore((store) => store.changeCurrentProgram);
    // console.log(name);
    // const programs = useStore((store) => store.programs);
    // console.log(programs);

    return (
        <div className={vis}>
            <form action="#">
                <div className="formInput">
                    <label htmlFor="">NFT Collection Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    <label htmlFor="">Description</label>
                    <input type="textarea" onChange={(e) => setDescription(e.target.value)} value={description} />
                    <label htmlFor="">Upload NFT Image</label>
                    <input type="file" name="" id="" />
                </div>
                {/* <input type="submit" value="Create" /> */}
            </form>
            <button onClick={() => {
                addProgram(name, description);
                changeCurrentProgram(name);
                changeVis(2);
            }}>
                Create</button>
        </div>
    )
}

export default ProgramForm