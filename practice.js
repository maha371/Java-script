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

//Logical: FizzBuzz (1–100: Fizz for 3, Buzz for 5, FizzBuzz for both).
function printFizzBuzz() {

    for (let i = 1; i <= 100; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

printFizzBuzz();

// Logical: Remove duplicates from an array (3 ways: Set, filter+indexOf, reduce).
function removeDuplicate(arr){
let uniquearr = [...new Set(arr)]
console.log(uniquearr)
const result = arr.filter((item, index)=>{
    return arr.indexOf(item) === index;
})
console.log(result)
arr.reduce((result, current)=>{
if(!result.includes(current)){
    result.push(current)
}
return result;
},[])
console.log(result)
}
removeDuplicate([1, 2, 3, 2, 4, 5, 1, 3, 6, 5]);

//Find the first non-repeating character in a string.
function firstUniqueCharacter(str){
    let freq = {};
    for(let char of str){
        freq[char] = freq[char] ? freq[char] + 1 : 1;
    }
    // return freq;
    for(let char of str){
        if(freq[char] === 1){
            return char
        }
       
    }
    return null;
}
console.log(firstUniqueCharacter("swiss"))