const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// Config
// Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get('/', function (req, res) {

  Post.findAll({order: [['id', 'DESC']]}).then(function(posts) {
      res.render('home',{ posts: posts })
    })
});

//corpo do formulario -> Handlebars
app.get('/form', function (req, res) {
  res.render('formulario')
});

//criando Post
app.post('/sendForm', function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function () {
    res.redirect('/')
  }).catch(function (erro) {
    res.send("ERRO!!!" + erro)
  })
});

//Deletar Post
app.get('/deletar/:id', function(req, res){
  Post.destroy({where:{'id': req.params.id}}).then(function(){
res.send("postagem deletada com sucesso!!!")
  }).catch(function(erro){
    res.send("ERRO!!!"+erro)
  })
});

//Chamando log do servidor
app.listen(8080, function () {
  console.log("Servidor Rodando na url http://localhost:8080")
});
