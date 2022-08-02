import React, {useRef, useState, useEffect} from 'react'

export const UseRefLearn = () => {
  const [name, setName] = useState('');
  const renders = useRef(0)
  useEffect(() => {
    renders.current = renders.current +1;
  }, [name]);
  return (
    <>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <div>My name is {name}</div>
        <div >{renders.current}</div>
    </>
  )
}
