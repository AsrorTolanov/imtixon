// data types
// number
// Bigint
// string
// boolin
// null
// undefined
// symbool
// object

function second(arr) {
    let sum = [];
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 === 0 ) {
            sum.push(arr[i]);
        }     
    }
    return sum;
}

console.log(second(ism));




let ism = "salim aliyev";


function res(nom) {
    let res1 = nom.split(" ");
    let soz = "";
    for(let i = 0; i < res1.length; i++) {
  
        soz += res1[1][0].toUpperCase();
    }
    return soz;   
}

console.log(res(ism));


