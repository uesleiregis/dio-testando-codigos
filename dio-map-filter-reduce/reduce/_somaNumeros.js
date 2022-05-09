// Somar números de um array


function somaNumeros(arr){
    return arr.reduce( function(prev, current){

        // visualizando a cada passo
        console.log({prev});
        console.log({current});

        return prev+current;
    });
}

const arr = [1, 2, 3, 5];
console.log(somaNumeros(arr));