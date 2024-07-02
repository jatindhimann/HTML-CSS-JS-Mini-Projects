const navToggle = document.querySelector('.nav-toggle')
const options = document.querySelector('.options')

navToggle.addEventListener('click', function () {
  options.classList.toggle("show-links");
})
