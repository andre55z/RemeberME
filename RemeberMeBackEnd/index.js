import express from 'express';
import cors from 'cors';

import { isLong, isShort, isEmpty } from './Middlewares/ReviewResps.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors());

app.post('/validNuse', (req, res)=>{
    let {email, senha} = req.body;

    if(isEmpty(email) || isEmpty(senha)){
        return res.json({message: 'Nenhum campo deve ficar vazio'})
    }

    if(isShort(senha)){
        return res.json({message: 'A senha deve ter ao menos 6 caracteres.'})
    }

    if(isLong(senha)){
        return res.json({message: 'A senha deve ter menos de 20 caracteres.'})
    }



    return res.json({ message: 'deu bom demais!' });

})

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`server rodando em http://localhost:${PORT}`);
    }
})
