function findRotatedIndex(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    while (leftIdx <= rightIdx) {
      let midIdx = Math.floor((leftIdx + rightIdx) / 2);
      let midVal = arr[midIdx];
  
      if (target === midVal) {
        return midIdx;
      } else if (target < midVal && target < leftIdx) {
        leftIdx = midIdx + 1; // Search on left half.
      } else {
        rightIdx = midIdx - 1; // Search on right half.
      }
    }
  
    return -1; // Element not found.
  }
module.exports = findRotatedIndex

//[6, 7, 8, 9, 1, 2, 3, 4], 3.toBe(6)

               7