function showCurrentTime(params) {
  //PRETORIA
  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement =
      johannesburgElement.querySelector(".current-date");
    let johannesburgTimeElement =
      johannesburgElement.querySelector(".current-time");
    let johannesburgTime = moment().tz("Africa/Johannesburg");

    johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
    johannesburgTimeElement.innerHTML = johannesburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //NAIROBI
  let nairobiElement = document.querySelector("#nairobi");
  if (nairobiElement) {
    let nairobiDateElement = nairobiElement.querySelector(".current-date");
    let nairobiTimeElement = nairobiElement.querySelector(".current-time");
    let nairobiTime = moment().tz("Africa/Nairobi");

    nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
    nairobiTimeElement.innerHTML = nairobiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //HARARE
  let harareElement = document.querySelector("#harare");
  if (harareElement) {
    let harareDateElement = harareElement.querySelector(".current-date");
    let harareTimeElement = harareElement.querySelector(".current-time");
    let harareTime = moment().tz("Africa/Harare");

    harareDateElement.innerHTML = moment().format("MMMM Do YYYY");
    harareTimeElement.innerHTML = harareTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="current-date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="current-time">${cityTime.format(
      "h:mm:ss"
    )} <small>${cityTime.format("A")}</small></div>
  </div>
  <a href="index.html">All Cities</a>
  `;
}

showCurrentTime();
setInterval(showCurrentTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
