export class Cliente {
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this._nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
}