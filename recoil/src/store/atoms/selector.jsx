import { selector } from "recoil";
import countAtom from "./count";

const evenSelector = selector({
    key : "evenSelector",
    get : ({get})=>{
        const count = get(countAtom);
        return count%2;
    }
})

export default evenSelector