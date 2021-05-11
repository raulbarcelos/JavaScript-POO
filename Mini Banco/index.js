class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Cliente Exemplo";
cliente1.cpf = 12312312375;
cliente1.agencia = 3001;
cliente1.saldo = 0;

cliente1.nome = "Segundo Cliente Exemplo";
cliente1.cpf = 32132132177;
cliente1.agencia = 3001;
cliente1.saldo = 122;

console.log(cliente1)