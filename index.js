const product_listEl = document.querySelector(".product-section__product-list");

makeProducts();

function makeProducts() {
  for (let element of products) {
    console.log(element);

    html1 = `
    <div class="product">
          <div class="product__badge product__badge${element.badge}">${element.badge_text}</div>
          <img src="./images/${element.file}" class="product__image"></img>
          <div class="product__stock-stars">
    `;

    if (!element.instock) {
      html2 = `     
            <span class="product__stock-stars--out-of-stock">nicht im Lager</span>
            <span class="product__stock-stars--stars">
    `;
    } else {
      html2 = `     
            <span class="product__stock-stars--in-stock">im Lager</span>
            <span class="product__stock-stars--stars">
    `;
    }

    for (let i = 0; i < `${element.stars}`; i++) {
      html2 += `${star}`;
    }

    html3 = `       
            </span>
          </div>
          <div class="product__description">
            <div class="product__title"><h2>${element.title}</h2></div>
            <div class="product__text"><p>${element.text}</p></div>
          </div>
          <div class="product__price">
            <div class="product__price--reduce">${element.price_reduce}${element.price_unit}</div>
            <div class="product__price--basis">${element.price_basis}${element.price_unit}</div>
          </div>
        </div>
    `;

    product_listEl.innerHTML += html1 + html2 + html3;
  }
}
