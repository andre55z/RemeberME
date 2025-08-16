import TitleImg from "../assets/Title.png"

function Title({ClassName}){
    return(<>
        <img src={TitleImg} className={ClassName}/>
    </>)
}

export default Title;