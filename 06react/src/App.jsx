import { useState, useEffect } from "react"

export function App(){

    const [message, setMessage] = useState("Loading...")

    useEffect(() => {
        fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
            .then((res) => res.json())
            .then((data) => setMessage(data.data.content))
            .catch((err) => {
                console.log(err)
                setMessage("Failed to Load")
            })
    },[])

    return (
        <div>
            <h1>Hello</h1>
            <p>Learning React</p>
            <h2>{message}</h2>
        </div>
    )
}