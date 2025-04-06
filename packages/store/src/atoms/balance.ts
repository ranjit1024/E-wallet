import {atom} from "recoil"

export const balanceAtom = atom<number>({
    key:'balane',
    default:0
})