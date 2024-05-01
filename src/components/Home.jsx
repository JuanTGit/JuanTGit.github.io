import Lottie from "lottie-react"
import animationData from "../assets/developer.json"
import { useEffect } from "react";

function Home(){
    var speed = 100;
    var i = 0;
    var txt = "Hello! My name is Juan Tejeda!"
    useEffect(() => {
        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("intro").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
                }
            }
            typeWriter();

    }, []);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-sm-12 mt-5">
                    <h1 className="text-start">Software Engineer</h1>
                    <h3 className="text-start">Houston, TX</h3>
                    <h5 className="mt-4" id="intro"></h5>
                </div>
                <div className="col-md-5 col-sm-12 mt-5">
                    <Lottie loop={false} animationData={animationData}/>
                </div>
            </div>
        </div>
    )
}

export default Home