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
 * Created by andypax on 22/10/16.
 */
var core_1 = require('@angular/core');
var ProprietarioService = (function () {
    function ProprietarioService() {
    }
    ProprietarioService.prototype.listarTodos = function () {
        var proprietarios = sessionStorage['proprietarios'];
        return proprietarios ? JSON.parse(proprietarios) : [];
    };
    ProprietarioService.prototype.cadastrar = function (proprietario) {
        var proprietarios = this.listarTodos();
        proprietarios.push(proprietario);
        sessionStorage['proprietarios'] = JSON.stringify(proprietarios);
    };
    ProprietarioService.prototype.atualizar = function (id, proprietario) {
        var proprietarios = this.listarTodos();
        proprietarios[id].nome = proprietario.nome;
        sessionStorage['proprietarios'] = JSON.stringify(proprietarios);
    };
    ProprietarioService.prototype.excluir = function (id) {
        var proprietarios = this.listarTodos();
        proprietarios.splice(id, 1);
        sessionStorage['proprietarios'] = JSON.stringify(proprietarios);
    };
    ProprietarioService.prototype.buscarPorId = function (id) {
        var proprietarios = this.listarTodos();
        return proprietarios[id];
    };
    ProprietarioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProprietarioService);
    return ProprietarioService;
}());
exports.ProprietarioService = ProprietarioService;
//# sourceMappingURL=proprietario.service.js.map