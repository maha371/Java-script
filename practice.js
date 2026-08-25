//Question: Reverse a string WITHOUT using reverse().
const string = "hello"
let reversed = '';
for(let i=string.length-1; i>=0; i--){
reversed += string[i]

}
console.log(reversed)

// Check if a string is a palindrome (ignore case and spaces).
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

//count the vowels in string
function countVowels(str){
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("javascript"))

//Find the largest and smallest number in an array without Math.max/min
function findSmallAndLarge(arr){
let largest = arr[0];
let smallest = arr[0];
for(let i=0;i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
    if(arr[i]<smallest){
        smallest = arr[i];
    }
}

return [smallest, largest];

}
console.log(findSmallAndLarge([9,45,3,48,1,47]))
