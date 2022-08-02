import React, {useReducer} from 'react'
import Counter from './hook/Counter'
const initialState = {count :0}
const functionDispatch = (state, action)=>{
    switch(action.type){
        case "increment":
            return {count: state.count +1}
        case "decrement":
            return {count: state.count -1}
        default :
            return {count: state.count}
    }
}
export const UseReducerOne = () => {
    const [state, dispatch] = useReducer(functionDispatch,initialState)
   
    return (
        <div>
            {state.count}
            <button onClick={() => dispatch({type:"increment"})}>increment</button>
            <button onClick={() => dispatch({type:"decrement"})}>decrement</button>
        </div>
    )
}
