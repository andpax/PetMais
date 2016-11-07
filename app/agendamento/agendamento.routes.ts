/**
 * Created by andypax on 02/11/16.
 */
import { Routes } from '@angular/router';

import { AgendamentoComponent } from './agendamento.component';
import { EditarAgendamentoComponent } from './editar-agendamento.component';

export const agendamentoRoutes : Routes = [
    { path: 'agendamento', component: AgendamentoComponent },
    { path: 'editar-agendamento/:id', component: EditarAgendamentoComponent }
];