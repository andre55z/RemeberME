import Input from "../Input"
import Button from "../Button"
import { useState, useEffect } from "react";
import { postRegisterData } from "../../services/api";
import { useNavigate } from "react-router-dom";

function Registerbox({topText, ClassName, setSuccess, Error}){

    const [nome, setNome] = useState("");
    const [emailCadastro, setEmailCadastro] = useState("");
    const [senhaCadastro, setSenhaCadastro] = useState("");
    const [senhaConfirmada, setSenhaConfirmada] = useState("");

    const [animateOutregister, setAnimateOutRegister] = useState("");
    function settingAnimation(message){
        if(message === 'Cadastro feito com sucesso!'){
            return setAnimateOutRegister("animate-fade-right animate-reverse animate-duration-200");

        }
        else{
            return
        }
    }


    const handleRegister = async ()=>{
        try {
            const resposta = await postRegisterData(nome, emailCadastro, senhaCadastro, senhaConfirmada)
            settingAnimation(resposta.message);
            setSuccess(resposta.message);
            setTimeout(()=>{
                goBackToHome(resposta.message);
            }, 2000) 
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    const navigate = useNavigate()
    function goBackToHome(resposta){
        if(resposta==="Cadastro feito com sucesso!"){
            return navigate('/home');
        }
        return
    
        
    }

    const [redBorder, setRedBorder] = useState("")
        useEffect(()=>{
            if(Error){
                setRedBorder("border-3 border-red-500 focus:border-red-600 animate-shake")
            }
        }, [Error, redBorder])





    return(
            <div className={`rounded-[30px] lg:h-[100%] bg-primary shadow-[-5px_5px_10px_rgba(0,0,0,0.5)] shadow-black w-[85%]  mt-[15%] lg:mt-[5%] ${ClassName} flex-col items-center mb-[5%] animate-fade-left animate-duration-2000 ${animateOutregister}`}>
                <h1 className="font-concertone text-[250%] font-color-primary mt-[10%]">{topText}</h1>
                <Input placeHolder={'Insira seu nome'}
                    ClassName={`mt-[20%] lg:mt-[10%] w-[300px] lg:w-[500px] h-[60px] lg:h-[60px]  transition-transform hover:scale-105 
                    ease-in-out ${redBorder}`}
                    setFunction={setNome}
                    variable={nome}
                    
                    />

                <Input placeHolder={'Insira seu e-mail'}
                    ClassName={`mt-[5%] w-[300px] lg:w-[500px]  lg:h-[60px] h-[60px] transition-transform hover:scale-105 ease-in-out ${redBorder}`}
                    setFunction={setEmailCadastro}
                    variable={emailCadastro}
                    
                    />

                <Input placeHolder={'Crie uma senha'}
                    ClassName={`mt-[5%] lg:mt-[5%] w-[300px] lg:w-[500px] h-[60px] lg:h-[60px]  transition-transform hover:scale-105 
                    ease-in-out ${redBorder}`}
                    setFunction={setSenhaCadastro}
                    variable={senhaCadastro}
                    
                    />

                <Input placeHolder={'Confirme a senha'}
                    ClassName={`mt-[5%] w-[300px] lg:w-[500px]  lg:h-[60px] h-[60px] transition-transform hover:scale-105 ease-in-out ${redBorder}`} 
                    setFunction={setSenhaConfirmada}
                    variable={senhaConfirmada}
                    
                    />

                <Button palavraNoBotao={'Cadastrar'}
                    ClassName={'w-[55%] lg:mt-[3%] mb-[2%] h-[80px] lg:h-[100px] rounded-[20px] bg-button mt-[10%] hover:bg-white hover:text-pink-500 transition-all duration-300 ease-in-out'}
                    onClickFunction={()=>handleRegister()}
                   />


            </div>
    )

}

export default Registerbox