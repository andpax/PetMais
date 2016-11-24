/**
 * Created by andypax on 02/11/16.
 */
import { Component, OnInit } from '@angular/core';

import { AgendamentoModel } from './../agendamento/agendamento.model';
import { AgendamentoService } from './../agendamento/agendamento.service';

@Component({
    templateUrl: "app/passeador/templates/pefil-passeador.html",
    providers: [ AgendamentoService ]
})
export class PerfilPasseadorComponent implements OnInit {

    private listaAgenda: AgendamentoModel[];

    constructor(
        private agendamentoService: AgendamentoService
    ){}

    ngOnInit() {
        this.listaAgenda = this.agendamentoService.listarAgenda();
    }

    // excluirAgenda(id: number) {
    //     this.agendamentoService.excluir(id);
    //     this.add = this.agendamentoService.listarTodos();
    // }


}