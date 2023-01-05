function selecionaPrato (pratoSelecionado) {

    const pratoAnterior = document.querySelector('.selecionado');
    if(pratoAnterior !== null) {
        pratoAnterior.classList.remove('selecionado');
    }

    // Passa como parâmetro uma váriavel que armazena o texto da classe do prato
    console.log(pratoSelecionado);
    // Seleciona no DOM a div que tem a classe armazenada na funçao pratoSelecionado 
    const prato = document.querySelector(pratoSelecionado);
    // adiciona a classe do css 'selecionado' ao elemento com a classe pratoSelecionado
    prato.classList.add('selecionado');

}


