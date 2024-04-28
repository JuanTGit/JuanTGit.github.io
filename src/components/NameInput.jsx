import { useState } from "react";

function NameComponent(){
    const [name, setName] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    return(
        <div>
            <input onChange={handleNameChange} value={name} placeholder="What's your name?" />
            <p>Name: {name}</p>
        </div>
    );
}

export default NameComponent