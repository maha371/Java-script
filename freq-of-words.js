//1.Count how many times each character appears in "banana"
const str = "banana"
const freq = {};
for (let char of str){
    freq[char] = freq[char] ? freq[char] + 1 : 1;
}
console.log(freq);

//2.Find the frequency of words in "hello world hello js".
const sentence = "hello world hello js";
const str1 = sentence.split(" ");
console.log(str1)
const freq1 = {};
for (let char of str1){
    freq1[char]= freq1[char] ? freq1[char] + 1 : 1;
}
console.log(freq1);

//3.Which character appears most in "mississippi"
const str2 = "mississippi";
const freq2 = {};
for (let char of str2){
    freq2[char] = freq2[char] ? freq2[char] + 1 : 1;
}
console.log(freq2)

let maxChar = '';
let maxCount = 0;
for(let ch in freq2){
    console.log(freq2)

    if(freq2[ch] > maxCount){
        maxChar = ch;
        maxCount = freq2[ch];
    }
} 
console.log(maxChar, maxCount)

//4.Find the most repeated word in "a b c a b a"
const str3 = "a b c a b a";
const readyString = str3.split(' ')
console.log(readyString)
let freq3 = {};
for(let char of readyString){
freq3[char] = freq3[char] ? freq3[char] + 1 : 1
}
let maxchar = '';
let maxcount = 0;
for(let char in freq3){
    if (freq3[char] > maxcount){
        maxchar = char;
        maxcount = freq3[char];
    }
} 
console.log(maxchar, maxcount)

//5.Find how many times each number appears in:[1,2,2,3,3,3]
let arr = [1,2,2,3,3,3];
let freq4 = {};
for(let num of arr){
    freq4[num] =  freq4[num] ? freq4[num] + 1 : 1;
}
console.log(freq4)

//6.Find element with highest frequency in [4,4,1,2,4,2];
let arr2 = [4,4,1,2,4,2];
let freq5 = {};
for (let num of arr2){
    freq5[num] = freq5[num] ? freq5[num] + 1 : 1;
}
let maxchar1 = null;
let maxcount1 = 0;
for(let num in freq5){
    if (freq5[num] > maxcount1){
        maxcount1 = freq5[num];
        maxchar1 = num
    }
}
console.log(maxchar1, maxcount1, freq5)

//"7.Apple apple APPLE" → count ignoring case
let sent = "Apple apple APPLE".toLowerCase().split(' ');
let freq6 = {};
sent.forEach(w => freq6[w] = freq6[w] ? freq6[w] + 1 : 1);
console.log(freq6)

//8.How many vowels in "education"?
let word = "education";
let freqVowels = {a:0, e:0, i:0, o:0, u:0};
for (let char of word){
    if(freqVowels[char] != undefined){
        freqVowels[char]++;
    }
}
console.log(freqVowels)

//9.Return only items with frequency > 1
const arr1 = [1,2,2,3,4,4,5];
const freq7 = {};
for(let num of arr1){
    freq7[num] = freq7[num] ? freq7[num] + 1 : 1;
}
let duplicates = {};
for(let char in freq7){
    if(freq7[char] > 1){
        duplicates[char] = freq7[char];
    }
}
console.log(duplicates)

//10.Count words in "hi hi ok hi ok" using reduce.
const stringReduce = "hi hi ok hi ok".split(" ");
console.log(stringReduce)
const freq8 = stringReduce.reduce((acc,word)=>{
acc[word] = (acc[word] || 0) + 1;
return acc
},{})
console.log(freq8)
