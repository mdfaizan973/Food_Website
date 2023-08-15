// let cartData = JSON.parse(localStorage.getItem("cart_food_data"));
const totalcartitems = document.querySelector("#total-cart-item");
// totalcartitems.innerHTML = cartData.length;
const handleredtolog = document.querySelector("#handleredtolog");
const currentuser = sessionStorage.getItem("cur_user_email");
const user_name = document.querySelector("#user_name");

//showing total item  in nava
const cartDataJSON = localStorage.getItem("cart_food_data");
const cartData = cartDataJSON ? JSON.parse(cartDataJSON) : [];

if (cartData.length === 0) {
  totalcartitems.innerHTML = 0;
} else {
  totalcartitems.innerHTML = cartData.length;
}

let sortname = currentuser.replace(/\@gmail\.com$/, "");
console.log(sortname);
user_name.innerHTML = sortname;

handleredtolog.addEventListener("click", function () {
  localStorage.removeItem("cart_food_data");
  sessionStorage.removeItem("cur_user_email");
});
