/**
 * Created by andypax on 06/11/16.
 */

import { Injectable } from  '@angular/core';

import { PetModel } from './pet.model';

@Injectable()
export class PetService {

    listarTodos() {
        var pets: string = sessionStorage['pets'];
        return pets ? JSON.parse(pets) : [];
    }

    cadastrar(pet: PetModel) {
        var pets: PetModel[] = this.listarTodos();
        pets.push(pet);
        sessionStorage['pets'] = JSON.stringify(pets);
    }

    atualizar(id: number, pet: PetModel) {
        var pets: PetModel[] = this.listarTodos();
        pets[id].nome = pet.nome;
        pets[id].raca = pet.raca;
        pets[id].idade = pet.idade;
        sessionStorage['pets'] = JSON.stringify(pets);
    }

    excluir(id: number) {
        var pets: PetModel[] = this.listarTodos();
        pets.splice(id, 1);
        sessionStorage['pets'] = JSON.stringify(pets);
    }

    buscarPorId(id: number) {
        var pets: PetModel[] = this.listarTodos();
        return pets[id];
    }


}