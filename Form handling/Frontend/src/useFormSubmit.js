import { useState } from "react";

export default function useFormSubmit(){
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    const submitForm = async (formData) => {
        setLoading(true)
        setSuccess(null)
        setError(null)
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json()

            if(!res.ok) throw new Error(data.error || "Something went wrong");

            setSuccess(data.success || "Message sent")
        } catch (error) {
            setError(error.message || "Request failed")
        }finally{
            setLoading(false)
        }
    }

    return { loading, success, error, submitForm }
}