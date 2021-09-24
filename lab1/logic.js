function sum () {
	var a = document.getElementById('variableFirst').value;
	var b = document.getElementById('variableSecond').value;
	if(isNaN(parseFloat(a)) || isNaN(parseFloat(b))){
		alert("Вы не ввели число!");
	} else {
		alert("Ответ: " + (parseFloat(a) + parseFloat(b)));
	}
}

function dif () {
	var a = document.getElementById('variableFirst').value;
	var b = document.getElementById('variableSecond').value;
	if(isNaN(parseFloat(a)) || isNaN(parseFloat(b))){
		alert("Вы не ввели число!");
	} else{
		alert("Ответ: " + (parseFloat(a) - parseFloat (b)));
	}
}


function mult () {
	var a = document.getElementById('variableFirst').value;
	var b = document.getElementById('variableSecond').value;
	if(isNaN(parseFloat(a)) || isNaN(parseFloat(b))){
		alert("Вы не ввели число!");
	} else {
		alert("Ответ: " + (parseFloat(a) * parseFloat(b)));
	}
}

function div () {
	var a = document.getElementById('variableFirst').value;
	var b = document.getElementById('variableSecond').value;
	if(isNaN(parseFloat(a)) || isNaN(parseFloat(b))){
		alert("Вы не ввели число!");
	} else if (parseFloat(b) === 0){
		alert("На ноль делить нельзя!");
	}
	else {
		alert("Ответ: " + (parseFloat(a) / parseFloat(b)));
	}
}

