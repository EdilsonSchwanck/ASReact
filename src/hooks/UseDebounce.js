import React, { useEffect } from "react"



export function UseDebounce({func, time}){
  
    useEffect(() => {
        const handler = setTimeout(() => func(), time)
        return () => {
            clearTimeout(handler)
        }
    },[time])


}