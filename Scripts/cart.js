let cartData = JSON.parse(localStorage.getItem("cart_food_data"));
let tot_cart = document.querySelector("#item-count-num");
let tot_price = document.querySelector("#gst-div-total");
let gst_total = document.querySelector("#gst-div-subtotal");
let final_toal = document.querySelector("#gst-div-final");
let modal_text = document.querySelector("#food_name");
let totalcartitems = document.querySelector("#total-cart-item");

// Function to create the cart UI

if (cartData.length == 0) {
  let cartContainer = document.querySelector(".cart-container");
} else {
  function displayCartData(cartData) {
    let cartContainer = document.querySelector(".cart-container");
    cartContainer.innerHTML = "";

    // cart-length
    tot_cart.innerHTML = cartData.length;
    totalcartitems.innerHTML = cartData.length;
    //cart-price
    let total_cart_price = cartData.reduce((acc, ele) => acc + ele.price, 0);
    tot_price.innerHTML = total_cart_price.toFixed(2);

    //final-total
    let famount = (11 / 100) * total_cart_price;
    let newtot = total_cart_price - famount;
    final_toal.innerHTML = newtot.toFixed(2);

    // map-cart-data
    cartData.forEach((elem, idx) => {
      let card = document.createElement("div");
      card.setAttribute("class", "cart-item");
      let itemImg = document.createElement("img");
      itemImg.src = elem.images;
      itemImg.onclick = () => {
        addToDetails(elem);
      };

      let rightSideDiv = document.createElement("div");
      rightSideDiv.setAttribute("class", "right-side");

      let titleDiv = document.createElement("div");
      let title = document.createElement("h5");
      title.textContent = elem.name;
      let desc = document.createElement("p");
      desc.setAttribute("class", "item-des");
      desc.textContent = elem.description;

      modal_text.innerHTML = elem.name; // prod name

      titleDiv.append(title, desc);

      let priceDiv = document.createElement("div");
      priceDiv.setAttribute("class", "price-div");

      if (elem.price == NaN) {
        elem.price = `₹370 .00`;
      }
      priceDiv.textContent = `₹ ${elem.price}`;

      let qtyDiv = document.createElement("div");
      qtyDiv.setAttribute("class", "qty-div");

      let spanQty = document.createElement("span");
      spanQty.innerHTML = elem.quantity;
      spanQty.setAttribute("class", "qty-count");

      qtyDiv.append(spanQty);

      let removeBtn = document.createElement("button");
      removeBtn.setAttribute("class", "remove-btn");
      removeBtn.textContent = `Remove`;
      removeBtn.setAttribute("data-toggle", "modal");
      removeBtn.setAttribute("data-target", "#removedFromCartModal");
      removeBtn.onclick = function () {
        removeItem(idx);
      };

      rightSideDiv.append(titleDiv, priceDiv, qtyDiv, removeBtn);
      card.append(itemImg, rightSideDiv);

      cartContainer.append(card);
    });
  }
}
displayCartData(cartData);

// // remove item
function removeItem(idx) {
  cartData.splice(idx, 1);
  displayCartData(cartData);
  localStorage.setItem("cart_food_data", JSON.stringify(cartData));
  totalCartAmount();
  cartCount();
  checkCart();
}

function checkout() {
  window.location.href = "../HTML/checkout.html";
}
// Call the function to create the cart UI when the page loads

document.addEventListener("DOMContentLoaded", () => {
  createCartUI();
});
