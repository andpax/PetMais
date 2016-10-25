/**
 * Created by andypax on 22/10/16.
 */
import { Injectable } from '@angular/core';

import { ProprietarioModel } from './proprietario.model';

@Injectable()
export class ProprietarioService {

    private proprietarios: ProprietarioModel[] = [];

    cadastrar(proprietario: ProprietarioModel) {
        this.proprietarios.push(proprietario)
    }
}