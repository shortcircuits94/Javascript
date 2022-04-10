
// Variables 

var sides = [4,6,4];
var area = 2*(sides[0]*sides[1] + sides[1]*sides[2]+ sides[0]*sides[2]);
var result = "The size of the prisim sides are" + " " + sides[0] + ", " + sides[1] + ", " + sides[2] + " " + "making the area ";
var greeting = "Hello! ";
var message = greeting + result + area + "cm"; 

alert("" + message)

document.write("" + message);

