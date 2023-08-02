let cartData = JSON.parse(localStorage.getItem("cart_food_data"));
const totalcartitems = document.querySelector("#total-cart-item");
totalcartitems.innerHTML = cartData.length;

const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const handlepay = document.querySelector("#handlepay");
const cardnumber = document.querySelector("#card-number");
const expiry = document.querySelector("#expiry");
const cvv = document.querySelector("#cvv");

handlepay.addEventListener("click", function (e) {
  e.preventDefault();
  if (cardnumber.value == "" || expiry.value == "" || cvv.value == "") {
    setTimeout(() => {
      swal({
        title: " Oops!",
        text: "You are missing some fields",
      });
    }, 1200);
  } else {
    setTimeout(() => {
      window.location.href = "../HTML/Donepage.html";
    }, 1500);
  }
});

function createCartItem(item) {
  const cartItemDiv = document.createElement("div");
  cartItemDiv.classList.add(
    "order-item",
    "d-flex",
    "align-items-center",
    "mb-3"
  );

  const itemImage = document.createElement("img");
  itemImage.src = item.images;
  itemImage.alt = item.name;
  itemImage.classList.add("mr-3");
  itemImage.width = 80;
  itemImage.height = 80;

  const itemContent = document.createElement("div");

  const itemName = document.createElement("h5");
  itemName.textContent = item.name.substring(0, 15) + "....";

  const itemPrice = document.createElement("p");
  itemPrice.innerHTML = `Price: $<span class="price">${item.price.toFixed(
    2
  )}</span>`;

  itemContent.appendChild(itemName);
  itemContent.appendChild(itemPrice);

  cartItemDiv.appendChild(itemImage);
  cartItemDiv.appendChild(itemContent);

  return cartItemDiv;
}

function displayCartItems(cartdata) {
  cartdata.forEach((item) => {
    const cartItemElement = createCartItem(item);
    cartItemsContainer.appendChild(cartItemElement);
  });
}

function calculateTotalPrice(cartdata) {
  const totalPrice = cartdata.reduce((total, item) => total + item.price, 0);
  const discount = totalPrice * 0.11;
  const discountedTotal = totalPrice - discount;

  totalPriceElement.textContent = discountedTotal.toFixed(2);
}

displayCartItems(JSON.parse(localStorage.getItem("cart_food_data")));
calculateTotalPrice(JSON.parse(localStorage.getItem("cart_food_data")));
