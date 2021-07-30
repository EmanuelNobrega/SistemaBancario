class Clientes {
    constructor() {
        this.clientes = new Array();
        const cl1 = new Cliente('Emanuel', '123456789-0', '1');
        const cl2 = new Cliente('Nóbrega', '098765432-1', '2');

        this.clientes.push(cl1, cl2);
    }
    inserir(cliente){
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}
