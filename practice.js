//Question: Reverse a string WITHOUT using reverse().
const string = "hello"
let reversed = '';
for(let i=string.length-1; i>=0; i--){
reversed += string[i]

}
console.log(reversed)

function isPalindrome(str){
    let clean = '';
    for (let char of str){
        if(char != ' '){
            clean += char.toLowerCase();
        }
    }
    let reversed = clean.split("").reverse().join("");
    return clean === reversed;
}
console.log(isPalindrome("Madam"));             
console.log(isPalindrome("Never Odd Or Even"));  
console.log(isPalindrome("Hello"));    