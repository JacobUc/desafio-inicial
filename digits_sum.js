// "999" => 27
// "9184501" => 28
// "12345" => 15

function digitsSum ( stringNumber ) {
    let sum = 0;
    // Sumar cada dígito del string
    for(let number of stringNumber){
        sum += Number(number);
    }
    return sum;
}

console.log( digitsSum("999") );
console.log( digitsSum("9184501") );
console.log( digitsSum("12345") );