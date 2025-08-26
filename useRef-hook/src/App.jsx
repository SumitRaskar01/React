import { useState, useRef } from "react";

export default function App(){
    const [name, setName] = useState("");
    const [prevname, setPrevname] = useState("");
    const refinput = useRef(null)

    function handleClick(){
      refinput.current.focus()
      refinput.current.style.backgroundColor = "Lightblue"
    }

    function handleChange(){
        const current = refinput.current.value;
        setPrevname(name)
        setName(current)
    }

    return (
        <div className="component">
            <button onClick={handleClick}>Click Me to Focus</button>
            <input type="text" ref={refinput} onChange={handleChange}/>
            <h3>My name is {name}, But it was {prevname}</h3>
        </div>
    )
}