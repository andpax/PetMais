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
 * Created by andypax on 28/09/16.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var opcoes_cadastro_component_1 = require('./cadastro/opcoes-cadastro.component');
var agendamento_component_1 = require('./agendamento/agendamento.component');
var editar_agendamento_component_1 = require('./agendamento/editar-agendamento.component');
var perfil_proprietario_component_1 = require('./proprietario/perfil-proprietario.component');
var cadastro_proprietario_component_1 = require('./proprietario/cadastro-proprietario.component');
var editar_proprietario_component_1 = require('./proprietario/editar-proprietario.component');
var perfil_passeador_component_1 = require('./passeador/perfil-passeador.component');
var cadastro_passeador_component_1 = require('./passeador/cadastro-passeador.component');
var listar_passeador_component_1 = require('./passeador/listar-passeador.component');
var listar_passeios_disponiveis_component_1 = require('./passeador/listar-passeios-disponiveis.component');
var pet_component_1 = require('./pet/pet.component');
var lista_pet_component_1 = require('./pet/lista-pet.component');
var editar_pet_component_1 = require('./pet/editar-pet.component');
var login_component_1 = require('./autenticacao/login-component');
var logout_component_1 = require('./autenticacao/logout-component');
var app_routes_1 = require('./app.routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routes_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                opcoes_cadastro_component_1.OpcoesCadastroComponent,
                agendamento_component_1.AgendamentoComponent,
                editar_agendamento_component_1.EditarAgendamentoComponent,
                perfil_proprietario_component_1.PerfilProprietarioComponent,
                cadastro_proprietario_component_1.CadastroProprietarioComponent,
                editar_proprietario_component_1.EditarProprietarioComponent,
                perfil_passeador_component_1.PerfilPasseadorComponent,
                cadastro_passeador_component_1.CadastroPasseadorComponent,
                listar_passeador_component_1.ListarPasseadorComponent,
                listar_passeios_disponiveis_component_1.ListarPasseiosDisponiveisComponent,
                pet_component_1.PetComponent,
                lista_pet_component_1.ListaPetComponent,
                editar_pet_component_1.EditarPetComponent,
                login_component_1.LoginComponent,
                logout_component_1.LogoutComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map