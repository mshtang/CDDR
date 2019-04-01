function makeArrangements() {
	var fromUS = document.querySelector('input[name="company"]:checked').value;
	var hasDev = document.querySelector('input[name="member"]:checked').value;
	fromUS = parseInt(fromUS)
	hasDev= parseInt(hasDev)
	var num = 0;
	if(fromUS && hasDev){
		var min = 1;
		var max = 500;
		num = Math.floor(Math.random() * (max-min+1))+min;
	}
	else if(!fromUS){
		var min = 501;
		var max = 1000;
		num = Math.floor(Math.random()* (max-min+1))+min;
	} else{
		num = Math.floor(Math.random()*1000)+1000;
	}
	var interviewDay = "";
	if(num>=0 && num<=100){
		interviewDay="Monday";
	} else if(num>=101 && num <=200){
		interviewDay="Tuesday";
	} else if(num>=201 && num <= 300){
		interviewDay="Wednesday";
	} else if(num>=301 && num <= 400){
		interviewDay="Thursday";
	} else if(num>=401 && num<=500){
		interviewDay="Friday";
	} else{
		interviewDay="Saturday";
	}
	document.getElementById("showArrangements").innerHTML = "Your interview is on: " + interviewDay;
	var accepted = []
	var i = 0
	for(i=0;i<1000;i++){
		var tmp = Math.floor(Math.sqrt(i));
		if(isPrime(tmp)){
			accepted.push(i);
		}
	}
	var resultToShow = "";
	for(i=0;i<accepted.length;i++){
		resultToShow= resultToShow + accepted[i].toString()+" ";
	}
	document.getElementById("showAccepted").innerHTML = resultToShow;
}

function isPrime(num) {
	for(var i=2;i<=Math.sqrt(num);i++)
		if(num%i===0) return false;
	return num>1;
}