/**
 * Created by andypax on 02/11/16.
 */
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { AgendamentoModel } from './agendamento.model';
import { AgendamentoService } from './agendamento.service';

@Component({
    templateUrl: "app/agendamento/templates/cadastro-agendamento.html",
    providers: [ AgendamentoService ],
})
export class AgendamentoComponent implements OnInit {

    private agendamento: AgendamentoModel;

    constructor(
        private router: Router,
        private agendamentoService: AgendamentoService
    ){}

    ngOnInit() {
        this.agendamento = new AgendamentoModel();
    }

    cadastrar() {
        this.agendamentoService.cadastrar(this.agendamento);
        this.router.navigate(['/perfil-proprietario']);
    }

}