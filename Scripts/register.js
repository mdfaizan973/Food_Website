const loginform = document.querySelector("form");
const new_users = JSON.parse(localStorage.getItem("food_users")) || [];
loginform.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const pass = document.querySelector("#pass").value;

  if (username === "" || email === "" || pass === "") {
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
  } else {
    const userData = {
      username: username,
      email: email,
      pass: pass,
    };

    new_users.push(userData);
    localStorage.setItem("food_users", JSON.stringify(new_users));
    setTimeout(() => {
      swal(
        `${username.toUpperCase()}`,
        `You account created successfully`,
        "success"
      );
    }, 1200);
  }
});
