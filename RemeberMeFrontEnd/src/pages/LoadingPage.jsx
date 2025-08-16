import { useEffect, useState } from "react";
import Brain from "../components/Brain";
import Title from "../components/Title";

function LoadingPage(){

    const [frasesLoading, setFrasesLoading] = useState("Lembrando da sua lista...");
    const [indexLoading, setIndexLoading] = useState(0);
    const vetorFrasesLoading = ["Recordando de seus afazeres...",
         "Buscando seus dados na memória...",
         "Aquecendo os neurônios...",
         "Lustrando o cérebro...",
         "Mentalizando suas metas..."]
        useEffect(() => {
        const intervalLoadingFrases = setInterval(() => {
            setIndexLoading(prevIndex => {
            const nextIndex = (prevIndex + 1) % vetorFrasesLoading.length;
            setFrasesLoading(vetorFrasesLoading[nextIndex]);
            return nextIndex;
            });
        }, 5000); 

        return () => clearInterval(intervalLoadingFrases);
        }, );

    return(
        < div className="bg-primary w-screen h-screen flex flex-col items-center">
            <Title ClassName={"w-[50%] h-[20%] mt-[10%] lg:w-[25%] lg:h-[40%] lg:mt-[0%] "}/>
            <Brain ClassName={"w-[70%] h-[30%] lg:w-[30%] lg:mt-[-10%] lg:h-[10%]"}/>
            <p className="font-inter text-[100%] mt-[25%] animate-fade-up">{frasesLoading}</p>
        </div>
    )
}

export default LoadingPage;