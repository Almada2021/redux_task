function getValidate (e){
    e.preventDefault()
    if(!inputRef.current.checkValidity()){
        inputRef.current.style.color = "#f00";
        setMessage("Formulario Invalido")
    }else if(inputRef.current.checkValidity()){
        setMessage("")
        inputRef.current.style.color = "#0f0";
    }
}
export default function useValidateForm () {
    const [message,setMessage] = useState("")
    const [inputText, setInputText] = useState('')
    const inputRef = useRef(null) 
}