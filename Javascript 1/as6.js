var character = function character(name) {
	this.name = "Jyn";
	this.speed = 50;
	this.move = "upper-cut";
	this.special = "jumpkick";
	this.jump = "jumps";
	this.health = 30;
	
	this.run = function () {
		return document.write(this.name + " runs at a speed of " + this.speed + ".<br />");
		 
	};
	this.run();
	
	this.moves = function () {
		return document.write(this.name + " uses " + this.move + " when Cassian surprises her. <br />");
	}; 
	this.moves();
	/*
	this.specialMove = function (specialMove) {
		document.write(this.name + " uses " + this.special + " to defeat the stormtrooper.<br />");
		
	};
	
	this.specialMove();
	*/
	// Assignment 5
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
	
	// Assignment 6
	
	
	this.healthDecrease = function () {
		var min = 0; 
		var max = 10; 
		this.health -= Math.floor(Math.random() * (max - min + 1)) + min
		return this.health
	};
	this.healthIncrease = function () {
		var min = 0; 
		var max = 10; 
		this.health += Math.floor(Math.random() * (max - min + 1)) + min
		return this.health
	};

	
	// 0 then call the method that losses; 1 don’t call anything; 2 call the method that gains.
	for (var i = 0; i < 100; i++) {
		var random = Math.floor(Math.random()*3);
		
		if (this.health <= 0) {
					document.write(this.name + "'s health is currently " + this.health + " she is dead!<br />");
					break;
		}
		
		switch (random) {
			case 0: 
				document.write(this.name + " took a hit " + this.name + "'s health is currently " + this.healthDecrease() + ".<br />");
				break; 
			
			case 1:
				document.write(this.name + "'s health is currently " + this.health + ".<br />");
				break; 
			
			case 2: 
				document.write(this.name + "'s health is currently " + this.healthIncrease() + ".<br />");
				break;
			
			default:
				document.write("It's not working.");
				break;
			
			
		}
	};


};
	
	var character = new character("Jyn")
	
	
	
	
