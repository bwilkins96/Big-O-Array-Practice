const findMinimum = arr => { //t: O(n) s:O(1)
  let min = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {min = arr[i]}
  }

  return min;
};

const runningSum = arr => { //t: O(n) s: O(1)
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    arr[i] = sum;
  }

  return arr;
}

const evenNumOfChars = arr => { //t: O(n) s: O(1)
  let evenCount = 0;

  arr.forEach( str => {
    if (str.length % 2 === 0) {evenCount++}
  })

  return evenCount;
};

const smallerThanCurr = arr => { //t: O(n^2) s: O(n)
  const smallerArr = []; let smallerCount;

  arr.forEach( num => {
    smallerCount = 0;

    for(let i = 0; i < arr.length; i++) {
      if (arr[i] < num) {smallerCount++}
    }

    smallerArr.push(smallerCount)
  });

  return smallerArr;
};

const twoSum = (arr, target) => { // t: O(n^2) s: O(1)

  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {return true}
    }
  }

  return false;
};

const secondLargest = arr => { //t: O(2n) or O(n) s: O(1)
  if (arr.length < 2) {return}

  let largest = arr[0];
  let secondLargest = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {largest = arr[i]}
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {secondLargest = arr[i]}
  }

  if (secondLargest === -Infinity) {return largest}
  return secondLargest;
};


const shuffle = (arr) => { //t: O(2n) or O(n) s: O(2n) or O(n)
  const shuffledArr = []; const used = []; let randomIdx; let random = false;

  while (shuffledArr.length < arr.length) {
    randomIdx = Math.floor(Math.random() * arr.length)

    if (!used.includes(randomIdx)) {
      shuffledArr.push(arr[randomIdx]);
      used.push(randomIdx);
    }
  }

  return shuffledArr;
}


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
