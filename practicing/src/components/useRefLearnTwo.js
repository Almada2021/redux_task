import React, {useRef, useState, useEffect} from 'react'

export const UseRefLearnTwo = () => {
  const [name, setName] = useState('');
  const previous = useRef('')
  const append = useRef()
  useEffect(() => {
    previous.current = name;
  }, [name]);
  function refAppend (){
    const element = () => <p>hola</p>;
    const ref = append.current;
    ref.style.color = "#ff0";
}
  return (
    <>
        <input  value={name} onChange={(e) => setName(e.target.value)}/>
        <div>
            My name is {name} and my previous name is {previous.current} 
        </div>
        <div ref={append}>List</div>
        <button onClick={refAppend}>Append</button>
    </>
  )
}
