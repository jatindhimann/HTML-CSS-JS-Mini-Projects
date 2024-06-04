const navToggle = document.querySelector(".nav-toggle");
const options = document.querySelector(".options");

navToggle.addEventListener("click", function () {
  // console.log(links.classList.contains("links"));
  if (options.classList.contains("show-links")) {
    options.classList.remove("show-links");
  } else {
    options.classList.add("show-links");
  }
  // links.classList.toggle("show-links"); -> imo
});
