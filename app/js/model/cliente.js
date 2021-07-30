class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome(){
       return this._nome;
   }

   set nome(nome){
       this._nome = nome;
   }

   get cpf(){
       return this._cpf;
   }

   set cpf(nome){
       this._cpf = cpf;
   }

   set conta(conta){
       this._conta = new Conta(conta)
   }

   get conta(){
       return this._conta;
   }

    toString() {
        return `
- Nome: ${this._nome}
- CPF: ${this._cpf}
- Conta: ${this._conta.toString()}
`;
    }
}
