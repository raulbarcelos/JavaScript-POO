class Cliente{
    nome;
    cpf;
    rg;
    estado;
}

class ContaCorrente{
    agencia;
    conta;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            console.log(this.saldo)
        }else{
            console.log("Não é possível sacar valor maior que o saldo.");
        }
    }
    depositar(valor){
        if(valor>0){
            this.saldo += valor;
            console.log(this.saldo)
        }else{
            console.log("Não é possível depositar valor menor ou igual a 0.");
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Cliente Exemplo";
cliente1.cpf = 12312312375;

const contaCliente1 = new ContaCorrente();
contaCliente1.agencia = 3001;
contaCliente1.conta = 100098;
contaCliente1.saldo = 150

console.log(contaCliente1.saldo)
contaCliente1.sacar(200)
contaCliente1.sacar(80)
contaCliente1.depositar(950)
console.log(cliente1);