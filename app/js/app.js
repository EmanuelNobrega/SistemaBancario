if(document.title === 'Contas'){
    let contaController = new ContaController();
    contaController.listar();
    const c1 = new Conta('1', 100);
    const p1 = new Poupanca('2', 100);
    const cb1 = new ContaBonificada('3', 0);
    console.log('Conta: ' + c1.saldo);
    p1.atualizarSaldoAniversario();
    console.log('Poupanca: ' + p1.saldo);
    cb1.creditar(100);
    console.log('Conta Bonificada: ' + cb1.saldo);
}

if(document.title === 'Clientes'){
    let clienteController = new ClienteController();
    let clienteEspecial = new ClienteEspecial();

    const cl1 = new Cliente('Gustavo', '999999999-0', '3');
    const cl2 = new Cliente('Removido', '111111111-0', '4');
    clienteController.clientes.inserir(cl1);
    clienteController.clientes.inserir(cl2);

    clienteController.listar();

    clienteController.clientes.remover('111111111-0');
    console.log(clienteController.clientes.pesquisar('123456789-0').toString());

    console.log(clienteController.clientes.listar().toString());

    const clE = new ClienteEspecial('Especial', '888888888-8', '5');
    clienteEspecial.inserir(clE);
    console.log(`Cliente Especial:\n${clienteEspecial.listar().toString()}`)
}

