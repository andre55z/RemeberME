import { useState } from "react";
import Button from "../Button";
import TaskBox from "./TaskBox";
import { validTask } from "../../services/api";
import ErrorNotif from "../ErrorNotif";
import { postTask } from "../../services/api";
import Loading from "../Loading";


function NewTask({onClickFunction, setNewTask}){
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    const [erro, setErro] = useState(false);
    const [erroMsg, setErroMsg] = useState("");

    const [loading, setLoading] = useState(false);
    const waitBD = async (titulo, descricao)=>{
        setLoading(true);
        await postTask(titulo, descricao);
        setLoading(false);
    }

    const taskError = async ()=>{
        const response = await validTask(titulo, descricao);
        if(response.message != "Sucesso na task"){
            setErro(true);
            setErroMsg(response.message);
        }
        else{
            await waitBD(titulo, descricao);
            setNewTask(false);
            window.location.reload();
        }
    }

    

    return(
        <div className="bg-black/70 w-full h-full absolute mix-blend-color:multiply  z-4 flex flex-col items-center">
                {erro && <ErrorNotif message={erroMsg} ClassName={" h-[100px] mt-[20px] w-[300px] text-center p-7 rounded-[20px] font-inter"} colorNotif={"bg-red-500"}/>}
                {loading && <Loading/>}
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
