import seta from "../assets/setaback.png"
import { useNavigate } from "react-router-dom";

function Setabk({ClassName}){
    const navigate = useNavigate();
    function goHome(){
        navigate("/home")
    }
    return(
        <div className="rounded-100 hover:bg-button transition-transform duration-200">
            <img src={seta} className={ClassName} onClick={goHome}/>
        </div>
    )
}

export default Setabk;