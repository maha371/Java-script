//using for loop
// const arr = [1, 2, 3, 2, 1, 4]
// const removeDuplicates = [];
// for (let i=0; i<arr.length;i++){
//  if(!removeDuplicates.includes(arr[i])){
//     removeDuplicates.push(arr[i])
//  }
// }
// console.log(removeDuplicates)

//(filter + indexOf)
const arr = [1, 2, 3, 2, 1, 4];
// Iteration 1

// item = 1, index = 0
// arr.indexOf(1) = 0
// 0 === 0 → keep 1

// Iteration 2

// item = 2, index = 1
// arr.indexOf(2) = 1
// 1 === 1 → keep 2

// Iteration 3

// item = 3, index = 2
// arr.indexOf(3) = 2
// 2 === 2 → keep 3

// Iteration 4

// item = 2, index = 3
// arr.indexOf(2) = 1
// 1 !== 3 → discard duplicate 2

// Iteration 5

// item = 1, index = 4
// arr.indexOf(1) = 0
// 0 !== 4 → discard duplicate 1

// Iteration 6

// item = 4, index = 5
// arr.indexOf(4) = 5
// 5 === 5 → keep 4
const result = arr.filter((item,index)=>{
   return arr.indexOf(item) === index;
})
console.log(result);

//Question: Reverse a string WITHOUT using reverse().
const string = "hello"
let reversed = '';
for(let i=string.length-1; i>=0; i--){
reversed += string[i]

}
console.log(reversed)
//Using array methods
const arrstring = "level"
const splittedword = arrstring.split('');
const reducerresult = splittedword.reduce((acc, current)=> current + acc)
if(arrstring === reducerresult){
  console.log('true')
}
else{
   console.log('false')
}
//Write a function to find the second largest number in an array.
const sortArray = [10,4,8,20,15];
if (sortArray.length < 2) {
   return "Array must contain at least two elements.";
 }
let largest = Number.NEGATIVE_INFINITY;
let secondLargest = Number.NEGATIVE_INFINITY;
for( let i=0; i< sortArray.length; i++){
   if(sortArray[i]>largest){
      secondLargest = largest;
      largest = sortArray[i];
   }
   else if(sortArray[i] > secondLargest && sortArray[i] !== largest){
      secondLargest = sortArray[i]
   }

}
if(secondLargest === Number.NEGATIVE_INFINITY){
   console.log('no largest')
}
console.log(secondLargest)

//using sort
const array = [10,4,8,20,15];
array.sort((a,b)=>b-a);
let largest1 = array[0];
console.log(largest1)
let secondLargest1 = null
for(let i=1; i<array.length; i++){
   if(array[i]<largest1){
      secondLargest1 = array[i];
      break;
   }
}      
if(secondLargest1 == null){
   console.log("no largest number")
}
console.log(secondLargest1)

//Count the number of times each character appears in a string.
const string1 = "hello"
const char = string1.split('');
let freq = {};
for (let ch of char){
   freq[ch] = freq[ch] ? freq[ch] + 1 : 1;
}
console.log(freq)
let maxCount = 0;
let maxChar = {};
for (let char in freq){
   if(freq[char]>maxCount){
      maxCount = freq[char]
      maxChar = char
   }
}
console.log(maxChar, maxCount)

//Find the frequency of each element in an array.
const freqarray = [1, 2, 2, 3, 1, 4, 2];
let numberFreq = {};
for (let freq of freqarray){
   numberFreq[freq] = numberFreq[freq] ? numberFreq[freq] + 1 : 1;
}
console.log(numberFreq)

//using reduce
const numberFreq2 = freqarray.reduce((acc, num)=>{
   acc[num] = acc[num] ? acc[num]+ 1 :1;
   return acc;
},{})
console.log(numberFreq2)

//Find the sum of all numbers in an array
const sum = [1, 2, 3, 4];
let total = 0
for(let i=0; i <sum.length;i++){
   total += sum[i]
}
console.log(total)
// const sum = [1, "2", 3, 4];
// let total = 0
// for(let i=0; i <sum.length;i++){
//    total += Number(sum[i])
// }
// console.log(total)

const sum1 = [1, "2", 3, 4];
// let acc = 0;
// const reduceSum = sum1.reduce((acc, sum1) => sum1 + acc
// )
const reduceSum = sum1.reduce((acc,curr)=>{
   return Number(curr) + Number(acc);
},0)

console.log(reduceSum)

//Find the maximum number in an array
const maxNumber = [3, 7, 2, 9, 4]
let finalMaxNumber = Number.NEGATIVE_INFINITY;

for(let i=0; i<maxNumber.length; i++){
   if(maxNumber[i] > finalMaxNumber ){
finalMaxNumber = maxNumber[i]
   }
}
console.log(finalMaxNumber)

const str1 = "Dormitory"; 
const str2 = "dirty room";
// const sortedStr1 = str1.split('').sort().join('').replace(/\s/g,'').toLowerCase();
// console.log(sortedStr1);

// const sortedStr2 = str2.split('').sort().join('').replace(/\s/g,'').toLowerCase();
// console.log(sortedStr2);

// if(sortedStr1 == sortedStr2){
//    console.log(true)
// }
// else{
//    console.log(false);
// }

//using frequency 
const getFrequency = (str) => {
   let freq = {};
   str = str.toLowerCase().replace(/\s/g,'')
   for(let char of str){
      freq[char] = freq[char] ? freq[char] + 1 : 1;
   }
   return freq;
}

const freqstring1 = getFrequency(str1);
const freqstring2 = getFrequency(str2);
let isAnagram = true
for (let char in freqstring1){
   if ( freqstring1[char] !== freqstring2[char]){  
      isAnagram = false;
      break
   }
   
}
console.log(isAnagram)
//Find the first non-repeating character in a string
const nonRepeatingString = "aabbced";
let stringFreq = {};
for(let char of nonRepeatingString){
   stringFreq[char] = stringFreq[char] ? stringFreq[char] + 1 : 1;
}
let nonRepeatedChar = null
for(let char in stringFreq){
   if(stringFreq[char] == 1){
      nonRepeatedChar = char;
      break;
   }
 
}
console.log(nonRepeatedChar)

//Find the longest word in a sentence.//using for in 
const sentence = "I am learning frontend development";
let splitWord = sentence.split(' ');
console.log(splitWord)
let highestLength = 0
let highestLengthWord = ''
for(let word in splitWord){
   console.log(splitWord[word].length)
  if(splitWord[word].length>highestLength){
   highestLength = splitWord[word].length;
   highestLengthWord = splitWord[word]
  }
}
   console.log(highestLengthWord)

   //Find the longest word in a sentence.//using for of

// const sentence = "I am learning frontend development";
// let splittedWord = sentence.split(' ');
// let highestLength = 0;
// let highestLengthWord = '';
// for(let word of splittedWord){
//   if(word.length > highestLength) {
// highestLength = word.length;
// highestLengthWord = word;
//    }
// }
// console.log(highestLengthWord)

//Check if a number is prime (without shortcuts)
function isPrime(num){
   if(num<1){
      return false;
   }
   for(let i=2;i<num;i++ ){
if(num%i === 0){
   return false;
}
   }
   return true;
}
const userInput = 12;
console.log(`Is ${userInput} a prime number? `, isPrime(userInput));

//Check if an array is sorted in ascending order WITHOUT sorting it.
function isSorted(arr){
for(let i = 0 ; i < arr.length - 1; i++){
if(arr[i] > arr[i+1]){
return false;
}
}
return true;

}
const numbersArray = [5, 5, 5]
const arrayFunction = isSorted(numbersArray)
console.log(arrayFunction)

//Find the number of vowels in a string (without regex)
function countVowels(str){
let splittedString = str.toLowerCase().split('');
const freq = {};
console.log(splittedString)
for(let isvowels of splittedString){
   freq[isvowels] = freq[isvowels] ? freq[isvowels] + 1 : 1
}
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for(char in freq){
   if(vowels.includes(char))
   vowelCount += freq[char]
}
console.log(vowelCount)

}

const input = 'frontend developer';
const count = countVowels(input)

//Rotate an array by 1 position to the right WITHOUT using built-in rotate logic.
const arrayWithoutRotate = [1, 2, 3, 4, 5];
let sliced = arrayWithoutRotate[arrayWithoutRotate.length - 1]
console.log(sliced)
let remainingArray = arrayWithoutRotate.slice(0,arrayWithoutRotate.length - 1)
const arrayWithRotate = [sliced, ...remainingArray]
console.log(arrayWithRotate)

// //same using for loop
// function rotateRight(arr){
//    const n = arr.length;
//    const result = new Array(n)
//    console.log(result)
//    result[0] = arr[n-1]
//    console.log(result)
//    for(let i=0;i<n-1;i++){
//       result[i+1] = arr[i]
//    }
//    return result
// }
// const arrayWithoutRotate = [1, 2, 3, 4, 5];
// console.log(rotateRight(arrayWithoutRotate)); 