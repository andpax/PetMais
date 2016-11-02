"use strict";
/**
 * Created by andypax on 22/10/16.
 */
var ProprietarioModel = (function () {
    function ProprietarioModel(nome, endereco, numero, complemento, cidade, cep, telefone, email, senha, confirmarSenha) {
        this.nome = nome;
        this.endereco = endereco;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.cep = cep;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.confirmarSenha = confirmarSenha;
    }
    return ProprietarioModel;
}());
exports.ProprietarioModel = ProprietarioModel;
//# sourceMappingURL=proprietario.model.js.map