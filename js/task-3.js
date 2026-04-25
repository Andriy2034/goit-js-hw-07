const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", (e) => {
  const normalizedName = event.currentTarget.value.trim();

  outputElem.textContent = normalizedName || "Anonymous";
});
