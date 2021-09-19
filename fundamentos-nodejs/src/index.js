const express = require('express');

const app = express();


app.get("/", (request, response)=>{
    return response.send("Hello world");
}) 


app.listen(3333, (err)=>{
    if(err){
        console.log("Erro ao iniciar");
    }else{
        console.log("Conectado com sucesso");
    }
});