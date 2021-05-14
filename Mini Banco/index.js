import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor1 = new Diretor("Raul", 9500, 12312312323);
diretor1.cadastrarSenha("123123")
const gerente1 = new Gerente("Diego", 5500, 32132131231);

const logado = SistemaAutenticacao.login(diretor1, "123123");
const cliente = new Cliente("Josef", 123, "000123")
const clilogado = SistemaAutenticacao.login(cliente, "000123");
console.log(logado)
console.log(clilogado)