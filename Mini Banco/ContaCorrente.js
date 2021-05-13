
export class ContaCorrente{
    agencia;
    conta;
    _saldo = 150;

    sacar(valor){
        if(this._saldo < valor){
            return;
        }

        this._saldo -= valor;
    }
    depositar(valor){
        if(valor<=0){
            return;
        }

        this._saldo += valor;
    }
}