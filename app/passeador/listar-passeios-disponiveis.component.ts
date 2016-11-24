/**
 * Created by andypax on 07/11/16.
 */
import { Component , OnInit} from '@angular/core';
import { Router } from "@angular/router";

import { AgendamentoModel } from './../agendamento/agendamento.model';
import { AgendamentoService } from './../agendamento/agendamento.service';

@Component ({
    templateUrl: 'app/passeador/templates/lista-passeios-disponiveis.html',
    providers: [ AgendamentoService ]
})
export class ListarPasseiosDisponiveisComponent implements OnInit {

    private agdPasseio: AgendamentoModel[];
    private add: AgendamentoModel;

    constructor(
        private router: Router,
        private agendamentoService: AgendamentoService
    ){}

    ngOnInit() {
        this.add = new AgendamentoModel();
        this.agdPasseio = this.agendamentoService.listarTodos();
    }

    addAgenda() {
        this.agendamentoService.addAgenda(this.add);
        this.router.navigate(['/perfil-passeador']);
    }
}