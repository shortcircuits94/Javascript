var superHero = function (name) {
    this.name = name;
    this.speed = 7;
    this.defaultEnergy = 20;
    this.energyUsed = 10;
    this.flyAbility = true;   
};

superHero.prototype = {
        description: function (energyLevel) {
        document.write(this.name + " has the capability to hold the hummer.");
        document.write(this.energyLevel());
    },
    energyLevel : function () {
        return ("<br>Current energy level is " + (this.defaultEnergy - this.energyUsed));
    }
}

var hero = new superHero("Thor").description();