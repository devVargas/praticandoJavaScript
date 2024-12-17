import { Funcioario } from "./Funcionario.js";

export class Gerente extends Funcioario {
    constructor(nome, salario, cpf, senha) {
        super(nome, salario, cpf);
        this._bonificacao = 4.5;
    }
}