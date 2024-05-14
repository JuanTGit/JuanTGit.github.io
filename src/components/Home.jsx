import Lottie from "lottie-react"
import animationData from "../assets/developer.json"
import { useEffect, useState } from "react";
import TechStack from "./about/TechStack";

function Home(){
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [letter, setLetter] = useState(0);
    const [textDisplay, setTextDisplay] = useState("");
    const txt = ["Fully committed to the philosophy of life-long", 
                "learning, I’m a full stack developer with a deep passion", 
                "for JavaScript, React and all things web development.",
                "The unique combination of creativity, logic,",
                "technology and never running out of new things to",
                "discover, drives my excitement and passion for web",
                "development. When I’m not at my computer I like to",
                "spend my time reading, keeping fit and fishing."];

    const speed = 35;

    useEffect(() => {
        const typeWriter = () => {
            if (currentStringIndex < txt.length) {
            const currentString = txt[currentStringIndex];
            if (letter < currentString.length) {
                setTextDisplay(prev => prev + currentString[letter]);
                setLetter(letter + 1);
            } else {
                setCurrentStringIndex(currentStringIndex + 1);
                setLetter(0);
                setTextDisplay(prev => prev + "<br>"); // Adds a line break after each string
            }
        }
    };

        const timerId = setTimeout(typeWriter, speed);
        return () => clearTimeout(timerId);
    }, [letter, currentStringIndex]); // Depend on `letter` and `currentStringIndex` to rerun effect when they change

    return (
        <div className="container">
            <div className="row">
                {/* About */}
                <div className="col-md-7 col-sm-12 mt-5">
                    <h1 className="text-start">Software Engineer</h1>
                    <h3 className="text-start">Houston, TX</h3>
                    <br />
                    <h5 dangerouslySetInnerHTML={{__html: textDisplay}}></h5>
                </div>
                {/* Image */}
                <div className="col-md-5 col-sm-12 mt-4 d-flex justify-content-center">
                    <Lottie id="lottie" loop={false} animationData={animationData} />
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Technologies</h1>
                    </div>
                    <div className="col-12">
                        <TechStack />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home