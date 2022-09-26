import React from 'react'
// import ClassUseContext from './ClassUseContext'
import FunctionalUseContext from './FunctionalUseContext'
import { ProviderNeo, ToggleContext } from './hook/useProvider'
import { useToggleColors } from './hook/useProvider'
export default function () {
    return (
        <ProviderNeo >
            {/* <ClassUseContext/> */}
            <FunctionalUseContext/>
            
        </ProviderNeo>
    )
}

/*
import React, { useState } from 'react'
import ClassUseContext from './ClassUseContext'
import FunctionalUseContext from './FunctionalUseContext'
export const neoContext = React.createContext()

export default function () {
    const [value, setValue] = useState({color :"black", text :"white"})
    const toggleColors = () =>{
        setValue((values) => ({color : values.text, text : values.color}))
    }
    return (
        <neoContext.Provider value={value}>
            <ClassUseContext/>
            <FunctionalUseContext/>
            <button onClick={toggleColors}>Change</button>
        </neoContext.Provider>
    )
}
*/