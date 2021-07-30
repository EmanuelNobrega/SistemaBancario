class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCPF: HTMLInputElement;
    private inputConta: HTMLInputElement;

    private cliente: Cliente;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome");
        this.inputCPF =
            <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta =
            <HTMLInputElement>document.querySelector("#conta");

        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCPF.value, this.inputConta.value));

        this.cliente.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.cliente.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = conta.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        if (document.getElementById("listaClientes")){
            document.getElementById("listaClientes").appendChild(elementoP);
        }
    }


}
