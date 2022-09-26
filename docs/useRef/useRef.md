# Documentation of useRef
## useRef definition
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.A common use case is to access a child imperatively:

## create ref
~~~
  const renders = useRef(0)
  //need import useRef in form export
~~~

## change the value of useRef
for update the value you need use the property of object current
if you declarate this is a const variable you've a error
for this case you need current properties
~~~
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
~~~