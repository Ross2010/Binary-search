function findFloor(arr, x) {
    let res = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= x) {
        res = arr[i];
      }
    }
    console.log(res); 
    return res; 
  }
  
module.exports = findFloor