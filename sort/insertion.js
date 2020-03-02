const array = [5,32,2,1,5,3,44,32,3213,4];

// itrations = (n-1)*(n-1)/2
// O(n**2)
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length-1; i++) {
    for (let k = i+1; k < arr.length; k++) {
      if (arr[i] > arr[k]) {
        let tmp = arr[i]
        arr[i] = arr[k]
        arr[k] = tmp
      }
    }
  }
  return arr
};

console.log(`
  input array : ${array}\n
  output array : ${bubbleSort(array)}
`);
