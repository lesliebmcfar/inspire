function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		var far = Math.floor(1.8 * ( weather.main.temp - 273) + 32) 
		var weatherElem = ""
		var template = ""
		console.log(weather)
		console.log("City: ", weather.name)
		
		console.log("temp: ", far);
		template +=`
		<div class="div">
		<h2>The Weather Right Now In ${weather.name} </h2>
		 <h4>Temperature: ${far} degrees</h4>
		 <h4>${weather.weather[0]} </h4>

		
		`
		document.getElementById("weather").innerHTML= template
		//What can you do with tis weather object?
	})

}
