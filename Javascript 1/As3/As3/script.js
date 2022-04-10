var dog; 
var duck; 

var dog = (function() {
	var sound = "woof";
	return "The dog says " + sound + ".";
}());


var duck = (function() {
	var sound = "quack";
	return "The duck says " + sound + ".";
}());
console.log(dog, duck);