// const arr1 = [50, 10, 33, 60, 53, 10];
// const arr2 = [30, 20, 50, 60, 10, 50];
// const duplicates = [...new Set(arr1.filter(x => arr2.includes(x)))];
// console.log(duplicates);

const arr1 = [50, 10, 33, 60, 53, 10];
const arr2 = [30, 20, 50, 60, 10, 50];
const set2 = new Set(arr2);
console.log(set2)
const removeduplicates = [...new Set(arr1.filter(x => !set2.has(x)))];
console.log(removeduplicates);

//using for loop
const duplicates2 = [];
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
if(arr1[i] === arr2[j]){
    if(!duplicates2.includes(arr1[i])){
        duplicates2.push(arr1[i]);
    }
}

}

}
console.log(duplicates2);