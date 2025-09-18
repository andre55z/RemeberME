import Button from "../Button";
import Edit from "./Edit";
import { useState } from "react";

function Details({titulo, descricao, setDetails, id}){

    function closeDet(){
        setDetails(false)
    }

    const [editTask, setEditTask] = useState(false);
    function toEdit(){
        setEditTask(true);
    }
    return(
        <div className={`absolute z-30  w-full h-full mix-blend-color:multiply bg-black/70 flex flex-col items-center`}>
            {editTask && <Edit setFunction={setEditTask} titulo={titulo}
                        descricao={descricao} id={id}/>}
            <div className="animate-fade duration-75 lg:w-[50%] w-[80%] h-[35%] lg:h-[60%] bg-gradient-to-br from-pink-500 to-purple-700 mt-[5%] rounded-[30px] flex flex-col items-center">
                <h1 className="font-concertone text-purple-800 mt-[5%] lg:mt-[2%] [text-shadow:0_0_2px_black]  text-center text-[25px] lg:text-[70px]">{titulo}</h1>
                <div className="max-w-[80%] text-center">
                    <p className="font-inter text-[130%] mt-[5%] break-words">
                        {descricao}
                    </p>
                </div>
                <div className="flex flex-row pb-[5%] gap-4 mt-13 lg:mt-30">
                    <Button 
                        ClassName="bg-red-500 px-6 py-3 rounded-lg font-inter text-white hover:bg-red-600 transition-colors" 
                        palavraNoBotao="Voltar" 
                        onClickFunction={closeDet} 
                    />
                    <Button 
                        ClassName="bg-blue-500 px-6 py-3 rounded-lg font-inter text-white hover:bg-blue-600 transition-colors" 
                        palavraNoBotao="Editar" 
                        onClickFunction={toEdit}
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default Details;