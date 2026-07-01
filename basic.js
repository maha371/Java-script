//Map, filter, reduce

//1.Double only even numbers
const arr = [1, 2, 3, 4, 5, 6];
const result = arr.filter(num => num % 2 == 0).map(num=> num * 2);
console.log(result)

//2.Find sum of all numbers
const arr1 = [10, 20, 30];
const sum = arr1.reduce((acc, num)=> acc + num)
console.log(sum)

//3.Count occurrences of elements
const elements = ['a', 'b', 'a', 'c', 'b', 'a'];
const freq = elements.reduce((acc,curr)=> {
    acc[curr]= (acc[curr] || 0 ) + 1;
return acc;
},{});
console.log(freq)

//4.Remove duplicates from array
const arr3 = [1, 2, 2, 3, 4, 3];
const unique = arr3.filter((item,index)=>arr3.indexOf(item) === index)
console.log(unique)

//5.Get names of students who scored above 80
const students = [
    { name: 'A', marks: 90 },
    { name: 'B', marks: 60 },
    { name: 'C', marks: 85 },
  ];
const filter = students.filter(name=>name.marks > 80).map(name=>name.name) 
console.log(filter)

//6.Find maximum number
const arr4 = [5, 10, 3, 20];
const max = arr4.reduce((a,b)=>a>b ? a : b)
console.log(max)


//7.Convert array to object
const arr5 = ['a', 'b', 'c'];
const obj = arr5.reduce((acc,curr,index)=>{
    acc[curr] = index;
    return acc;
},{})
console.log(obj)

//8.Chain map + reduce (Total price)
const cart = [
    { price: 100, qty: 2 },
    { price: 50, qty: 4 }
  ];
const price = cart.map(item=>item.price * item.qty).reduce((a,b)=> a+b,0);
console.log(price)

//Find unique values using reduce (advanced)
const arr6 = [1, 2, 2, 3, 4, 3];
const uniqueValue = arr6.reduce((acc,num)=>{
    if(!acc.includes(num) ) acc.push(num);
    return acc;
},[])
console.log(uniqueValue)

//10.Separate even and odd numbers
const arr7 = [1, 2, 3, 4, 5];
const evenodd = arr7.reduce((acc,curr)=>{
    curr%2 === 0 ? acc.even.push(curr) : acc.odd.push(curr);
    return acc;
},{even:[], odd: []}
)
console.log(evenodd)


function secondLargest(arr){
    let largest = arr[0];
    let secondLargest = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(secondLargest([23,87,34,56,9]))

function reverseArray(arr){
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp
        left++;
        right--;
          
    }
  return arr;
}
console.log(reverseArray([20,43,3,422,53]))