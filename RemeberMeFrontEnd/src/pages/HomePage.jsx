import Loginbox from "../components/HomePage/Loginbox";
import Title from "../components/Title";

function HomePage(){
    return(
        <div className="w-screen h-screen bg-primary flex flex-col items-center">
            <Title ClassName={`w-[50%] h-[20%] mt-[10%] lg:w-[25%] lg:h-[40%] lg:mt-[0%] `}/>
            <Loginbox topText="Login"/>

        </div>
    )
}

export default HomePage;