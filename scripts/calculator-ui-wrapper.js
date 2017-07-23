// initialization
var wrapper = {};
wrapper.inputClassName = "";
wrapper.inputEnergyId = "";
wrapper.inputLoseWeightId = "";
wrapper.inputFatPercentId = "";
wrapper.divAllPercentId = "";

/**
 *	@param objParam - initialization parameters, which contains:
 *		inputClassName
 *		inputEnergyId
 *		inputLoseWeightId
 *		inputFatPercentId
 *		inputSexMaleId
 *		inputSexFemaleId
 *		inputAgeYoungId
 *		inputAgeAverageId
 *		inputAgeOldId
 *		inputLifestyleSedentaryId
 *		inputLifestyleModerateId
 *		inputLifestyleActiveId
 *		divAllPercentId
 */
wrapper.init = function (inputClassName, inputEnergyId, inputLoseWeightId) {
	console.log("wrapper.init");
	this.inputClassName = objParam.inputClassName;
	this.inputEnergyId = objParam.inputEnergyId;
	this.inputFatPercentId = objParam.inputFatPercentId;
	this.divAllPercentId = objParam.divAllPercentId;
	calculator.setDefault();
	this.inputLoseWeightId = objParam.inputLoseWeightId;
	this.setInputsValues(objParam);
	this.onChange();
}

// setting the agreed values for inputs
wrapper.setInputsValues = function (objParam) {
	console.log("wrapper.setInputsValues");
	try {
		// sex
		var comp = document.getElementById(objParam.inputSexMaleId);
		comp.value = calculator.SEX_MALE;
		this.checkIfEquals("sex", comp);
		comp = document.getElementById(objParam.inputSexFemaleId);
		comp.value = calculator.SEX_FEMALE;
		this.checkIfEquals("sex", comp);
		// age
		comp = document.getElementById(objParam.inputAgeYoungId);
		comp.value = calculator.AGE_YOUNG;
		this.checkIfEquals("age", comp);
		comp = document.getElementById(objParam.inputAgeAverageId);
		comp.value = calculator.AGE_AVERAGE;
		this.checkIfEquals("age", comp);
		comp = document.getElementById(objParam.inputAgeOldId);
		comp.value = calculator.AGE_OLD;
		this.checkIfEquals("age", comp);
		// lifestyle
		comp = document.getElementById(objParam.inputLifestyleSedentaryId);
		comp.value = calculator.LIFESTYLE_SEDENTARY;
		this.checkIfEquals("lifestyle", comp);
		comp = document.getElementById(objParam.inputLifestyleModerateId);
		comp.value = calculator.LIFESTYLE_MODERATE;
		this.checkIfEquals("lifestyle", comp);
		comp = document.getElementById(objParam.inputLifestyleActiveId);
		comp.value = calculator.LIFESTYLE_ACTIVE;
		this.checkIfEquals("lifestyle", comp);
	} catch (e) {
		window.alert("wrapper.setInputsValues/" + e);
	}
}

// for short
wrapper.onWeightKeyPress = function () {
	return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46;
}

// for short
wrapper.checkIfEquals = function (name, comp) {
	console.log("wrapper.checkIfEquals");
	if (calculator[name] == comp.value) {
		comp.setAttribute("checked", "");
	} 
}

// event on change any parameter
wrapper.onChange = function () {
	console.log("wrapper.onChange");
	try {
		// read the entered data
		this.getValues();
		// calc energy
		calculator.calcEnergy();
		// output data
		var energyInput = document.getElementById(this.inputEnergyId);
		energyInput.innerHTML = calculator.energy + " cal";
		var loseWeigthInput = document.getElementById(this.inputLoseWeightId);
		loseWeigthInput.innerHTML = calculator.needEnergy + " cal";
		var inputFatPercentInput = document.getElementById(this.inputFatPercentId);
		inputFatPercentInput.innerHTML = calculator.needFat + " g";
		var divAllPercent = document.getElementById(this.divAllPercentId);
		var childBreakfast = divAllPercent.childNodes[1];
		childBreakfast.innerHTML = "Breakfast (25%): " + calculator.breakfastEnergy + " cal";
		var childLunch = divAllPercent.childNodes[3];
		childLunch.innerHTML = "Lunch (30%): " + calculator.lunchEnergy + " cal";
		var childDinner = divAllPercent.childNodes[5];
		childDinner.innerHTML = "Dinner (25%): " + calculator.dinnerEnergy + " cal";
		var childAdd = divAllPercent.childNodes[7];
		childAdd.innerHTML = "Additional snacks (20%): " + calculator.addEnergy + " cal";
	} catch (e) {
		window.alert("wrapper.onChange/" + e);
	}
}

// click-event on a div next to the check-input
wrapper.onCheckDivClick = function(elem) {
	console.log("wrapper.onCheckDivClick");
	try {
		var comp = document.getElementById(elem.getAttribute("inputid"));
		comp.click();
	} catch (e) {
		window.alert("wrapper.onCheckDivClick/" + e);
	}
}

// get all information that user can change
wrapper.getValues = function () {
	console.log("wrapper.getValues");
	var arrElements = document.getElementsByClassName(this.inputClassName);
	for (var i = 0; i < arrElements.length; i++) {
		if (arrElements[i].name == "weight") {
			calculator.weight = arrElements[i].value;
		} else {
			if (arrElements[i].checked) {
				if (arrElements[i].name == "sex") {
					calculator.sex = arrElements[i].value;
				} else if (arrElements[i].name == "age") {
					calculator.age = arrElements[i].value;
				} else if (arrElements[i].name == "lifestyle") {
					calculator.lifestyle = arrElements[i].value;
				}
			}
		}
	}
}