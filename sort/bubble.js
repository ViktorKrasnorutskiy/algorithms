const array = [5,32,2,1,5,3,44,32,3213,4];

// itrations = (n-1)*(n-1)
// O(n**2)
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length-1; i++) {
    for (let k = 0; k < arr.length-1; k++) {
      if (arr[k] > arr[k+1]) {
        let tmp = arr[k+1]
        arr[k+1] = arr[k]
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
