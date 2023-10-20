function sortedFrequency(arr, target) {
    let firstIdx = findfirst(arr, target);
    let lastIdx = findlast(arr, target);
    if (firstIdx === -1 || lastIdx === -1) {
        return -1;
    }
    return lastIdx - firstIdx + 1;
}

function findfirst(arr, target, head = 0, tail = arr.length - 1) {
    while (head <= tail) {
        let midIdx = Math.floor((head + tail) / 2);
        let midVal = arr[midIdx];
        if (midVal === target && (midIdx === 0 || arr[midIdx - 1] !== target)) {
            return midIdx;
        } else if (midVal === target) {
            tail = midIdx - 1;
        } else {
            head = midIdx + 1;
        }
    }
    return -1; 
}

function findlast(arr, target, head = 0, tail = arr.length - 1) {
    while (head <= tail) {
        let midIdx = Math.floor((head + tail) / 2);
        let midVal = arr[midIdx];
        if (midVal === target && (midIdx === arr.length - 1 || arr[midIdx + 1] !== target)) {
            return midIdx;
        } else if (midVal === target) {
            head = midIdx + 1;
        } else {
            tail = midIdx - 1;
        }
    }
    return -1;
}
module.exports = sortedFrequency
