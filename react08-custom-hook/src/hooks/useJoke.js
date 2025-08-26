import { useEffect, useState } from "react"

export default function useJoke(){

    const [joke, setJoke] = useState("")
    const [loading, setLoading] = useState(true)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)

    function getJoke(){
        setLoading(true)
        setTimeout(() => {
            fetch("/api/api/v1/public/randomjokes/joke/random")
               .then(response => response.json())
               .then((data) => {
                   setJoke(data.data.content)
                   setSuccess(true)
               })
               .catch((err)=>{
                   setError(err)
                   setSuccess(false)
               })
               .finally(()=>{
                   setLoading(false)
               })
        }, 500);
    }

    useEffect(()=>{
       getJoke()
    },[])

    return {joke,loading,success,error, getJoke}
}