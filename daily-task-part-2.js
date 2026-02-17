//Remove all vowels from a string.
const string = "frontend developer";
let splittedWord = string.toLowerCase().split('');
let vowels = ['a','e','i','o','u'];
let withoutVowels = []
for(let str in splittedWord){
   if(!vowels.includes(splittedWord[str])){
    withoutVowels.push(splittedWord[str])
   }
}
console.log(withoutVowels.join(''))

//Capitalize the first letter of each word in a sentence.
const input = "frontend developer journey";
const splitted = input.split(' ');
console.log(splitted)
let final = [];
for(let word of splitted){
   final.push(word.charAt(0).toUpperCase() + word.slice(1))
}

console.log(final.join(' '))
//Find the count of even and odd numbers in an array.
const inputArray = [1, 2, 3, 4, 5, 6];
const count = inputArray.reduce((acc,num)=>{
num%2 === 0 ? acc.even++ : acc.odd++ ;
return acc;
},{even:0, odd:0})
console.log(count)
//without reduce
const inputArray2 = [1, 2, 3, 4, 5, 6];
const count2 = {even: 0, odd: 0}
inputArray2.forEach(num=>{
   if(num%2 == 0){
      count2.even++
   }
   else{
      count2.odd++
   }
})
console.log(count2)

//Move all zeros to the end of an array (maintain order)
const input1 = [0, 1, 0, 3, 12]
let result = [];
let zeros = [];
for(let i=0; i<input1.length; i++){
if(input1[i]!=0){
   console.log(input1[i]);

result.push(input1[i])
}
else{
   zeros.push(input1[i])
}

}
console.log(result.concat(zeros));


