function Input({placeHolder, ClassName}){
    return(    <div>
            <input type="text" placeholder={placeHolder} className={`
                rounded-[15px]
                w-[100%] h-[100%] 
                pl-5
                bg-white placeholder:font-inter placeholder:text-[100%] 
                ${ClassName}
                 `}/>
        </div>
    )
}

export default Input;