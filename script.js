function selecionaPrato (pratoSelecionado) {
    const pratoAnterior = document.querySelector('.selecionado');

    if(pratoAnterior !== null) {
        pratoAnterior.classList.remove('selecionado');
        pratoAnterior.querySelector('.checkmark').classList.add('hidden');
    }

    const prato = document.querySelector(pratoSelecionado);
    prato.classList.add('selecionado');
    prato.querySelector('.hidden').classList.remove('hidden');
}

