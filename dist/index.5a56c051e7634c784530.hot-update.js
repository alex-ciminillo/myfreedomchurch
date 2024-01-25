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
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".beliefs-key-text").on('click', function () {
        const displayId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("display");
        hideAllDisplays();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + displayId).removeClass("display-none");

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".beliefs-key-text").removeClass("small-button");

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("small-button");
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".beliefs-point").on('click', function () {
        const displayId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("display");
        console.log('displayId: ', displayId)
        const displayElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + displayId);

        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#" + displayId).removeClass("display-none");

        // displayElement.toggleClass("display-none");
        displayElement.slideToggle("display-none");


        // Check if the displayElement now has the class display-none
        if (displayElement.hasClass("display-none")) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("displayElement").removeClass("display-none")
        } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()("displayElement").addClass("display-none")
        }
    });
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
/******/ 	__webpack_require__.h = () => ("95a49a2be2b4851ca640")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNWE1NmMwNTFlNzYzNGM3ODQ1MzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNVOztBQUVzQztBQUNKOztBQUVGO0FBQ0o7O0FBRXlCO0FBQ0o7O0FBRVg7QUFDSjs7QUFFcUM7QUFDSjs7QUFFcEY7O0FBRWY7QUFDQTs7QUFFQSxJQUFJLDZDQUFDLHNDQUFzQyxpR0FBeUIsQ0FBQztBQUNyRSxRQUFRLG1HQUF1QjtBQUMvQixLQUFLOztBQUVMLElBQUksNkNBQUMsK0JBQStCLDBFQUFjLENBQUM7QUFDbkQsUUFBUSw0RUFBWTtBQUNwQixLQUFLOztBQUVMLElBQUksNkNBQUMseUJBQXlCLHNFQUFZLENBQUM7QUFDM0MsUUFBUSx3RUFBVTtBQUNsQixLQUFLOztBQUVMLElBQUksNkNBQUMsaUNBQWlDLG9GQUFtQixDQUFDO0FBQzFELFFBQVEsc0ZBQWlCO0FBQ3pCLEtBQUs7O0FBRUwsSUFBSSw2Q0FBQywyQkFBMkIsMEVBQWMsQ0FBQztBQUMvQyxRQUFRLDRFQUFZO0FBQ3BCLEtBQUs7OztBQUdMOztBQUVBO0FBQ0EsSUFBSSw2Q0FBQztBQUNMLDBCQUEwQiw2Q0FBQztBQUMzQjtBQUNBLFFBQVEsNkNBQUM7O0FBRVQsUUFBUSw2Q0FBQzs7QUFFVCxRQUFRLDZDQUFDO0FBQ1QsS0FBSzs7QUFFTCxJQUFJLDZDQUFDO0FBQ0wsMEJBQTBCLDZDQUFDO0FBQzNCO0FBQ0EsK0JBQStCLDZDQUFDOztBQUVoQyxRQUFRLDZDQUFDOztBQUVUO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZLDZDQUFDO0FBQ2IsVUFBVTtBQUNWLFlBQVksNkNBQUM7QUFDYjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLElBQUksNkNBQUM7QUFDTDs7QUFFQSw2Q0FBQztBQUNEO0FBQ0EsQ0FBQzs7Ozs7Ozs7O1VDbkZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJlZWRvbV9jaHVyY2gvLi9zcmMvcGFnZXMvYmVsaWVmcy9iZWxpZWZzcGFnZS5qcyIsIndlYnBhY2s6Ly9mcmVlZG9tX2NodXJjaC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuaW1wb3J0IEZvb3RlclBhZ2VIdG1sIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVycGFnZS5odG1sJ1xuaW1wb3J0IEZvb3RlclBhZ2VKUyBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3RlcnBhZ2UuanMnXG5cbmltcG9ydCBNZW51UGFnZUh0bWwgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL21lbnUvbWVudXBhZ2UuaHRtbCdcbmltcG9ydCBNZW51UGFnZUpTIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9tZW51L21lbnVwYWdlLmpzJ1xuXG5pbXBvcnQgV2VsY29tZUZvcm1QYWdlSHRtbCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvd2VsY29tZWZvcm0vd2VsY29tZWZvcm1wYWdlLmh0bWwnXG5pbXBvcnQgV2VsY29tZUZvcm1QYWdlSlMgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL3dlbGNvbWVmb3JtL3dlbGNvbWVmb3JtcGFnZS5qcydcblxuaW1wb3J0IE5hdmJhclBhZ2VIdG1sIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFycGFnZS5odG1sJ1xuaW1wb3J0IE5hdmJhclBhZ2VKUyBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhcnBhZ2UuanMnXG5cbmltcG9ydCBVbmRlckNvbnN0cnVjdGlvblBhZ2VIdG1sIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy91bmRlcmNvbnN0cnVjdGlvbi91bmRlcmNvbnN0cnVjdGlvbnBhZ2UuaHRtbCdcbmltcG9ydCBVbmRlckNvbnN0cnVjdGlvblBhZ2VKUyBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvdW5kZXJjb25zdHJ1Y3Rpb24vdW5kZXJjb25zdHJ1Y3Rpb25wYWdlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiZWxpZWZzcGFnZSgpIHtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVwYWdlLWJvZHktaWRcIikuc2Nyb2xsSW50b1ZpZXcoKTtcblxuICAgICQoXCIjdW5kZXItY29uc3RydWN0aW9uLW1vZGFsXCIpLmxvYWQoYCR7VW5kZXJDb25zdHJ1Y3Rpb25QYWdlSHRtbH1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFVuZGVyQ29uc3RydWN0aW9uUGFnZUpTKClcbiAgICB9KTtcblxuICAgICQoXCIjZ2l2aW5nLWZvb3Rlci1hbGxcIikubG9hZChgJHtGb290ZXJQYWdlSHRtbH1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEZvb3RlclBhZ2VKUygpXG4gICAgfSk7XG5cbiAgICAkKFwiI2dpdmluZy1tZW51XCIpLmxvYWQoYCR7TWVudVBhZ2VIdG1sfWAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTWVudVBhZ2VKUygpXG4gICAgfSk7XG5cbiAgICAkKFwiI2dpdmluZy13ZWxjb21lLWZvcm1cIikubG9hZChgJHtXZWxjb21lRm9ybVBhZ2VIdG1sfWAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgV2VsY29tZUZvcm1QYWdlSlMoKVxuICAgIH0pO1xuXG4gICAgJChcIiNnaXZpbmctbmF2YmFyXCIpLmxvYWQoYCR7TmF2YmFyUGFnZUh0bWx9YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBOYXZiYXJQYWdlSlMoKVxuICAgIH0pO1xuXG5cbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgJChcIi5iZWxpZWZzLWtleS10ZXh0XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheUlkID0gJCh0aGlzKS5kYXRhKFwiZGlzcGxheVwiKTtcbiAgICAgICAgaGlkZUFsbERpc3BsYXlzKCk7XG4gICAgICAgICQoXCIjXCIgKyBkaXNwbGF5SWQpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpO1xuXG4gICAgICAgICQoXCIuYmVsaWVmcy1rZXktdGV4dFwiKS5yZW1vdmVDbGFzcyhcInNtYWxsLWJ1dHRvblwiKTtcblxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwic21hbGwtYnV0dG9uXCIpO1xuICAgIH0pO1xuXG4gICAgJChcIi5iZWxpZWZzLXBvaW50XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheUlkID0gJCh0aGlzKS5kYXRhKFwiZGlzcGxheVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2Rpc3BsYXlJZDogJywgZGlzcGxheUlkKVxuICAgICAgICBjb25zdCBkaXNwbGF5RWxlbWVudCA9ICQoXCIjXCIgKyBkaXNwbGF5SWQpO1xuXG4gICAgICAgICQoXCIjXCIgKyBkaXNwbGF5SWQpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpO1xuXG4gICAgICAgIC8vIGRpc3BsYXlFbGVtZW50LnRvZ2dsZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgICBkaXNwbGF5RWxlbWVudC5zbGlkZVRvZ2dsZShcImRpc3BsYXktbm9uZVwiKTtcblxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBkaXNwbGF5RWxlbWVudCBub3cgaGFzIHRoZSBjbGFzcyBkaXNwbGF5LW5vbmVcbiAgICAgICAgaWYgKGRpc3BsYXlFbGVtZW50Lmhhc0NsYXNzKFwiZGlzcGxheS1ub25lXCIpKSB7XG4gICAgICAgICAgICAkKFwiZGlzcGxheUVsZW1lbnRcIikucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCJkaXNwbGF5RWxlbWVudFwiKS5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGVBbGxEaXNwbGF5cygpIHtcbiAgICAkKFwiLmJlbGllZnMtdmFsdWUgPiBkaXZcIikuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xufSlcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk1YTQ5YTJiZTJiNDg1MWNhNjQwXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9