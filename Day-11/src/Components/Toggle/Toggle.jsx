import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


const ToggleContext = createContext()


export default function Toggle({children, onToggle}) {
    const [on, setOn] = useState(false)

    function toggle() {
        setOn( prevItem => !prevItem)
    }

    useEffect(() => {
       onToggle()
    },[on])


  return (
    <ToggleContext.Provider value={{on, toggle}}>
        {children}
    </ToggleContext.Provider>
  )
}


export { ToggleContext }