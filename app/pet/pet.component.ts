/**
 * Created by andypax on 15/10/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PetModel } from './pet.model';
import { PetService } from './pet.service';

@Component({
    templateUrl: 'app/pet/templates/cadastro-pet.html',
    providers: [ PetService ]
})
export class PetComponent implements OnInit {

    private pet: PetModel;

    constructor(
        private router: Router,
        private petService: PetService
    ){}

    ngOnInit() {
        this.pet = new PetModel();
    }

    cadastrar() {
        this.petService.cadastrar(this.pet);
        this.router.navigate(['/perfil-proprietario']);
    }

}