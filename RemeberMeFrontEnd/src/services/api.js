import axios from "axios";

const API_URL = 'https://remeberme.onrender.com';


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

export async function getName(){
    try{
        const token = localStorage.getItem("token")
        const response = await axios.get(`${API_URL}/getname`, {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data.nome;
    }

    catch(err){
        console.log("Erro ao buscar o nome do usuario:" + err)
    }
}

export async function validTask(titulo, descricao){
    try{
        const response = await axios.post(`${API_URL}/validTask`,{
            titulo: titulo,
            descricao: descricao
        })
        return response.data;
    }catch(err){
        console.log("Erro ao validar a task " + err);
    }
}

export async function postTask(titulo, descricao) {
    try {
        const token = localStorage.getItem("token"); 

        const response = await axios.post(
            `${API_URL}/postTask`,
            {
                titulo: titulo,
                descricao: descricao
            },
            {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            }
        );

        console.log(response.data);
        return response.data;
    } catch (err) {
        console.error("Erro ao criar tarefa:", err.response?.data || err.message);
        throw err;
    }
}

export async function editTheTask(titulo, descricao, id) {
    try {
        const token = localStorage.getItem("token"); 

        const response = await axios.post(
            `${API_URL}/editTask`,
            {
                titulo: titulo,
                descricao: descricao,
                id: id
            },
            {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            }
        );

        console.log(response.data);
        return response.data;
    } catch (err) {
        console.error("Erro ao editar tarefa:", err.response?.data || err.message);
        throw err;
    }
}

export async function getTasks() {
    try{
        const token = localStorage.getItem("token");
        console.log("Enviando token:", token); // debug
        
        if (!token) {
            throw new Error("Token não encontrado no localStorage");
        }
        
        const response = await axios.get(`${API_URL}/getTasks`, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });
        return response.data;
    }catch(err){
        console.log("Erro completo:", err.response?.data || err.message);
        throw err;
    }
}

export async function checkingTasks(id, check){
    try{
        const token = localStorage.getItem("token")
        const response = await axios.post(`${API_URL}/checking`, {
            id:id,
            check: check
        },
        {
            headers: {
            Authorization: `Bearer ${token}` 
        }
            })
        return response.data;
    }catch(err){
        console.log(err);
        alert("Erro ao selecionar a mensagem. Tente novamente mais tarde.")
    }
} 

export async function deleteTask(id){
    try {
        const token = localStorage.getItem("token")
        const response = await axios.post(`${API_URL}/deleteTask`, {
            id:id
        },        {
            headers: {
            Authorization: `Bearer ${token}` 
        }})

        return response.data;
    } catch (err) {
        console.log(err);
        alert("Erro ao deletar a mensagem. Tente novamente mais tarde.")
    }
}
