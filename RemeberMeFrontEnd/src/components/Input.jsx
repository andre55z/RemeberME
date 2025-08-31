function Input({placeHolder, ClassName, setFunction, variable, type}){


    return(    <div>
            <input type={type} placeholder={placeHolder} className={`
                rounded-[15px] 
                pl-5
                bg-white placeholder:font-inter placeholder:text-[100%] 
                ${ClassName}
                 `}
                 value={variable}
                 onChange={(e)=>{setFunction(e.target.value)}}
                />
        </div>
    )
}

export default Input;