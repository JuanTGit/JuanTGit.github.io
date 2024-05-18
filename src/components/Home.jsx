import Lottie from "lottie-react"
import animationData from "../assets/developer.json"
import { useEffect, useState } from "react";
import TechStack from "./about/TechStack";
// const txt = ["Fully committed to the philosophy of life-long", 
//             "learning, I’m a full stack developer with a deep passion", 
//             "for JavaScript, React and all things web development.",
//             "The unique combination of creativity, logic,",
//             "technology and never running out of new things to",
//             "discover, drives my excitement and passion for web",
//             "development. When I’m not at my computer I like to",
//             "spend my time reading, keeping fit and fishing."];

function Home(){
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [letter, setLetter] = useState(0);
    const [displayedTexts, setDisplayedTexts] = useState(["", "", ""]);
    const txt = ["Juan Tejeda", "Software Engineer", "Houston, TX"]

    const speed = 100;

    useEffect(() => {
        const typeWriter = () => {
            if (currentStringIndex < txt.length) {
            const currentString = txt[currentStringIndex];
            if (letter < currentString.length) {
                const updatedTexts = [...displayedTexts];
                updatedTexts[currentStringIndex] += currentString[letter];
                setDisplayedTexts(updatedTexts);
                setLetter(letter + 1);
              } else {
                setCurrentStringIndex(currentStringIndex + 1);
                setLetter(0);
              }
            }
        };

        const timerId = setTimeout(typeWriter, speed);
        return () => clearTimeout(timerId);
    }, [letter, currentStringIndex, displayedTexts]);

    return (
        <div className="container">
            <div className="row">
                {/* About */}
                <div className="col-md-7 col-sm-12 mt-5" id="homepage-intro-text">
                    {displayedTexts.map((text, index) => {
                        switch (index) {
                        case 0:
                            return <h1 id="heading-swe" key={index}>{text}</h1>;
                        case 1:
                            return <h2 key={index}>{text}</h2>;
                        case 2:
                            return <h5 key={index}>{text}</h5>;
                        default:
                            return null;
                        }
                    })}
                    <br />
                </div>
                {/* Image */}
                <div className="col-md-5 col-sm-12 mt-4 d-flex justify-content-center">
                    <Lottie id="lottie" loop={false} animationData={animationData} />
                </div>
                {/* Techstack */}
                <div className="row" id="techstack-row">
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