let user = document.getElementById("name");
let stylebox = document.getElementById("meteoParis");
stylebox.style.display = "none";
user.addEventListener("change", () => {
  let userChoice;
  userChoice = user.value;
  fetch(`https://www.prevision-meteo.ch/services/json/${userChoice}`)
    .then((response) => response.json())
    .then((data) => {
      stylebox.style.display = "flex";
      let NomParis = document.getElementById("ville");
      NomParis.innerHTML = data.city_info.name;
      let TempsParis = document.getElementById("temps");
      TempsParis.innerHTML = `<img src="${data.fcst_day_0.icon_big}" alt="logo representant le temps actuel">`;
      let temperatureParis = document.getElementById("temperature");
      temperatureParis.innerHTML = `${data.current_condition.tmp}°C`;
      let tempmin = document.getElementById("min");
      let tempmax = document.getElementById("max");
      tempmin.innerHTML = `| min : ${data.fcst_day_0.tmin}°C |`;
      tempmax.innerHTML = `| max : ${data.fcst_day_0.tmax}°C |`;
      tempmin.style.color = `blue`;
      tempmax.style.color = `red`;
      let conditiontoday = document.getElementById("condition");
      conditiontoday.innerHTML = `${data.current_condition.condition}`;
    });
});
