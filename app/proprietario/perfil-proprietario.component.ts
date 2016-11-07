/**
 * Created by andypax on 02/11/16.
 */
import { Component, OnInit } from '@angular/core';

import { AgendamentoModel } from './../agendamento/agendamento.model';
import { AgendamentoService } from './../agendamento/agendamento.service';

@Component({
    templateUrl: 'app/proprietario/templates/perfil-proprietario.html',
    providers: [ AgendamentoService ],
})
export class PerfilProprietarioComponent implements OnInit{

    private agendas: AgendamentoModel[];

    constructor(
        private agendamentoService: AgendamentoService
    ){}

    ngOnInit() {
        this.agendas = this.agendamentoService.listarTodos();
    }

    excluirAgenda(id: number) {
        this.agendamentoService.excluir(id);
        this.agendas = this.agendamentoService.listarTodos();
    }

}