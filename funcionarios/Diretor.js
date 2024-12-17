import { Funcioario } from "./Funcionario.js";

export class Diretor extends Funcioario {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf);
        this._bonificacao = 2.5;
    }
}