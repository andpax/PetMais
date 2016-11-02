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
/**
 * Created by andypax on 15/10/16.
 */
var core_1 = require('@angular/core');
var PasseadorService = (function () {
    function PasseadorService() {
    }
    PasseadorService.prototype.listarTodos = function () {
        var passeadores = sessionStorage['passeadores'];
        return passeadores ? JSON.parse(passeadores) : [];
    };
    PasseadorService.prototype.cadastrar = function (passeador) {
        var passeadores = this.listarTodos();
        passeadores.push(passeador);
        sessionStorage['passeadores'] = JSON.stringify(passeadores);
    };
    PasseadorService.prototype.atualizar = function (id, passeador) {
        var passeadores = this.listarTodos();
        passeadores[id].nome = passeador.nome;
        sessionStorage['passeadores'] = JSON.stringify(passeadores);
    };
    PasseadorService.prototype.excluir = function (id) {
        var passeadores = this.listarTodos();
        passeadores.splice(id, 1);
        sessionStorage['passeadores'] = JSON.stringify(passeadores);
    };
    PasseadorService.prototype.buscarPorId = function (id) {
        var passeadores = this.listarTodos();
        return passeadores[id];
    };
    PasseadorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PasseadorService);
    return PasseadorService;
}());
exports.PasseadorService = PasseadorService;
//# sourceMappingURL=passeador.service.js.map