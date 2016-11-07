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
var pet_service_1 = require('./pet.service');
var ListaPetComponent = (function () {
    function ListaPetComponent(petService) {
        this.petService = petService;
    }
    ListaPetComponent.prototype.ngOnInit = function () {
        this.pets = this.petService.listarTodos();
    };
    ListaPetComponent.prototype.excluirPet = function (id) {
        this.petService.excluir(id);
        this.pets = this.petService.listarTodos();
    };
    ListaPetComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pet/templates/lista-pet.html',
            providers: [pet_service_1.PetService]
        }), 
        __metadata('design:paramtypes', [pet_service_1.PetService])
    ], ListaPetComponent);
    return ListaPetComponent;
}());
exports.ListaPetComponent = ListaPetComponent;
//# sourceMappingURL=lista-pet.component.js.map