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
var router_1 = require('@angular/router');
var pet_service_1 = require('./pet.service');
var EditarPetComponent = (function () {
    function EditarPetComponent(route, router, petService) {
        this.route = route;
        this.router = router;
        this.petService = petService;
    }
    EditarPetComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.params['id'];
        this.pet = this.petService.buscarPorId(this.id);
    };
    EditarPetComponent.prototype.atualizar = function () {
        this.petService.atualizar(this.id, this.pet);
        this.router.navigate(['/perfil-proprietario']);
    };
    EditarPetComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pet/templates/editar-pet.html',
            providers: [pet_service_1.PetService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, pet_service_1.PetService])
    ], EditarPetComponent);
    return EditarPetComponent;
}());
exports.EditarPetComponent = EditarPetComponent;
//# sourceMappingURL=editar-pet.component.js.map