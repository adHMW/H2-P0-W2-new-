function angkaPalindrome(num) {
  function cekangka(num) {
    
    var i = 0
    var j = 0
    var hasil = 0
    
    if(i = num){ 
      while (i > 0) {
      j = i % 10;
      i = parseInt(i / 10);
      hasil = hasil * 10 + j;
      }
    } 
    return hasil === num;
  }
  
  var cek = 0;
  for (var k = num + 1; k < num * 2; k++) {
    if (cekangka(k)) {
      cek = k;
      break;
    }
  }
  
  return cek;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001