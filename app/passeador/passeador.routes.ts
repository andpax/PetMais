import { Routes } from '@angular/router';

import { PerfilPasseadorComponent } from './perfil-passeador.component';
import { CadastroPasseadorComponent } from './cadastro-passeador.component';
import { ListarPasseadorComponent } from "./listar-passeador.component";

export const passeadorRoutes: Routes = [
    { path: 'perfil-passeador', component: PerfilPasseadorComponent },
    { path: 'cadastro-passeador', component: CadastroPasseadorComponent },
    { path: 'listar-passeador', component: ListarPasseadorComponent }
];