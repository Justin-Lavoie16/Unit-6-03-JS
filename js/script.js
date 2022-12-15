/* Created by: Justin Lavoie *
 Created on: nov 2022 * 
*/

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-6-03-JS/sw.js", {
    scope: "/Unit-6-03-JS/",
  })
}

;("use strict")

const weather2 = async (URLAddress) => {
  try {
    const request = await fetch(URLAddress);
    const jsonData = await request.json();
    var temp1 = jsonData.main.temp;
    var temp2 = 0;
    const feeling = jsonData.weather[0];
    const image = feeling.icon;
    temp2 = temp1 - 273.15;
    
    console.log(jsonData.weather);
    document.getElementById("Image").innerHTML =
      "<img src='http://openweathermap.org/img/wn/" +
      image +
      "@2x.png' alt='Icon' width='10%'><br><h5>";
    (">");


    document.getElementById("TheWeather").innerHTML =
      "The Weather Right now is " + temp2.toFixed(2) + " °C";
  } catch (err) {
    console.log(err);
  }
};
weather2(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
);