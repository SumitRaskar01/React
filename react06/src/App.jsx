import { useState,useEffect } from "react";

export function App(){
    const [message, setMessage] = useState("Loading")

  useEffect(() => {
    fetch(`/getjoke`)
      .then((res) => {return res.json()})
      .then((data) => {
        setMessage(data.data.data[0].content)
        console.log(data)
      })
      .catch(() => setMessage("Failed to load"));
  }, []);

    return (
        <div>
            <h1>Hello React</h1>
            <p>{message}</p>
        </div>
    )
}


