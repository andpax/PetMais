"use strict";
/**
 * Created by andypax on 22/10/16.
 */
var ProprietarioModel = (function () {
    function ProprietarioModel(nome, sobreNome, endereco, numero, complemento, cidade, estado, cep, telefone, email, login, senha, confirmarSenha) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.endereco = endereco;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
        this.telefone = telefone;
        this.email = email;
        this.login = login;
        this.senha = senha;
        this.confirmarSenha = confirmarSenha;
    }
    return ProprietarioModel;
}());
exports.ProprietarioModel = ProprietarioModel;
//# sourceMappingURL=proprietario.model.js.map