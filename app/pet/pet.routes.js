"use strict";
var pet_component_1 = require('./pet.component');
var lista_pet_component_1 = require('./lista-pet.component');
var editar_pet_component_1 = require("./editar-pet.component");
exports.petRoutes = [
    { path: 'cadastro-pet', component: pet_component_1.PetComponent },
    { path: 'lista-pet', component: lista_pet_component_1.ListaPetComponent },
    { path: 'editar-pet/:id', component: editar_pet_component_1.EditarPetComponent }
];
//# sourceMappingURL=pet.routes.js.map