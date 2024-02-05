"use strict";
self["webpackHotUpdatefreedom_church"]("index",{

/***/ "./src/components/menu/menupage.js":
/*!*****************************************!*\
  !*** ./src/components/menu/menupage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menupage)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _pages_giving_givingpage_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../pages/giving/givingpage.html */ "./src/pages/giving/givingpage.html");
/* harmony import */ var _pages_giving_givingpage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/giving/givingpage.js */ "./src/pages/giving/givingpage.js");
/* harmony import */ var _pages_beliefs_beliefspage_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../pages/beliefs/beliefspage.html */ "./src/pages/beliefs/beliefspage.html");
/* harmony import */ var _pages_beliefs_beliefspage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/beliefs/beliefspage.js */ "./src/pages/beliefs/beliefspage.js");
/* harmony import */ var _pages_homepage_homepage_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../pages/homepage/homepage.html */ "./src/pages/homepage/homepage.html");
/* harmony import */ var _pages_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/homepage/homepage.js */ "./src/pages/homepage/homepage.js");
/* harmony import */ var _images_ChurchLogo_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../images/ChurchLogo.svg */ "./images/ChurchLogo.svg");
















function menupage() {

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-left-logo").attr("src", `${_images_ChurchLogo_svg__WEBPACK_IMPORTED_MODULE_8__}`)

    addEventListeners()

    // document.getElementById("contact-us-form").scrollIntoView();
}


function addEventListeners() {

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-navbar-logo").on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").addClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("position-static")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("overflow-hidden")
        }, 400)

        jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").load(`${_pages_homepage_homepage_html__WEBPACK_IMPORTED_MODULE_6__["default"]}`, function () {
            ;(0,_pages_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_7__["default"])()
        });

    })



    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-navbar-exit").on('click', function () {

        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").addClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("position-static")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("overflow-hidden")
        }, 400)
    })



    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-body-right-contact-us").on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").addClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("position-static")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("overflow-hidden")

            document.getElementById("contact-us-form").scrollIntoView({ behavior: 'smooth' });

        }, 400)
    })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-body-right-get-prayer").on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").addClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("position-static")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("overflow-hidden")

            document.getElementById("contact-us-form").scrollIntoView({ behavior: 'smooth' });

        }, 400)
    })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-body-right-give-online").on('click', function () {

        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").addClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("position-static")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("overflow-hidden")

            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").load(`${_pages_giving_givingpage_html__WEBPACK_IMPORTED_MODULE_2__["default"]}`, function () {
                ;(0,_pages_giving_givingpage_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
            });

        }, 400)
    })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#menu-beliefs").on('click', function(){
        console.log("beliefs")
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(()=>{
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").addClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("position-static")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("overflow-hidden")

            jquery__WEBPACK_IMPORTED_MODULE_0___default()( "body" ).load( `${_pages_beliefs_beliefspage_html__WEBPACK_IMPORTED_MODULE_4__["default"]}`, function() {
                ;(0,_pages_beliefs_beliefspage_js__WEBPACK_IMPORTED_MODULE_5__["default"])()
              });

        }, 400)
    })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-body-right-our-location").on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").addClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("position-static")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("overflow-hidden")

            document.getElementById("homepage-map").scrollIntoView({ behavior: 'smooth' });

        }, 400)
    })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-body-left-top-location").on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").addClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("position-static")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("display-none")
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("overflow-hidden")

            document.getElementById("homepage-map").scrollIntoView({ behavior: 'smooth' });

        }, 400)
    })

}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("82c0427eda74b348d251")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTRhZTY0MmRmOTRlZmRjYTg4NDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNVOztBQUUyQjtBQUNGOztBQUVPO0FBQ0Y7O0FBRUg7QUFDRjs7QUFFQTs7OztBQUkxQzs7QUFFZixJQUFJLDZDQUFDLDhDQUE4QyxtREFBVSxDQUFDOztBQUU5RDs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQSxJQUFJLDZDQUFDO0FBQ0wsUUFBUSw2Q0FBQztBQUNUO0FBQ0EsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFNBQVM7O0FBRVQsUUFBUSw2Q0FBQyxpQkFBaUIscUVBQVEsQ0FBQztBQUNuQyxZQUFZLHdFQUFVO0FBQ3RCLFNBQVM7O0FBRVQsS0FBSzs7OztBQUlMLElBQUksNkNBQUM7O0FBRUwsUUFBUSw2Q0FBQztBQUNUO0FBQ0EsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFNBQVM7QUFDVCxLQUFLOzs7O0FBSUwsSUFBSSw2Q0FBQztBQUNMLFFBQVEsNkNBQUM7QUFDVDtBQUNBLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7O0FBRWIsd0VBQXdFLG9CQUFvQjs7QUFFNUYsU0FBUztBQUNULEtBQUs7O0FBRUwsSUFBSSw2Q0FBQztBQUNMLFFBQVEsNkNBQUM7QUFDVDtBQUNBLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7O0FBRWIsd0VBQXdFLG9CQUFvQjs7QUFFNUYsU0FBUztBQUNULEtBQUs7O0FBRUwsSUFBSSw2Q0FBQzs7QUFFTCxRQUFRLDZDQUFDO0FBQ1Q7QUFDQSxZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDOztBQUViLFlBQVksNkNBQUMsaUJBQWlCLHFFQUFRLENBQUM7QUFDdkMsZ0JBQWdCLHdFQUFVO0FBQzFCLGFBQWE7O0FBRWIsU0FBUztBQUNULEtBQUs7O0FBRUwsSUFBSSw2Q0FBQztBQUNMO0FBQ0EsUUFBUSw2Q0FBQztBQUNUO0FBQ0EsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQzs7QUFFYixZQUFZLDZDQUFDLG9CQUFvQix1RUFBVyxDQUFDO0FBQzdDLGdCQUFnQiwwRUFBYTtBQUM3QixlQUFlOztBQUVmLFNBQVM7QUFDVCxLQUFLOztBQUVMLElBQUksNkNBQUM7QUFDTCxRQUFRLDZDQUFDO0FBQ1Q7QUFDQSxZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDOztBQUViLHFFQUFxRSxvQkFBb0I7O0FBRXpGLFNBQVM7QUFDVCxLQUFLOztBQUVMLElBQUksNkNBQUM7QUFDTCxRQUFRLDZDQUFDO0FBQ1Q7QUFDQSxZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDOztBQUViLHFFQUFxRSxvQkFBb0I7O0FBRXpGLFNBQVM7QUFDVCxLQUFLOztBQUVMOzs7Ozs7Ozs7VUM5SUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmVlZG9tX2NodXJjaC8uL3NyYy9jb21wb25lbnRzL21lbnUvbWVudXBhZ2UuanMiLCJ3ZWJwYWNrOi8vZnJlZWRvbV9jaHVyY2gvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmltcG9ydCBHaXZlUGFnZSBmcm9tICcuLy4uLy4uL3BhZ2VzL2dpdmluZy9naXZpbmdwYWdlLmh0bWwnXG5pbXBvcnQgR2l2ZVBhZ2VKUyBmcm9tICcuLi8uLi9wYWdlcy9naXZpbmcvZ2l2aW5ncGFnZS5qcydcblxuaW1wb3J0IEJlbGllZnNQYWdlIGZyb20gJy4vLi4vLi4vcGFnZXMvYmVsaWVmcy9iZWxpZWZzcGFnZS5odG1sJ1xuaW1wb3J0IEJlbGllZnNQYWdlSlMgZnJvbSAnLi4vLi4vcGFnZXMvYmVsaWVmcy9iZWxpZWZzcGFnZS5qcydcblxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vLi4vLi4vcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuaHRtbCdcbmltcG9ydCBIb21lUGFnZUpTIGZyb20gJy4uLy4uL3BhZ2VzL2hvbWVwYWdlL2hvbWVwYWdlLmpzJ1xuXG5pbXBvcnQgQ2h1cmNoTG9nbyBmcm9tICcuLy4uLy4uLy4uL2ltYWdlcy9DaHVyY2hMb2dvLnN2ZydcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVwYWdlKCkge1xuXG4gICAgJChcIiNob21lcGFnZS1uYXZiYXItbGVmdC1sb2dvXCIpLmF0dHIoXCJzcmNcIiwgYCR7Q2h1cmNoTG9nb31gKVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LXVzLWZvcm1cIikuc2Nyb2xsSW50b1ZpZXcoKTtcbn1cblxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcblxuICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3Zlci1uYXZiYXItbG9nb1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3ZlclwiKS5yZW1vdmVDbGFzcyhcIm9wYWNpdHktb25lXCIpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLmFkZENsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcInBvc2l0aW9uLXN0YXRpY1wiKVxuICAgICAgICAgICAgJChcIiNob21lcGFnZS1uYXZiYXJcIikucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib3ZlcmZsb3ctaGlkZGVuXCIpXG4gICAgICAgIH0sIDQwMClcblxuICAgICAgICAkKFwiYm9keVwiKS5sb2FkKGAke0hvbWVQYWdlfWAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIEhvbWVQYWdlSlMoKVxuICAgICAgICB9KTtcblxuICAgIH0pXG5cblxuXG4gICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyLW5hdmJhci1leGl0XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikucmVtb3ZlQ2xhc3MoXCJvcGFjaXR5LW9uZVwiKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3ZlclwiKS5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAgICAgJChcIiNob21lcGFnZS1uYXZiYXJcIikucmVtb3ZlQ2xhc3MoXCJwb3NpdGlvbi1zdGF0aWNcIilcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm92ZXJmbG93LWhpZGRlblwiKVxuICAgICAgICB9LCA0MDApXG4gICAgfSlcblxuXG5cbiAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXItYm9keS1yaWdodC1jb250YWN0LXVzXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLnJlbW92ZUNsYXNzKFwib3BhY2l0eS1vbmVcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwicG9zaXRpb24tc3RhdGljXCIpXG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIilcblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LXVzLWZvcm1cIikuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG5cbiAgICAgICAgfSwgNDAwKVxuICAgIH0pXG5cbiAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXItYm9keS1yaWdodC1nZXQtcHJheWVyXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLnJlbW92ZUNsYXNzKFwib3BhY2l0eS1vbmVcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwicG9zaXRpb24tc3RhdGljXCIpXG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIilcblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LXVzLWZvcm1cIikuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG5cbiAgICAgICAgfSwgNDAwKVxuICAgIH0pXG5cbiAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXItYm9keS1yaWdodC1naXZlLW9ubGluZVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLnJlbW92ZUNsYXNzKFwib3BhY2l0eS1vbmVcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwicG9zaXRpb24tc3RhdGljXCIpXG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIilcblxuICAgICAgICAgICAgJChcImJvZHlcIikubG9hZChgJHtHaXZlUGFnZX1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgR2l2ZVBhZ2VKUygpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9LCA0MDApXG4gICAgfSlcblxuICAgICQoXCIjbWVudS1iZWxpZWZzXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmVsaWVmc1wiKVxuICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikucmVtb3ZlQ2xhc3MoXCJvcGFjaXR5LW9uZVwiKVxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwicG9zaXRpb24tc3RhdGljXCIpXG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIilcblxuICAgICAgICAgICAgJCggXCJib2R5XCIgKS5sb2FkKCBgJHtCZWxpZWZzUGFnZX1gLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBCZWxpZWZzUGFnZUpTKClcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSwgNDAwKVxuICAgIH0pXG5cbiAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXItYm9keS1yaWdodC1vdXItbG9jYXRpb25cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikucmVtb3ZlQ2xhc3MoXCJvcGFjaXR5LW9uZVwiKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3ZlclwiKS5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAgICAgJChcIiNob21lcGFnZS1uYXZiYXJcIikucmVtb3ZlQ2xhc3MoXCJwb3NpdGlvbi1zdGF0aWNcIilcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm92ZXJmbG93LWhpZGRlblwiKVxuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVwYWdlLW1hcFwiKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcblxuICAgICAgICB9LCA0MDApXG4gICAgfSlcblxuICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3Zlci1ib2R5LWxlZnQtdG9wLWxvY2F0aW9uXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLnJlbW92ZUNsYXNzKFwib3BhY2l0eS1vbmVcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwicG9zaXRpb24tc3RhdGljXCIpXG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIilcblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lcGFnZS1tYXBcIikuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG5cbiAgICAgICAgfSwgNDAwKVxuICAgIH0pXG5cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgyYzA0MjdlZGE3NGIzNDhkMjUxXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9