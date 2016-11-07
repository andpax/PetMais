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
 * Created by andypax on 05/11/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var proprietario_service_1 = require('./proprietario.service');
var EditarProprietarioComponent = (function () {
    function EditarProprietarioComponent(route, router, proprietarioServive) {
        this.route = route;
        this.router = router;
        this.proprietarioServive = proprietarioServive;
    }
    EditarProprietarioComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.params['id'];
        this.proprietario = this.proprietarioServive.buscarPorId(this.id);
    };
    EditarProprietarioComponent.prototype.atualizar = function () {
        this.proprietarioServive.atualizar(this.id, this.proprietario);
        this.router.navigate(['/perfil-proprietario']);
    };
    EditarProprietarioComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/proprietario/templates/editar-proprietario.html',
            providers: [proprietario_service_1.ProprietarioService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, proprietario_service_1.ProprietarioService])
    ], EditarProprietarioComponent);
    return EditarProprietarioComponent;
}());
exports.EditarProprietarioComponent = EditarProprietarioComponent;
//# sourceMappingURL=editar-proprietario.component.js.map