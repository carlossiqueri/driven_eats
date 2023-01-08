function selecionaPrato (pratoSelecionado) {
    const pratoAnterior = document.querySelector('.container-pratos .selecionado');

    if(pratoAnterior !== null) {
        pratoAnterior.classList.remove('selecionado');
        pratoAnterior.querySelector('.container-pratos .checkmark').classList.add('hidden');
    }


    pratoSelecionado.classList.add('selecionado');
    pratoSelecionado.querySelector('.hidden').classList.remove('hidden');
}


function selecionaBebida(bebidaSelecionada) {
    const bebidaAnterior = document.querySelector('.container-bebidas .selecionado');

    if(bebidaAnterior !== null) {
        bebidaAnterior.classList.remove('selecionado');
        bebidaAnterior.querySelector('.container-bebidas .checkmark').classList.add('hidden');
}

    bebidaSelecionada.classList.add('selecionado');
    bebidaSelecionada.querySelector('.hidden').classList.remove('hidden')

}

function selecionaSobremesa(sobremesaSelecionada) {
    const sobremesaAnterior = document.querySelector('.container-sobremesas .selecionado');

    if(sobremesaAnterior !== null) {
        sobremesaAnterior.classList.remove('selecionado');
        sobremesaAnterior.querySelector('.container-sobremesas .checkmark').classList.add('hidden');
}

    sobremesaSelecionada.classList.add('selecionado');
    sobremesaSelecionada.querySelector('.hidden').classList.remove('hidden')

}
