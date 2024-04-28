import { useState } from "react";

function Count(){
    const [count, setCount] = useState(0);

    return(
        <>
            <h1 className="text-center">{count}</h1>
            <div className="text-center">
                <button className="btn btn-primary m-1" onClick={() => setCount(count - 1)}>Decrement</button>
                <button className="btn btn-primary m-1" onClick={() => setCount(0)}>Reset</button>
                <button className="btn btn-primary m-1" onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </>
    );

}

export default Count