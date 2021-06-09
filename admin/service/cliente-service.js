// conexão com a API
const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then((resposta) => {
    return resposta.json();
  });
};

const criaCliente = (nome, email, id) => {
  return fetch(`http://localhost:3000/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
      id: id,
    }),
  }).then((resposta) => {
    return resposta.body;
  });
};

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  });
};

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
};

// mockagem dos dados para fazer simulações
// npx json-server --watch db.json

// Site usado para simular o funcionamento do ambiente JavaScript.
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// antigo listaClientes () => {
//   const promise = new Promise((resolve, reject) => {
//     //O objeto XMLHttpRequest fornece os métodos para realizar a comunicação
//     const http = new XMLHttpRequest();

//     // Abrir a comunicação entre a minha aplicação e a API utilizando o método open

//     // É preciso passar 2 argumentos:
//     // 1. O que eu quero falar com o servidor - requisição (GET)
//     // 2. O endereço pra onde vou enviar minha requisição (url)
//     http.open("GET", "http://localhost:3000/profile");

//     http.onload = () => {
//       if (http.status >= 400) {
//         reject(JSON.parse(http.response));
//       } else {
//         resolve(JSON.parse(http.response));
//       }
//     };

//     //Enviar a requisição
//     http.send();
//   });

//   return promise;
// }
