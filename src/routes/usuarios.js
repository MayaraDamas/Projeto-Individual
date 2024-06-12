var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/CalcularPontuacao", function (req, res) {
    usuarioController.CalcularPontuacao(req, res);
});

router.get("/obterDados", function (req, res) {
    usuarioController.obterDados(req, res);
});

router.post("/CapturarPontuacao", function(req, res){
    usuarioController.CapturarPontuacao(req, res);
});

router.post("/PontuacaoMaior", function(req, res){
    usuarioController.PontuacaoMaior(req, res);
});

router.post("/PontuacaoMenor", function(req, res){
    usuarioController.PontuacaoMenor(req, res);
});


module.exports = router;