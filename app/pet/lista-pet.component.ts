/**
 * Created by andypax on 06/11/16.
 */
import { Component, OnInit } from '@angular/core';

import { PetModel } from './pet.model';
import { PetService } from './pet.service';

@Component({
    templateUrl: 'app/pet/templates/lista-pet.html',
    providers: [ PetService ]
})
export class ListaPetComponent implements OnInit {

    private pets: PetModel[];

    constructor(
        private petService: PetService
    ){}

    ngOnInit() {
        this.pets = this.petService.listarTodos();
    }

    excluirPet(id: number) {
        this.petService.excluir(id);
        this.pets = this.petService.listarTodos();
    }
}