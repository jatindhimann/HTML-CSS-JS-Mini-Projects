const url = 'https://www.course-api.com/javascript-store-products'

const products = document.querySelector('.products-center')

const fetchProducts = async () => {
  products.innerHTML = '<div class="loading"></div>'
  try {
    const resp = await fetch(url)
    const data = await resp.json()
    const singleProduct = data
      .map((product) => {
        const format = product.fields.price / 100
        // console.log(product.id);
        // console.log(product)
        return `<a class="single-product" href="products.html?id=${product.id}">
            <img src="${product.fields.image[0].url}" class="single-product-img img" alt="title" />
            <footer>
              <h5 class="name">${product.fields.name}</h5>
              <span class="price">$${format}</span>
            </footer>
          </a>`
      })
      .join('')
    products.innerHTML = `<div class="products-container">${singleProduct};</div>`
    // console.log(data);
  } catch (error) {
    products.innerHTML = `<p class="error">There was an error</p>`
  }
}

fetchProducts()
