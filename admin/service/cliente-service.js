// conexão com a API
const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then((resposta) => {
    return resposta.json();
  });
};

export const clienteService = {
  listaClientes,
};

// mockagem dos dados para fazer simulações
// npx json-server --watch db.json

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
