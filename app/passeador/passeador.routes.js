"use strict";
var perfil_passeador_component_1 = require('./perfil-passeador.component');
var cadastro_passeador_component_1 = require('./cadastro-passeador.component');
var listar_passeador_component_1 = require("./listar-passeador.component");
var listar_passeios_disponiveis_component_1 = require('./listar-passeios-disponiveis.component');
exports.passeadorRoutes = [
    { path: 'perfil-passeador', component: perfil_passeador_component_1.PerfilPasseadorComponent },
    { path: 'cadastro-passeador', component: cadastro_passeador_component_1.CadastroPasseadorComponent },
    { path: 'listar-passeador', component: listar_passeador_component_1.ListarPasseadorComponent },
    { path: 'passeios-disponiveis', component: listar_passeios_disponiveis_component_1.ListarPasseiosDisponiveisComponent }
];
//# sourceMappingURL=passeador.routes.js.map