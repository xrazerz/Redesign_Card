// Start Write JS Code
let circles = document.querySelector(".circles");
circles.addEventListener("click", (e) => {
  let {target} = e;
  if (target.classList.contains("circle")) {
    circles.querySelector(".active").classList.remove("active");
    target.classList.add("active");
    document.querySelector("img.active").classList.remove("active");
    document.querySelector(`img.${target.id}`).classList.add("active");
  }
});