const express = require("express");
const app = express(); //cria uma instância da aplicação Express.
const PORT = process.env.port || 4000;

// Primeira rota
app.get("/", function (req,res){
    res.send("<h1>Primeira Rota</h1>")
})
// Segunda rota
app.get("/login", function (req,res){
    res.send("<h1>Segunda Rota</h1> + <h3>Login</h3>")
})
// Terceira rota
app.get("/login/:parametro", function (req,res){
    res.send("<h1>Terceira Rota</h1>" + "<h3>Rota com parametro</h3>")
})

// Status
app.listen(PORT, () => {
    console.log("Servidor Online.....");
    console.log("PORTA:", PORT);
})