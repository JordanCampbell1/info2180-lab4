const loadSuperHeroes = () => {
  fetch("superheroes.php")
    .then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

window.onload = () => {
  searchBtn = document.getElementById("search-btn");

  searchBtn.addEventListener("click", loadSuperHeroes);
};
