// * name input & error variable
let var_name =
  document.getElementById(
    "user_name"
  );
let var_name_err =
  document.getElementById(
    "name_err"
  );

// * email input & error variable
let var_email =
  document.getElementById(
    "email"
  );
let var_email_err =
  document.getElementById(
    "email_err"
  );
let var_email_rgx =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// * password input & error variable
let var_password =
  document.getElementById(
    "password"
  );
let var_password_err =
  document.getElementById(
    "password_err"
  );
let var_password_rgx =
  new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

// * form validation code start
function form_validation() {
  // todo=> name input validation start
  if (var_name.value == "") {
    var_name_err.innerHTML =
      "Enter your name";

    var_name.focus();
    var_name_err.style.display =
      "block";
    return false;
  }
  // todo=> name input validation end

  // todo=> email input validation start
  else if (
    var_email.value == ""
  ) {
    var_email_err.innerHTML =
      "Enter your email";

    var_email.focus();
    email_err.style.display =
      "block";
    return false;
  } else if (
    !var_email_rgx.test(
      var_email.value
    )
  ) {
    var_email_err.innerHTML =
      "Enter valid email";

    email_err.style.display =
      "block";
    return false;
  }
  // todo=> email input validation end

  // todo=> password input validation start
  else if (
    var_password.value == ""
  ) {
    var_password_err.innerHTML =
      "Enter your Password";

    var_password.focus();
    password_err.style.display =
      "block";
    return false;
  } else if (
    !var_password_rgx.test(
      var_password.value
    )
  ) {
    var_password_err.innerHTML =
      "Password must be 8 character and A-z , 0-9 and special characters ";
    var_password_err.style.display =
      "block";
    return false;
  }
}

// removing error msg after fill input
function remove() {
  if (var_name.value != "") {
    var_name_err.innerHTML =
      "";
    var_name_err.style.display =
      "none";
  }

  if (var_email.value != "") {
    var_email_err.innerHTML =
      "";
    var_email_err.style.display =
      "none";
  }

  if (
    var_password.value != ""
  ) {
    var_password_err.innerHTML =
      "";
    var_password_err.style.display =
      "none";
  }
}

var_name.addEventListener(
  "blur",
  remove
);

var_email.addEventListener(
  "blur",
  remove
);

var_password.addEventListener(
  "blur",
  remove
);

// * password toggle
let var_password_toggle =
  document.getElementById(
    "password-toggle"
  );

var_password_toggle.addEventListener(
  "click",
  function () {
    if (
      var_password.type ===
      "password"
    ) {
      var_password.type =
        "text";
      var_password_toggle.textContent =
        "Hide";
    } else {
      var_password.type =
        "password";
      var_password_toggle.textContent =
        "Show";
    }
  }
);

// * Showing Registration Successful Msg on form Submit
let form_submit =
  document.getElementById(
    "myForm"
  );

let var_success_msg =
  document.getElementById(
    "success_msg"
  );

form_submit.addEventListener(
  "submit",
  function (event) {
    // Display success message
    var_success_msg.style.display =
      "block";
    // return false;

    // Clear form inputs
    var_name.value = "";
    var_email.value = "";
    var_password.value = "";

    // Set a timeout to hide the success message after 3000 milliseconds (3 seconds)
    setTimeout(function () {
      var_success_msg.style.display =
        "none";
    }, 1000);
  }
);

// success msg fade out
// if (var_success_msg.value != "") {
//   function fadeOutEffect() {
//     var fadeTarget =
//       document.getElementById(
//         "target"
//       );
//     var fadeEffect =
//       setInterval(
//         function () {
//           if (
//             !fadeTarget.style
//               .opacity
//           ) {
//             fadeTarget.style.opacity = 1;
//           }
//           if (
//             fadeTarget.style
//               .opacity > 0
//           ) {
//             fadeTarget.style.opacity -= 0.3;
//           } else {
//             clearInterval(
//               fadeEffect
//             );
//           }
//         },
//         100
//       );
//   }

//   document
//     .getElementById("target")
//     .addEventListener(
//       "click",
//       fadeOutEffect
//     );
// }
