// 'http://www.isleofskyeweather.co.uk/images/clouds/cirrusclouds01l.jpg'
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
                document.body.style.backgroundImage = "url('https://www.overflowglobal.com/wp-content/uploads/2018/01/heavenly-clouds.jpg')";

            } else if (iconName === `Rain`) {
                document.querySelector("#icon").innerHTML = `<i class="wi wi-rain"></i>`;
                document.body.style.backgroundImage = "url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/D8qa-2E/rainy-stormy-darkness-wet-weather-background-depressed-sad-background_bzxjr4x7h__F0000.png')";
            }else if (iconName === `Snow`) {
                document.querySelector("#icon").innerHTML = `<i class="wi wi-snow"></i>`;
                document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/r6VkCdQQdG0/maxresdefault.jpg')";
                document.body.style.color="white";
            } else if (iconName === `Sunny`) {
                document.querySelector("#icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
                document.body.style.backgroundImage = "url('http://images6.fanpop.com/image/photos/36600000/Sun-star-image-sun-star-36682661-1920-1080.jpg')";
            } else if (iconName === `Haze`) {
                document.querySelector("#icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
                document.body.style.backgroundImage = "url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/nz06K7R/dark-scary-lake-at-night-background-loop-raw-1-white-haze-floating-over-the-still-lake-surrounded-by-a-creepy-forest-seamless-looping-perfect-for-backgrounds-backdrops-intro-outro-or-credits-for-themes-like-halloween-apocalypse_v1-sfrwh__F0000.png')";

            } else if (iconName === `Clear`) {
                document.querySelector("#icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
                document.body.style.backgroundImage = "url('https://jooinn.com/images/blue-sky-99.jpg')";

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


