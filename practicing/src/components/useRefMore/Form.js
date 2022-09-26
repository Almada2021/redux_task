import React, {useRef, useState} from 'react'
import useValidateForm from './useValidateForm'
export const Form = () => {
    
    // const [message,setMessage] = useState("")
    // const [inputText, setInputText] = useState('')
    // const inputRef = useRef(null) 
    // function getValidate (e){
    //     e.preventDefault()
    //     if(!inputRef.current.checkValidity()){
    //         inputRef.current.style.color = "#f00";
    //         setMessage("Formulario Invalido")
    //     }else if(inputRef.current.checkValidity()){
    //         setMessage("")
    //         inputRef.current.style.color = "#0f0";
    //     }
    // }
    const {inputRef, message, getValidate} = useValidateForm()
    return (
    <form >
        <input type="text" minLength={2} maxLength={15} ref={inputRef} value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
        <p>{message}</p>
        <button onClick={getValidate}>Send</button>
    </form>
  )
}
