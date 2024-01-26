"use strict";
self["webpackHotUpdatefreedom_church"]("index",{

/***/ "./src/pages/beliefs/beliefspage.js":
/*!******************************************!*\
  !*** ./src/pages/beliefs/beliefspage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ beliefspage)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _components_footer_footerpage_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/footer/footerpage.html */ "./src/components/footer/footerpage.html");
/* harmony import */ var _components_footer_footerpage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/footer/footerpage.js */ "./src/components/footer/footerpage.js");
/* harmony import */ var _components_menu_menupage_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/menu/menupage.html */ "./src/components/menu/menupage.html");
/* harmony import */ var _components_menu_menupage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/menu/menupage.js */ "./src/components/menu/menupage.js");
/* harmony import */ var _components_welcomeform_welcomeformpage_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/welcomeform/welcomeformpage.html */ "./src/components/welcomeform/welcomeformpage.html");
/* harmony import */ var _components_welcomeform_welcomeformpage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/welcomeform/welcomeformpage.js */ "./src/components/welcomeform/welcomeformpage.js");
/* harmony import */ var _components_navbar_navbarpage_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../components/navbar/navbarpage.html */ "./src/components/navbar/navbarpage.html");
/* harmony import */ var _components_navbar_navbarpage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../components/navbar/navbarpage.js */ "./src/components/navbar/navbarpage.js");
/* harmony import */ var _components_underconstruction_underconstructionpage_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../components/underconstruction/underconstructionpage.html */ "./src/components/underconstruction/underconstructionpage.html");
/* harmony import */ var _components_underconstruction_underconstructionpage_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../components/underconstruction/underconstructionpage.js */ "./src/components/underconstruction/underconstructionpage.js");


















function beliefspage() {

    addEventListeners()
    document.getElementById("homepage-body-id").scrollIntoView();

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#under-construction-modal").load(`${_components_underconstruction_underconstructionpage_html__WEBPACK_IMPORTED_MODULE_10__["default"]}`, function () {
        (0,_components_underconstruction_underconstructionpage_js__WEBPACK_IMPORTED_MODULE_11__["default"])()
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#giving-footer-all").load(`${_components_footer_footerpage_html__WEBPACK_IMPORTED_MODULE_2__["default"]}`, function () {
        (0,_components_footer_footerpage_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#giving-menu").load(`${_components_menu_menupage_html__WEBPACK_IMPORTED_MODULE_4__["default"]}`, function () {
        (0,_components_menu_menupage_js__WEBPACK_IMPORTED_MODULE_5__["default"])()
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#giving-welcome-form").load(`${_components_welcomeform_welcomeformpage_html__WEBPACK_IMPORTED_MODULE_6__["default"]}`, function () {
        (0,_components_welcomeform_welcomeformpage_js__WEBPACK_IMPORTED_MODULE_7__["default"])()
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#giving-navbar").load(`${_components_navbar_navbarpage_html__WEBPACK_IMPORTED_MODULE_8__["default"]}`, function () {
        (0,_components_navbar_navbarpage_js__WEBPACK_IMPORTED_MODULE_9__["default"])()
    });


}

function addEventListeners() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector-detail").on('click', function () {
        const displayId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("display");
        hideAllDisplays();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + displayId).removeClass("display-none");

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("selector-button").removeClass("selector-button-plain");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector-detail").not(this).removeClass("selector-button").addClass("selector-button-plain");

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector-text").text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text());
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".beliefs-point").on('click', function () {
        const displayId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("display");
        const displayElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + displayId);

        displayElement.slideToggle(600);
    });

    // mobile toggle functionality for the selector
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector-mobile, .s-d-mobile").on('click', function () {
        let windowWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
        if (windowWidth <= 700) {

            let display = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".s-d-c-mobile").css("display")

            let delay = display !== "none" ? 200 : 0;

                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".s-d-c-mobile").slideToggle(500);
                }, delay)
        }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sliding-underline').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('clicked');
        })
    })

}

function hideAllDisplays() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".beliefs-value > div").addClass("display-none");
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    addEventListeners();
})

// $(document).ready(function () {
//     const screenWidth = window.innerWidth;

//     if (screenWidth >= 700)  {
//         $(".selector-details-container").removeClass("s-d-c-mobile").css("display", "contents");
//     }
// });

// $(document).ready(function () {
//     const screenWidth = window.innerWidth;
//     console.log(screenWidth)
//     if (screenWidth < 700)  {
//         $(".selector-details-container").addClass("s-d-c-mobile")
//     }
// });

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    // Function to update based on screen width
    function updateScreen() {
        const screenWidth = window.innerWidth;
        console.log(screenWidth);

        

        if (screenWidth < 700)  {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector-details-container").addClass("s-d-c-mobile");
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector-details-container").removeClass("s-d-c-mobile");
        }
    }

    // Initial call to set styles on page load
    updateScreen();

    // Event listener for screen resize
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).resize(function () {
        updateScreen();
    });
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("822e209fbf28fd06fcdd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGY3NTAxNzlhZTU4NjczNWY2YzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNVOztBQUVzQztBQUNKOztBQUVGO0FBQ0o7O0FBRXlCO0FBQ0o7O0FBRVg7QUFDSjs7QUFFcUM7QUFDSjs7QUFFcEY7O0FBRWY7QUFDQTs7QUFFQSxJQUFJLDZDQUFDLHNDQUFzQyxpR0FBeUIsQ0FBQztBQUNyRSxRQUFRLG1HQUF1QjtBQUMvQixLQUFLOztBQUVMLElBQUksNkNBQUMsK0JBQStCLDBFQUFjLENBQUM7QUFDbkQsUUFBUSw0RUFBWTtBQUNwQixLQUFLOztBQUVMLElBQUksNkNBQUMseUJBQXlCLHNFQUFZLENBQUM7QUFDM0MsUUFBUSx3RUFBVTtBQUNsQixLQUFLOztBQUVMLElBQUksNkNBQUMsaUNBQWlDLG9GQUFtQixDQUFDO0FBQzFELFFBQVEsc0ZBQWlCO0FBQ3pCLEtBQUs7O0FBRUwsSUFBSSw2Q0FBQywyQkFBMkIsMEVBQWMsQ0FBQztBQUMvQyxRQUFRLDRFQUFZO0FBQ3BCLEtBQUs7OztBQUdMOztBQUVBO0FBQ0EsSUFBSSw2Q0FBQztBQUNMLDBCQUEwQiw2Q0FBQztBQUMzQjtBQUNBLFFBQVEsNkNBQUM7O0FBRVQsUUFBUSw2Q0FBQztBQUNULFFBQVEsNkNBQUM7O0FBRVQsUUFBUSw2Q0FBQyx3QkFBd0IsNkNBQUM7QUFDbEMsS0FBSzs7QUFFTCxJQUFJLDZDQUFDO0FBQ0wsMEJBQTBCLDZDQUFDO0FBQzNCLCtCQUErQiw2Q0FBQzs7QUFFaEM7QUFDQSxLQUFLOztBQUVMO0FBQ0EsSUFBSSw2Q0FBQztBQUNMLDBCQUEwQiw2Q0FBQztBQUMzQjs7QUFFQSwwQkFBMEIsNkNBQUM7O0FBRTNCOztBQUVBO0FBQ0Esb0JBQW9CLDZDQUFDO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBLEtBQUs7O0FBRUwsSUFBSSw2Q0FBQztBQUNMLFFBQVEsNkNBQUM7QUFDVCxZQUFZLDZDQUFDO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7O0FBRUE7QUFDQSxJQUFJLDZDQUFDO0FBQ0w7O0FBRUEsNkNBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosNkNBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVksNkNBQUM7QUFDYixVQUFVO0FBQ1YsWUFBWSw2Q0FBQztBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksNkNBQUM7QUFDTDtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7VUN0SUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmVlZG9tX2NodXJjaC8uL3NyYy9wYWdlcy9iZWxpZWZzL2JlbGllZnNwYWdlLmpzIiwid2VicGFjazovL2ZyZWVkb21fY2h1cmNoL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5pbXBvcnQgRm9vdGVyUGFnZUh0bWwgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJwYWdlLmh0bWwnXG5pbXBvcnQgRm9vdGVyUGFnZUpTIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVycGFnZS5qcydcblxuaW1wb3J0IE1lbnVQYWdlSHRtbCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51cGFnZS5odG1sJ1xuaW1wb3J0IE1lbnVQYWdlSlMgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL21lbnUvbWVudXBhZ2UuanMnXG5cbmltcG9ydCBXZWxjb21lRm9ybVBhZ2VIdG1sIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy93ZWxjb21lZm9ybS93ZWxjb21lZm9ybXBhZ2UuaHRtbCdcbmltcG9ydCBXZWxjb21lRm9ybVBhZ2VKUyBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvd2VsY29tZWZvcm0vd2VsY29tZWZvcm1wYWdlLmpzJ1xuXG5pbXBvcnQgTmF2YmFyUGFnZUh0bWwgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXJwYWdlLmh0bWwnXG5pbXBvcnQgTmF2YmFyUGFnZUpTIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFycGFnZS5qcydcblxuaW1wb3J0IFVuZGVyQ29uc3RydWN0aW9uUGFnZUh0bWwgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL3VuZGVyY29uc3RydWN0aW9uL3VuZGVyY29uc3RydWN0aW9ucGFnZS5odG1sJ1xuaW1wb3J0IFVuZGVyQ29uc3RydWN0aW9uUGFnZUpTIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy91bmRlcmNvbnN0cnVjdGlvbi91bmRlcmNvbnN0cnVjdGlvbnBhZ2UuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJlbGllZnNwYWdlKCkge1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZXBhZ2UtYm9keS1pZFwiKS5zY3JvbGxJbnRvVmlldygpO1xuXG4gICAgJChcIiN1bmRlci1jb25zdHJ1Y3Rpb24tbW9kYWxcIikubG9hZChgJHtVbmRlckNvbnN0cnVjdGlvblBhZ2VIdG1sfWAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgVW5kZXJDb25zdHJ1Y3Rpb25QYWdlSlMoKVxuICAgIH0pO1xuXG4gICAgJChcIiNnaXZpbmctZm9vdGVyLWFsbFwiKS5sb2FkKGAke0Zvb3RlclBhZ2VIdG1sfWAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRm9vdGVyUGFnZUpTKClcbiAgICB9KTtcblxuICAgICQoXCIjZ2l2aW5nLW1lbnVcIikubG9hZChgJHtNZW51UGFnZUh0bWx9YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBNZW51UGFnZUpTKClcbiAgICB9KTtcblxuICAgICQoXCIjZ2l2aW5nLXdlbGNvbWUtZm9ybVwiKS5sb2FkKGAke1dlbGNvbWVGb3JtUGFnZUh0bWx9YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBXZWxjb21lRm9ybVBhZ2VKUygpXG4gICAgfSk7XG5cbiAgICAkKFwiI2dpdmluZy1uYXZiYXJcIikubG9hZChgJHtOYXZiYXJQYWdlSHRtbH1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIE5hdmJhclBhZ2VKUygpXG4gICAgfSk7XG5cblxufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAkKFwiLnNlbGVjdG9yLWRldGFpbFwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlJZCA9ICQodGhpcykuZGF0YShcImRpc3BsYXlcIik7XG4gICAgICAgIGhpZGVBbGxEaXNwbGF5cygpO1xuICAgICAgICAkKFwiI1wiICsgZGlzcGxheUlkKS5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcblxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwic2VsZWN0b3ItYnV0dG9uXCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0b3ItYnV0dG9uLXBsYWluXCIpO1xuICAgICAgICAkKFwiLnNlbGVjdG9yLWRldGFpbFwiKS5ub3QodGhpcykucmVtb3ZlQ2xhc3MoXCJzZWxlY3Rvci1idXR0b25cIikuYWRkQ2xhc3MoXCJzZWxlY3Rvci1idXR0b24tcGxhaW5cIik7XG5cbiAgICAgICAgJChcIi5zZWxlY3Rvci10ZXh0XCIpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xuICAgIH0pO1xuXG4gICAgJChcIi5iZWxpZWZzLXBvaW50XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheUlkID0gJCh0aGlzKS5kYXRhKFwiZGlzcGxheVwiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheUVsZW1lbnQgPSAkKFwiI1wiICsgZGlzcGxheUlkKTtcblxuICAgICAgICBkaXNwbGF5RWxlbWVudC5zbGlkZVRvZ2dsZSg2MDApO1xuICAgIH0pO1xuXG4gICAgLy8gbW9iaWxlIHRvZ2dsZSBmdW5jdGlvbmFsaXR5IGZvciB0aGUgc2VsZWN0b3JcbiAgICAkKFwiLnNlbGVjdG9yLW1vYmlsZSwgLnMtZC1tb2JpbGVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgaWYgKHdpbmRvd1dpZHRoIDw9IDcwMCkge1xuXG4gICAgICAgICAgICBsZXQgZGlzcGxheSA9ICQoXCIucy1kLWMtbW9iaWxlXCIpLmNzcyhcImRpc3BsYXlcIilcblxuICAgICAgICAgICAgbGV0IGRlbGF5ID0gZGlzcGxheSAhPT0gXCJub25lXCIgPyAyMDAgOiAwO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIucy1kLWMtbW9iaWxlXCIpLnNsaWRlVG9nZ2xlKDUwMCk7XG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnNsaWRpbmctdW5kZXJsaW5lJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gaGlkZUFsbERpc3BsYXlzKCkge1xuICAgICQoXCIuYmVsaWVmcy12YWx1ZSA+IGRpdlwiKS5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG59KVxuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4vLyAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuLy8gICAgIGlmIChzY3JlZW5XaWR0aCA+PSA3MDApICB7XG4vLyAgICAgICAgICQoXCIuc2VsZWN0b3ItZGV0YWlscy1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJzLWQtYy1tb2JpbGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImNvbnRlbnRzXCIpO1xuLy8gICAgIH1cbi8vIH0pO1xuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4vLyAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbi8vICAgICBjb25zb2xlLmxvZyhzY3JlZW5XaWR0aClcbi8vICAgICBpZiAoc2NyZWVuV2lkdGggPCA3MDApICB7XG4vLyAgICAgICAgICQoXCIuc2VsZWN0b3ItZGV0YWlscy1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJzLWQtYy1tb2JpbGVcIilcbi8vICAgICB9XG4vLyB9KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSBiYXNlZCBvbiBzY3JlZW4gd2lkdGhcbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JlZW4oKSB7XG4gICAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNvbnNvbGUubG9nKHNjcmVlbldpZHRoKTtcblxuICAgICAgICBcblxuICAgICAgICBpZiAoc2NyZWVuV2lkdGggPCA3MDApICB7XG4gICAgICAgICAgICAkKFwiLnNlbGVjdG9yLWRldGFpbHMtY29udGFpbmVyXCIpLmFkZENsYXNzKFwicy1kLWMtbW9iaWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIi5zZWxlY3Rvci1kZXRhaWxzLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcInMtZC1jLW1vYmlsZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEluaXRpYWwgY2FsbCB0byBzZXQgc3R5bGVzIG9uIHBhZ2UgbG9hZFxuICAgIHVwZGF0ZVNjcmVlbigpO1xuXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHNjcmVlbiByZXNpemVcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgfSk7XG59KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgyMmUyMDlmYmYyOGZkMDZmY2RkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9