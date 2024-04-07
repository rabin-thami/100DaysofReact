import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { createContext } from "react";


const ToggleContext = createContext()


export default function Toggle({children, onToggle}) {
    const [on, setOn] = useState(false)
    const firstRef = useRef(true)

    function toggle() {
        setOn( prevItem => !prevItem)
    }

    useEffect(() => {

      if(firstRef.current === true) {
        firstRef === false
      } else {
        onToggle()
      }
    },[on])


  return (
    <ToggleContext.Provider value={{on, toggle}}>
        {children}
    </ToggleContext.Provider>
  )
}


export { ToggleContext }