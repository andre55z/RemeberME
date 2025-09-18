import { useEffect, useState } from "react";
import Title from "../assets/Title.png"
import { getName, getTasks, checkingTasks } from "../services/api";
import Button from "../components/Button";
import NewTask from "../components/ListPage/NewTask";
import trash from "../assets/trash.png";
import AskDlt from "../components/ListPage/AskDlt";
import Details from "../components/ListPage/Details";
import Setabk from "../components/Setabk";

function ListPage(){

    const [userName, setUserName] = useState("");
    const [newTask, setNewTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getName().then(name => setUserName(name));
    }, []);

    useEffect(() => {
        const buscarTasks = async () => {
            const tasks = await getTasks(); 
            setTasks(tasks);
        };
        buscarTasks();
    }, []);

    async function check(id, feitoAtual) {
        const novoFeito = !feitoAtual;
        await checkingTasks(id, novoFeito);

        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, feito: novoFeito } : task
            )
        );
    }

    const [askDltComp, setAskDltComp] = useState(false);
    const [idForDelete, setIdForDelete] = useState("");
    function askDlt(id){
        setAskDltComp(true);
        setIdForDelete(id);
    }

    const [details, setDetails] = useState(false);
    const [detTitle, setDetTitle] = useState("");
    const [detDesc, setDetDesc] = useState("");
    const [detId, setDetId] = useState("");
    function showDetails (titulo, descricao, id){
        setDetails(true);
        setDetTitle(titulo);
        setDetDesc(descricao);
        setDetId(id);
    }

    return(
        <div className="min-h-screen min-w-screen bg-primary lg:absolute relative ">
            <Setabk ClassName={" absolute z-5 lg:h-17 h-[50px] lg:w-17 w-[50px] pt-[2%] pl-[2%] mr-[88%]"}/>
            {newTask && <NewTask onClickFunction={()=>setNewTask(false)} setNewTask={setNewTask}/>}
            {askDltComp && <AskDlt setAskDltComp={setAskDltComp} idForDelete={idForDelete}/>}
            {details && <Details titulo={detTitle} descricao={detDesc} setDetails={setDetails} id={detId}/>}
            
            <div className="flex flex-col items-center">
                <img src={Title} />
            </div> 

            <div className="ml-[10%] flex flex-row gap-2 animate-fade-right">
                <p className="font-concertone text-[140%] lg:text-[170%] text-amber-50">Ola,</p>
                <p className="font-concertone text-[140%] lg:text-[170%] font-color-secundary">{userName}.</p>
            </div>

            <div className="ml-[10%] animate-fade-right">
                <p className="font-concertone text-[140%] lg:text-[170%] text-amber-50">Suas tarefas de hoje:</p>
            </div>



            <div className="flex flex-col items-center list-none mt-20">
                {tasks.length > 0 ? 
                    tasks.map((n)=>(
                        <div key={n.id} className="bg-button m-1.5 lg:w-[50%] w-[80%] lg:h-20 h-18 flex flex-col lg:p-[1%] p-[2%] lg:rounded-[30px] rounded-[20px]"> 
                            <li className="font-concertone lg:text-[25px] text-[20px] text-white">
                                <div className="flex flex-row lg:gap-5 gap-5">
                                    <button 
                                        className={`lg:rounded-[20px] rounded-[10px] lg:h-11 h-13 w-[15%] lg:w-[7%] ${n.feito ? "bg-green-500" : "bg-white"} pb-1.5 lg:pb-0 lg:pt-1.5`} 
                                        onClick={() => check(n.id, n.feito)}
                                    />
                                    <p className="max-w-[40%]">{n.titulo}</p>
                                    <img src={trash} className="lg:w-[40px] lg:mt-0 mt-2 lg:h-[40px] w-[30px] h-[30px] ml-auto" onClick={()=>askDlt(n.id)}/>
                                    <h1 className="lg:w-[40px] lg:h-[40px] text-[40px] lg:mt-[-1%] mt-[-5%] w-[30px] h-[30px] text-black font-concertone" onClick={()=>showDetails(n.titulo, n.descricao, n.id)}>+</h1>
                                </div>
                            </li>
                        </div>
                    )) 
                : <p
                    className="font-concertone text-[200%] text-purple-500"
                    style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}
                    >
                    Sem tarefas
                    </p>}
            </div>

            <div className="top-[30px] bottom-[-45%] lg:mt-0 mt-[10%] ml-[10%]">
                <Button 
                    ClassName=' lg:h-[100px] lg:w-[100px] h-[85px] w-[85px] mb-10 lg:pb-0.5 pb-4 bg-button  rounded-[100%] mt-0 text-[50px]' 
                    palavraNoBotao="+" 
                    onClickFunction={()=>setNewTask(true)}
                />
            </div>
        </div>
    )
}

export default ListPage;
