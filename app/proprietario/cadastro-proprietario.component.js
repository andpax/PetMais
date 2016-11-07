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
var router_1 = require("@angular/router");
var proprietario_model_1 = require('./proprietario.model');
var proprietario_service_1 = require('./proprietario.service');
var CadastroProprietarioComponent = (function () {
    function CadastroProprietarioComponent(router, proprietarioService) {
        this.router = router;
        this.proprietarioService = proprietarioService;
    }
    CadastroProprietarioComponent.prototype.ngOnInit = function () {
        this.proprietario = new proprietario_model_1.ProprietarioModel();
    };
    CadastroProprietarioComponent.prototype.cadastrar = function () {
        this.proprietarioService.cadastrar(this.proprietario);
        this.router.navigate(['/perfil-proprietario']);
    };
    CadastroProprietarioComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/proprietario/templates/cadastro-proprietario.html',
            providers: [proprietario_service_1.ProprietarioService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, proprietario_service_1.ProprietarioService])
    ], CadastroProprietarioComponent);
    return CadastroProprietarioComponent;
}());
exports.CadastroProprietarioComponent = CadastroProprietarioComponent;
//# sourceMappingURL=cadastro-proprietario.component.js.map