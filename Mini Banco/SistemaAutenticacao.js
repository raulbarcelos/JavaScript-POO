/*

Ser autenticavel significa ter o método autenticar. Se não tiver o método vai dar um erro.
ducky type

*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        //verifica se a chave autenticar está dentro do objeto autenticavel
        //&& verifica se autenticavel.autenticar é do tipo/instancia de uma função
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function 
    }
}