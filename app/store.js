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
    changeVis: (vis) => set((store) => ({ visibility: vis })),
    programs: [
      {
        programName: "Polygon Advocates",
        programDescription:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        programImage: "/Logo.png",
        whitelisted: "",
      },
      {
        programName: "Polygon Leads",
        programDescription: "m erdtyjfukg ytdjydj",
        programImage: "/frontImg.png",
        whitelisted: "",
      },
    ],
    addProgram: (programName, programDescription, programImage) =>
      set(
        (store) => ({
          programs: [
            ...store.programs,
            {
              programName: programName,
              programDescription: programDescription,
              programImage: programImage,
              campaigns: [],
            },
          ],
        }),
        false,
        "addProgram"
      ),
    whitelists: [
      {
        program: "Polygon Advocates",
        whitelist:
          "yash, ayush, 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa, manishi, taveesha",
      },
    ],
    addWhitelist: (program, whitelist) =>
      set((store) => ({
        whitelists: [...store.whitelists, { program, whitelist }],
      })),
    campaigns: [
      {
        program: "Polygon Advocates",
        campaignName: "Quest",
        nftName: "Kurioai",
        nftAmount: 10,
        nftDescription: "this is a description for kurioai nft sample",
        nftImage: '/ethglobal.jpeg',
        guidelines:
          "this is sample guidelines for the submission of kurioai nft and how to blah blah",
      },
      {
        program: "Polygon Advocates",
        campaignName: "Quest2",
        nftName: "Goku",
        nftAmount: 10,
        nftDescription: "this is a description for goku nft sample",
        nftImage: '/ethglobal.jpeg',
        guidelines:
          "this is sample guidelines for the submission of goku nft and how to blah blah",
      },
      {
        program: "Polygon Leads",
        campaignName: "Quest",
        nftName: "Kurioai",
        nftAmount: 10,
        nftDescription: "this is a description for kurioai nft sample",
        nftImage: '/ethglobal.jpeg',
        guidelines:
          "this is sample guidelines for the submission of goku nft and how to blah blah",
      },
      {
        program: "Polygon Leads",
        campaignName: "Quest2",
        nftName: "Goku",
        nftAmount: 10,
        nftDescription: "this is a description for goku nft sample",
        nftImage: '/ethglobal.jpeg',
        guidelines:
          "this is sample guidelines for the submission of goku nft and how to blah blah",
      },
    ],
    addCampaign: (
      currentProgram,
      campaignName,
      nftName,
      nftAmount,
      nftDescription,
      nftImage,
      guidelines
    ) =>
      set((store) => ({
        campaigns: [
          ...store.campaigns,
          {
            program: currentProgram,
            campaignName,
            nftName,
            nftAmount,
            nftDescription,
            nftImage,
            guidelines,
          },
        ],
      })),
    currentProgram: "Polygon Advocates",
    changeCurrentProgram: (name) => set((store) => ({ currentProgram: name })),
  });

export const useStore = create(store);
