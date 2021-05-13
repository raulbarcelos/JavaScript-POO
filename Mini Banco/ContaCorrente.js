
export class ContaCorrente{
    agencia;
    conta;
    cliente;
    _saldo = 150;
    

    sacar(valor){
        if(this._saldo < valor){
            return;
        }

        this._saldo -= valor;
        return valor;
    }
    depositar(valor){
        if(valor<=0){
            return;
        }

        this._saldo += valor;
        return this._saldo
    }

    transferir(valor, contaDestino){
        const valorTransferir = this.sacar(valor);
        contaDestino.depositar(valorTransferir);
    }
}