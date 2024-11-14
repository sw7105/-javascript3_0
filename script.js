(function () {
  const z1_button = document.getElementById("z1");
  const z2_button = document.getElementById("z2");
  const api_input = document.getElementById("api_key");
  const page_input = document.getElementById("station_page");
  const answer = document.getElementById("answer");

  z1_button.addEventListener("click", function () {
    fetch("https://restcountries.com/v3.1/capital/Warsaw")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        let table = ` 
          <table class="table"><tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Population</th>
          <th>Region</th>
          <th>Subregion</th>
          </tr>`;
        for (country of array) {
          table += `  <tr>
          <td>${country.name.common}</td>
          <td>${country.capital[0]}</td>
          <td>${country.population}</td>
          <td>${country.region}</td>
          <td>${country.subregion}</td>
          </tr>`;
        }
        table += `</table>`;
        answer.innerHTML = table;
      });
  });

  z2_button.addEventListener("click", function () {
    fetch(
      `https://www.ncei.noaa.gov/cdo-web/api/v2/stations?offset=${page_input.value * 25}`,
      {
        headers: {
          token: api_input.value,
        },
      },
    )
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        if (array.status == "400") {
          answer.innerHTML = JSON.stringify(array);
          return;
        }

        let table = ` 
          <table class="table"><tr>
          <th>Station ID</th>
          <th>Name</th>
          <th>State</th>
          <th>Latitude</th>
          <th>Longitude</th>
          </tr>`;
        for (s of array.results) {
          table += `  <tr>
          <td>${s.id}</td>
          <td>${s.name.split(", ")[0]}</td>
          <td>${s.name.split(", ")[1]}</td>
          <td>${s.latitude}</td>
          <td>${s.longitude}</td>
          </tr>`;
        }
        table += `</table>`;
        answer.innerHTML = table;
      });
  });
})();
