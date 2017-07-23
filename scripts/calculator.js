// initialization
var calculator = {};

// consts
calculator.SEX_MALE = "male";
calculator.SEX_FEMALE = "female";
calculator.AGE_YOUNG = "young";
calculator.AGE_AVERAGE = "average";
calculator.AGE_OLD = "old";
calculator.LIFESTYLE_SEDENTARY = "sedentary";
calculator.LIFESTYLE_MODERATE = "moderate";
calculator.LIFESTYLE_ACTIVE = "active";

// default settings
calculator.setDefault = function () {
	console.log("calculator.setDefault");
	this.sex = calculator.SEX_MALE;
	this.age = calculator.AGE_YOUNG;
	this.lifestyle = calculator.LIFESTYLE_SEDENTARY;
	this.weight = 100;
	this.energy = 0;
	this.needEnergy = 0;
	this.needFat = 0;
	this.breakfastEnergy = 0;
	this.lunchEnergy = 0;
	this.dinnerEnergy = 0;
	this.addEnergy = 0;
}

// calculation of energy consumed
calculator.calcEnergy = function () {
	console.log("calculator.calcEnergy");
	console.log("Data: ");
	console.log("sex " + calculator.sex);
	console.log("age " + calculator.age);
	console.log("lifestyle " + calculator.lifestyle);
	console.log("weight " + calculator.weight);
	this.energy = 0;
	// for men
	if (this.sex == calculator.SEX_MALE) {
		if (this.age == calculator.AGE_YOUNG) {
			this.energy = (0.0630 * this.weight + 2.8957) * 240;
		} else if (this.age == calculator.AGE_AVERAGE) {
			this.energy = (0.0484 * this.weight + 3.6534) * 240;
		} else if (this.age == calculator.AGE_OLD) {
			this.energy = (0.0491 * this.weight + 2.4587) * 240;
		}
	// for women
	} else if (this.sex == calculator.SEX_FEMALE) {
		if (this.age == calculator.AGE_YOUNG) {
			this.energy = (0.0621 * this.weight + 2.0357) * 240;
		} else if (this.age == calculator.AGE_AVERAGE) {
			this.energy = (0.0342 * this.weight + 3.5377) * 240;
		} else if (this.age == calculator.AGE_OLD) {
			this.energy = (0.0377 * this.weight + 2.7546) * 240;
		}
	}
	// activity
	if (this.lifestyle == calculator.LIFESTYLE_SEDENTARY) {
		this.energy *= 1.1;
	} else if (this.lifestyle == calculator.LIFESTYLE_MODERATE) {
		this.energy *= 1.3;
	} else if (this.lifestyle == calculator.LIFESTYLE_ACTIVE) {
		this.energy *= 1.5;
	}
	this.energy = Math.round(this.energy);
	this.calcPercents();
}

// counting different percentage of energy
calculator.calcPercents = function () {
	// for weight loss, you should consume 80% of the required energy
	this.needEnergy = Math.round(this.energy * 0.8);
	// the daily requirement of fats - 25% of the amount of calories
	// needed for weight loss, divided by 9
	this.needFat = Math.round(this.needEnergy / 36);
	// breakfast, 25%
	this.breakfastEnergy = Math.round(this.needEnergy * 0.25);
	// lunch, 30%
	this.lunchEnergy = Math.round(this.needEnergy * 0.3);
	// dinner, 25%
	this.dinnerEnergy = Math.round(this.needEnergy * 0.25);
	// additional snacks, 20%
	this.addEnergy = Math.round(this.needEnergy * 0.2);
}

calculator.setDefault();