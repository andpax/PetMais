/**
 * Created by andypax on 24/10/16.
 */
import { Component, OnInit } from '@angular/core';

import { PasseadorModel } from './passeador.model';
import { PasseadorService } from './passeador.service';


@Component({
    templateUrl: 'app/passeador/templates/listar-passeador.html',
    providers: [ PasseadorService ]
})
export class ListarPasseadorComponent implements OnInit {

    private walker: PasseadorModel[];

    constructor(
        private passeadorService: PasseadorService
    ){}

    ngOnInit() {
        this.walker = this.passeadorService.listarTodos();
    }

}