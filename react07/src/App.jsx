import { useState,useEffect, use } from "react";

export default function App(){

  useEffect(()=>{
    console.log("Fetching Data")
    fetch('https://api.freeapi.app/api/v1/public/randomjokes/joke/random')
      .then((data)=>{return data.json()})
      .then((data)=>{
        console.log(data)
        setMessage(data.data.content)
      })
      .then(()=>{
        console.log("Clearing console in 5 seconds")
        setTimeout(()=>{
          console.clear()
        },5000)
      })
  },[])

  const [message, setMessage] = useState("hi")

  return (
    <>
      <h1>hello</h1>
      <h2>{message}</h2>
    </>
  )
}