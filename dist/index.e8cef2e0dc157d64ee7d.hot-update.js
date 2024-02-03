"use strict";
self["webpackHotUpdatefreedom_church"]("index",{

/***/ "./src/components/footer/footerpage.js":
/*!*********************************************!*\
  !*** ./src/components/footer/footerpage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footerpage)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _pages_giving_givingpage_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../pages/giving/givingpage.html */ "./src/pages/giving/givingpage.html");
/* harmony import */ var _pages_giving_givingpage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../pages/giving/givingpage.js */ "./src/pages/giving/givingpage.js");
/* harmony import */ var _pages_homepage_homepage_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../pages/homepage/homepage.html */ "./src/pages/homepage/homepage.html");
/* harmony import */ var _pages_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/homepage/homepage.js */ "./src/pages/homepage/homepage.js");









function footerpage() {

  addEventListeners()

  // document.getElementById("contact-us-form").scrollIntoView();

  if (!js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("church")) {

  }


}




function addEventListeners() {

  //footer icons
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-email-icon").on('click', function () {
    document.getElementById("contact-us-form").scrollIntoView({ behavior: "smooth" });
  })

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-question-icon").on('click', function () {
    document.getElementById("contact-us-form").scrollIntoView({ behavior: "smooth" });
  })

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-phone-icon").on()


  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".footer-log-in").on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").removeClass("opacity-one")
    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").addClass("display-none")
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("position-static")
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("display-none")
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("overflow-hidden")
    }, 400)

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").load(`${_pages_homepage_homepage_html__WEBPACK_IMPORTED_MODULE_4__["default"]}`, function () {
      ;(0,_pages_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_5__["default"])()
    });
  })





  //footer give
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-bottom-text-give-information").on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").load(`${_pages_giving_givingpage_html__WEBPACK_IMPORTED_MODULE_2__["default"]}`, function () {
      ;(0,_pages_giving_givingpage_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
    });
  })

}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("00741624de6908d5a682")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZThjZWYyZTBkYzE1N2Q2NGVlN2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNVOztBQUUyQjtBQUNBOztBQUVBO0FBQ0Y7O0FBRTFDOztBQUVmOztBQUVBOztBQUVBLE9BQU8saURBQU87O0FBRWQ7OztBQUdBOzs7OztBQUtBOztBQUVBO0FBQ0EsRUFBRSw2Q0FBQztBQUNILGdFQUFnRSxvQkFBb0I7QUFDcEYsR0FBRzs7QUFFSCxFQUFFLDZDQUFDO0FBQ0gsZ0VBQWdFLG9CQUFvQjtBQUNwRixHQUFHOztBQUVILEVBQUUsNkNBQUM7OztBQUdILEVBQUUsNkNBQUM7QUFDSCxJQUFJLDZDQUFDO0FBQ0w7QUFDQSxNQUFNLDZDQUFDO0FBQ1AsTUFBTSw2Q0FBQztBQUNQLE1BQU0sNkNBQUM7QUFDUCxNQUFNLDZDQUFDO0FBQ1AsS0FBSzs7QUFFTCxJQUFJLDZDQUFDLGlCQUFpQixxRUFBUSxDQUFDO0FBQy9CLE1BQU0sd0VBQVU7QUFDaEIsS0FBSztBQUNMLEdBQUc7Ozs7OztBQU1IO0FBQ0EsRUFBRSw2Q0FBQztBQUNILElBQUksNkNBQUMsaUJBQWlCLHFFQUFRLENBQUM7QUFDL0IsTUFBTSx3RUFBVTtBQUNoQixLQUFLO0FBQ0wsR0FBRzs7QUFFSDs7Ozs7Ozs7O1VDaEVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJlZWRvbV9jaHVyY2gvLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVycGFnZS5qcyIsIndlYnBhY2s6Ly9mcmVlZG9tX2NodXJjaC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuaW1wb3J0IEdpdmVQYWdlIGZyb20gJy4vLi4vLi4vcGFnZXMvZ2l2aW5nL2dpdmluZ3BhZ2UuaHRtbCdcbmltcG9ydCBHaXZlUGFnZUpTIGZyb20gJy4vLi4vLi4vcGFnZXMvZ2l2aW5nL2dpdmluZ3BhZ2UuanMnXG5cbmltcG9ydCBIb21lUGFnZSBmcm9tICcuLy4uLy4uL3BhZ2VzL2hvbWVwYWdlL2hvbWVwYWdlLmh0bWwnXG5pbXBvcnQgSG9tZVBhZ2VKUyBmcm9tICcuLi8uLi9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVycGFnZSgpIHtcblxuICBhZGRFdmVudExpc3RlbmVycygpXG5cbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LXVzLWZvcm1cIikuc2Nyb2xsSW50b1ZpZXcoKTtcblxuICBpZiAoIUNvb2tpZXMuZ2V0KFwiY2h1cmNoXCIpKSB7XG5cbiAgfVxuXG5cbn1cblxuXG5cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgLy9mb290ZXIgaWNvbnNcbiAgJChcIiNob21lcGFnZS1mb290ZXItZW1haWwtaWNvblwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LXVzLWZvcm1cIikuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfSlcblxuICAkKFwiI2hvbWVwYWdlLWZvb3Rlci1xdWVzdGlvbi1pY29uXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3QtdXMtZm9ybVwiKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9KVxuXG4gICQoXCIjaG9tZXBhZ2UtZm9vdGVyLXBob25lLWljb25cIikub24oKVxuXG5cbiAgJChcIi5mb290ZXItbG9nLWluXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikucmVtb3ZlQ2xhc3MoXCJvcGFjaXR5LW9uZVwiKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLmFkZENsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcInBvc2l0aW9uLXN0YXRpY1wiKVxuICAgICAgJChcIiNob21lcGFnZS1uYXZiYXJcIikucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib3ZlcmZsb3ctaGlkZGVuXCIpXG4gICAgfSwgNDAwKVxuXG4gICAgJChcImJvZHlcIikubG9hZChgJHtIb21lUGFnZX1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICBIb21lUGFnZUpTKClcbiAgICB9KTtcbiAgfSlcblxuXG5cblxuXG4gIC8vZm9vdGVyIGdpdmVcbiAgJChcIiNob21lcGFnZS1mb290ZXItYm90dG9tLXRleHQtZ2l2ZS1pbmZvcm1hdGlvblwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcImJvZHlcIikubG9hZChgJHtHaXZlUGFnZX1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICBHaXZlUGFnZUpTKClcbiAgICB9KTtcbiAgfSlcblxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDA3NDE2MjRkZTY5MDhkNWE2ODJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=