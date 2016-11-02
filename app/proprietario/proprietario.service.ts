/**
 * Created by andypax on 22/10/16.
 */
import { Injectable } from '@angular/core';

import { ProprietarioModel } from './proprietario.model';

@Injectable()
export class ProprietarioService {

    listarTodos() {
        var proprietarios: string = sessionStorage['proprietarios'];
        return proprietarios ? JSON.parse(proprietarios) : [];
    }

    cadastrar(proprietario: ProprietarioModel) {
        var proprietarios: ProprietarioModel[] = this.listarTodos();
        proprietarios.push(proprietario);
        sessionStorage['proprietarios'] = JSON.stringify(proprietarios);
    }

    atualizar(id: number, proprietario: ProprietarioModel) {
        var proprietarios: ProprietarioModel[] = this.listarTodos();
        proprietarios[id].nome = proprietario.nome;
        sessionStorage['proprietarios'] = JSON.stringify(proprietarios);
    }

    excluir(id: number) {
        var proprietarios: ProprietarioModel[] = this.listarTodos();
        proprietarios.splice(id, 1);
        sessionStorage['proprietarios'] = JSON.stringify(proprietarios);
    }

    buscarPorId(id: number) {
        var proprietarios: ProprietarioModel[] = this.listarTodos();
        return proprietarios[id];
    }

}