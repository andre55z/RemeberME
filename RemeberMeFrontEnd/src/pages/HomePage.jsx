import Loginbox from "../components/HomePage/Loginbox";
import Title from "../components/Title";
import Brain from "../components/Brain";

import ErrorNotif from "../components/ErrorNotif";
import { useEffect, useState } from "react";

function HomePage(){

    const [Success, setSuccess] = useState("");
    
    const [errorNotif, setErrorNotif] = useState(false);
    const [colorNotif, setColorNotif] = useState("");
    useEffect(()=>{
        if(Success !== "Login feito com sucesso!" && Success !== ""){
            setErrorNotif(true);
            setColorNotif("bg-red-500 rounded-[20px] border-b-red-800")
        }
        else{

            if(Success !== ""){
                setErrorNotif(true);
                setColorNotif("bg-green-500 rounded-[20px] border-b-green-800")
            }
        }

    }, [Success])

    return(
        <div className="h-full w-full md:relative absolute bg-primary flex flex-col items-center">
            <Title ClassName={`w-[50%] h-[20%] mt-[10%] lg:w-[25%] lg:h-[40%] lg:mt-[0%] `}/>
            {loading && <Loading/>}
            { errorNotif && <ErrorNotif message={Success} ClassName={"p-10 mt-[-10%] font-inter"} colorNotif={colorNotif}/>}
            <div className="lg:flex lg:flex-row lg:items-center hidden">
                <Loginbox topText="Login"
                 ClassName={'flex lg:h-[30%] lg:w-[50%] ml-[2%] '}
                  Success={Success} 
                  setSuccess={setSuccess}
                  Error={errorNotif}/>
                <Brain ClassName={'lg:flex hidden w-[50%] animate-fade animate-durarion-2000'}/>
            </div>
            <Loginbox 
                topText={"Login"} 
                ClassName={'flex lg:hidden'}
                Success={Success}
                setSuccess={setSuccess}
                Error={errorNotif}/>

        </div>
    )
}

export default HomePage;