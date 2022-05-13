// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

// let linhas = parseInt(gets());
// Entradas de 1 a 1000
//TODO: Complete os espaços em branco com uma solução possível para o problema.

// let limit = parseInt(gets());
let limit = 5;

for (let i = 1; i <= limit; i++) {
  
    let  x = i*i;
    let  y = i*i*i;

    

  console.log(i+" "+x+" "+y);

  if (i>999) break;
}