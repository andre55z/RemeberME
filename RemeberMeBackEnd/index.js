import express from 'express';
import cors from 'cors';

import { isLong, isShort, isEmpty, isDiferent, isLongTitle, isLongDesc } from './Middlewares/ReviewResps.js';

import Usuario from './Models/Users.js';
import Tarefas from './Models/Tarefas.js'
import {where} from "sequelize"

import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import {authMiddleware} from "./Middlewares/Auth.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors());

app.post('/validNuse', async (req, res)=>{
    let {email, senha} = req.body;

    if(isEmpty(email) || isEmpty(senha)){
        return res.json({message: 'Nenhum campo deve ficar vazio!'})
    }

    if(isShort(senha)){
        return res.json({message: 'A senha deve ter ao menos 6 caracteres.'})
    }

    if(isLong(senha)){
        return res.json({message: 'A senha deve ter menos de 20 caracteres.'})
    }


    const usuarioExiste = await Usuario.findOne({
        where:{email: email}
    })

    if(!usuarioExiste){
        return res.json({message: "Usuário não encontrado."})
    }


    const senhaCorreta = await bcrypt.compare(senha, usuarioExiste.senha);

    if(!senhaCorreta){
        return res.json({message: "Senha incorreta."})
    }


    const token = jwt.sign(
        {id: usuarioExiste.id},
        process.env.JWT_SECRET || "Chave123",
        {expiresIn: "1h"}
    )




    return res.json({ message: 'Login feito com sucesso!', token });

})

app.post('/validNuseRegister', async (req, res)=>{
    const {nome, emailCadastro, senhaCadastro, senhaConfirmada} = req.body;

    if(isEmpty(nome) || isEmpty(emailCadastro) || isEmpty(senhaCadastro) || isEmpty(senhaConfirmada)){
        return res.json({message: "Nenhum campo deve ficar vazio!"})
    }

    if (isShort(senhaCadastro) || isShort(senhaConfirmada)){
        return res.json({message: "A senha não deve ter menos de 6 caracteres!"});
    }

    if(isLong(senhaCadastro)){
        return res.json({message: "A senha não deve ter mais de 20 caracteres!"});
    }

    if(isDiferent(senhaCadastro, senhaConfirmada)){
        return res.json({message: "As senhas não coincidem."})
    }


    const usuarioExiste = await Usuario.findOne({
        where: {email: emailCadastro}
    })

    if(usuarioExiste){
        return res.json({message: "O email já está em uso."})
    }


    const senhaEncrypt = await bcrypt.hash(senhaCadastro, 10);



    await Usuario.create({
        nome: nome,
        email: emailCadastro,
        senha: senhaEncrypt
    }).then(()=>{
        console.log('Usuario criado!')
    }).catch((err)=>{
        console.log('Erro ao criar usuario: ' + err )
    })

    return res.json({message:"Cadastro feito com sucesso!", nome:nome})


})


app.get('/getname', authMiddleware, async (req, res)=>{
    try{
        const nome = await Usuario.findByPk(req.userId, {
            attributes: ["nome"],
        });
        if(!nome){
            return console.log("Erro ao pegar o nome");
        }
        res.json(nome);
    }catch(err){
        console.log("Erro no back do nome:" + err);
    }

})

app.post('/validTask', (req, res)=>{
    const {titulo, descricao} = req.body;

    if(isEmpty(titulo) || isEmpty(descricao)){
        return res.json({message: "Nenhum campo deve ficar vazio!"});
    }
    else{
        if(isLongTitle(titulo)){
            return res.json({message: "O titulo deve ter menos de 20 caracteres!"})
        }
        else{
            if(isLongDesc(descricao)){
                res.json({message: "A descrição deve ter menos de 300 caracteres!"})
            }
            else{ 
                return res.json({message: "Sucesso na task"})
            }
        }

    }


})

app.post('/editTask', authMiddleware, async (req, res)=>{
    try{
        const {titulo, descricao, id} = req.body;
        if(isEmpty(titulo) || isEmpty(descricao)){
            res.json({message: "Nenhum campo deve ficar vazio!"})
        }
        else{
            if(isLongTitle(titulo)){
                res.json({message: "O titulo deve ter menos de 30 caracteres!"})
            }else{
                if(isLongDesc(descricao)){
                    res.json({message:"A descrição deve ter menos de 300 caracteres!"})
                }
                else{
                await Tarefas.update(
                    { titulo: titulo, descricao: descricao }, 
                    { where: { id: id} }    
                );

                    res.json({message: "Task editada!", titulo:titulo, descricao:descricao})
                }
            }
        }
    }
    catch(err){
        console.log("Erro ao editar a task: " + err);
    }
})

app.post('/postTask', authMiddleware, async (req, res)=>{
    const {titulo, descricao} = req.body;

    await Tarefas.create({
        titulo: titulo,
        descricao: descricao,
        userId: req.userId 
    }).then(()=>
        console.log('Notificação criada!')
    ).catch((err)=>
        console.log('Erro ao criar notificação: ' + err)
    )

    res.json({mensagenm: 'Notificação criada!', titulo: titulo, descricao: descricao})

})

app.get("/getTasks", authMiddleware, async (req, res)=>{
    try{
        const tasks = await Tarefas.findAll({
            where: { userId: req.userId }, 
            order: [["id", "DESC"]]  });
        res.json(tasks)
    }catch(err){
        res.json({message: "Erro ao buscar as tasks"})
    }
})

app.post("/checking", authMiddleware, async (req, res) => {
    try {
        const { id, check } = req.body;

        await Tarefas.update(
            { feito: check },           
            { where: { id: id, userId: req.userId } }  
        );

        res.json({ message: 'Tudo certo no check!' });
    } catch (err) {
        res.json({ message: 'Deu erro no check: ' + err });
    }
});

app.post("/deleteTask", authMiddleware, async (req, res)=>{
    try {
        const {id} = req.body;
        await Tarefas.destroy({
            where:{id:id, userId:req.userId}
        })

        res.json({message: "Task excluida."})
    } catch (err) {
        console.log("Erro ao excluir a task")
    }
})

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`server rodando em http://localhost:${PORT}`);
    }
})
