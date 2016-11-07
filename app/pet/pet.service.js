/**
 * Created by andypax on 06/11/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PetService = (function () {
    function PetService() {
    }
    PetService.prototype.listarTodos = function () {
        var pets = sessionStorage['pets'];
        return pets ? JSON.parse(pets) : [];
    };
    PetService.prototype.cadastrar = function (pet) {
        var pets = this.listarTodos();
        pets.push(pet);
        sessionStorage['pets'] = JSON.stringify(pets);
    };
    PetService.prototype.atualizar = function (id, pet) {
        var pets = this.listarTodos();
        pets[id].nome = pet.nome;
        pets[id].raca = pet.raca;
        pets[id].idade = pet.idade;
        sessionStorage['pets'] = JSON.stringify(pets);
    };
    PetService.prototype.excluir = function (id) {
        var pets = this.listarTodos();
        pets.splice(id, 1);
        sessionStorage['pets'] = JSON.stringify(pets);
    };
    PetService.prototype.buscarPorId = function (id) {
        var pets = this.listarTodos();
        return pets[id];
    };
    PetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PetService);
    return PetService;
}());
exports.PetService = PetService;
//# sourceMappingURL=pet.service.js.map