let discription_data = JSON.parse(localStorage.getItem("food_cart"));

let add_cart = JSON.parse(localStorage.getItem("cart_food_data")) || [];
let modal_text = document.querySelector("#food_name");

let cartData = JSON.parse(localStorage.getItem("cart_food_data"));
const totalcartitems = document.querySelector("#total-cart-item");
totalcartitems.innerHTML = cartData.length;
// showdata
// --
const handleredtolog = document.querySelector("#handleredtolog");
const currentuser = sessionStorage.getItem("cur_user_email");
const user_name = document.querySelector("#user_name");

let sortname = currentuser.replace(/\@gmail\.com$/, "");

user_name.innerHTML = sortname;

handleredtolog.addEventListener("click", function () {
  sessionStorage.removeItem("cur_user_email");
});
// --
showDetails(discription_data);

function showDetails(product) {
  const detailsContainer = document.querySelector(".food-details");
  detailsContainer.innerHTML = "";

  const detailsContent = document.createElement("div");
  detailsContent.classList.add("food-details-content");

  const img = document.createElement("img");
  img.src = product.images;
  img.alt = product.name;

  const name = document.createElement("h1");
  name.textContent = product.name;
  modal_text.innerHTML = product.name;

  const type = document.createElement("p");
  type.textContent = `Type: ${product.type}`;

  const price = document.createElement("p");
  price.textContent = `Price: $${product.price}`;

  const description = document.createElement("p");
  description.textContent = product.description;

  const button = document.createElement("button");
  button.textContent = `Add to Cart`;
  button.classList.add("add-to-cart-btn"); // Adding a custom class for styling
  button.setAttribute("data-toggle", "modal");
  button.setAttribute("data-target", "#addedToCartModal");

  button.addEventListener("click", function () {
    add_cart.push(product);
    console.log(add_cart);
    localStorage.setItem("cart_food_data", JSON.stringify(add_cart));
  });

  detailsContent.appendChild(img);
  detailsContent.appendChild(name);
  detailsContent.appendChild(type);
  detailsContent.appendChild(price);
  detailsContent.appendChild(description);
  detailsContent.appendChild(button);

  detailsContainer.appendChild(detailsContent);
  detailsContainer.style.display = "block";
}
