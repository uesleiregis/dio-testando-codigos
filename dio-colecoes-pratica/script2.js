

// const meuArray = [30, 30, 40, 5, 223, 3034, 5];

// function valoresUnicos(arr){
//     const mySet = new Set(arr);

//     return mySet;
// }

// console.log(valoresUnicos(meuArray));


// saída: Set(5) { 30, 40, 5, 223, 3034 }

// isso retorna um set com valores únicos, não um array

// para isso, vamos usar a técnica spread.

// ---------
// vamos usar o argumento spread
// vamos criar um array vasio e além de tudo que tenho no array, nós vamos, 
// para cada elemento do set, adicionar dentor desse array.


const meuArray = [30, 30, 40, 5, 223, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; // isso formará um novo array
}

console.log(valoresUnicos(meuArray));

