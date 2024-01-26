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
    // $(".beliefs-key-text").on('click', function () {
    //     const displayId = $(this).data("display");
    //     hideAllDisplays();
    //     $("#" + displayId).removeClass("display-none");

    //     $(".beliefs-key-text").removeClass("small-button");

    //     $(this).addClass("small-button");
    // });

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

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector, .selector-detail").on('click', function () {
        let display = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector-details-container").css("display")

        let delay = display !== "none" ? 400 : 0;

        setTimeout(function() {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector-details-container").slideToggle(500);
        }, delay)
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4da3553880aabc4c8c4c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguM2Y3N2E2NzZlMTYwOGVjMTQzNDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNVOztBQUVzQztBQUNKOztBQUVGO0FBQ0o7O0FBRXlCO0FBQ0o7O0FBRVg7QUFDSjs7QUFFcUM7QUFDSjs7QUFFcEY7O0FBRWY7QUFDQTs7QUFFQSxJQUFJLDZDQUFDLHNDQUFzQyxpR0FBeUIsQ0FBQztBQUNyRSxRQUFRLG1HQUF1QjtBQUMvQixLQUFLOztBQUVMLElBQUksNkNBQUMsK0JBQStCLDBFQUFjLENBQUM7QUFDbkQsUUFBUSw0RUFBWTtBQUNwQixLQUFLOztBQUVMLElBQUksNkNBQUMseUJBQXlCLHNFQUFZLENBQUM7QUFDM0MsUUFBUSx3RUFBVTtBQUNsQixLQUFLOztBQUVMLElBQUksNkNBQUMsaUNBQWlDLG9GQUFtQixDQUFDO0FBQzFELFFBQVEsc0ZBQWlCO0FBQ3pCLEtBQUs7O0FBRUwsSUFBSSw2Q0FBQywyQkFBMkIsMEVBQWMsQ0FBQztBQUMvQyxRQUFRLDRFQUFZO0FBQ3BCLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFROztBQUVSLElBQUksNkNBQUM7QUFDTCwwQkFBMEIsNkNBQUM7QUFDM0I7QUFDQSxRQUFRLDZDQUFDOztBQUVULFFBQVEsNkNBQUM7QUFDVCxRQUFRLDZDQUFDOztBQUVULFFBQVEsNkNBQUMsd0JBQXdCLDZDQUFDO0FBQ2xDLEtBQUs7O0FBRUwsSUFBSSw2Q0FBQztBQUNMLDBCQUEwQiw2Q0FBQztBQUMzQiwrQkFBK0IsNkNBQUM7O0FBRWhDO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLDZDQUFDO0FBQ0wsc0JBQXNCLDZDQUFDOztBQUV2Qjs7QUFFQTtBQUNBLFlBQVksNkNBQUM7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTCxJQUFJLDZDQUFDO0FBQ0wsUUFBUSw2Q0FBQztBQUNULFlBQVksNkNBQUM7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSw2Q0FBQztBQUNMOztBQUVBLDZDQUFDO0FBQ0Q7QUFDQSxDQUFDOzs7Ozs7Ozs7VUNsR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmVlZG9tX2NodXJjaC8uL3NyYy9wYWdlcy9iZWxpZWZzL2JlbGllZnNwYWdlLmpzIiwid2VicGFjazovL2ZyZWVkb21fY2h1cmNoL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5pbXBvcnQgRm9vdGVyUGFnZUh0bWwgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJwYWdlLmh0bWwnXG5pbXBvcnQgRm9vdGVyUGFnZUpTIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVycGFnZS5qcydcblxuaW1wb3J0IE1lbnVQYWdlSHRtbCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51cGFnZS5odG1sJ1xuaW1wb3J0IE1lbnVQYWdlSlMgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL21lbnUvbWVudXBhZ2UuanMnXG5cbmltcG9ydCBXZWxjb21lRm9ybVBhZ2VIdG1sIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy93ZWxjb21lZm9ybS93ZWxjb21lZm9ybXBhZ2UuaHRtbCdcbmltcG9ydCBXZWxjb21lRm9ybVBhZ2VKUyBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvd2VsY29tZWZvcm0vd2VsY29tZWZvcm1wYWdlLmpzJ1xuXG5pbXBvcnQgTmF2YmFyUGFnZUh0bWwgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXJwYWdlLmh0bWwnXG5pbXBvcnQgTmF2YmFyUGFnZUpTIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFycGFnZS5qcydcblxuaW1wb3J0IFVuZGVyQ29uc3RydWN0aW9uUGFnZUh0bWwgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL3VuZGVyY29uc3RydWN0aW9uL3VuZGVyY29uc3RydWN0aW9ucGFnZS5odG1sJ1xuaW1wb3J0IFVuZGVyQ29uc3RydWN0aW9uUGFnZUpTIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy91bmRlcmNvbnN0cnVjdGlvbi91bmRlcmNvbnN0cnVjdGlvbnBhZ2UuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJlbGllZnNwYWdlKCkge1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZXBhZ2UtYm9keS1pZFwiKS5zY3JvbGxJbnRvVmlldygpO1xuXG4gICAgJChcIiN1bmRlci1jb25zdHJ1Y3Rpb24tbW9kYWxcIikubG9hZChgJHtVbmRlckNvbnN0cnVjdGlvblBhZ2VIdG1sfWAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgVW5kZXJDb25zdHJ1Y3Rpb25QYWdlSlMoKVxuICAgIH0pO1xuXG4gICAgJChcIiNnaXZpbmctZm9vdGVyLWFsbFwiKS5sb2FkKGAke0Zvb3RlclBhZ2VIdG1sfWAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRm9vdGVyUGFnZUpTKClcbiAgICB9KTtcblxuICAgICQoXCIjZ2l2aW5nLW1lbnVcIikubG9hZChgJHtNZW51UGFnZUh0bWx9YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBNZW51UGFnZUpTKClcbiAgICB9KTtcblxuICAgICQoXCIjZ2l2aW5nLXdlbGNvbWUtZm9ybVwiKS5sb2FkKGAke1dlbGNvbWVGb3JtUGFnZUh0bWx9YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBXZWxjb21lRm9ybVBhZ2VKUygpXG4gICAgfSk7XG5cbiAgICAkKFwiI2dpdmluZy1uYXZiYXJcIikubG9hZChgJHtOYXZiYXJQYWdlSHRtbH1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIE5hdmJhclBhZ2VKUygpXG4gICAgfSk7XG5cblxufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAvLyAkKFwiLmJlbGllZnMta2V5LXRleHRcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBjb25zdCBkaXNwbGF5SWQgPSAkKHRoaXMpLmRhdGEoXCJkaXNwbGF5XCIpO1xuICAgIC8vICAgICBoaWRlQWxsRGlzcGxheXMoKTtcbiAgICAvLyAgICAgJChcIiNcIiArIGRpc3BsYXlJZCkucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG5cbiAgICAvLyAgICAgJChcIi5iZWxpZWZzLWtleS10ZXh0XCIpLnJlbW92ZUNsYXNzKFwic21hbGwtYnV0dG9uXCIpO1xuXG4gICAgLy8gICAgICQodGhpcykuYWRkQ2xhc3MoXCJzbWFsbC1idXR0b25cIik7XG4gICAgLy8gfSk7XG5cbiAgICAkKFwiLnNlbGVjdG9yLWRldGFpbFwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlJZCA9ICQodGhpcykuZGF0YShcImRpc3BsYXlcIik7XG4gICAgICAgIGhpZGVBbGxEaXNwbGF5cygpO1xuICAgICAgICAkKFwiI1wiICsgZGlzcGxheUlkKS5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcblxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwic2VsZWN0b3ItYnV0dG9uXCIpLnJlbW92ZUNsYXNzKFwic2VsZWN0b3ItYnV0dG9uLXBsYWluXCIpO1xuICAgICAgICAkKFwiLnNlbGVjdG9yLWRldGFpbFwiKS5ub3QodGhpcykucmVtb3ZlQ2xhc3MoXCJzZWxlY3Rvci1idXR0b25cIikuYWRkQ2xhc3MoXCJzZWxlY3Rvci1idXR0b24tcGxhaW5cIik7XG5cbiAgICAgICAgJChcIi5zZWxlY3Rvci10ZXh0XCIpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xuICAgIH0pO1xuXG4gICAgJChcIi5iZWxpZWZzLXBvaW50XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheUlkID0gJCh0aGlzKS5kYXRhKFwiZGlzcGxheVwiKTtcbiAgICAgICAgY29uc3QgZGlzcGxheUVsZW1lbnQgPSAkKFwiI1wiICsgZGlzcGxheUlkKTtcblxuICAgICAgICBkaXNwbGF5RWxlbWVudC5zbGlkZVRvZ2dsZSg2MDApO1xuICAgIH0pO1xuXG4gICAgJChcIi5zZWxlY3RvciwgLnNlbGVjdG9yLWRldGFpbFwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkaXNwbGF5ID0gJChcIi5zZWxlY3Rvci1kZXRhaWxzLWNvbnRhaW5lclwiKS5jc3MoXCJkaXNwbGF5XCIpXG5cbiAgICAgICAgbGV0IGRlbGF5ID0gZGlzcGxheSAhPT0gXCJub25lXCIgPyA0MDAgOiAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiLnNlbGVjdG9yLWRldGFpbHMtY29udGFpbmVyXCIpLnNsaWRlVG9nZ2xlKDUwMCk7XG4gICAgICAgIH0sIGRlbGF5KVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuc2xpZGluZy11bmRlcmxpbmUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjbGlja2VkJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaGlkZUFsbERpc3BsYXlzKCkge1xuICAgICQoXCIuYmVsaWVmcy12YWx1ZSA+IGRpdlwiKS5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG59KVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGRhMzU1Mzg4MGFhYmM0YzhjNGNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=