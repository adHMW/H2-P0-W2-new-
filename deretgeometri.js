function tentukanDeretGeometri(arr) {

var tampung=0
  var hasil =0
  var j = arr.length-1
  var tampung2=0

  for(var i=0; i < j; i++){
    tampung += arr[i+1] / arr[i]
  }
  tampung2 = tampung/j
  if(tampung2 === (arr[2]/arr[1])){
    return true
  }else{
    return false
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false