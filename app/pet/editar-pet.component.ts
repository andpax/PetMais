/**
 * Created by andypax on 07/11/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PetModel } from './pet.model';
import { PetService } from './pet.service';

@Component({
    templateUrl: 'app/pet/templates/editar-pet.html',
    providers: [ PetService ]
})
export class EditarPetComponent implements OnInit {

    private id: number;
    private pet: PetModel;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private petService: PetService
    ){}

    ngOnInit() {
        this.id = +this.route.snapshot.params['id'];
        this.pet = this.petService.buscarPorId(this.id);
    }

    atualizar() {
        this.petService.atualizar(this.id, this.pet);
        this.router.navigate(['/perfil-proprietario']);
    }
}