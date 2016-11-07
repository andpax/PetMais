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
 * Created by andypax on 02/11/16.
 */
var core_1 = require('@angular/core');
var agendamento_service_1 = require('./../agendamento/agendamento.service');
var PerfilProprietarioComponent = (function () {
    function PerfilProprietarioComponent(agendamentoService) {
        this.agendamentoService = agendamentoService;
    }
    PerfilProprietarioComponent.prototype.ngOnInit = function () {
        this.agendas = this.agendamentoService.listarTodos();
    };
    PerfilProprietarioComponent.prototype.excluirAgenda = function (id) {
        this.agendamentoService.excluir(id);
        this.agendas = this.agendamentoService.listarTodos();
    };
    PerfilProprietarioComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/proprietario/templates/perfil-proprietario.html',
            providers: [agendamento_service_1.AgendamentoService],
        }), 
        __metadata('design:paramtypes', [agendamento_service_1.AgendamentoService])
    ], PerfilProprietarioComponent);
    return PerfilProprietarioComponent;
}());
exports.PerfilProprietarioComponent = PerfilProprietarioComponent;
//# sourceMappingURL=perfil-proprietario.component.js.map