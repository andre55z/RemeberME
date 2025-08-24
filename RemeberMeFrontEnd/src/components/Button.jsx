

function Button({palavraNoBotao, ClassName, onClickFunction}){
    return (
        <>

            <button className={`${ClassName} font-concertone`} onClick={onClickFunction}>{palavraNoBotao}</button>
        </>
    )
}

export default Button;