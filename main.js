/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactPage() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const contactTitle = document.createElement('h2');
  contactTitle.textContent = 'Contact Us';

  const contactInfo = document.createElement('p');
  contactInfo.textContent = 'Call to make reservations';

  const contactNumber = document.createElement('p');
  contactNumber.textContent = 'Phone: 555-555-5555';

  const contactEmail = document.createElement('p');
  contactEmail.textContent = 'reservations@leveritable.com';

  const contactAbout = document.createElement('p');
  contactAbout.textContent = 'About Us';

  const contactAboutInfo = document.createElement('p');
  contactAboutInfo.textContent =
    "At Le Véritable, we believe that dining is not just about the food, but the entire experience. From the moment you step into our elegant restaurant, you'll be transported to a world of refinement and sophistication. Our chefs are dedicated to creating dishes that not only taste incredible but are also beautifully presented, making every meal a feast for the eyes as well as the taste buds. We are committed to providing our guests with the highest level of service and attention to detail, ensuring that every visit to Le Véritable is an unforgettable one.";

  contact.appendChild(contactTitle);
  contact.appendChild(contactInfo);
  contact.appendChild(contactNumber);
  contact.appendChild(contactEmail);
  contact.appendChild(contactAbout);
  contact.appendChild(contactAboutInfo);

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(contactPage());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homeText(text) {
  const homeInfo = document.createElement('p');
  homeInfo.textContent = text;
  return homeInfo;
}

function homePage() {
  const home = document.createElement('div');
  home.classList.add('home');

  const homeTitle = document.createElement('h2');
  homeTitle.textContent = 'Welcome to Le Véritable,';

  home.appendChild(homeTitle);
  home.appendChild(
    homeText(
      'where every dish is crafted with the finest ingredients and the utmost care. Our culinary experts have carefully curated a menu that combines French tradition with contemporary flair, resulting in an unforgettable dining experience that is truly worthy of the most discerning palate. Our goal is to delight and amaze you with every bite, and we look forward to serving you soon.'
    )
  );

  return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(homePage());

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menuFood(name, price) {
  const menuFoods = document.createElement('div');
  menuFoods.classList.add('menuFood');

  const foodName = document.createElement('p');
  foodName.classList.add('foodName');
  foodName.textContent = name;

  const foodPrice = document.createElement('p');
  foodPrice.classList.add('foodPrice');
  foodPrice.textContent = price;

  menuFoods.appendChild(foodName);
  menuFoods.appendChild(foodPrice);

  return menuFoods;
}

function menuPage() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuTitle = document.createElement('h2');
  menuTitle.textContent = 'Menu';

  const soupSalad = document.createElement('h3');
  soupSalad.textContent = 'Soup & Salad';

  const drinks = document.createElement('h3');
  drinks.textContent = 'Drinks';

  const mainCourse = document.createElement('h3');
  mainCourse.textContent = 'Main Course';

  const dessert = document.createElement('h3');
  dessert.textContent = 'Desserts';

  menu.appendChild(menuTitle);
  menu.appendChild(soupSalad);
  menu.appendChild(dessert);
  menu.appendChild(drinks);
  menu.appendChild(mainCourse);
  menu.appendChild(menuFood('Velouté de Homard (Lobster Bisque)', '$28'));
  menu.appendChild(
    menuFood(
      'Salade de Roquette et Parmesan (Arugula and Parmesan Salad)',
      '$22'
    )
  );
  menu.appendChild(
    menuFood('Le Cocktail de la Maison (The House Cocktail)', '$30')
  );
  menu.appendChild(
    menuFood('Château Margaux 2015 (Red Wine) ', '$200 per bottle')
  );
  menu.appendChild(
    menuFood(
      'Filet de Boeuf (Beef Tenderloin) with Truffle Mashed Potatoes and Seasonal Vegetables',
      '$65'
    )
  );
  menu.appendChild(
    menuFood(
      'Homard Grillé (Grilled Lobster) with Herb Butter and Saffron Rice',
      '$75'
    )
  );
  menu.appendChild(
    menuFood('Tarte au Citron (Lemon Tart) with Raspberry Sorbet', '$28')
  );
  menu.appendChild(
    menuFood(
      'Soufflé au Chocolat Noir (Dark Chocolate Souffle) with Vanilla Ice Cream ',
      '$32'
    )
  );

  return menu;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(menuPage());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function header() {
  const headerSection = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = 'Le Véritable';
  headerSection.appendChild(title);
  return headerSection;
}

function activateButtons() {
  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((buttonS) => {
        buttonS.classList.remove('active');
      });
      button.classList.add('active');
    });
  });
}

function nav() {
  const navSection = document.createElement('nav');
  const homeButton = document.createElement('button');
  homeButton.classList.add('nav-button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', () => {
    activateButtons(homeButton);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  const menuButton = document.createElement('button');
  menuButton.classList.add('nav-button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', () => {
    activateButtons(menuButton);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  const contactButton = document.createElement('button');
  contactButton.classList.add('nav-button');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', () => {
    activateButtons(contactButton);
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  navSection.appendChild(homeButton);
  navSection.appendChild(menuButton);
  navSection.appendChild(contactButton);
  return navSection;
}

function createMain() {
  const main = document.createElement('div');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerText = document.createElement('p');
  footerText.textContent = 'Aaliyah Montgomery';

  const imageCredit = document.createElement('p');
  imageCredit.textContent = 'Photo by Rachel Claire';

  const creditLink = document.createElement('a');
  creditLink.href =
    'https://www.pexels.com/photo/row-of-stools-next-to-long-table-covered-with-tablecloth-in-dark-hall-4577179/';

  creditLink.appendChild(imageCredit);
  footer.appendChild(creditLink);
  footer.appendChild(footerText);

  return footer;
}

function loadWebsite() {
  const content = document.getElementById('content');
  content.appendChild(header());
  content.appendChild(nav());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  activateButtons(document.querySelector('.nav-button'));
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebsite);


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;