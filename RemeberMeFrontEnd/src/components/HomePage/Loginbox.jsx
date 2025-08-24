import Input from '../Input'
import Button from "../Button";
import { useEffect, useState } from 'react';
import { postEmailNSenha } from '../../services/api';
import { useNavigate } from 'react-router-dom';


function Loginbox({topText, ClassName, Success, setSuccess, Error}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    

    const[animateOutLogin, setAnimateOutLogin] = useState("");
    function settingAnimation(message){
        if(message === 'Login feito com sucesso!'){
            return setAnimateOutLogin("animate-fade-right animate-reverse animate-duration-200");
        }
        else
            return
    }

    
    const handleLogin = async () =>{
        try{
            const resposta = await postEmailNSenha(email, senha);
            setSuccess(resposta.message);
            settingAnimation(resposta.message);
            
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }

    

    const navigate = useNavigate();
    function goToRegister(){
        
        setAnimateOutLogin("animate-fade-right animate-reverse animate-duration-50")
        const timeToGoToRegister= setTimeout(()=>{navigate('/register')}, 2000);
        
    }

    const [redBorder, setRedBorder] = useState("")
    useEffect(()=>{
        if(Error){
            setRedBorder("border-3 border-red-500 focus:border-red-600 animate-shake")
        }
    }, [Error])




    return(
            <div className={`rounded-[30px] lg:h-[100%] bg-primary shadow-[-5px_5px_10px_rgba(0,0,0,0.5)] shadow-black w-[85%]  mt-[5%] lg:mt-[5%] ${ClassName} flex-col items-center mb-[5%] animate-fade-left animate-duration-2000 ${animateOutLogin}`}>
                <h1 className="font-concertone text-[250%] font-color-primary mt-[10%]">{topText}</h1>
                <Input placeHolder={'Insira seu e-mail'}
                    ClassName={`mt-[20%] lg:mt-[10%] w-[300px] lg:w-[500px] h-[60px] lg:h-[60px]  transition-transform hover:scale-105 
                    ease-in-out ${redBorder}`}
                    setFunction={setEmail}
                    variable = {email}/>

                <Input placeHolder={'Insira sua senha'}
                    ClassName={`mt-[5%] w-[300px] lg:w-[500px]  lg:h-[60px] h-[60px] transition-transform hover:scale-105 ease-in-out ${redBorder}`}
                    setFunction = {setSenha}
                    variable = {senha}/>

                <Button palavraNoBotao={'Entrar'}
                    ClassName={'w-[55%] lg:mt-[3%] h-[80px] lg:h-[100px] rounded-[20px] bg-button mt-[10%] hover:bg-white hover:text-pink-500 transition-all duration-300 ease-in-out'}
                    onClickFunction={() => handleLogin()}/>

                <p className='font-inter font-color-primary mt-[30%] lg:mt-[15%] '>
                    Ainda não tem um cadastro?
                </p>

                <Button palavraNoBotao={'Cadastrar-se'}
                     ClassName={'w-[55%] h-[60px] lg:h-[80px] lg:w-[200px] rounded-[20px] bg-button mt-[1%] mb-[2%]  hover:bg-white hover:text-pink-500 transition-all duration-300 ease-in-out'}
                     onClickFunction={() => goToRegister()}/>


            </div>
    )
}

export default Loginbox;