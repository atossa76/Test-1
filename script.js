function buy() {
  let name = prompt("What is your name?");
  let level = prompt("Are you a professional painter?");
  let email = prompt("Enter your email address:");
  level = level.toLowerCase();
  level = level.trim();
  if (level === "yes") {
    alert(name + "! We'll send you our professional pack details!");
  } else {
    alert(name + "! We'll send you our starter pack details!");
  }
}
let purchaseButton = document.querySelector(".purchase");
purchaseButton.addEventListener("click", buy);
