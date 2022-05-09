// Utilizando o this
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}


// se eu mandar a maçã como thisArg ...
function mapComThis(arr, thisArg){
    return arr.map(function(item){
     return  item * this.value; //... aqui teremos o (itemdoarray) * (2)
    }, thisArg) 
}

const numeros = [1,2]

console.log('this -> maçã', mapComThis(numeros, maca));

console.log('this -> laranja', mapComThis(numeros, laranja));

// retorno 
//this -> maçã [ 2, 4 ]
//this -> laranja [ 3, 6 ]