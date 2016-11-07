/**
 * Created by andypax on 28/09/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { OpcoesCadastroComponent } from './cadastro/opcoes-cadastro.component';

import { AgendamentoComponent } from './agendamento/agendamento.component';
import { EditarAgendamentoComponent } from './agendamento/editar-agendamento.component';

import { PerfilProprietarioComponent } from './proprietario/perfil-proprietario.component';
import { CadastroProprietarioComponent } from './proprietario/cadastro-proprietario.component';
import { EditarProprietarioComponent } from './proprietario/editar-proprietario.component';

import { PerfilPasseadorComponent } from './passeador/perfil-passeador.component';
import { CadastroPasseadorComponent } from './passeador/cadastro-passeador.component';
import { ListarPasseadorComponent } from './passeador/listar-passeador.component';

import { PetComponent } from './pet/pet.component';
import { ListaPetComponent } from './pet/lista-pet.component';
import { EditarPetComponent } from './pet/editar-pet.component';

import { routing } from './app.routes';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [ 
        AppComponent,
        HomeComponent,
        OpcoesCadastroComponent,
        AgendamentoComponent,
        EditarAgendamentoComponent,
        PerfilProprietarioComponent,
        CadastroProprietarioComponent,
        EditarProprietarioComponent,
        PerfilPasseadorComponent,
        CadastroPasseadorComponent,
        ListarPasseadorComponent,
        PetComponent,
        ListaPetComponent,
        EditarPetComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
