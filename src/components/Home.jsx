import Lottie from "lottie-react"
import animationData from "../assets/developer.json"

function Home(){

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-sm-12 mt-5">
                    <h1 className="text-start">Software Engineer</h1>
                    <h3 className="text-start">Houston, TX</h3>
                </div>
                <div className="col-md-5 col-sm-12 mt-5">
                    <Lottie loop={false} animationData={animationData}/>
                </div>
            </div>
        </div>
    )
}

export default Home