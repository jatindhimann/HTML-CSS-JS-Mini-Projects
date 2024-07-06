const navToggle = document.querySelector('.nav-toggle')
const options = document.querySelector('.options')

navToggle.addEventListener('click', function () {
  options.classList.toggle("show-links");
})

const data = [...document.querySelectorAll('.data')]

const updateCount = (item) => {
  const value = parseInt(item.dataset.val);
  const id = parseInt(item.dataset.id);

  const increment = Math.ceil(value / 1000)
  let initialValue = 0

  const increaseCount = setInterval(() => {
    initialValue += increment

    if (initialValue > value) {
      if(id == 1){
        item.textContent = `${value}k+`
      }else{
        item.textContent = `${value}+`
      }
      clearInterval(increaseCount)
      return
    }
    item.textContent = `${initialValue}+`
  }, 10)
}

data.forEach((item) => {
  updateCount(item)
})