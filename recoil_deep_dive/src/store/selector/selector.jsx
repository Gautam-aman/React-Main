import { selector } from "recoil";
import { messageAtom, networkAtom, notificationAtom } from "../atoms/atom";

export const totalnotiselector = selector({
    key : "Notiselector",
    get : ({get})=>{
        const networkAtomcount = get(networkAtom);
        const messageAtomcount = get(messageAtom);
        const notiAtomcount = get(notificationAtom);
        return networkAtomcount+messageAtomcount+notiAtomcount

    }
})