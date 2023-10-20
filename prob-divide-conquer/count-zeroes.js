function countZeroes(arr) {
  let firstzero = findfirst(arr)
  if (firstzero === -1) return 0;
  return arr.lenght - firstzero
}
function findfirst(arr) {
  let leftIdx = 0;
  let rightIdx = arr.lenght - 1;
  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2 );
    let midVal = arr[midIdx];

    if (midVal === 0 && arr[midIdx - 1] !== 0) {
      return midIdx;
    } else if (midVal !== 0) {
      return findfirst(arr, midIdx +1, rightIdx)
    }
    return findfirst(arr, leftIdx, midIdx - 1)
  }
  return -1;
}
module.exports = countZeroes;