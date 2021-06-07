import { clienteService } from "../service/cliente-service.js";

// cria um template
const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement("tr");
  const conteudo = `
  <td class="td" data-td>${nome}</td>
    <td>${email}</td>
      <td>
        <ul class="tabela__botoes-controle">
          <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
      </td>
  `;
  linhaNovoCliente.innerHTML = conteudo;
  return linhaNovoCliente;
};

// percorre o DOM para buscar o corpo da tabela
const tabela = document.querySelector("[data-tabela]");

// pega os dados da API, faz um loop e itera sobre os dados e exibe na tela
clienteService.listaClientes().then((data) => {
  data.forEach((elemento) => {
    tabela.appendChild(
      criaNovaLinha(elemento.nome, elemento.email, elemento.id),
    );
  });
});
