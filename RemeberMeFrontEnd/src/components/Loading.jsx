function Loading({ClassName}){
    return(
        <div className= {`bg-black/70 w-full h-full absolute mix-blend-color:multiply  z-4 flex flex-col items-center ${ClassName}`}>
            <p className="text-[50px] font-color-secundary mt-[30%]">Um momento...</p>
        </div>
    )
}

export default Loading;