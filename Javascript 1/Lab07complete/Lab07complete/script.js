// create boat object
var boat = {
	personWeight : 113,
	winterClothes : 2.8,
	capacity : 24000,
	numCrew : 15,
	winter : false,
	cargo : [1000, 5500, 2000, 3500, 4000, 6000],

	cargoWeight : function () {
		var i, total = 0;
		for (i = 0; i < this.cargo.length; i++) {
			total += this.cargo[i];
		}
		return total;
	},

	crewWeight : function () {
		var total = 0;
		total = this.numCrew * this.personWeight;
		if (this.winter) {
			total += this.numCrew * this.winterClothes;
		}
		return total;
	},

	isSafeToSail : function (safe, unsafe) {
		var total = this.cargoWeight() + this.crewWeight();
		if (total < this.capacity) {
			safe();
		} else {
			unsafe();
		}
	}

};
// end boat object


// set properties of boat object
boat.numCrew = 23;
boat.winter = true;
boat.cargo = [500, 4000, 3400, 5000, 6700];

// create two callback functions
var safeFunction = function () {
	console.log('It is safe to sail today');
};

var unsafeFunction = function () {
	console.log('Do not sail today. Better get rid of some weight.')
};

// call isSafeToSail method passing two callback functions
// one callback function will be run depending on whether it is safe to sail or not
boat.isSafeToSail(safeFunction, unsafeFunction);










