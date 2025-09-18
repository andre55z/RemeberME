import Input from "../Input";
import Button from "../Button";

function TaskBox({onClickFunction, setTitulo, setDescricao, titulo, descricao, onClickSuccess}){

    return(
        <div className="lg:w-[50%] w-[80%] h-[70%] bg-gradient-to-br from-pink-500 to-purple-700 mt-[5%] rounded-[30px] flex flex-col items-center">
            <Input type="text" placeHolder={"Insira o titulo"} 
            ClassName={"h-20 mt-[20%] lg:w-[170%] w-[80%] outline-none lg:ml-[-34%] ml-[10%] font-inter text-[120%] transition-transform hover:scale-105 ease-in-out"}
            setFunction={setTitulo}
            variable={titulo}/> 
            <textarea 
                className="w-[80%] mt-[5%] outline-none transition-transform hover:scale-105 ease-in-out h-100 rounded-[20px] ml-[1%] p-4 resize-y font-inter text-[110%] bg-amber-50" 
                placeholder="Descreva sua tarefa..."
                value={descricao}
                onChange={(e)=>{setDescricao(e.target.value)}}
            />
            <div className="flex-row flex pb-[5%] items-center h-[20%] w-[100%] ml-8 mt-20">        
                <Button ClassName="h-[50%] ml-3 lg:mt-[2%] pb-1.5 mt-[10%] w-[40%] lg:w-[20%] text-[100%] rounded-[20px] bg-red-500 transition-transform ease-in hover:bg-red-400" palavraNoBotao={"Cancelar"} onClickFunction={onClickFunction}/>
                <Button ClassName="h-[50%] ml-3 lg:mt-[2%] pb-1.5 mt-[10%] w-[40%] lg:w-[20%] text-[100%] rounded-[20px] bottom-color-terciary transition-transform ease-in hover:bg-green-400" palavraNoBotao={"Adicionar"} onClickFunction={onClickSuccess}/>

            </div>
        </div>
    )
}

export default TaskBox;