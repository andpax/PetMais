"use strict";
var perfil_proprietario_component_1 = require('../proprietario/perfil-proprietario.component');
var cadastro_proprietario_component_1 = require('../proprietario/cadastro-proprietario.component');
var editar_proprietario_component_1 = require("./editar-proprietario.component");
exports.proprietarioRoutes = [
    { path: 'perfil-proprietario', component: perfil_proprietario_component_1.PerfilProprietarioComponent },
    { path: 'cadastro-proprietario', component: cadastro_proprietario_component_1.CadastroProprietarioComponent },
    { path: 'editar-proprietario:id', component: editar_proprietario_component_1.EditarProprietarioComponent }
];
//# sourceMappingURL=proprietario.routes.js.map