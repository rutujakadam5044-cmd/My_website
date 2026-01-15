let helloBtn =
document.getElementById("helloBtn");
helloBtn.addEventListener("click", function () {
  alert ("Hello ! Welcome to my website");
});
let submitBtn =
document.getElementById("submitBtn");
let nameInput =
document.getElementById("nameInput");
submitBtn.addEventListener("click", function () {
  let name = nameInput.value;
  if (name === "") {
    alert("please enter your name");
  } else {
    alert("Hello" + name + "! Thanks for visiting 😊");
  }
  }) ;
  let menuBtn =
  document.getElementById("menuBtn");
  let menuContent =
  document.getElementById("menuContent");
  menuBtn.addEventListener("click", function () {
    if (menuContent.style.display === "block") {
      menuContent.style.display = "none";
    } else {
    menuContent.style.display= "block";
  }
  }) ;
