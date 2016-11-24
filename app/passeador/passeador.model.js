"use strict";
/**
 * Created by andypax on 15/10/16.
 */
var PasseadorModel = (function () {
    function PasseadorModel(nome, sobreNome, endereco, numero, complemento, cidade, cep, estado, telefone, celular, foto, email, preco, login, senha, confirmarSenha) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.endereco = endereco;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.cep = cep;
        this.estado = estado;
        this.telefone = telefone;
        this.celular = celular;
        this.foto = foto;
        this.email = email;
        this.preco = preco;
        this.login = login;
        this.senha = senha;
        this.confirmarSenha = confirmarSenha;
    }
    return PasseadorModel;
}());
exports.PasseadorModel = PasseadorModel;
//# sourceMappingURL=passeador.model.js.map