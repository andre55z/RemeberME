import express from 'express';
import cors from 'cors';

import { isLong, isShort, isEmpty, isDiferent } from './Middlewares/ReviewResps.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors());

app.post('/validNuse', (req, res)=>{
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



    return res.json({ message: 'Login feito com sucesso!' });

})

app.post('/validNuseRegister', (req, res)=>{
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

    return res.json({message:"Cadastro feito com sucesso!"})



})

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`server rodando em http://localhost:${PORT}`);
    }
})
