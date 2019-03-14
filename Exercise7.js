
function hitungJumlahKata(kalimat) {
  // you can only write your code here! 
  var i = 0
  var j = 0
  var spasi = ' '

  while (i < kalimat.length){
     if (i === 0){
       j+=1 
     }

     if (kalimat[i-1]=== spasi){
       j+=1
     }
  i++
  }
  return j
}


// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5