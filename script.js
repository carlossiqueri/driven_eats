let precoPrato;
let nomePrato;

let precoBebida;
let nomeBebida;

let precoSobremesa;
let nomeSobremesa;

let precoPedido;

function selecionaPrato(pratoSelecionado) {
  const pratoAnterior = document.querySelector(
    ".container-pratos .selecionado"
  );

  if (pratoAnterior !== null) {
    pratoAnterior.classList.remove("selecionado");
    pratoAnterior
      .querySelector(".container-pratos .checkmark")
      .classList.add("hidden");
  }

  pratoSelecionado.classList.add("selecionado");
  pratoSelecionado.querySelector(".hidden").classList.remove("hidden");

  nomePrato = pratoSelecionado.querySelector("h3").innerHTML;
  precoPrato = pratoSelecionado.querySelector("b").innerHTML.replace(",", ".");

  verificaPedidos();
}

function selecionaBebida(bebidaSelecionada) {
  const bebidaAnterior = document.querySelector(
    ".container-bebidas .selecionado"
  );

  if (bebidaAnterior !== null) {
    bebidaAnterior.classList.remove("selecionado");
    bebidaAnterior
      .querySelector(".container-bebidas .checkmark")
      .classList.add("hidden");
  }

  bebidaSelecionada.classList.add("selecionado");
  bebidaSelecionada.querySelector(".hidden").classList.remove("hidden");

  nomeBebida = bebidaSelecionada.querySelector("h3").innerHTML;
  precoBebida = bebidaSelecionada
    .querySelector("b")
    .innerHTML.replace(",", ".");

  verificaPedidos();
}

function selecionaSobremesa(sobremesaSelecionada) {
  const sobremesaAnterior = document.querySelector(
    ".container-sobremesas .selecionado"
  );

  if (sobremesaAnterior !== null) {
    sobremesaAnterior.classList.remove("selecionado");
    sobremesaAnterior
      .querySelector(".container-sobremesas .checkmark")
      .classList.add("hidden");
  }

  sobremesaSelecionada.classList.add("selecionado");
  sobremesaSelecionada.querySelector(".hidden").classList.remove("hidden");

  nomeSobremesa = sobremesaSelecionada.querySelector("h3").innerHTML;
  precoSobremesa = sobremesaSelecionada
    .querySelector("b")
    .innerHTML.replace(",", ".");

  verificaPedidos();
}

function verificaPedidos() {
  if (
    nomeBebida !== undefined &&
    nomePrato !== undefined &&
    nomeSobremesa !== undefined
  ) {
    document.querySelector("button").classList.add("botão-selecionado");
    document.querySelector("button p").innerHTML = "Fechar Pedido";
    document.querySelector("button").removeAttribute("disabled");

    precoPedido =
      Number(precoBebida) + Number(precoPrato) + Number(precoSobremesa);
    precoPedido = precoPedido.toFixed(2);
  }
}

function fechaPedido() {
  let mensagem = `Olá, gostaria de fazer o pedido:\n 
    - Prato: ${nomePrato}\n
    - Bebida: ${nomeBebida}\n
    - Sobremesa: ${nomeSobremesa}\n
    - Total: R$ ${precoPedido.replace(".", ",")}`;

  mensagem = window.encodeURIComponent(mensagem);
  window.open(`https://wa.me/5555999999999?text=${mensagem}`);
}
