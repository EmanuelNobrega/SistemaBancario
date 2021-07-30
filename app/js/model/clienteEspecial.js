class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.clientesEspeciais = new Array();
    }
    inserir(cliente) {
        this.clientesEspeciais.push(cliente);
    }

    remover(cpf){
        const clienteARemover = this.pesquisar(cpf);
        if (clienteARemover) {
            const indiceCliente = this.clientesEspeciais.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientesEspeciais.splice(indiceCliente, 1);
            }
        }
    }

    pesquisar(cpf){
        return this.clientesEspeciais.find(
            cliente => clientes.cpf === cpf
        );
    }

    listar(){
        return this.clientesEspeciais;
    }
}
