import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { PasseadorModel } from './passeador.model';
import { PasseadorService } from './passeador.service';


@Component({
    templateUrl: 'app/passeador/templates/cadastro-passeador.html',
    providers: [ PasseadorService ]
})
export class CadastroPasseadorComponent implements OnInit {

    private passeador: PasseadorModel;

    constructor(
        private router: Router,
        private passeadorService: PasseadorService
    ){}

    ngOnInit() {
        this.passeador = new PasseadorModel();
    }

    cadastrar() {
        this.passeadorService.cadastrar(this.passeador);
        this.router.navigate(['/perfil-passeador']);
    }
}