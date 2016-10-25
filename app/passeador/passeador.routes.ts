import { Routes } from '@angular/router';

import { PasseadorComponent } from './passeador.component';
import {ListarPasseadorComponent} from "./listar-passeador.component";

export const passeadorRoutes: Routes = [
    { path: 'passeador', component: PasseadorComponent},
    { path: 'listar-passeador', component: ListarPasseadorComponent}
];