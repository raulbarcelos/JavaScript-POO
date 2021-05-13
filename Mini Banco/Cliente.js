export class Cliente{
    nome;
    _cpf;
    rg;
    estado;

    get cpf(){
        return this._cpf
    }

    constructor(nome, cpf){
        this.nome =  nome;
        this._cpf = cpf;
    }
}
