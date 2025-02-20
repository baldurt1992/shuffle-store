import "./styles.scss";

document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  if (openMenu && closeMenu && mobileMenu) {
    openMenu.addEventListener("click", function () {
      mobileMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
  }
});
