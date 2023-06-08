import { create } from "zustand";

const store =
    // create < {
    //     [
    //         {
    //             programName: string,
    //             programDescription: string,
    //             campaigns: [
    //                 {
    //                     campaignName: string,
    //                     nftName: string,
    //                     nftAmount: number,
    //                     nftDescription: string,
    //                     guidelines: string
    //                 }
    //             ]
    //             // image: image
    //         }
    //     ]
    // } >
    (set) => ({
        visibility: 1,
        changeVis: (vis) =>
            set((store) => ({ visibility: vis })),
        programs: [{ programName: "Polygon Advocates", programDescription: "lorem asdfghjk zxcvbnm erdtyjfukg ytdjydj", whitelisted: '' }, { programName: "Polygon Leads", programDescription: "m erdtyjfukg ytdjydj", whitelisted: '' }],
        addProgram: (programName, programDescription) =>
            set((store) => ({ programs: [...store.programs, { programName: programName, programDescription: programDescription, campaigns: [] }] }), false, "addProgram"),
        whitelists: [{ program: "Polygon Advocates", whitelist: 'yash, ayush, manishi, taveesha' }],
        addWhitelist: (program, whitelist) =>
            set((store) => ({ whitelists: [...store.whitelists, { program, whitelist }] })),
        currentProgram: 'Polygon Advocates',
        changeCurrentProgram: (name) =>
            set((store) => ({ currentProgram: name }))
    });

export const useStore = create(store);