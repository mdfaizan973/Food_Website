let cartData = JSON.parse(localStorage.getItem("cart_food_data"));
const totalcartitems = document.querySelector("#total-cart-item");
totalcartitems.innerHTML = cartData.length;
const handleredtolog = document.querySelector("#handleredtolog");
const currentuser = sessionStorage.getItem("cur_user_email");
const user_name = document.querySelector("#user_name");

let sortname = currentuser.replace(/\@gmail\.com$/, "");

user_name.innerHTML = sortname;

handleredtolog.addEventListener("click", function () {
  sessionStorage.removeItem("cur_user_email");
});
