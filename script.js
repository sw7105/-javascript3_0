(function () {
  const z1_button = document.getElementById("z1");
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

  cw1.addEventListener("click", function () {
    //TODO
  });

  cw2.addEventListener("click", function () {
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
