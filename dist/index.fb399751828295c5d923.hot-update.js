"use strict";
self["webpackHotUpdatefreedom_church"]("index",{

/***/ "./src/components/menuContent/menupage.js":
/*!************************************************!*\
  !*** ./src/components/menuContent/menupage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menupage)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_giving_givingpage_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../pages/giving/givingpage.html */ "./src/pages/giving/givingpage.html");
/* harmony import */ var _pages_giving_givingpage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/giving/givingpage.js */ "./src/pages/giving/givingpage.js");
/* harmony import */ var _pages_beliefs_beliefspage_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../pages/beliefs/beliefspage.html */ "./src/pages/beliefs/beliefspage.html");
/* harmony import */ var _pages_beliefs_beliefspage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/beliefs/beliefspage.js */ "./src/pages/beliefs/beliefspage.js");
/* harmony import */ var _pages_homepage_homepage_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../pages/homepage/homepage.html */ "./src/pages/homepage/homepage.html");
/* harmony import */ var _pages_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/homepage/homepage.js */ "./src/pages/homepage/homepage.js");
/* harmony import */ var _images_ChurchLogo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../images/ChurchLogo.svg */ "./images/ChurchLogo.svg");

// import Cookies from 'js-cookie';














function menupage() {

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-left-logo").attr("src", `${_images_ChurchLogo_svg__WEBPACK_IMPORTED_MODULE_7__}`)

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

        jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").load(`${_pages_homepage_homepage_html__WEBPACK_IMPORTED_MODULE_5__["default"]}`, function () {
            ;(0,_pages_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_6__["default"])()
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

            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").load(`${_pages_giving_givingpage_html__WEBPACK_IMPORTED_MODULE_1__["default"]}`, function () {
                ;(0,_pages_giving_givingpage_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
            });

        }, 400)
    })

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#menu-beliefs").on('click', function () {
        // console.log("beliefs")
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").removeClass("opacity-one");
        // $("#menu-beliefs").addClass("display-none");

        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").addClass("display-none");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("position-static");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").removeClass("display-none");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("overflow-hidden");


            jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").load(`${_pages_beliefs_beliefspage_html__WEBPACK_IMPORTED_MODULE_3__["default"]}`, function () {
                (0,_pages_beliefs_beliefspage_js__WEBPACK_IMPORTED_MODULE_4__["default"])()
            });
            // Clear previous content
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#menu-content-container").html("");

            // Load menuContent.html into menu-content-container
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("#menu-content-container").load('../menuContent/menuContent.html', function () {
                // Load menupage.js from the menuContent folder
                jquery__WEBPACK_IMPORTED_MODULE_0___default().getScript('../menuContent/menupage.js', function () {
                    // Optionally, call a function if there is JavaScript specific to menuContent.html
                    // For example, assuming there is a function called menuContentJS
                    menuContentJS();
                });
            });
        }, 400);
    });

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
/******/ 	__webpack_require__.h = () => ("ae0fc65a20fc7a7eb90e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZmIzOTk3NTE4MjgyOTVjNWQ5MjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNCO0FBQ3RCOztBQUUyRDtBQUNGOztBQUVPO0FBQ0Y7O0FBRUg7QUFDRjs7QUFFQTs7OztBQUkxQzs7QUFFZixJQUFJLDZDQUFDLDhDQUE4QyxtREFBVSxDQUFDOztBQUU5RDs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQSxJQUFJLDZDQUFDO0FBQ0wsUUFBUSw2Q0FBQztBQUNUO0FBQ0EsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFNBQVM7O0FBRVQsUUFBUSw2Q0FBQyxpQkFBaUIscUVBQVEsQ0FBQztBQUNuQyxZQUFZLHdFQUFVO0FBQ3RCLFNBQVM7O0FBRVQsS0FBSzs7OztBQUlMLElBQUksNkNBQUM7O0FBRUwsUUFBUSw2Q0FBQztBQUNUO0FBQ0EsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFNBQVM7QUFDVCxLQUFLOzs7O0FBSUwsSUFBSSw2Q0FBQztBQUNMLFFBQVEsNkNBQUM7QUFDVDtBQUNBLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7O0FBRWIsd0VBQXdFLG9CQUFvQjs7QUFFNUYsU0FBUztBQUNULEtBQUs7O0FBRUwsSUFBSSw2Q0FBQztBQUNMLFFBQVEsNkNBQUM7QUFDVDtBQUNBLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7O0FBRWIsd0VBQXdFLG9CQUFvQjs7QUFFNUYsU0FBUztBQUNULEtBQUs7O0FBRUwsSUFBSSw2Q0FBQzs7QUFFTCxRQUFRLDZDQUFDO0FBQ1Q7QUFDQSxZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDOztBQUViLFlBQVksNkNBQUMsaUJBQWlCLHFFQUFRLENBQUM7QUFDdkMsZ0JBQWdCLHdFQUFVO0FBQzFCLGFBQWE7O0FBRWIsU0FBUztBQUNULEtBQUs7O0FBRUwsSUFBSSw2Q0FBQztBQUNMO0FBQ0EsUUFBUSw2Q0FBQztBQUNUOztBQUVBO0FBQ0EsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQzs7O0FBR2IsWUFBWSw2Q0FBQyxpQkFBaUIsdUVBQVcsQ0FBQztBQUMxQyxnQkFBZ0IseUVBQWE7QUFDN0IsYUFBYTtBQUNiO0FBQ0EsWUFBWSw2Q0FBQzs7QUFFYjtBQUNBLFlBQVksNkNBQUM7QUFDYjtBQUNBLGdCQUFnQix1REFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMLElBQUksNkNBQUM7QUFDTCxRQUFRLDZDQUFDO0FBQ1Q7QUFDQSxZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDOztBQUViLHFFQUFxRSxvQkFBb0I7O0FBRXpGLFNBQVM7QUFDVCxLQUFLOztBQUVMLElBQUksNkNBQUM7QUFDTCxRQUFRLDZDQUFDO0FBQ1Q7QUFDQSxZQUFZLDZDQUFDO0FBQ2IsWUFBWSw2Q0FBQztBQUNiLFlBQVksNkNBQUM7QUFDYixZQUFZLDZDQUFDOztBQUViLHFFQUFxRSxvQkFBb0I7O0FBRXpGLFNBQVM7QUFDVCxLQUFLOztBQUVMOzs7Ozs7Ozs7VUM1SkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmVlZG9tX2NodXJjaC8uL3NyYy9jb21wb25lbnRzL21lbnVDb250ZW50L21lbnVwYWdlLmpzIiwid2VicGFjazovL2ZyZWVkb21fY2h1cmNoL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG4vLyBpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5pbXBvcnQgR2l2ZVBhZ2UgZnJvbSAnLi8uLi8uLi9wYWdlcy9naXZpbmcvZ2l2aW5ncGFnZS5odG1sJ1xuaW1wb3J0IEdpdmVQYWdlSlMgZnJvbSAnLi4vLi4vcGFnZXMvZ2l2aW5nL2dpdmluZ3BhZ2UuanMnXG5cbmltcG9ydCBCZWxpZWZzUGFnZSBmcm9tICcuLy4uLy4uL3BhZ2VzL2JlbGllZnMvYmVsaWVmc3BhZ2UuaHRtbCdcbmltcG9ydCBCZWxpZWZzUGFnZUpTIGZyb20gJy4uLy4uL3BhZ2VzL2JlbGllZnMvYmVsaWVmc3BhZ2UuanMnXG5cbmltcG9ydCBIb21lUGFnZSBmcm9tICcuLy4uLy4uL3BhZ2VzL2hvbWVwYWdlL2hvbWVwYWdlLmh0bWwnXG5pbXBvcnQgSG9tZVBhZ2VKUyBmcm9tICcuLi8uLi9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5qcydcblxuaW1wb3J0IENodXJjaExvZ28gZnJvbSAnLi8uLi8uLi8uLi9pbWFnZXMvQ2h1cmNoTG9nby5zdmcnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51cGFnZSgpIHtcblxuICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyLWxlZnQtbG9nb1wiKS5hdHRyKFwic3JjXCIsIGAke0NodXJjaExvZ299YClcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC11cy1mb3JtXCIpLnNjcm9sbEludG9WaWV3KCk7XG59XG5cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXItbmF2YmFyLWxvZ29cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikucmVtb3ZlQ2xhc3MoXCJvcGFjaXR5LW9uZVwiKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3ZlclwiKS5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAgICAgJChcIiNob21lcGFnZS1uYXZiYXJcIikucmVtb3ZlQ2xhc3MoXCJwb3NpdGlvbi1zdGF0aWNcIilcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm92ZXJmbG93LWhpZGRlblwiKVxuICAgICAgICB9LCA0MDApXG5cbiAgICAgICAgJChcImJvZHlcIikubG9hZChgJHtIb21lUGFnZX1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBIb21lUGFnZUpTKClcbiAgICAgICAgfSk7XG5cbiAgICB9KVxuXG5cblxuICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3Zlci1uYXZiYXItZXhpdFwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLnJlbW92ZUNsYXNzKFwib3BhY2l0eS1vbmVcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwicG9zaXRpb24tc3RhdGljXCIpXG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIilcbiAgICAgICAgfSwgNDAwKVxuICAgIH0pXG5cblxuXG4gICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyLWJvZHktcmlnaHQtY29udGFjdC11c1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3ZlclwiKS5yZW1vdmVDbGFzcyhcIm9wYWNpdHktb25lXCIpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLmFkZENsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcInBvc2l0aW9uLXN0YXRpY1wiKVxuICAgICAgICAgICAgJChcIiNob21lcGFnZS1uYXZiYXJcIikucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib3ZlcmZsb3ctaGlkZGVuXCIpXG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC11cy1mb3JtXCIpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuXG4gICAgICAgIH0sIDQwMClcbiAgICB9KVxuXG4gICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyLWJvZHktcmlnaHQtZ2V0LXByYXllclwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3ZlclwiKS5yZW1vdmVDbGFzcyhcIm9wYWNpdHktb25lXCIpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLmFkZENsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcInBvc2l0aW9uLXN0YXRpY1wiKVxuICAgICAgICAgICAgJChcIiNob21lcGFnZS1uYXZiYXJcIikucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib3ZlcmZsb3ctaGlkZGVuXCIpXG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC11cy1mb3JtXCIpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuXG4gICAgICAgIH0sIDQwMClcbiAgICB9KVxuXG4gICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyLWJvZHktcmlnaHQtZ2l2ZS1vbmxpbmVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3ZlclwiKS5yZW1vdmVDbGFzcyhcIm9wYWNpdHktb25lXCIpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLmFkZENsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcInBvc2l0aW9uLXN0YXRpY1wiKVxuICAgICAgICAgICAgJChcIiNob21lcGFnZS1uYXZiYXJcIikucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib3ZlcmZsb3ctaGlkZGVuXCIpXG5cbiAgICAgICAgICAgICQoXCJib2R5XCIpLmxvYWQoYCR7R2l2ZVBhZ2V9YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIEdpdmVQYWdlSlMoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSwgNDAwKVxuICAgIH0pXG5cbiAgICAkKFwiI21lbnUtYmVsaWVmc1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmVsaWVmc1wiKVxuICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikucmVtb3ZlQ2xhc3MoXCJvcGFjaXR5LW9uZVwiKTtcbiAgICAgICAgLy8gJChcIiNtZW51LWJlbGllZnNcIikuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcInBvc2l0aW9uLXN0YXRpY1wiKTtcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIik7XG5cblxuICAgICAgICAgICAgJChcImJvZHlcIikubG9hZChgJHtCZWxpZWZzUGFnZX1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgQmVsaWVmc1BhZ2VKUygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIENsZWFyIHByZXZpb3VzIGNvbnRlbnRcbiAgICAgICAgICAgICQoXCIjbWVudS1jb250ZW50LWNvbnRhaW5lclwiKS5odG1sKFwiXCIpO1xuXG4gICAgICAgICAgICAvLyBMb2FkIG1lbnVDb250ZW50Lmh0bWwgaW50byBtZW51LWNvbnRlbnQtY29udGFpbmVyXG4gICAgICAgICAgICAkKFwiI21lbnUtY29udGVudC1jb250YWluZXJcIikubG9hZCgnLi4vbWVudUNvbnRlbnQvbWVudUNvbnRlbnQuaHRtbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBMb2FkIG1lbnVwYWdlLmpzIGZyb20gdGhlIG1lbnVDb250ZW50IGZvbGRlclxuICAgICAgICAgICAgICAgICQuZ2V0U2NyaXB0KCcuLi9tZW51Q29udGVudC9tZW51cGFnZS5qcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWxseSwgY2FsbCBhIGZ1bmN0aW9uIGlmIHRoZXJlIGlzIEphdmFTY3JpcHQgc3BlY2lmaWMgdG8gbWVudUNvbnRlbnQuaHRtbFxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgYXNzdW1pbmcgdGhlcmUgaXMgYSBmdW5jdGlvbiBjYWxsZWQgbWVudUNvbnRlbnRKU1xuICAgICAgICAgICAgICAgICAgICBtZW51Q29udGVudEpTKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9KTtcblxuICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3Zlci1ib2R5LXJpZ2h0LW91ci1sb2NhdGlvblwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3ZlclwiKS5yZW1vdmVDbGFzcyhcIm9wYWNpdHktb25lXCIpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLmFkZENsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5yZW1vdmVDbGFzcyhcInBvc2l0aW9uLXN0YXRpY1wiKVxuICAgICAgICAgICAgJChcIiNob21lcGFnZS1uYXZiYXJcIikucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwib3ZlcmZsb3ctaGlkZGVuXCIpXG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZXBhZ2UtbWFwXCIpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuXG4gICAgICAgIH0sIDQwMClcbiAgICB9KVxuXG4gICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyLWJvZHktbGVmdC10b3AtbG9jYXRpb25cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikucmVtb3ZlQ2xhc3MoXCJvcGFjaXR5LW9uZVwiKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3ZlclwiKS5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICAgICAgJChcIiNob21lcGFnZS1uYXZiYXJcIikucmVtb3ZlQ2xhc3MoXCJwb3NpdGlvbi1zdGF0aWNcIilcbiAgICAgICAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm92ZXJmbG93LWhpZGRlblwiKVxuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVwYWdlLW1hcFwiKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcblxuICAgICAgICB9LCA0MDApXG4gICAgfSlcblxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWUwZmM2NWEyMGZjN2E3ZWI5MGVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=