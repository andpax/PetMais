/**
 * Created by andypax on 06/11/16.
 */
export class AgendamentoModel {
    constructor(
        public nomePasseador?: string,
        public nomePet?: string,
        public dataPassaeio?: string,
        public horaInicio?: string,
        public tempoDuracao?: string
    ){}
}