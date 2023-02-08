// Banco de Dados usando MongoDB!!!

const mongoose = require('mongoose');
const { STRING } = require('sequelize');

mongoose.connect("mongodb://localhost/aprendendo").then(()=>{
    console.log("Conexão estabelecida com sucesso!!!")
}).catch((erro)=>{
    console.log("ERRO!!!"+erro)
});

// Model - Usuario
//Definindo o model
const UsuarioSchema = mongoose.Schema({
    
    nome: {
        type: String,
        require: true
    },

    sobrenome: {
        type: String,
        require: true
    },

    idade: {
        type: Number,
        require: true
    },

    email: {
        type: String,
        require:true
    },

    Pais: {
        type: String,
        require:true
    }

});

//Colection
mongoose.model('usuarios', UsuarioSchema);

//Criando Usuario
const Vitor = mongoose.model('usuarios')

new Vitor({
    nome: "Vitor Luiz",
    sobrenome: "Ramalho",
    idade: 20,
    email: "Teste@123.com",
    Pais: "Brasil"
}).save().then(() => {
console.log("Usuario criado com sucesso!!!")
}).catch((erro) => {
console.log("ERRO!!!"+erro)
});
