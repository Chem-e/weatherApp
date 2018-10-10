
function initialize(){
  $(".form-control").keyup(function(event){
    if (event.keyCode === 13){
      $("#search-btn").click();
    }
  })
}
function getWeather(){
	document.querySelector(".info").style.display = "block";
	const cityName = document.querySelector("input").value;
  $.ajax({
   url:
   `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fb7296206e736a3c4c5c1e8718503389&units=metric`,
   success: function(data){
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp>span").innerHTML = Math.round(data.main.temp);
    document.querySelector(".description").innerHTML = data.weather[0].main;
    document.querySelector(".min").innerHTML = Math.round(data.main.temp_min);
    document.querySelector(".max").innerHTML = Math.round(data.main.temp_max);
    document.querySelector("#icon").innerHTML = "<img  class = 'bg-img' src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>";
    let time = new Date();
    let sunrise = new Date(data.sys.sunrise * 1000);
    let sunset = new Date(data.sys.sunset * 1000);
    let iconName = data.weather[0].main;
    if (iconName === `Clouds`) {
      document.querySelector("#icon").innerHTML = `<i class="wi wi-cloud"></i>`;
      document.body.style.backgroundImage = "url('images/clouds.jpg')";

    } else if (iconName === `Rain`) {
      document.querySelector("#icon").innerHTML = `<i class="wi wi-rain"></i>`;
      document.body.style.backgroundImage = "url('images/rain.jpg')";
    } else if (iconName === `smoke`) {
      document.querySelector("#icon").innerHTML = `<i class="wi wi-smoke"></i>`;
      document.body.style.backgroundImage = "url('images/smokey.jpeg')";
    }else if (iconName === `mist`) {
      document.querySelector("#icon").innerHTML = `<i class="wi wi-fog"></i>`;
      document.body.style.backgroundImage = "url('images/mist.jpg')";
    }else if (iconName === `fog`) {
      document.querySelector("#icon").innerHTML = `<i class="wi wi-fog"></i>`;
      document.body.style.backgroundImage = "url('images/fog.jpg')";
    }else if (iconName === `Snow`) {
      document.querySelector("#icon").innerHTML = `<i class="wi wi-snow"></i>`;
      document.body.style.backgroundImage = "url('images/snow.jpg')";
      document.body.style.color="white";
    } else if (iconName === `Sunny`) {
      document.querySelector("#icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
      document.body.style.backgroundImage = "url('images/sunny.jpg')";
    } else if (iconName === `Haze`) {
      document.querySelector("#icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
      document.body.style.backgroundImage = "url('images/haze.png')";

    } else if (iconName === `Clear`) {
      document.querySelector("#icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
      document.body.style.backgroundImage = "url('images/clear.jpg')";

    }
    else {
      document.querySelector("#icon").innerHTML = `Loading icon.....`;
    }
  },
  error: function (error) {
    console.log(error);
  }
})
}


