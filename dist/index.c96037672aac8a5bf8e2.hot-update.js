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
    // $(".selector-detail").on('click', function () {
    //     const displayId = $(this).data("display");
    //     hideAllDisplays();
    //     $("#" + displayId).removeClass("display-none");

    //     $(this).addClass("selector-button").removeClass("selector-button-plain");
    //     $(".selector-detail").not(this).removeClass("selector-button").addClass("selector-button-plain");

    //     $(this).addClass("change-color-to").removeClass("change-color-from");
    //     $(".selector-detail").not(this).removeClass("change-color-to").addClass("change-color-from");

    //     $(".selector-text").text($(this).text());
    // });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".button-container").on('click', function () {
        const displayId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("display");
        hideAllDisplays();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + displayId).removeClass("display-none");

        let movingBackground = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".moving-background");

        let status = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(".moving-background").hasClass("move-right");
        if (!status) {
            movingBackground.removeClass("move-left").addClass("move-right");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("button-text-white")
        }
        else {
           movingBackground.removeClass("move-right").addClass("move-left");
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass("button-text-white")
        }
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".beliefs-point").on('click', function () {
        const displayId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("display");
        const displayElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + displayId);

        displayElement.slideToggle(600);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.arrow-size').toggleClass('no-transform');
    });

    // mobile toggle functionality for the selector
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector-mobile, .s-d-mobile").on('click', function () {
        let windowWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
        if (windowWidth <= 768) {

            let display = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".s-d-c-mobile").css("none")

            let delay = display !== "none" ? 200 : 0;

            // $(".s-d-c-mobile").slideToggle(200);
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

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    // Function to update based on screen width
    function updateScreen() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 769) jquery__WEBPACK_IMPORTED_MODULE_0___default()(".s-d-c-mobile").removeAttr("style");
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
/******/ 	__webpack_require__.h = () => ("0d849f59c95f56d9eb7c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzk2MDM3NjcyYWFjOGE1YmY4ZTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNVOztBQUVzQztBQUNKOztBQUVGO0FBQ0o7O0FBRXlCO0FBQ0o7O0FBRVg7QUFDSjs7QUFFcUM7QUFDSjs7QUFFcEY7O0FBRWY7QUFDQTs7QUFFQSxJQUFJLDZDQUFDLHNDQUFzQyxpR0FBeUIsQ0FBQztBQUNyRSxRQUFRLG1HQUF1QjtBQUMvQixLQUFLOztBQUVMLElBQUksNkNBQUMsK0JBQStCLDBFQUFjLENBQUM7QUFDbkQsUUFBUSw0RUFBWTtBQUNwQixLQUFLOztBQUVMLElBQUksNkNBQUMseUJBQXlCLHNFQUFZLENBQUM7QUFDM0MsUUFBUSx3RUFBVTtBQUNsQixLQUFLOztBQUVMLElBQUksNkNBQUMsaUNBQWlDLG9GQUFtQixDQUFDO0FBQzFELFFBQVEsc0ZBQWlCO0FBQ3pCLEtBQUs7O0FBRUwsSUFBSSw2Q0FBQywyQkFBMkIsMEVBQWMsQ0FBQztBQUMvQyxRQUFRLDRFQUFZO0FBQ3BCLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTs7QUFFUixJQUFJLDZDQUFDO0FBQ0wsMEJBQTBCLDZDQUFDO0FBQzNCO0FBQ0EsUUFBUSw2Q0FBQzs7QUFFVCwrQkFBK0IsNkNBQUM7O0FBRWhDLHFCQUFxQiw2Q0FBQztBQUN0QjtBQUNBO0FBQ0EsWUFBWSw2Q0FBQztBQUNiO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQUM7QUFDYjtBQUNBLEtBQUs7O0FBRUwsSUFBSSw2Q0FBQztBQUNMLDBCQUEwQiw2Q0FBQztBQUMzQiwrQkFBK0IsNkNBQUM7O0FBRWhDO0FBQ0EsUUFBUSw2Q0FBQztBQUNULEtBQUs7O0FBRUw7QUFDQSxJQUFJLDZDQUFDO0FBQ0wsMEJBQTBCLDZDQUFDO0FBQzNCOztBQUVBLDBCQUEwQiw2Q0FBQzs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBQztBQUNqQixhQUFhO0FBQ2I7QUFDQSxLQUFLOztBQUVMLElBQUksNkNBQUM7QUFDTCxRQUFRLDZDQUFDO0FBQ1QsWUFBWSw2Q0FBQztBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMOztBQUVBO0FBQ0EsSUFBSSw2Q0FBQztBQUNMOztBQUVBLDZDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVELDZDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyw2Q0FBQztBQUNqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw2Q0FBQztBQUNMO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7OztVQ3RJRCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZWVkb21fY2h1cmNoLy4vc3JjL3BhZ2VzL2JlbGllZnMvYmVsaWVmc3BhZ2UuanMiLCJ3ZWJwYWNrOi8vZnJlZWRvbV9jaHVyY2gvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmltcG9ydCBGb290ZXJQYWdlSHRtbCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3RlcnBhZ2UuaHRtbCdcbmltcG9ydCBGb290ZXJQYWdlSlMgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJwYWdlLmpzJ1xuXG5pbXBvcnQgTWVudVBhZ2VIdG1sIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9tZW51L21lbnVwYWdlLmh0bWwnXG5pbXBvcnQgTWVudVBhZ2VKUyBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51cGFnZS5qcydcblxuaW1wb3J0IFdlbGNvbWVGb3JtUGFnZUh0bWwgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL3dlbGNvbWVmb3JtL3dlbGNvbWVmb3JtcGFnZS5odG1sJ1xuaW1wb3J0IFdlbGNvbWVGb3JtUGFnZUpTIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy93ZWxjb21lZm9ybS93ZWxjb21lZm9ybXBhZ2UuanMnXG5cbmltcG9ydCBOYXZiYXJQYWdlSHRtbCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhcnBhZ2UuaHRtbCdcbmltcG9ydCBOYXZiYXJQYWdlSlMgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXJwYWdlLmpzJ1xuXG5pbXBvcnQgVW5kZXJDb25zdHJ1Y3Rpb25QYWdlSHRtbCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvdW5kZXJjb25zdHJ1Y3Rpb24vdW5kZXJjb25zdHJ1Y3Rpb25wYWdlLmh0bWwnXG5pbXBvcnQgVW5kZXJDb25zdHJ1Y3Rpb25QYWdlSlMgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL3VuZGVyY29uc3RydWN0aW9uL3VuZGVyY29uc3RydWN0aW9ucGFnZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmVsaWVmc3BhZ2UoKSB7XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lcGFnZS1ib2R5LWlkXCIpLnNjcm9sbEludG9WaWV3KCk7XG5cbiAgICAkKFwiI3VuZGVyLWNvbnN0cnVjdGlvbi1tb2RhbFwiKS5sb2FkKGAke1VuZGVyQ29uc3RydWN0aW9uUGFnZUh0bWx9YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBVbmRlckNvbnN0cnVjdGlvblBhZ2VKUygpXG4gICAgfSk7XG5cbiAgICAkKFwiI2dpdmluZy1mb290ZXItYWxsXCIpLmxvYWQoYCR7Rm9vdGVyUGFnZUh0bWx9YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBGb290ZXJQYWdlSlMoKVxuICAgIH0pO1xuXG4gICAgJChcIiNnaXZpbmctbWVudVwiKS5sb2FkKGAke01lbnVQYWdlSHRtbH1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIE1lbnVQYWdlSlMoKVxuICAgIH0pO1xuXG4gICAgJChcIiNnaXZpbmctd2VsY29tZS1mb3JtXCIpLmxvYWQoYCR7V2VsY29tZUZvcm1QYWdlSHRtbH1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFdlbGNvbWVGb3JtUGFnZUpTKClcbiAgICB9KTtcblxuICAgICQoXCIjZ2l2aW5nLW5hdmJhclwiKS5sb2FkKGAke05hdmJhclBhZ2VIdG1sfWAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTmF2YmFyUGFnZUpTKClcbiAgICB9KTtcblxuXG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8vICQoXCIuc2VsZWN0b3ItZGV0YWlsXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgY29uc3QgZGlzcGxheUlkID0gJCh0aGlzKS5kYXRhKFwiZGlzcGxheVwiKTtcbiAgICAvLyAgICAgaGlkZUFsbERpc3BsYXlzKCk7XG4gICAgLy8gICAgICQoXCIjXCIgKyBkaXNwbGF5SWQpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpO1xuXG4gICAgLy8gICAgICQodGhpcykuYWRkQ2xhc3MoXCJzZWxlY3Rvci1idXR0b25cIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3Rvci1idXR0b24tcGxhaW5cIik7XG4gICAgLy8gICAgICQoXCIuc2VsZWN0b3ItZGV0YWlsXCIpLm5vdCh0aGlzKS5yZW1vdmVDbGFzcyhcInNlbGVjdG9yLWJ1dHRvblwiKS5hZGRDbGFzcyhcInNlbGVjdG9yLWJ1dHRvbi1wbGFpblwiKTtcblxuICAgIC8vICAgICAkKHRoaXMpLmFkZENsYXNzKFwiY2hhbmdlLWNvbG9yLXRvXCIpLnJlbW92ZUNsYXNzKFwiY2hhbmdlLWNvbG9yLWZyb21cIik7XG4gICAgLy8gICAgICQoXCIuc2VsZWN0b3ItZGV0YWlsXCIpLm5vdCh0aGlzKS5yZW1vdmVDbGFzcyhcImNoYW5nZS1jb2xvci10b1wiKS5hZGRDbGFzcyhcImNoYW5nZS1jb2xvci1mcm9tXCIpO1xuXG4gICAgLy8gICAgICQoXCIuc2VsZWN0b3ItdGV4dFwiKS50ZXh0KCQodGhpcykudGV4dCgpKTtcbiAgICAvLyB9KTtcblxuICAgICQoXCIuYnV0dG9uLWNvbnRhaW5lclwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlJZCA9ICQodGhpcykuZGF0YShcImRpc3BsYXlcIik7XG4gICAgICAgIGhpZGVBbGxEaXNwbGF5cygpO1xuICAgICAgICAkKFwiI1wiICsgZGlzcGxheUlkKS5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcblxuICAgICAgICBsZXQgbW92aW5nQmFja2dyb3VuZCA9ICQodGhpcykuZmluZChcIi5tb3ZpbmctYmFja2dyb3VuZFwiKTtcblxuICAgICAgICBsZXQgc3RhdHVzID0gJCh0aGlzKS5maW5kKFwiLm1vdmluZy1iYWNrZ3JvdW5kXCIpLmhhc0NsYXNzKFwibW92ZS1yaWdodFwiKTtcbiAgICAgICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgICAgICAgIG1vdmluZ0JhY2tncm91bmQucmVtb3ZlQ2xhc3MoXCJtb3ZlLWxlZnRcIikuYWRkQ2xhc3MoXCJtb3ZlLXJpZ2h0XCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImJ1dHRvbi10ZXh0LXdoaXRlXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgIG1vdmluZ0JhY2tncm91bmQucmVtb3ZlQ2xhc3MoXCJtb3ZlLXJpZ2h0XCIpLmFkZENsYXNzKFwibW92ZS1sZWZ0XCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImJ1dHRvbi10ZXh0LXdoaXRlXCIpXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIuYmVsaWVmcy1wb2ludFwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlJZCA9ICQodGhpcykuZGF0YShcImRpc3BsYXlcIik7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlFbGVtZW50ID0gJChcIiNcIiArIGRpc3BsYXlJZCk7XG5cbiAgICAgICAgZGlzcGxheUVsZW1lbnQuc2xpZGVUb2dnbGUoNjAwKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuYXJyb3ctc2l6ZScpLnRvZ2dsZUNsYXNzKCduby10cmFuc2Zvcm0nKTtcbiAgICB9KTtcblxuICAgIC8vIG1vYmlsZSB0b2dnbGUgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIHNlbGVjdG9yXG4gICAgJChcIi5zZWxlY3Rvci1tb2JpbGUsIC5zLWQtbW9iaWxlXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIGlmICh3aW5kb3dXaWR0aCA8PSA3NjgpIHtcblxuICAgICAgICAgICAgbGV0IGRpc3BsYXkgPSAkKFwiLnMtZC1jLW1vYmlsZVwiKS5jc3MoXCJub25lXCIpXG5cbiAgICAgICAgICAgIGxldCBkZWxheSA9IGRpc3BsYXkgIT09IFwibm9uZVwiID8gMjAwIDogMDtcblxuICAgICAgICAgICAgLy8gJChcIi5zLWQtYy1tb2JpbGVcIikuc2xpZGVUb2dnbGUoMjAwKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoXCIucy1kLWMtbW9iaWxlXCIpLnNsaWRlVG9nZ2xlKDUwMCk7XG4gICAgICAgICAgICB9LCBkZWxheSlcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuc2xpZGluZy11bmRlcmxpbmUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjbGlja2VkJyk7XG4gICAgICAgIH0pXG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBoaWRlQWxsRGlzcGxheXMoKSB7XG4gICAgJChcIi5iZWxpZWZzLXZhbHVlID4gZGl2XCIpLmFkZENsYXNzKFwiZGlzcGxheS1ub25lXCIpO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbn0pXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgYmFzZWQgb24gc2NyZWVuIHdpZHRoXG4gICAgZnVuY3Rpb24gdXBkYXRlU2NyZWVuKCkge1xuICAgICAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIGlmIChzY3JlZW5XaWR0aCA+PSA3NjkpICQoXCIucy1kLWMtbW9iaWxlXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsIGNhbGwgdG8gc2V0IHN0eWxlcyBvbiBwYWdlIGxvYWRcbiAgICB1cGRhdGVTY3JlZW4oKTtcblxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBzY3JlZW4gcmVzaXplXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xuICAgIH0pO1xufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZDg0OWY1OWM5NWY1NmQ5ZWI3Y1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==