const express = require("express");
const index = express(); //cria uma instância da aplicação Express.
const PORT = process.env.port || 4000;

// Primeira rota
index.get("/", function (req, res){
    res.send("<h1>Primeira Rota</h1>")
})
// Segunda rota
index.get("/login", function (req, res){
    res.send("<h1>Segunda Rota</h1> + <h3>Login</h3>")
})
// Terceira rota
index.get("/login/:parametro", function (req, res){
    res.send("<h1>Terceira Rota</h1>" + "<h3>Rota com parametro</h3>")
})

// Status
index.listen(PORT, () => {
    console.log("Servidor Online.....");
    console.log("PORTA:", PORT);
})