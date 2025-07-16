// const myArray = [10, 20, 30];
// console.log(myArray);

// console.log(myArray[1]);
// myArray[0] = 99;
// console.log(myArray);

// [1, 'hello', true, { name: 'socks'}, [1, 2]];
// console.log(typeof myArray);
// console.log(Array.isArray(myArray));

// console.log(myArray.length);

// myArray.push(100);
// console.log(myArray);

// myArray.splice(0, 3);
// console.log(myArray);

// let i = 1;

// while(i <= 5){
//     console.log(i++);
// }

// for(let y = 1; y <= 10; y+=2){
//     console.log(y);
// }

// let random = 0;

// while(random  < 0.5){
//     random = Math.random();
//     console.log(random);
// }

// const todoList = [
//     'make dinner',
//     'wash dishes',
//     'watch youtube'
// ];

// for(let i = 0; i < todoList.length; i++){
//     const value = todoList[i];
//     console.log(value);
// }

// const nums = [1, 1, 3];

// let total = 0;

// for(let i = 0; i < nums.length; i++){
//     total += nums[i];
// }

// console.log(total);

// const numsDoubled = [];

// for(let i = 0; i < nums.length; i++){
//     numsDoubled[i] = nums[i] * 2;
// }

// console.log(numsDoubled);

const nums = [10, 20, 30];
nums[2] = 99;

function getLastValue(arr) {
  return arr[arr.length - 1];
}

console.log(getLastValue(nums));

function swapArray(arr) {
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
}

swapArray(nums);
console.log(nums);

function minMax(nums) {
  let minMax = {
    min: Number.MAX_VALUE,
    max: Number.MIN_VALUE,
  };

  if (nums.length == 0) {
    minMax.min = null;
    minMax.max = null;
    return minMax;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minMax.min) {
      minMax.min = nums[i];
    }

    if (nums[i] > minMax.max) {
      minMax.max = nums[i];
    }
  }

  return minMax;
}

const largeArr = [1];

console.log(minMax(largeArr));

function countWords(words){
    const wordFreq = {};

    for(let i = 0; i < words.length; i++){
        if(wordFreq[words[i]]){
            wordFreq[words[i]]++;
        }else{
            wordFreq[words[i]] = 1;
        }
    }

    return wordFreq;
}

const wordArr = ["hello", "world", "hello", "test"];

console.log(countWords(wordArr));

const array1 = [1, 2, 3];
const array2 = array1.slice();

array2.push(4);

console.log(array1);
console.log(array2);

const [firstValue, secondValue, thirdValue] = [1, 2 , 3];

for(let i = 1; i <=10; i++){

  if(i % 3 === 0){
    continue;
  }

  if(i === 8){
    break;
  }

  console.log(i);
}

let i = 1;

while(i <= 10){
  if(i % 2 === 0){
    i++;
    continue;
  }
  console.log(i++);
}

function doubleArray(nums){
  const numsDoubled = [];
  for(let i = 0; i < nums.length; i++){
    const num = nums[i];

    if(num === 0){
      return numsDoubled;
    }

    numsDoubled.push(num * 2);
  }

  return numsDoubled;
}

console.log(doubleArray([2, 4, 2, 0,  4, 6]));