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

import { PerfilProprietarioComponent } from './proprietario/perfil-proprietario.component';
import { CadastroProprietarioComponent } from './proprietario/cadastro-proprietario.component';

import { PerfilPasseadorComponent } from './passeador/perfil-passeador.component';
import { CadastroPasseadorComponent } from './passeador/cadastro-passeador.component';
import { ListarPasseadorComponent } from './passeador/listar-passeador.component';

import { PetComponent } from './pet/pet.component';

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
        PerfilProprietarioComponent,
        CadastroProprietarioComponent,
        PerfilPasseadorComponent,
        CadastroPasseadorComponent,
        ListarPasseadorComponent,
        PetComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
