import React from 'react'

const ProgramForm = () => {
    return (
        <div>
            <form action="#">
                <div className="formInput">
                    <label htmlFor="">NFT Collection Name</label>
                    <input type="text" />
                    <label htmlFor="">Description</label>
                    <input type="textarea" />
                    <label htmlFor="">Upload NFT Image</label>
                    <input type="file" name="" id="" />
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default ProgramForm