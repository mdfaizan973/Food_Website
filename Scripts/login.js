const loginform = document.querySelector("form");
const new_users = JSON.parse(localStorage.getItem("food_users"));

loginform.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const pass = document.querySelector("#pass").value;

  const matchedUser = new_users.find(
    (user) => user.email === email && user.pass === pass
  );

  if (email === "" || pass === "") {
    swal({
      title: " Oops!",
      text: "Please fill all the fields",
    });
    return;
  } else if (pass.length !== 6) {
    swal({
      title: " Oops!",
      text: "Password length must be exactly 6 characters.",
    });
    return;
  } else if (matchedUser) {
    setTimeout(() => {
      swal(`${email}`, `Login successful!`, "success");
    }, 1500);

    setTimeout(() => {
      window.location.href = "../HTML/landing_home.html";
    }, 2500);
  } else {
    setTimeout(() => {
      swal(`${email}`, `Login failed. Incorrect email or password.y`, "error");
    }, 1500);
  }
});
