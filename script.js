let precoPrato;
let nomePrato;

let precoBebida;
let nomeBebida;

let precoSobremesa;
let nomeSobremesa;

function selecionaPrato (pratoSelecionado) {
    const pratoAnterior = document.querySelector('.container-pratos .selecionado');

    if(pratoAnterior !== null) {
        pratoAnterior.classList.remove('selecionado');
        pratoAnterior.querySelector('.container-pratos .checkmark').classList.add('hidden');
    }


    pratoSelecionado.classList.add('selecionado');
    pratoSelecionado.querySelector('.hidden').classList.remove('hidden');

    nomePrato = pratoSelecionado.querySelector('h3').innerHTML;
    console.log(nomePrato);
    precoPrato = pratoSelecionado.querySelector('b').innerHTML;
    console.log(precoPrato)

    verificaPedidos();
}


function selecionaBebida(bebidaSelecionada) {
    const bebidaAnterior = document.querySelector('.container-bebidas .selecionado');

    if(bebidaAnterior !== null) {
        bebidaAnterior.classList.remove('selecionado');
        bebidaAnterior.querySelector('.container-bebidas .checkmark').classList.add('hidden');
}

    bebidaSelecionada.classList.add('selecionado');
    bebidaSelecionada.querySelector('.hidden').classList.remove('hidden')

    nomeBebida = bebidaSelecionada.querySelector('h3').innerHTML;
    console.log(nomeBebida);
    precoBebida = bebidaSelecionada.querySelector('b').innerHTML;
    console.log(precoBebida)

    verificaPedidos();
}

function selecionaSobremesa(sobremesaSelecionada) {
    const sobremesaAnterior = document.querySelector('.container-sobremesas .selecionado');

    if(sobremesaAnterior !== null) {
        sobremesaAnterior.classList.remove('selecionado');
        sobremesaAnterior.querySelector('.container-sobremesas .checkmark').classList.add('hidden');
}

    sobremesaSelecionada.classList.add('selecionado');
    sobremesaSelecionada.querySelector('.hidden').classList.remove('hidden')


    nomeSobremesa = sobremesaSelecionada.querySelector('h3').innerHTML;
    console.log(nomeSobremesa);
    precoSobremesa = sobremesaSelecionada.querySelector('b').innerHTML;
    console.log(precoSobremesa)

    verificaPedidos();
}

function verificaPedidos() {
    if (nomeBebida !== undefined){
        if (nomePrato !== undefined){
            if (nomeSobremesa !== undefined){
                console.log('verificado');
                const botaoFecharPedido = document.querySelector('button').classList.add('botão-selecionado');
                document.querySelector('button p').innerHTML = 'Fechar Pedido';
            }
        }      
    }
}