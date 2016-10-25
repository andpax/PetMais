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
var passeador_model_1 = require('./passeador.model');
var passeador_service_1 = require('./passeador.service');
var PasseadorComponent = (function () {
    function PasseadorComponent(router, passeadorService) {
        this.router = router;
        this.passeadorService = passeadorService;
    }
    PasseadorComponent.prototype.ngOnInit = function () {
        this.passeador = new passeador_model_1.PasseadorModel();
    };
    PasseadorComponent.prototype.cadastrar = function () {
        this.passeadorService.cadastrar(this.passeador);
        //this.router.navigate(['/listar-passeador']);
    };
    PasseadorComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/views/form-passeador.html',
            providers: [passeador_service_1.PasseadorService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, passeador_service_1.PasseadorService])
    ], PasseadorComponent);
    return PasseadorComponent;
}());
exports.PasseadorComponent = PasseadorComponent;
//# sourceMappingURL=passeador.component.js.map