/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");


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

})();

/******/ })()
;
//# sourceMappingURL=main.js.map