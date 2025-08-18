import Input from '../Input'

function Loginbox({topText}){
    return(
        <div className="rounded-[30px] bg-primary shadow-[-5px_5px_10px_rgba(0,0,0,0.5)] shadow-black w-[85%] h-[70%] mt-[-10%] lg:mt-[-5%] flex flex-col items-center">
            <h1 className="font-concertone text-[250%] font-color-primary">{topText}</h1>
            <Input placeHolder={'Insira seu e-mail'} ClassName="mt-[20%]"/>
        </div>
    )
}

export default Loginbox;