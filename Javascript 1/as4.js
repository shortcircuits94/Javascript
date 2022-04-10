var character = function character(name) {
	this.name = name;
	this.speed = 50;
	this.move = "upper-cut";
	this.special = "jumpkick";
	this.jump = "jumps";
	
	this.run = function () {
		return document.write(this.name + " runs at a speed of " + this.speed + ".<br />");
		 
	};
	this.run();
	
	this.moves = function () {
		return document.write(this.name + " uses " + this.move + " when Cassian surprises her. <br />");
	}; 
	this.moves();
	

	
	this.specialMove = function (specialMove) {
		document.write(this.name + " uses " + this.special + " to defeat the stormtrooper.");
		specialMove();
	};
	

};
	
	var character = new character("Jyn").specialMove()
	
	
	
	
