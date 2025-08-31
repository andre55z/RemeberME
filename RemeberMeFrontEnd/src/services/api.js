import axios from "axios";

const API_URL = 'http://localhost:3000';


export async function postEmailNSenha(email, senha){
    try{
        const response = await axios.post(`${API_URL}/validNuse`, {
            email: email,
            senha: senha
        })
        console.log(response.data);
        return response.data;
    }
    catch(err){
        console.log(err);
    }

}

export async function postRegisterData(nome, emailCadastro, senhaCadastro, senhaConfirmada){
    try{
        const response = await axios.post(`${API_URL}/validNuseRegister`,{
            nome: nome,
            emailCadastro: emailCadastro,
            senhaCadastro: senhaCadastro,
            senhaConfirmada: senhaConfirmada
        })

        console.log(response.data);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}


