import { useState,useEffect, use } from "react";

export default function App(){

  const [language, setLanguage] = useState([{id:1,language:"Javascript"},{id:2,language:"Java"},{id:3,language:"C"}])

  return (
    <>
      <h1>Available Languages</h1>
      {
            language.map((lang)=>{
            console.log(lang.id)
            return <h1 key={lang.id}>{lang.language}</h1>})
    }
    </>
  )
}