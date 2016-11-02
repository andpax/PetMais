"use strict";
var router_1 = require('@angular/router');
var home_routes_1 = require('./home/home.routes');
var cadastro_routes_1 = require('./cadastro/cadastro.routes');
var proprietario_routes_1 = require('./proprietario/proprietario.routes');
var passeador_routes_1 = require('./passeador/passeador.routes');
var pet_routes_1 = require('./pet/pet.routes');
var agendamento_routes_1 = require('./agendamento/agendamento.routes');
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
].concat(home_routes_1.homeRoutes, cadastro_routes_1.cadastroRoutes, proprietario_routes_1.proprietarioRoutes, passeador_routes_1.passeadorRoutes, pet_routes_1.petRoutes, agendamento_routes_1.agendamentoRoutes);
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map