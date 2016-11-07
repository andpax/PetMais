/**
 * Created by andypax on 15/10/16.
 */
import { Routes } from '@angular/router';

import { PetComponent } from './pet.component';
import { ListaPetComponent } from './lista-pet.component';
import {EditarPetComponent} from "./editar-pet.component";

export const petRoutes: Routes = [
    { path: 'cadastro-pet', component: PetComponent },
    { path: 'lista-pet', component: ListaPetComponent },
    { path: 'editar-pet/:id', component: EditarPetComponent}
]