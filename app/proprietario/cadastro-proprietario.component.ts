import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ProprietarioModel } from './proprietario.model';
import { ProprietarioService } from './proprietario.service';

@Component({
    templateUrl: 'app/proprietario/templates/cadastro-proprietario.html',
    providers: [ ProprietarioService ]
})
export class CadastroProprietarioComponent implements OnInit {

    private  proprietario: ProprietarioModel;

    constructor(
        private router: Router,
        private proprietarioService: ProprietarioService
    ){}

    ngOnInit() {
       this.proprietario = new ProprietarioModel();
    }

    cadastrar() {
        this.proprietarioService.cadastrar(this.proprietario);
        this.router.navigate(['/perfil-proprietario']);
    }
}