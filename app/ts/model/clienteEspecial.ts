class ClienteEspecial extends Cliente {
    private clientesEspeciais: Array<Cliente>;
    constructor(nome: string, cpf: string, conta: string) {
        this.clientesEspeciais = new Array<Cliente>();
        super(nome, cpf, conta);
    }
    inserir(cliente: Cliente): void {
        this.clientesEspeciais.push(cliente);
    }

    remover(cpf: string): void {
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientesEspeciais.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientesEspeciais.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(cpf: string): Cliente {
        return this.clientesEspeciais.find(
            cliente => clientes.cpf === cpf
        );
    }

    listar(): Array<Cliente> {
        return this.clientesEspeciais;
    }
}
