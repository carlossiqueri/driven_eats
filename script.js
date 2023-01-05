function selecionaPrato (pratoSelecionado) {
    const pratoAnterior = document.querySelector('.selecionado');

    if(pratoAnterior !== null) {
        pratoAnterior.classList.remove('selecionado');
    }

    const prato = document.querySelector(pratoSelecionado);
    prato.classList.add('selecionado');

    const check = document.querySelectorAll('.hidden');
    console.log(check);



}
