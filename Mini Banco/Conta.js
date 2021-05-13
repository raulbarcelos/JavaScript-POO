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
    }
    
    transferir(valor, contaDestino){
        const valorTransferir = this.sacar(valor);
        contaDestino.depositar(valorTransferir);
    }
}

