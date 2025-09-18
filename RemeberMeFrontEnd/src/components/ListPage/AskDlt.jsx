import {deleteTask} from "../../services/api";
import Button from "../Button";

function AskDlt({setAskDltComp, idForDelete}){

    function closeDlt(){
        setAskDltComp(false);
    }


    async function deleting(idForDelete){
        const response = await deleteTask(idForDelete);
        if (response.message == 'Task excluida.'){
            window.location.reload();
        }
        else{
            alert(response.message)
        }
    }

    return(
        <div className="bg-black/70 w-full h-full absolute  z-50 flex flex-col items-center">
            <div className="bg-purple-700 w-[80%] lg:w-[30%] h-[25%] lg:h-[35%] rounded-[30px] lg:mt-[10%] mt-[40%] flex flex-col items-center text-center">
                <h3 className="text-[150%] mt-[10%] font-concertone">Tem certeza que deseja excluir a task?</h3>
                <div className="flex flex-row items-center p-1 gap-[20%] ml-[-18%] lg:ml-0 mt-[20%] ">
                    <Button palavraNoBotao={"Cancelar"} ClassName={"w-[100%] lg:w-[200px] lg:h- rounded-[10%] p-[10%] h-[100%] bg-button hover:bg-pink-300 transition-all duration-200"} onClickFunction={closeDlt}/>
                    <Button palavraNoBotao={"Excluir"} ClassName={"bg-red-600 p-[10%] rounded-[10%] w-[100%] h-[100%] hover:bg-red-400 transition-all duration-200"} onClickFunction={()=>deleting(idForDelete)}/>
                </div>
            </div>
            
        </div>

    )

}

export default AskDlt;
