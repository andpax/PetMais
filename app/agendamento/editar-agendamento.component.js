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
var router_1 = require('@angular/router');
var agendamento_service_1 = require('./agendamento.service');
var EditarAgendamentoComponent = (function () {
    function EditarAgendamentoComponent(route, router, agendamentoService) {
        this.route = route;
        this.router = router;
        this.agendamentoService = agendamentoService;
    }
    EditarAgendamentoComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.params['id'];
        this.agenda = this.agendamentoService.buscarPorId(this.id);
    };
    EditarAgendamentoComponent.prototype.atualizar = function () {
        this.agendamentoService.atulaizar(this.id, this.agenda);
        this.router.navigate(['/perfil-proprietario']);
    };
    EditarAgendamentoComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/agendamento/templates/editar-agendamento.html',
            providers: [agendamento_service_1.AgendamentoService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, agendamento_service_1.AgendamentoService])
    ], EditarAgendamentoComponent);
    return EditarAgendamentoComponent;
}());
exports.EditarAgendamentoComponent = EditarAgendamentoComponent;
//# sourceMappingURL=editar-agendamento.component.js.map