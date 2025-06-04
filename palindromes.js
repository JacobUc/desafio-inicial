// "aabaa" => true
// "abac" => false
// "salas" => true

function isPalindrome ( inputStr ) {
    inputStr = inputStr.toLowerCase();
    let invertedWord = "";

    // Recorrer la palabra de forma inversa
    for( let i = inputStr.length - 1; i >= 0; i-- ) {
        invertedWord += inputStr[i];
    }

    // Verificar si la palabra invertida es la misma que la original
    if( inputStr === invertedWord ) {
        return true;
    }

    // En cualquier otro caso, no es palíndromo
    return false;
}

console.log( isPalindrome("aabaa") );
console.log( isPalindrome("abac") );
console.log( isPalindrome("salas") );