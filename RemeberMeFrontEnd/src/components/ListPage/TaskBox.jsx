import Input from "../Input";
import Button from "../Button";

function TaskBox({onClickFunction, setTitulo, setDescricao, titulo, descricao, onClickSuccess}){

    return(
        <div className="w-[90%]  max-w-md mx-auto bg-gradient-to-br from-pink-500 to-purple-700 mt-15 p-6 rounded-[30px] animate-fade duration-100 flex flex-col items-center shadow-lg">
            <Input type="text" placeHolder={"Insira o titulo"} 
            ClassName={"w-full h-16 outline-none font-inter text-lg transition-all duration-300 hover:scale-105 focus:scale-105 rounded-xl px-4"}
            setFunction={setTitulo}
            variable={titulo}/> 
            <textarea 
                className="w-full h-32 mt-4 outline-none transition-all duration-300 hover:scale-105 focus:scale-105 rounded-xl p-4 resize-y font-inter text-base bg-amber-50 placeholder-gray-500" 
                placeholder="Descreva sua tarefa..."
                value={descricao}
                onChange={(e)=>{setDescricao(e.target.value)}}
            />
            <div className="flex gap-4 mt-6 w-full justify-center">        
                <Button ClassName="flex-1 max-w-[120px] h-12 text-base rounded-xl bg-red-500 hover:bg-red-400 transition-all duration-300 hover:scale-105 text-white font-medium" palavraNoBotao={"Cancelar"} onClickFunction={onClickFunction}/>
                <Button ClassName="flex-1 max-w-[120px] h-12 text-base rounded-xl bg-green-500 hover:bg-green-400 transition-all duration-300 hover:scale-105 text-white font-medium" palavraNoBotao={"Adicionar"} onClickFunction={onClickSuccess}/>

            </div>
        </div>
    )
}

export default TaskBox;