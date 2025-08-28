import { useState } from "react";
import useForm from "./useFormSubmit";

export function Form() {
    const [form, setForm] = useState({name: "", email: "", message: ""})
    const { loading, error, success, submitForm } = useForm()

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submitForm(form)
    }

    return (
    <>
        <form className="form-styling" onSubmit={handleSubmit}>

            <div className="fields">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter your Name" onChange={handleChange} value={form.name || ""} name="name"/>
            </div>

            <div className="fields">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your Email" onChange={handleChange} value={form.email || ""} name="email"/>
            </div>

            <div className="fields">
                <label htmlFor="">Message</label>
                <input type="text" placeholder="Enter your Message" onChange={handleChange} value={form.message || ""} name="message"/>
            </div>

            <button type="submit">Submit</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
    </>
    )
}