import Lottie from "lottie-react"
import animationData from "../assets/developer.json"
import { useEffect, useState } from "react";
import TechStack from "./about/TechStack";


function Home(props){
    const {currentStringIndex, setCurrentStringIndex, letter, setLetter, displayedTexts, setDisplayedTexts} = props;

    const txt = ["Juan Tejeda", "Software Engineer | Fullstack Web Developer", "Houston, TX"];
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
                            return <h1 className="mb-3" id="heading-swe" key={index}>{text}</h1>;
                        case 1:
                            return <h2 key={index}>{text}</h2>;
                        case 2:
                            return <h4 key={index}>{text}</h4>;
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