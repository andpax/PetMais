/**
 * Created by andypax on 22/10/16.
 */
export class ProprietarioModel {

    constructor(
        public nome?: string,
        public endereco?: string,
        public numero?: string,
        public complemento?: string,
        public cidade?: string,
        public cep?: string,
        public telefone?: string,
        public email?: string,
        public senha?: string,
        public confirmarSenha?: string
    ){}
}