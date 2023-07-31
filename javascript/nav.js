const menuButton = document.getElementById("hamburger-icon");

const mobileNav = document.getElementById("mobile-nav-list");

menuButton.addEventListener("click", () => {
  // console.log(mobileNav);
  // console.log(menuButton);

  mobileNav.classList.toggle("menushow");
});

window.onclick = function (event) {
  if (!event.target.matches("#hamburger-icon")) {
    if (mobileNav.classList.contains("menushow")) {
      mobileNav.classList.remove("menushow");
      mobileNav.classList.add("manuclose");
    }
  }
};
