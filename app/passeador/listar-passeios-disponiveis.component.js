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
 * Created by andypax on 07/11/16.
 */
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var agendamento_model_1 = require('./../agendamento/agendamento.model');
var agendamento_service_1 = require('./../agendamento/agendamento.service');
var ListarPasseiosDisponiveisComponent = (function () {
    function ListarPasseiosDisponiveisComponent(router, agendamentoService) {
        this.router = router;
        this.agendamentoService = agendamentoService;
    }
    ListarPasseiosDisponiveisComponent.prototype.ngOnInit = function () {
        this.add = new agendamento_model_1.AgendamentoModel();
        this.agdPasseio = this.agendamentoService.listarTodos();
    };
    ListarPasseiosDisponiveisComponent.prototype.addAgenda = function () {
        this.agendamentoService.addAgenda(this.add);
        this.router.navigate(['/perfil-passeador']);
    };
    ListarPasseiosDisponiveisComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/passeador/templates/lista-passeios-disponiveis.html',
            providers: [agendamento_service_1.AgendamentoService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, agendamento_service_1.AgendamentoService])
    ], ListarPasseiosDisponiveisComponent);
    return ListarPasseiosDisponiveisComponent;
}());
exports.ListarPasseiosDisponiveisComponent = ListarPasseiosDisponiveisComponent;
//# sourceMappingURL=listar-passeios-disponiveis.component.js.map