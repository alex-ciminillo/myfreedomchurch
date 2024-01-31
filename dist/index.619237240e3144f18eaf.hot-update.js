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

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("change-color-to").removeClass("change-color-from");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector-detail").not(this).removeClass("change-color-to").addClass("change-color-from")

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector-text").text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text());
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
/******/ 	__webpack_require__.h = () => ("a5a25392c972dfa72d9c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjE5MjM3MjQwZTMxNDRmMThlYWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNVOztBQUVzQztBQUNKOztBQUVGO0FBQ0o7O0FBRXlCO0FBQ0o7O0FBRVg7QUFDSjs7QUFFcUM7QUFDSjs7QUFFcEY7O0FBRWY7QUFDQTs7QUFFQSxJQUFJLDZDQUFDLHNDQUFzQyxpR0FBeUIsQ0FBQztBQUNyRSxRQUFRLG1HQUF1QjtBQUMvQixLQUFLOztBQUVMLElBQUksNkNBQUMsK0JBQStCLDBFQUFjLENBQUM7QUFDbkQsUUFBUSw0RUFBWTtBQUNwQixLQUFLOztBQUVMLElBQUksNkNBQUMseUJBQXlCLHNFQUFZLENBQUM7QUFDM0MsUUFBUSx3RUFBVTtBQUNsQixLQUFLOztBQUVMLElBQUksNkNBQUMsaUNBQWlDLG9GQUFtQixDQUFDO0FBQzFELFFBQVEsc0ZBQWlCO0FBQ3pCLEtBQUs7O0FBRUwsSUFBSSw2Q0FBQywyQkFBMkIsMEVBQWMsQ0FBQztBQUMvQyxRQUFRLDRFQUFZO0FBQ3BCLEtBQUs7OztBQUdMOztBQUVBO0FBQ0EsSUFBSSw2Q0FBQztBQUNMLDBCQUEwQiw2Q0FBQztBQUMzQjtBQUNBLFFBQVEsNkNBQUM7O0FBRVQsUUFBUSw2Q0FBQztBQUNULFFBQVEsNkNBQUM7O0FBRVQsUUFBUSw2Q0FBQztBQUNULFFBQVEsNkNBQUM7O0FBRVQsUUFBUSw2Q0FBQyx3QkFBd0IsNkNBQUM7QUFDbEMsS0FBSzs7QUFFTCxJQUFJLDZDQUFDO0FBQ0wsMEJBQTBCLDZDQUFDO0FBQzNCLCtCQUErQiw2Q0FBQzs7QUFFaEM7QUFDQSxRQUFRLDZDQUFDO0FBQ1QsS0FBSzs7QUFFTDtBQUNBLElBQUksNkNBQUM7QUFDTCwwQkFBMEIsNkNBQUM7QUFDM0I7O0FBRUEsMEJBQTBCLDZDQUFDOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFDO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUwsSUFBSSw2Q0FBQztBQUNMLFFBQVEsNkNBQUM7QUFDVCxZQUFZLDZDQUFDO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7O0FBRUE7QUFDQSxJQUFJLDZDQUFDO0FBQ0w7O0FBRUEsNkNBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQsNkNBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLDZDQUFDO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDZDQUFDO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7O1VDcEhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJlZWRvbV9jaHVyY2gvLi9zcmMvcGFnZXMvYmVsaWVmcy9iZWxpZWZzcGFnZS5qcyIsIndlYnBhY2s6Ly9mcmVlZG9tX2NodXJjaC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuaW1wb3J0IEZvb3RlclBhZ2VIdG1sIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVycGFnZS5odG1sJ1xuaW1wb3J0IEZvb3RlclBhZ2VKUyBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3RlcnBhZ2UuanMnXG5cbmltcG9ydCBNZW51UGFnZUh0bWwgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL21lbnUvbWVudXBhZ2UuaHRtbCdcbmltcG9ydCBNZW51UGFnZUpTIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9tZW51L21lbnVwYWdlLmpzJ1xuXG5pbXBvcnQgV2VsY29tZUZvcm1QYWdlSHRtbCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvd2VsY29tZWZvcm0vd2VsY29tZWZvcm1wYWdlLmh0bWwnXG5pbXBvcnQgV2VsY29tZUZvcm1QYWdlSlMgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL3dlbGNvbWVmb3JtL3dlbGNvbWVmb3JtcGFnZS5qcydcblxuaW1wb3J0IE5hdmJhclBhZ2VIdG1sIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFycGFnZS5odG1sJ1xuaW1wb3J0IE5hdmJhclBhZ2VKUyBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhcnBhZ2UuanMnXG5cbmltcG9ydCBVbmRlckNvbnN0cnVjdGlvblBhZ2VIdG1sIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy91bmRlcmNvbnN0cnVjdGlvbi91bmRlcmNvbnN0cnVjdGlvbnBhZ2UuaHRtbCdcbmltcG9ydCBVbmRlckNvbnN0cnVjdGlvblBhZ2VKUyBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvdW5kZXJjb25zdHJ1Y3Rpb24vdW5kZXJjb25zdHJ1Y3Rpb25wYWdlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiZWxpZWZzcGFnZSgpIHtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVwYWdlLWJvZHktaWRcIikuc2Nyb2xsSW50b1ZpZXcoKTtcblxuICAgICQoXCIjdW5kZXItY29uc3RydWN0aW9uLW1vZGFsXCIpLmxvYWQoYCR7VW5kZXJDb25zdHJ1Y3Rpb25QYWdlSHRtbH1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFVuZGVyQ29uc3RydWN0aW9uUGFnZUpTKClcbiAgICB9KTtcblxuICAgICQoXCIjZ2l2aW5nLWZvb3Rlci1hbGxcIikubG9hZChgJHtGb290ZXJQYWdlSHRtbH1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEZvb3RlclBhZ2VKUygpXG4gICAgfSk7XG5cbiAgICAkKFwiI2dpdmluZy1tZW51XCIpLmxvYWQoYCR7TWVudVBhZ2VIdG1sfWAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTWVudVBhZ2VKUygpXG4gICAgfSk7XG5cbiAgICAkKFwiI2dpdmluZy13ZWxjb21lLWZvcm1cIikubG9hZChgJHtXZWxjb21lRm9ybVBhZ2VIdG1sfWAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgV2VsY29tZUZvcm1QYWdlSlMoKVxuICAgIH0pO1xuXG4gICAgJChcIiNnaXZpbmctbmF2YmFyXCIpLmxvYWQoYCR7TmF2YmFyUGFnZUh0bWx9YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBOYXZiYXJQYWdlSlMoKVxuICAgIH0pO1xuXG5cbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgJChcIi5zZWxlY3Rvci1kZXRhaWxcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkaXNwbGF5SWQgPSAkKHRoaXMpLmRhdGEoXCJkaXNwbGF5XCIpO1xuICAgICAgICBoaWRlQWxsRGlzcGxheXMoKTtcbiAgICAgICAgJChcIiNcIiArIGRpc3BsYXlJZCkucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIik7XG5cbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInNlbGVjdG9yLWJ1dHRvblwiKS5yZW1vdmVDbGFzcyhcInNlbGVjdG9yLWJ1dHRvbi1wbGFpblwiKTtcbiAgICAgICAgJChcIi5zZWxlY3Rvci1kZXRhaWxcIikubm90KHRoaXMpLnJlbW92ZUNsYXNzKFwic2VsZWN0b3ItYnV0dG9uXCIpLmFkZENsYXNzKFwic2VsZWN0b3ItYnV0dG9uLXBsYWluXCIpO1xuXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjaGFuZ2UtY29sb3ItdG9cIikucmVtb3ZlQ2xhc3MoXCJjaGFuZ2UtY29sb3ItZnJvbVwiKTtcbiAgICAgICAgJChcIi5zZWxlY3Rvci1kZXRhaWxcIikubm90KHRoaXMpLnJlbW92ZUNsYXNzKFwiY2hhbmdlLWNvbG9yLXRvXCIpLmFkZENsYXNzKFwiY2hhbmdlLWNvbG9yLWZyb21cIilcblxuICAgICAgICAkKFwiLnNlbGVjdG9yLXRleHRcIikudGV4dCgkKHRoaXMpLnRleHQoKSk7XG4gICAgfSk7XG5cbiAgICAkKFwiLmJlbGllZnMtcG9pbnRcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkaXNwbGF5SWQgPSAkKHRoaXMpLmRhdGEoXCJkaXNwbGF5XCIpO1xuICAgICAgICBjb25zdCBkaXNwbGF5RWxlbWVudCA9ICQoXCIjXCIgKyBkaXNwbGF5SWQpO1xuXG4gICAgICAgIGRpc3BsYXlFbGVtZW50LnNsaWRlVG9nZ2xlKDYwMCk7XG4gICAgICAgICQodGhpcykuZmluZCgnLmFycm93LXNpemUnKS50b2dnbGVDbGFzcygnbm8tdHJhbnNmb3JtJyk7XG4gICAgfSk7XG5cbiAgICAvLyBtb2JpbGUgdG9nZ2xlIGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBzZWxlY3RvclxuICAgICQoXCIuc2VsZWN0b3ItbW9iaWxlLCAucy1kLW1vYmlsZVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICBpZiAod2luZG93V2lkdGggPD0gNzY4KSB7XG5cbiAgICAgICAgICAgIGxldCBkaXNwbGF5ID0gJChcIi5zLWQtYy1tb2JpbGVcIikuY3NzKFwibm9uZVwiKVxuXG4gICAgICAgICAgICBsZXQgZGVsYXkgPSBkaXNwbGF5ICE9PSBcIm5vbmVcIiA/IDIwMCA6IDA7XG5cbiAgICAgICAgICAgIC8vICQoXCIucy1kLWMtbW9iaWxlXCIpLnNsaWRlVG9nZ2xlKDIwMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnMtZC1jLW1vYmlsZVwiKS5zbGlkZVRvZ2dsZSg1MDApO1xuICAgICAgICAgICAgfSwgZGVsYXkpXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnNsaWRpbmctdW5kZXJsaW5lJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gaGlkZUFsbERpc3BsYXlzKCkge1xuICAgICQoXCIuYmVsaWVmcy12YWx1ZSA+IGRpdlwiKS5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG59KVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgLy8gRnVuY3Rpb24gdG8gdXBkYXRlIGJhc2VkIG9uIHNjcmVlbiB3aWR0aFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcmVlbigpIHtcbiAgICAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICBpZiAoc2NyZWVuV2lkdGggPj0gNzY5KSAkKFwiLnMtZC1jLW1vYmlsZVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbCBjYWxsIHRvIHNldCBzdHlsZXMgb24gcGFnZSBsb2FkXG4gICAgdXBkYXRlU2NyZWVuKCk7XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3Igc2NyZWVuIHJlc2l6ZVxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgICAgICB1cGRhdGVTY3JlZW4oKTtcbiAgICB9KTtcbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTVhMjUzOTJjOTcyZGZhNzJkOWNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=