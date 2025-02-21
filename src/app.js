import "./styles.scss";

document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.querySelector("#openMenu");
  const closeMenu = document.querySelector("#closeMenu");
  const mobileMenu = document.querySelector("#mobileMenu");
  const stickyContainer = document.querySelector("#stickyContainer");
  const viewAllBtn = document.querySelector(".carousel__btn");

  function updateHiddenItems() {
    return document.querySelectorAll(".carousel__item-wrapper.hidden");
  }

  let allowScrollReveal = false;

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

  function showItemsOnScroll() {
    let hiddenItems = updateHiddenItems();

    hiddenItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();

      if (
        rect.top < window.innerHeight - 50 &&
        item.classList.contains("hidden") &&
        !item.classList.contains("show")
      ) {
        setTimeout(() => {
          item.classList.remove("hidden");
          item.classList.add("show");
        }, index * 100);
      }
    });

    if (updateHiddenItems().length === 0) {
      window.removeEventListener("scroll", showItemsOnScroll);
    }
  }

  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", function (event) {
      event.preventDefault();

      allowScrollReveal = true;
      showItemsOnScroll();
      viewAllBtn.style.display = "none";
    });
  }

  function handleResponsiveView() {
    const isMobileNow = window.innerWidth <= 768;
    const items = document.querySelectorAll(".carousel__item-wrapper");

    if (isMobileNow) {
      items.forEach((item) => {
        item.classList.remove("hidden");
        item.classList.add("show");
      });
    } else {
      items.forEach((item, index) => {
        if (index >= 4) {
          item.classList.add("hidden");
          item.classList.remove("show");
        }
      });
    }
  }

  handleResponsiveView();
  window.addEventListener("resize", handleResponsiveView);
});
