const ulElem = document.querySelector("#categories");
const liElems = ulElem.querySelectorAll(".item");

console.log(`Number of categories: ${liElems.length}`);

liElems.forEach((liElem) => {
  const h2Elem = liElem.querySelector("h2");
  const ulElem = liElem.querySelector("ul");
  const liElems = ulElem.querySelectorAll("li");
  console.log(`Category: ${h2Elem.textContent}`);
  console.log(`Elements: ${liElems.length}`);
});
