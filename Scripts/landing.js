let cartData = JSON.parse(localStorage.getItem("cart_food_data"));
const totalcartitems = document.querySelector("#total-cart-item");
totalcartitems.innerHTML = cartData.length;
