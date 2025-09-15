import Lottie from "lottie-react"
import BrainAnimation from "../animations/BrainAnimation.json"

function Brain({ClassName}){
    return(
        <div className={ClassName}>
            <Lottie
                animationData={BrainAnimation}
                loop={true}
                autoPlay={true}
            />

        </div>
    )
}

export default Brain;