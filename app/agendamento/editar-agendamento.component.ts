/**
 * Created by andypax on 06/11/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AgendamentoModel } from './agendamento.model';
import { AgendamentoService } from './agendamento.service';

@Component({
    templateUrl: 'app/agendamento/templates/editar-agendamento.html',
    providers: [ AgendamentoService ]
})
export class EditarAgendamentoComponent implements OnInit {

    private id: number;
    private agenda: AgendamentoModel;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private agendamentoService: AgendamentoService
    ){}

    ngOnInit() {
        this.id = +this.route.snapshot.params['id'];
        this.agenda = this.agendamentoService.buscarPorId(this.id);
    }

    atualizar() {
        this.agendamentoService.atulaizar(this.id, this.agenda);
        this.router.navigate(['/perfil-proprietario']);
    }

}