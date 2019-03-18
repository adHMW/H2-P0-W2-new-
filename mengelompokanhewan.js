function groupAnimals(animals) {

var a = animals.sort()
var b = a

//variable nampung
var tampung = []

for(i=0;i<b.length;i++){
var found = false
  for(var j = 0; j<tampung.length;j++){
  
  if(b[i][0]===tampung[j][0][0]){
    tampung[j].push(b[i])
    found = true
    }
  }
  if(found===false){
  tampung.push([a[i]])
    }
  }
    return tampung;
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]



