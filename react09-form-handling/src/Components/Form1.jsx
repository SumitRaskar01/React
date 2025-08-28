//Creating a form using seperate states for each input fields

import { useState } from "react"

export function Form1() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function handleClick(e){
        e.preventDefault()
        console.log(name)
        console.log(email)
    }
  
  return (
    <div> 
        <form onSubmit={handleClick} className="form-styling">
            <label>Name</label>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}/>

            <label>Email</label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}