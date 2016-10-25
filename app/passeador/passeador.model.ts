/**
 * Created by andypax on 15/10/16.
 */
export class PasseadorModel {

    constructor(
        public nome?: string,
        public endereco?: string,
        public numero?: string,
        public complemento?: string,
        public cidade?: string,
        public cep?: string,
        public telefone?: string,
        public email?: string,
        public preco?: number,
        public senha?: string,
        public confirmarSenha?: string
    ){}
}