import  express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.json()); // avisa o express que a bibliotaca bodyparse irá receber as requisicoes http e vai traduzilas para json

app.get('/teste',(req,res)=>
res.status(200).send({mensagem: "Boas vindas à API"

}));

app.listen(port, () => console.log('Servidor esta rodando na porta '+ port));


export default app;

//npm run start para rodar a aplicação