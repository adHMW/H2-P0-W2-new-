//No 1

var i=0;
var text ='I love codding';
var text1 = 'I will become fullstack developer'

console.log('LOOPING PERTAMA');
while(i<20){
	i= i+2;
	console.log(i + ' - ' + text);
}

console.log('');
console.log('LOOPING KEDUA');
while(i>=2){
	console.log(i + ' - ' + text1);
	i= i-2;
	
}

//no 2

var i;
var text= 'I love coding';
var text1= 'I will become fullstack developer';
console.log('LOOPING PERTAMA')
for (i = 1; i <= 20; i++){
	console.log(i + ' - ' + text);
}

console.log('LOOPING KEDUA');

for (i = 20; i >= 1; i--){
	console.log(i + ' - '+ text1);
}

//no 3

var i=0;


console.log('===== GANJIL GENAP =====');
console.log('');
for (i = 1; i <= 100 ; i++) {
	if (i%2==1) {
		console.log(+ i + ' = GANJIL');
	}else if(i%2==0){
		console.log(+ i + ' = GENAP');
	}
}

console.log('');
console.log('===== KELIPATAN 3 =====');
console.log('');
for (i = 1; i <=100; i+=2) {
	if (i%3==0){
		console.log( +i+ ' = KELIPATAN 3');
	}
}

console.log('');
console.log('===== KELIPATAN 6 =====');
console.log('');
for (i = 1; i <=100; i+=5) {
	if (i%6==0){
		console.log( +i+ ' = KELIPATAN 6');
	}
}

console.log('');
console.log('===== KELIPATAN 10 =====');
console.log('');
for (i = 1; i <=100; i+=9) {
	if (i%10==0){
		console.log( +i+ ' = KELIPATAN 10');
	}
}
