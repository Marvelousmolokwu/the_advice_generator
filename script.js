const btn = document.querySelector(".change-advice");
btn.addEventListener("click", generateAdivce);

function generateAdivce() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `Oops! something went wrong. ${response.status} ${response.statusText}`
        );
      return response.json();
    })
    .then((data) => {
      const adviceText = document.querySelector(".advice");
      adviceText.textContent = JSON.stringify(data.slip.advice);
      const adviceId = document.querySelector(".adivce-id");
      adviceId.textContent = JSON.stringify(data.slip.id);
    })
    .catch((err) => console.log(err));
}
document.addEventListener("DOMContentLoaded", generateAdivce);
