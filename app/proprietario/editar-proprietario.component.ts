/**
 * Created by andypax on 05/11/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProprietarioModel } from './proprietario.model';
import { ProprietarioService } from './proprietario.service';

@Component({
    templateUrl: 'app/proprietario/templates/editar-proprietario.html',
    providers: [ ProprietarioService ]
})
export class EditarProprietarioComponent implements OnInit {

    private id: number;
    private proprietario: ProprietarioModel;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private proprietarioServive: ProprietarioService
    ){}

    ngOnInit() {
        this.id = +this.route.snapshot.params['id'];
        this.proprietario = this.proprietarioServive.buscarPorId(this.id);
    }

    atualizar() {
        this.proprietarioServive.atualizar(this.id, this.proprietario);
        this.router.navigate(['/perfil-proprietario']);
    }
}