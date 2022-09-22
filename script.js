let user = document.getElementById("name");

user.addEventListener("change", () => {
  let userChoice;
  userChoice = user.value;
  fetch(`https://www.prevision-meteo.ch/services/json/${userChoice}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let NomParis = document.getElementById("ville");
      NomParis.innerHTML = data.city_info.name;
      let TempsParis = document.getElementById("temps");
      TempsParis.innerHTML = `<img src="${data.fcst_day_0.icon_big}" alt="logo representant le temps actuel à Paris">`;
      let temperatureParis = document.getElementById("temperature");
      temperatureParis.innerHTML = `${data.current_condition.tmp}°C`;
    });
});
