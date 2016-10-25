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
var proprietario_model_1 = require('./proprietario.model');
var proprietario_service_1 = require('./proprietario.service');
var ProprietarioComponent = (function () {
    function ProprietarioComponent(proprietarioService) {
        this.proprietarioService = proprietarioService;
    }
    ProprietarioComponent.prototype.ngOnInit = function () {
        this.proprietario = new proprietario_model_1.ProprietarioModel();
    };
    ProprietarioComponent.prototype.cadastrar = function () {
        this.proprietarioService.cadastrar(this.proprietario);
    };
    ProprietarioComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/views/form-proprietario.html',
            providers: [proprietario_service_1.ProprietarioService]
        }), 
        __metadata('design:paramtypes', [proprietario_service_1.ProprietarioService])
    ], ProprietarioComponent);
    return ProprietarioComponent;
}());
exports.ProprietarioComponent = ProprietarioComponent;
//# sourceMappingURL=proprietario.component.js.map