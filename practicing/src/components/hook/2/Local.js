import React from 'react'
import useLocal from './useLocal'


export const Local = () => {
    const [name, setName] = useLocal("name", "")

    return (
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>    
    )
}
