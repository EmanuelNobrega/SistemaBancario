class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
        const cl1 = new Cliente('Emanuel', '123456789-0', '1');
        const cl2 = new Cliente('Nóbrega', '098765432-1', '2');

        this.clientes.push(cl1, cl2);
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find(
            cliente => clientes.cpf === cpf
        );
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }
}
