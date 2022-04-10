// define the class
var author = function() {
  this.name = 'J.K Rowling';
  this.book = 'Harry Potter';
  this.gender = 'Female';
};

Kitten.prototype.setName = function(name) {
  this.name = name;
};

Kitten.prototype.setColor = function(color) {
  this.color = color;
};

Kitten.prototype.setGender = function(gender) {
  this.gender = gender;
};

Kitten.prototype.save = function() {
  console.log(
    'saving ' + this.name + ', the ' +
    this.color + ' ' + this.gender + ' kitten...'
  );