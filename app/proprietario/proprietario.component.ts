import { Component, OnInit } from '@angular/core';

import { ProprietarioModel } from './proprietario.model';
import { ProprietarioService } from './proprietario.service';

@Component({
    templateUrl: 'app/views/form-proprietario.html',
    providers: [ ProprietarioService ]
})
export class ProprietarioComponent implements OnInit {

    private  proprietario: ProprietarioModel;

    constructor(
        private proprietarioService: ProprietarioService
    ){}

    ngOnInit() {
       this.proprietario = new ProprietarioModel();
    }

    cadastrar() {
        this.proprietarioService.cadastrar(this.proprietario);
    }
}