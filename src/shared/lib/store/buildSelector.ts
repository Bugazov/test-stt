import { StateSchema } from "@/app/providers/StoreProvider";
import { useSelector } from "react-redux";

type Selector<T> = (state:StateSchema)=> T 
export function buildSelector<T>(selector:Selector<T>){
    const useSelectorHook = ()=>{
        return useSelector(selector)
    }

    return [useSelectorHook,selector]
}