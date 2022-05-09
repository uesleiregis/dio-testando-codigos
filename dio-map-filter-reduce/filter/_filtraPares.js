function filtraPares(arr){
    return arr.filter(function(item){
        if(item % 2 == 0)
        {
            return true;
        }
    });
}

const nums = [1, 2, 3, 5, 6, 8];

console.log(filtraPares(nums));

// Fiz só urru!!

// de outra forma:

function filtraPares2(arr){
    return arr.filter(callback);
}

callback = function (item){
    if(item % 2 == 0) return true;
}

console.log(filtraPares2(nums));