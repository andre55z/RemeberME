import Registerbox from "../components/RegisterPage/Registerbox";
import Title from "../components/Title";
import Brain from "../components/Brain";
import ErrorNotif from "../components/ErrorNotif";
import { useState, useEffect } from "react";
import Setabk from "../components/Setabk";

function RegisterPage(){
    const [Success, setSuccess] = useState("");
        
    const [errorNotif, setErrorNotif] = useState(false);
    const [colorNotif, setColorNotif] = useState("");
    useEffect(()=>{
        if(Success !== "Cadastro feito com sucesso!" && Success !== ""){
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
        <>
            <div className="w-full h-full lg:relative absolute bg-primary flex flex-col items-center">
            <Setabk ClassName={"lg:h-15 h-[10%] lg:w-15 w-[10%] mt-[2%] lg:pt-[5%]  lg:mr-[130%] mr-[88%]"}/>
            <Title ClassName={`w-[50%] h-[20%] mt-[1%] lg:w-[25%] lg:h-[40%] lg:mt-[0%] `}/>
            { errorNotif && <ErrorNotif message={Success} ClassName={"p-10 mt-[-10%] font-inter"} colorNotif={colorNotif}/>}
            <div className="lg:flex lg:flex-row lg:items-center hidden">
                <Registerbox topText="Cadastro" ClassName={'flex lg:h-[30%] lg:w-[50%] ml-[2%] '} 
                setSuccess={setSuccess}
                Success={Success}
                Error={errorNotif}/>
                <Brain ClassName={'lg:flex hidden w-[50%] animate-fade animate-durarion-2000'}/>
            </div>
            <Registerbox 
                topText={"Cadastro"} 
                ClassName={'flex lg:hidden'}
                setSuccess={setSuccess}
                Error={errorNotif}/>
                
            </div>
        </>
    )
}

export default RegisterPage;