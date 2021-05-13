import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Cliente Exemplo";
cliente1.cpf = 12312312375;

const contaCliente1 = new ContaCorrente();
contaCliente1.agencia = 3001;
contaCliente1.conta = 100098;

contaCliente1.sacar(200)
contaCliente1.sacar(80)
contaCliente1.depositar(950)
console.log(cliente1, contaCliente1._saldo);