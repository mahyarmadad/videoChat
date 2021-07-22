import { atom } from "recoil";

// let state = {
//   socketId: null,
//   localStream: null,
//   remoteStream: null,
//   screenSharingStream: null,
//   allowStrangerConnection: false,
//   screenSharingActive: false,
// };

export const socketId = atom({
  key: "socketId",
  default: "",
});

export const socketConnection = atom({
  key: "newsocket",
  default: null,
});
