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
        programs: [{ programName: "Polygon Advocates", programDescription: "lorem asdfghjk zxcvbnm erdtyjfukg ytdjydj" }, { programName: "Polygon Leads", programDescription: "m erdtyjfukg ytdjydj" }],
        addProgram: (programName, programDescription) =>
            set((store) => ({ programs: [...store.programs, { programName: programName, programDescription: programDescription, campaigns: [] }] }), false, "addProgram"),
    });

export const useStore = create(store);