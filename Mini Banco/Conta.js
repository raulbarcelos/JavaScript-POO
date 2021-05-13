export class Conta{

    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    
    //criando acessores (encapsulando)
    set cliente(novoValor){
        if(novoValor instanceof Cliente)
        this._cliente = novoValor;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }


    sacar(valor){
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){
        const totalSaque = valor * taxa;
        if(this._saldo < totalSaque){
            return 0;
        }
    
        this._saldo -= totalSaque;
        return valor;
    }

    depositar(valor){
        if(valor<=0){
            return;
        }
    
        this._saldo += valor;
    }
    
    transferir(valor, contaDestino){
        const valorTransferir = this.sacar(valor);
        contaDestino.depositar(valorTransferir);
    }
}

