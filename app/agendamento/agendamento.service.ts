/**
 * Created by andypax on 06/11/16.
 */
import { Injectable } from '@angular/core';

import { AgendamentoModel } from './agendamento.model';

@Injectable()
export class AgendamentoService {

    listarTodos() {
        var agendamentos: string = sessionStorage['agendamentos'];
        return agendamentos ? JSON.parse(agendamentos) : [];
    }

    cadastrar(agendamento: AgendamentoModel) {
        var agendamentos: AgendamentoModel[] = this.listarTodos();
        agendamentos.push(agendamento);
        sessionStorage['agendamentos'] = JSON.stringify(agendamentos);
    }

    atulaizar(id: number, agendamento: AgendamentoModel) {
        var agendamentos: AgendamentoModel[] = this.listarTodos();
        agendamentos[id].nomePasseador = agendamento.nomePasseador;
        agendamentos[id].nomePet = agendamento.nomePet;
        agendamentos[id].dataPassaeio = agendamento.dataPassaeio;
        agendamentos[id].horaInicio = agendamento.horaInicio;
        agendamentos[id].tempoDuracao = agendamento.tempoDuracao;
        sessionStorage['agendamentos'] = JSON.stringify(agendamentos);
    }

    excluir(id: number) {
        var agendamentos: AgendamentoModel[] = this.listarTodos();
        agendamentos.splice(id, 1);
        sessionStorage['agendamentos'] = JSON.stringify(agendamentos);
    }

    buscarPorId(id: number) {
        var agendamentos: AgendamentoModel[] = this.listarTodos();
        return agendamentos[id];
    }
}