"use strict";
/**
 * Created by andypax on 06/11/16.
 */
var PetModel = (function () {
    function PetModel(nome, raca, idade, dono, foto) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
        this.dono = dono;
        this.foto = foto;
    }
    return PetModel;
}());
exports.PetModel = PetModel;
//# sourceMappingURL=pet.model.js.map