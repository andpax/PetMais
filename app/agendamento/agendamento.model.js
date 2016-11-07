"use strict";
/**
 * Created by andypax on 06/11/16.
 */
var AgendamentoModel = (function () {
    function AgendamentoModel(nomePasseador, nomePet, dataPassaeio, horaInicio, tempoDuracao) {
        this.nomePasseador = nomePasseador;
        this.nomePet = nomePet;
        this.dataPassaeio = dataPassaeio;
        this.horaInicio = horaInicio;
        this.tempoDuracao = tempoDuracao;
    }
    return AgendamentoModel;
}());
exports.AgendamentoModel = AgendamentoModel;
//# sourceMappingURL=agendamento.model.js.map