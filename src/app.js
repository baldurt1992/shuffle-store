import "./styles.scss";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Gradiweb is online!!!");

  const openMenu = document.querySelector("#openMenu");
  const closeMenu = document.querySelector("#closeMenu");
  const mobileMenu = document.querySelector("#mobileMenu");
  const stickyContainer = document.querySelector("#stickyContainer");

  if (openMenu && closeMenu && mobileMenu) {
    openMenu.addEventListener("click", function () {
      mobileMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      stickyContainer.classList.add("sticky");
    } else {
      stickyContainer.classList.remove("sticky");
    }
  });
});
