// Array is required to be already sorted

const binarySearch = (sortedArray, desiredNumber) => {
  let upperIndex = sortedArray.length - 1;
  let lowerIndex = 0;

  while (upperIndex > lowerIndex) {
    const currentIndex = Math.floor((upperIndex - lowerIndex) / 2) + lowerIndex;
    if (sortedArray[currentIndex] > desiredNumber) {
      upperIndex = currentIndex - 1;
    }
    if (sortedArray[currentIndex] < desiredNumber) {
      lowerIndex = currentIndex + 1;
    }
    if (sortedArray[currentIndex] === desiredNumber) {
      return sortedArray[currentIndex];
    }
  }
  if (sortedArray[lowerIndex] === desiredNumber) {
    return sortedArray[lowerIndex];
  }
  return null;
};

// eslint-disable-next-line no-console
console.log(binarySearch([2, 5, 6, 7, 18, 90], 18));
