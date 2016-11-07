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
 * Created by andypax on 06/11/16.
 */
var core_1 = require('@angular/core');
var AgendamentoService = (function () {
    function AgendamentoService() {
    }
    AgendamentoService.prototype.listarTodos = function () {
        var agendamentos = sessionStorage['agendamentos'];
        return agendamentos ? JSON.parse(agendamentos) : [];
    };
    AgendamentoService.prototype.cadastrar = function (agendamento) {
        var agendamentos = this.listarTodos();
        agendamentos.push(agendamento);
        sessionStorage['agendamentos'] = JSON.stringify(agendamentos);
    };
    AgendamentoService.prototype.atulaizar = function (id, agendamento) {
        var agendamentos = this.listarTodos();
        agendamentos[id].nomePasseador = agendamento.nomePasseador;
        agendamentos[id].nomePet = agendamento.nomePet;
        agendamentos[id].dataPassaeio = agendamento.dataPassaeio;
        agendamentos[id].horaInicio = agendamento.horaInicio;
        agendamentos[id].tempoDuracao = agendamento.tempoDuracao;
        sessionStorage['agendamentos'] = JSON.stringify(agendamentos);
    };
    AgendamentoService.prototype.excluir = function (id) {
        var agendamentos = this.listarTodos();
        agendamentos.splice(id, 1);
        sessionStorage['agendamentos'] = JSON.stringify(agendamentos);
    };
    AgendamentoService.prototype.buscarPorId = function (id) {
        var agendamentos = this.listarTodos();
        return agendamentos[id];
    };
    AgendamentoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AgendamentoService);
    return AgendamentoService;
}());
exports.AgendamentoService = AgendamentoService;
//# sourceMappingURL=agendamento.service.js.map