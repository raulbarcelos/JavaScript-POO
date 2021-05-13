class Cliente{
    nome;
    cpf;
    rg;
    estado;
}

class ContaCorrente{
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

const cliente1 = new Cliente();
cliente1.nome = "Cliente Exemplo";
cliente1.cpf = 12312312375;

const contaCliente1 = new ContaCorrente();
contaCliente1.agencia = 3001;
contaCliente1.conta = 100098;

contaCliente1.sacar(200)
contaCliente1.sacar(80)
contaCliente1.depositar(950)
console.log(cliente1);