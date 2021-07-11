function quickSort(
  compare,
  elements = [],
  lowerIndex = 0,
  upperIndex = elements.length - 1,
) {
  if (lowerIndex < upperIndex) {
    const index = partition(compare, elements, lowerIndex, upperIndex);
    quickSort(compare, elements, lowerIndex, index - 1);
    quickSort(compare, elements, index + 1, upperIndex);
  }
  return elements;
}

// partition is a helper function that does the bulk of the work for the quicksort function
function partition(compare, elements, lowerIndex, upperIndex) {
  const pivotValue = elements[upperIndex]; // upperIndex is last element in array
  let partitionIndex = lowerIndex; // lower index is first element in array

  for (let index = lowerIndex; index < upperIndex; index++) {
    const comparison = compare(pivotValue, elements[index]);
    // comparison value will be positive if the element value is greater than the pivot element

    if (comparison > 0) {
      if (partitionIndex !== index) {
        // there is no need to swap the elements if the index and partition element are equivalent.
        [elements[index], elements[partitionIndex]] = [
          elements[partitionIndex],
          elements[index],
        ];
        // Above swamps the elements
      }
      partitionIndex++;
    }
  }

  [elements[partitionIndex], elements[upperIndex]] = [
    elements[upperIndex],
    elements[partitionIndex],
  ];
  return partitionIndex;
}

module.exports = quickSort;
