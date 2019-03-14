function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var tampung=0
  var hasil =0
  var j = arr.length-1
  var tampung2=0

  for(var i=0; i < j; i++){
    tampung += arr[i+1] - arr[i]
  }
  tampung2 = tampung/j
  if(tampung2 === (arr[2]-arr[1])){
    return true
  }else{
    return false
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false