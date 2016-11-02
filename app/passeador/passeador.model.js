"use strict";
/**
 * Created by andypax on 15/10/16.
 */
var PasseadorModel = (function () {
    function PasseadorModel(nome, endereco, numero, complemento, cidade, cep, telefone, email, preco, senha, confirmarSenha) {
        this.nome = nome;
        this.endereco = endereco;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.cep = cep;
        this.telefone = telefone;
        this.email = email;
        this.preco = preco;
        this.senha = senha;
        this.confirmarSenha = confirmarSenha;
    }
    return PasseadorModel;
}());
exports.PasseadorModel = PasseadorModel;
//# sourceMappingURL=passeador.model.js.map