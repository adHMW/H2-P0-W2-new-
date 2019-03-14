
function pasanganTerbesar(num) {
  // you can only write your code here! 
  var k = String(num)
  var l = k.length
  var m = Number(k[0]+k[1])


  for( var i = 0; i < l; i++){
    if (m < Number(k[i]+k[i+1])){
     m = Number (k[i]+k[i+1])
    }
  }
  return m
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99