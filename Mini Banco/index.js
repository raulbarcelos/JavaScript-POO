import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"

const cliente1 = new Cliente("Cliente exemplo 1", 12312312334);
const cliente2 = new Cliente("Cliente Exemplo DOISS", 12313332215);

const contaCliente1 = new ContaCorrente(10000, cliente1, 3301);
const contaCliente2 = new ContaCorrente(0, cliente2, 3301);
const contaPoupanca1 = new ContaPoupanca(0, cliente2, 2001);

contaCliente1.sacar(200);
contaCliente1.sacar(80);
contaCliente1.depositar(950);
contaCliente1.transferir(500, contaCliente2);

console.log(contaCliente1);
console.log(contaCliente2);
console.log(contaPoupanca1);
console.log(ContaCorrente.numeroDeContas);
