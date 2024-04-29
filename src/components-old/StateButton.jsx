import { useState } from "react";

function Count(props){

    return(
        <>
            <div className="text-center">
                <button className="btn btn-primary m-1" onClick={() => props.handleClick(props.step)}>{props.step}</button>
            </div>
        </>
    );

}

export default Count 