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
	
	this.jumps = function () {
		var randomNum = Math.floor((Math.random() * 10) + 1);
		document.write(this.name + " " + this.jump + " " + randomNum + " feet.<br />");
	};
	this.jumps();
	
		this.time = function () {
		var today = new Date();
		var year = today.getFullYear();
		var est = new Date ('April 25, 2015 15:45:55');
		var difference = today.getTime() - est.getTime();
		difference = (difference / 31556900000);
		document.write("It had been " + Math.ceil(difference) + " years since " + this.name + " had been here. <br />");
	};
	this.time();
	
	this.specialMove = function (specialMove) {
		document.write(this.name + " uses " + this.special + " to defeat the stormtrooper.");
		specialMove();
	};
	

};
	
	var character = new character("Jyn").specialMove()
	
	
	
	
