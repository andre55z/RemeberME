
function SuccessNotif({message, ClassName}){
    return (
        <div className={` animate-shake ${ClassName}`}>  
            <p>{message}</p>
        </div>
    )
}

export default SuccessNotif;