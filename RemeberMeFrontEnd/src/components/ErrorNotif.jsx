
function ErrorNotif({message, ClassName, colorNotif}){
    return (
        <div className={`animate-shake ${ClassName} ${colorNotif}`}>  
            <p>{message}</p>
        </div>
    )
}

export default ErrorNotif;