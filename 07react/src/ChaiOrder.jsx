import { useState } from "react";

export function ChaiCounter(){
    const [chai, setChai] = useState(0)
    
    const serveChai = () => {
        setChai (prev => prev + 1 )
    }

    return (
        <div>
            <h2>Chai Counter</h2>
            <p>You have served {chai} cups of chai</p>
            <button onClick={serveChai}>Serve Chai</button>
        </div>
    )
}