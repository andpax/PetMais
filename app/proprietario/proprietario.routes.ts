import { Routes } from '@angular/router';

import { PerfilProprietarioComponent } from '../proprietario/perfil-proprietario.component';
import { CadastroProprietarioComponent } from '../proprietario/cadastro-proprietario.component';
import {EditarProprietarioComponent} from "./editar-proprietario.component";


export const proprietarioRoutes: Routes = [
    { path: 'perfil-proprietario', component: PerfilProprietarioComponent },
    { path: 'cadastro-proprietario', component: CadastroProprietarioComponent },
    { path: 'editar-proprietario:id', component: EditarProprietarioComponent }
];