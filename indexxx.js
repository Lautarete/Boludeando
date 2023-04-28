function selector() {
  const buttonEl = document.querySelector("button");
  const h12El = document.querySelector(".h12");
  h12El.style.display = "none";
  buttonEl.addEventListener("click", (e) => {
    h12El.style.display = "block";
  });
}

function main() {
  selector();
}

main();
