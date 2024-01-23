const API = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&icon-metric&appid={API key}';

const KEY = 'b1c7df6416bb04f0e0762d13a937f46b';



const getData = async (cityName) =>{
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b1c7df6416bb04f0e0762d13a937f46b`);
    const data = request.json();
    return data
}




// getData('London').then((data)=>{
    
// });