import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

// colocando um evento de escuta no formulário, para que quando for clicado no bootão cadastrar ocorrer algum evento

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nome = evento.target.querySelector("[data-nome]").value;
  const email = evento.target.querySelector("[data-email]").value;

  clienteService.criaCliente(nome, email).then(() => {
    window.location.href = "../telas/cadastro_concluido.html";
  });
});
