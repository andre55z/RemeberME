import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { editTheTask } from "../../services/api";
import ErrorNotif from "../ErrorNotif";
import { useNavigate } from 'react-router-dom';


function Edit({setFunction, titulo, descricao, id}){

    const [newTitle, setNewTitle] = useState(titulo);
    const [newDesc, setNewDesc] = useState(descricao);

    const [erro, setErro] = useState(false);
    const [erroMsg, setErroMsg] = useState("");

    async function saveEdit(){
        try{
            const resposta = await editTheTask(newTitle, newDesc, id);
            if(resposta.message != "Task editada!"){
                setErro(true);
                setErroMsg(resposta.message);
            }
            else{
                setFunction(false)
                window.location.reload();
            }
            
        }catch(err){
            console.log("Erro ao editar a task:" + err);
            alert("Erro ao editar a task, tente novamente mais tarde.");
        }
    }
    

    return(
        <div className="bg-black/70 w-full h-full absolute z-30 mix-blend-color:multiply flex flex-col items-center">
            {erro && <ErrorNotif message={erroMsg} ClassName={" h-[100px] mt-[20px] w-[300px] text-center p-7 rounded-[20px] font-inter"} colorNotif={"bg-red-500"}/>}
            <div className="lg:w-[50%] w-[80%] h-[60%] lg:h-[70%] animate-fade duration-75 bg-gradient-to-br from-pink-500 to-purple-700 mt-[5%] rounded-[30px] flex flex-col items-center">
                <Input type="text" 
                    ClassName={"w-[130%]  ml-[-5%] mt-[10%] lg:h-15 h-10 font-inter text-[70%] lg:text-[100%] transition-transform hover:scale-105 ease-in-out"}
                    variable={newTitle}
                    setFunction={setNewTitle}/>
                <textarea 
                    className="w-[80%] mt-[5%] outline-none transition-transform hover:scale-105 ease-in-out h-100 rounded-[20px] ml-[1%] p-4 resize-y font-inter text-[110%] bg-amber-50"
                    value={newDesc}
                    onChange={(e)=>setNewDesc(e.target.value)}>
                    
                </textarea>
                <div className="flex pb-[5%] flex-row gap-5">
                    <Button 
                            ClassName="bg-red-500 mt-[5%] px-6 py-3 rounded-lg font-inter text-white hover:bg-red-600 transition-colors" 
                            palavraNoBotao="Voltar" 
                            onClickFunction={()=>setFunction(false)}
                    />
                    <Button 
                            ClassName="bg-green-500 mt-[5%] px-6 py-3 rounded-lg font-inter text-white hover:bg-red-600 transition-colors" 
                            palavraNoBotao="Editar" 
                            onClickFunction={saveEdit}
                    />
                </div>
            </div>
        </div>
    )
}

export default Edit;
