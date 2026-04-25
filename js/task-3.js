const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", (e) => {
  const value = e.currentTarget.value.trim();
  outputElem.textContent = value || "Anonymous";
});
