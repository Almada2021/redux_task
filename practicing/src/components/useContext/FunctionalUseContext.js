import React, { useContext } from 'react'
import {  useColors, useToggleColors } from './hook/useProvider'
export default function FunctionalUseContext() {
    const context = useColors()
    const changeColor = useToggleColors()
    return (
        <>    
          <div style={{backgroundColor: context.color, color: context.text}}>FunctionalUseContext</div>
          <button onClick={changeColor}>Click</button>
        </>
    )
}
/*
import React, { useContext } from 'react'
import { neoContext } from './Component'
export default function FunctionalUseContext() {
    const context = useContext(neoContext)
    return (
        <div style={{backgroundColor: context.color, color: context.text}}>FunctionalUseContext</div>
    )
}
*/