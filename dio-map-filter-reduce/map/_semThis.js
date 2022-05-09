// Função sem utilizar o 'this'

function mapSemThis(arr){

    return arr.map((item) => item * 2)
}

//Outra forma
// function mapSemThis(arr){
//     return arr.map(function(item){
//       return item * 2;  
//     });
// }

const nums = [1, 3, 7];

console.log(mapSemThis(nums));

