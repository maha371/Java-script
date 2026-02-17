//Reverse a Simple String
let str = "Helloword";
let reversed = str.split("").reverse().join("");
console.log(reversed)

//using for loop
let str2 = "Helloworld";
let reversedString = '';
for(let i = str2.length - 1; i>=0; i--){
    reversedString += str2[i]
}
console.log(reversedString)

//Reverse Words in a Sentence
let sentence = "JavaScript is fun";
let reversedSentence = sentence.split(' ').reverse().join(' ')
console.log(reversedSentence)//fun is javascript
let completeReverse = sentence.split('').reverse().join('')
console.log(completeReverse)//nuf si tpircSavaJ

//reverse array
let arr = ["apple", "banana", "cherry"];
let reversedArray = [...arr].reverse();
console.log(reversedArray)//[ 'cherry', 'banana', 'apple' ]
let reversedArray2 = arr.map(rev => rev.split('').reverse().join(''))
console.log(reversedArray2)//[ 'elppa', 'ananab', 'yrrehc' ]

//reverse a number
let num = 12345;
let revrsedNum = parseInt(num.toString().split('').reverse().join(''));
console.log(revrsedNum)
// refer later
let num2 = 12345;

// Convert number to string first
let reversedNum = parseInt(num.toString().split("").reverse().join(""));
console.log(reversedNum); // 54321

// Using math (without converting to string)
let reversedNumMath = 0;
let temp = num;
while (temp > 0) {
    reversedNumMath = reversedNumMath * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
}
console.log(reversedNumMath); // 54321 explain

//Reverse an array (without using reverse())
const arr2 = [1, 2, 3, 4, 5];
const result = []
for(let i=arr2.length-1; i>=0; i--){
    result.push(arr2[i])
}
console.log(result)
