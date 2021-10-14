let searchForm = document.getElementById("search-submit");
let searchInput = document.getElementById("input");
let cityDiv = document.getElementById("city");
let img = document.getElementById("img");
let wind = document.getElementById("wind");
let desc = document.getElementById("description");
let temperaturaValor = document.getElementById("degrees");
const btn = document.getElementById("btn");


const displayData=(obj)=>{
    console.log(obj);
   temperaturaValor.textContent = Math.floor(obj.main.temp) + " °C";
   wind.textContent = obj.wind.speed + " m/s";

   let description = obj.weather[0].description;

desc.textContent = description;

   switch (obj.weather[0].main) {
    case 'Thunderstorm':
      img.src='animated/thunder.svg'
      console.log('TORMENTA');
      break;
    case 'Drizzle':
      img.src='animated/rainy-2.svg'
      console.log('LLOVIZNA');
      break;
    case 'Rain':
      img.src='animated/rainy-7.svg'
      console.log('LLUVIA');
      break;
    case 'Snow':
      img.src='animated/snowy-6.svg'
        console.log('NIEVE');
      break;                        
    case 'Clear':
        img.src='animated/day.svg'
        console.log('LIMPIO');
      break;
    case 'Atmosphere':
      img.src='animated/weather.svg'
        console.log('ATMOSFERA');
        break;  
    case 'Clouds':
        img.src='animated/cloudy-day-1.svg'
        console.log('NUBES');
        break;  
    default:
      img.src='animated/cloudy-day-1.svg'
      console.log('por defecto');

  }

}; 


btn.addEventListener('click', () =>{
   input.value
});

const getWeatherData = async (city) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=bcd44a3d190ad15b155fd420127f3eab`)

    const data = await res.json();


    displayData(data);

}

searchForm.addEventListener("submit", e => {
   e.preventDefault();
   getWeatherData(searchInput.value)
 
   cityDiv.textContent = searchInput.value;

   

});


