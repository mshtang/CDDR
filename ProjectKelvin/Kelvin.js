function Kelvin() {
	// a variable
	var Kelvin = 293;
	var Celsius;
	// celsius (C) = 0K - 273
	Celsius = -273.15+Kelvin;
	// convert celsius to fahrenheit
	var Fahrenheit = Celsius * (9.0/5) + 32
	Fahrenheit = Math.floor(Fahrenheit)
	console.log(Fahrenheit)
	alert(Fahrenheit)
}