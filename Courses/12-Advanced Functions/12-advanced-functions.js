/*
function greeting () {
	console.log('hello');
}

greeting();

const num = 2;

const function1 = function greeting() {
	console.log("hello2")
};

console.log(function1);
console.log(typeof function1)

const object1 = {
	num: 2,
	fun: function() {
		console.log('hello3');
	}
}

object1.fun();

function display(param) {
	console.log(param);
}

display(2);

function run(param) {
	param();
}

run(function () {
	console.log('hello4');
});
*/

/*
setTimeout(function (){
	console.log('timeout')
	console.log('timeout2')
}, 3000);

console.log('next line')

setInterval(function () {
	console.log('interval');
}, 3000);

console.log('next line2')
*/

[
	'make dinner',
	'wash didhes',
	'watch youtube'
].forEach((value, index) => {
	if (value === 'wash dishes') {
		return;
	}
	

	console.log(index);
	console.log(value);
}) 


const regularFunction = function(param, param2) {
	console.log('hello');
	return 5;
};

const arrowFunction = (param, param2) => {
	console.log('hello');
	return 5;
};

arrowFunction();

const oneParam = (param) => {
	console.log(param + 1);
};

oneParam(2);

const oneLine = () => 2 + 3; 
console.log(oneLine());