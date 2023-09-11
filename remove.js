function removeIds(arr){
    arr.splice(0 ,1);
    return arr;

}

let arr = [
    {
        id: 1,
        Name: 'Candice'
    },
    {
        id: 2,
        Name: 'Zile'
    },
    {
        id: 3,
        Name: 'Vuyo'
    },
    {
        id: 4,
        Name: 'Thelma'
    },
    {
        id: 5,
        Name: 'Sherry'
    },
]

console.log(removeIds(arr));



function names(array){
    let numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ];
    let result = "";
    for(let i = 0; i < array.length; i++)
    {
        if(!numbers.includes(array[i])){
            result += array[i];
        }
    }
return result;
}

let array = "[Moral1, Gift3, Candice3, Zile4]";
console.log(names(array));
