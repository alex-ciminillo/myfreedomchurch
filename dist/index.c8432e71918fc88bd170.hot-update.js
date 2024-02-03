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
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").css("top", `${window.scrollY}px`);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").addClass("position-static")
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").addClass("display-none")
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").removeClass("display-none")
    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-signup").addClass("opacity-one")
    }, 1)
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("overflow-hidden")
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
/******/ 	__webpack_require__.h = () => ("8f5b102314c1fa6aeac0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzg0MzJlNzE5MThmYzg4YmQxNzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNVOztBQUUyQjtBQUNBOztBQUVBO0FBQ0Y7O0FBRTFDOztBQUVmOztBQUVBOztBQUVBLE9BQU8saURBQU87O0FBRWQ7OztBQUdBOzs7OztBQUtBOztBQUVBO0FBQ0EsRUFBRSw2Q0FBQztBQUNILGdFQUFnRSxvQkFBb0I7QUFDcEYsR0FBRzs7QUFFSCxFQUFFLDZDQUFDO0FBQ0gsZ0VBQWdFLG9CQUFvQjtBQUNwRixHQUFHOztBQUVILEVBQUUsNkNBQUM7OztBQUdILEVBQUUsNkNBQUM7QUFDSCxJQUFJLDZDQUFDLHVDQUF1QyxlQUFlO0FBQzNELElBQUksNkNBQUM7QUFDTCxJQUFJLDZDQUFDO0FBQ0wsSUFBSSw2Q0FBQztBQUNMO0FBQ0EsTUFBTSw2Q0FBQztBQUNQLEtBQUs7QUFDTCxJQUFJLDZDQUFDO0FBQ0wsR0FBRzs7Ozs7QUFLSDtBQUNBLEVBQUUsNkNBQUM7QUFDSCxJQUFJLDZDQUFDLGlCQUFpQixxRUFBUSxDQUFDO0FBQy9CLE1BQU0sd0VBQVU7QUFDaEIsS0FBSztBQUNMLEdBQUc7O0FBRUg7Ozs7Ozs7OztVQzVEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZWVkb21fY2h1cmNoLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3RlcnBhZ2UuanMiLCJ3ZWJwYWNrOi8vZnJlZWRvbV9jaHVyY2gvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmltcG9ydCBHaXZlUGFnZSBmcm9tICcuLy4uLy4uL3BhZ2VzL2dpdmluZy9naXZpbmdwYWdlLmh0bWwnXG5pbXBvcnQgR2l2ZVBhZ2VKUyBmcm9tICcuLy4uLy4uL3BhZ2VzL2dpdmluZy9naXZpbmdwYWdlLmpzJ1xuXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi8uLi8uLi9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5odG1sJ1xuaW1wb3J0IEhvbWVQYWdlSlMgZnJvbSAnLi4vLi4vcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlcnBhZ2UoKSB7XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC11cy1mb3JtXCIpLnNjcm9sbEludG9WaWV3KCk7XG5cbiAgaWYgKCFDb29raWVzLmdldChcImNodXJjaFwiKSkge1xuXG4gIH1cblxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuXG4gIC8vZm9vdGVyIGljb25zXG4gICQoXCIjaG9tZXBhZ2UtZm9vdGVyLWVtYWlsLWljb25cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC11cy1mb3JtXCIpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pXG5cbiAgJChcIiNob21lcGFnZS1mb290ZXItcXVlc3Rpb24taWNvblwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LXVzLWZvcm1cIikuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfSlcblxuICAkKFwiI2hvbWVwYWdlLWZvb3Rlci1waG9uZS1pY29uXCIpLm9uKClcblxuXG4gICQoXCIuZm9vdGVyLWxvZy1pblwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLmNzcyhcInRvcFwiLCBgJHt3aW5kb3cuc2Nyb2xsWX1weGApO1xuICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLmFkZENsYXNzKFwicG9zaXRpb24tc3RhdGljXCIpXG4gICAgJChcIiNob21lcGFnZS1uYXZiYXJcIikuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3Zlci1zaWdudXBcIikuYWRkQ2xhc3MoXCJvcGFjaXR5LW9uZVwiKVxuICAgIH0sIDEpXG4gICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIilcbiAgfSlcblxuXG5cblxuICAvL2Zvb3RlciBnaXZlXG4gICQoXCIjaG9tZXBhZ2UtZm9vdGVyLWJvdHRvbS10ZXh0LWdpdmUtaW5mb3JtYXRpb25cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoXCJib2R5XCIpLmxvYWQoYCR7R2l2ZVBhZ2V9YCwgZnVuY3Rpb24gKCkge1xuICAgICAgR2l2ZVBhZ2VKUygpXG4gICAgfSk7XG4gIH0pXG5cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhmNWIxMDIzMTRjMWZhNmFlYWMwXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9