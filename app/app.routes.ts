import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { homeRoutes } from './home/home.routes';
import { cadastroRoutes } from './cadastro/cadastro.routes';
import { proprietarioRoutes } from './proprietario/proprietario.routes';
import { passeadorRoutes } from './passeador/passeador.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    ...homeRoutes,
    ...cadastroRoutes,
    ...proprietarioRoutes,
    ...passeadorRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);