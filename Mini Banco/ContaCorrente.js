import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta{
    static numeroDeContas=0;

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        let taxa = 1.1
        const totalSaque = valor * taxa;
        if(this._saldo < totalSaque){
            return;
        }
    
        this._saldo -= totalSaque;
        return valor;
    }

}