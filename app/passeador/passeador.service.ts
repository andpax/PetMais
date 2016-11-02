/**
 * Created by andypax on 15/10/16.
 */
import { Injectable } from  '@angular/core';

import { PasseadorModel } from './passeador.model';

@Injectable()
export class PasseadorService {

    listarTodos() {
        var passeadores: string = sessionStorage['passeadores'];
        return passeadores ? JSON.parse(passeadores) : [];
    }

    cadastrar(passeador: PasseadorModel) {
        var passeadores: PasseadorModel[] = this.listarTodos();
        passeadores.push(passeador);
        sessionStorage['passeadores'] = JSON.stringify(passeadores);
    }

    atualizar(id: number, passeador: PasseadorModel) {
        var passeadores: PasseadorModel[] = this.listarTodos();
        passeadores[id].nome = passeador.nome;
        sessionStorage['passeadores'] = JSON.stringify(passeadores);
    }

    excluir(id: number) {
        var passeadores: PasseadorModel[] = this.listarTodos();
        passeadores.splice(id, 1);
        sessionStorage['passeadores'] = JSON.stringify(passeadores);
    }

    buscarPorId(id: number) {
        var passeadores: PasseadorModel[] = this.listarTodos();
        return passeadores[id];
    }


}