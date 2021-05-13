import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Cliente Exemplo";
cliente1.cpf = 12312312375;

const contaCliente1 = new ContaCorrente();
contaCliente1.agencia = 3001;
contaCliente1.conta = 100098;
contaCliente1.cliente = cliente1;

contaCliente1.sacar(200)
contaCliente1.sacar(80)
contaCliente1.depositar(950)


const cliente2 = new Cliente();
cliente2.nome = "Cliente Exemplo DOISS";
cliente2.cpf = 12313332215;

const contaCliente2 = new ContaCorrente();
contaCliente2.agencia = 3001;
contaCliente2.conta = 198042;
contaCliente2.cliente = cliente2;
contaCliente1.transferir(500, contaCliente2);

console.log(contaCliente1);
console.log(contaCliente2);