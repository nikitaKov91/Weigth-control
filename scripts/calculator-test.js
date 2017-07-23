// initialization
var tester = {};
tester.testsCount = 18;
tester.runTests = true;

// initialization data for calculator
tester.init = function (sex, age, lifestyle, weight) {
	calculator.sex = sex;
	calculator.age = age;
	calculator.lifestyle = lifestyle;
	calculator.weight = weight;
	calculator.energy = 0;
}

tester.test0 = function () {
	tester.init(calculator.SEX_FEMALE, calculator.AGE_YOUNG, calculator.LIFESTYLE_SEDENTARY, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2177;
	result.value = calculator.energy;
	return result;
}

tester.test1 = function () {
	tester.init(calculator.SEX_FEMALE, calculator.AGE_YOUNG, calculator.LIFESTYLE_MODERATE, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2573;
	result.value = calculator.energy;
	return result;
}

tester.test2 = function () {
	tester.init(calculator.SEX_FEMALE, calculator.AGE_YOUNG, calculator.LIFESTYLE_ACTIVE, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2968;
	result.value = calculator.energy;
	return result;
}

tester.test3 = function () {
	tester.init(calculator.SEX_FEMALE, calculator.AGE_AVERAGE, calculator.LIFESTYLE_SEDENTARY, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 1837;
	result.value = calculator.energy;
	return result;
}

tester.test4 = function () {
	tester.init(calculator.SEX_FEMALE, calculator.AGE_AVERAGE, calculator.LIFESTYLE_MODERATE, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2171;
	result.value = calculator.energy;
	return result;
}

tester.test5 = function () {
	tester.init(calculator.SEX_FEMALE, calculator.AGE_AVERAGE, calculator.LIFESTYLE_ACTIVE, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2505;
	result.value = calculator.energy;
	return result;
}

tester.test6 = function () {
	tester.init(calculator.SEX_FEMALE, calculator.AGE_OLD, calculator.LIFESTYLE_SEDENTARY, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 1722;
	result.value = calculator.energy;
	return result;
}

tester.test7 = function () {
	tester.init(calculator.SEX_FEMALE, calculator.AGE_OLD, calculator.LIFESTYLE_MODERATE, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2036;
	result.value = calculator.energy;
	return result;
}

tester.test8 = function () {
	tester.init(calculator.SEX_FEMALE, calculator.AGE_OLD, calculator.LIFESTYLE_ACTIVE, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2349;
	result.value = calculator.energy;
	return result;
}

tester.test9 = function () {
	tester.init(calculator.SEX_MALE, calculator.AGE_YOUNG, calculator.LIFESTYLE_SEDENTARY, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2428;
	result.value = calculator.energy;
	return result;
}

tester.test10 = function () {
	tester.init(calculator.SEX_MALE, calculator.AGE_YOUNG, calculator.LIFESTYLE_MODERATE, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2869;
	result.value = calculator.energy;
	return result;
}

tester.test11 = function () {
	tester.init(calculator.SEX_MALE, calculator.AGE_YOUNG, calculator.LIFESTYLE_ACTIVE, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 3310;
	result.value = calculator.energy;
	return result;
}

tester.test12 = function () {
	tester.init(calculator.SEX_MALE, calculator.AGE_AVERAGE, calculator.LIFESTYLE_SEDENTARY, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2242;
	result.value = calculator.energy;
	return result;
}

tester.test13 = function () {
	tester.init(calculator.SEX_MALE, calculator.AGE_AVERAGE, calculator.LIFESTYLE_MODERATE, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2650
	result.value = calculator.energy;
	return result;
}

tester.test14 = function () {
	tester.init(calculator.SEX_MALE, calculator.AGE_AVERAGE, calculator.LIFESTYLE_ACTIVE, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 3058
	result.value = calculator.energy;
	return result;
}

tester.test15 = function () {
	tester.init(calculator.SEX_MALE, calculator.AGE_OLD, calculator.LIFESTYLE_SEDENTARY, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 1945;
	result.value = calculator.energy;
	return result;
}

tester.test16 = function () {
	tester.init(calculator.SEX_MALE, calculator.AGE_OLD, calculator.LIFESTYLE_MODERATE, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2299
	result.value = calculator.energy;
	return result;
}

tester.test17 = function () {
	tester.init(calculator.SEX_MALE, calculator.AGE_OLD, calculator.LIFESTYLE_ACTIVE, 100);
	calculator.calcEnergy();
	var result = {};
	result.expected = 2653;
	result.value = calculator.energy;
	return result;
}

// run all tests
tester.run = function() {
	if (tester.runTests == true) {
		var msg = "";
		for (var i = 0; i < 18; i++) {
			var name = "test" + i;
			var result = tester[name]();
			if (result.expected == result.value) {
				console.log(name + " successfully passes");
			} else {
				msg += msg == "" ? name : ", " + name;
				console.log(name + " fail: expected " + result.expected
					+ ", actually: " + result.value);
			}
		}
		if (msg == "") {
			console.clear();
			console.log("All tests passed successfully");
		} else {
			alert("Tests " + msg + " fail, the algorithm is incorrect");
		}
	}
}

// main
tester.run();