import { useState } from "react";
import Button from "../Button";
import TaskBox from "./TaskBox";
import { validTask } from "../../services/api";
import ErrorNotif from "../ErrorNotif";
import { postTask } from "../../services/api";
import useNavigate from "react-router-dom"

function NewTask({onClickFunction, setNewTask}){
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    const [erro, setErro] = useState(false);
    const [erroMsg, setErroMsg] = useState("");

    const navigate = useNavigate();
    const taskError = async ()=>{
        const response = await validTask(titulo, descricao);
        if(response.message != "Sucesso na task"){
            setErro(true);
            setErroMsg(response.message);
        }
        else{
            postTask(titulo, descricao);
            setNewTask(false);
            navigate("/listpage");
        }
    }

    

    return(
        <div className="bg-black/70 w-full h-full absolute mix-blend-color:multiply  z-4 flex flex-col items-center">
                {erro && <ErrorNotif message={erroMsg} ClassName={" h-[100px] mt-[20px] w-[300px] text-center p-7 rounded-[20px] font-inter"} colorNotif={"bg-red-500"}/>}
                
                <TaskBox onClickFunction={onClickFunction} 
                setTitulo={setTitulo} 
                setDescricao={setDescricao}
                titulo={titulo}
                descricao={descricao}
                onClickSuccess={taskError}/>

        </div>
    )
}

export default NewTask;
