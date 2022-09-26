import React,{ useContext, useState } from "react"
export const NeoContext = React.createContext()
export const ToggleContext = React.createContext()
export function ProviderNeo ({children}){
    const [value, setValue] = useState({color :"black", text :"white"})
    
    const toggleColors = () => {
        setValue((value) => ({color: value.text, text : value.color}))
    }
    return(
        <NeoContext.Provider value={value}>
            <ToggleContext.Provider value={toggleColors}>
                {children}
            </ToggleContext.Provider>
        </NeoContext.Provider>
    )
}
export function useColors (){
    return useContext(NeoContext)
}
export function useToggleColors (){
    return useContext(ToggleContext)
}