/**
 * Created by andypax on 28/09/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProprietarioComponent } from './proprietario/proprietario.component';
import { PasseadorComponent } from './passeador/passeador.component';
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
        CadastroComponent,
        ProprietarioComponent,
        PasseadorComponent,
        ListarPasseadorComponent,
        PetComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
