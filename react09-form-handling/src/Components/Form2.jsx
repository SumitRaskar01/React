//Managing all input fields into a single form state

import { useState } from "react"

export function Form2() {

  const [form, setForm] = useState({name: "", email: ""})

    function handleClick(e){
        e.preventDefault()
        console.log(form.name)
        console.log(form.email)
    }
  
  return (
    <div> 
        <form onSubmit={handleClick} className="form-styling">
            <label>Name</label>
            <input 
              type="text" 
              onChange={(e)=> setForm({...form, [e.target.name]: e.target.value})} 
              value={form.name}
              name="name"
            />

            <label>Email</label>
            <input 
              type="text" 
              onChange={(e)=> setForm({...form, [e.target.name]: e.target.value})} 
              value={form.email} 
              name="email"
            />

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}