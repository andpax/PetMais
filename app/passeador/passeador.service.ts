/**
 * Created by andypax on 15/10/16.
 */
import { Injectable } from  '@angular/core';

import { PasseadorModel } from './passeador.model';

@Injectable()
export class PasseadorService {

    private passeadores: PasseadorModel[] = [];

    cadastrar(passeador: PasseadorModel) {
        this.passeadores.push(passeador);
    }

    listarTodos() {
        return this.passeadores;
    }
}