//classe abstrata
//Só pode ser herdada. Nunca pode ser instanciada diretamente.
export class Conta{

    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        //bloqueando instancias diretas da classe Conta. Dessa forma mesmo que o desenvolvedor tente instaciar ele tera um throw error.
        if(this.constructor == Conta){
            throw new Error("Voce não deveria instanciar um objeto do tipo conta, pois é uma classe abstrata!");
        }
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

    //metodo abstrato. Deve obrigatóriamente ser sobrescrito nas subclasses.
    sacar(valor){
        throw new Error("O método sacar() da conta é abstrato.")
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

