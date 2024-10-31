window.onload = () => {
  searchBtn = document.getElementById("search-btn");

  searchBtn.addEventListener("click", () => {
    const textbox = document.getElementById("superhero-input");
    const container = document.getElementById("result");

    let userInput = textbox.value;
    userInput.trim();

    if (userInput === "") {
      fetch("superheroes.php")
        .then((response) => response.text())
        .then((data) => {
          container.innerHTML = data;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      fetch(`superheroes.php?query=${encodeURIComponent(userInput)}`)
        .then((response) => response.text())
        .then((data) => {
          container.innerHTML = data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
};
