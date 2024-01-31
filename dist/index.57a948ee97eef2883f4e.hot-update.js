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
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".selector-detail").not(this).removeClass("change-color-to").

        $(".selector-text").text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text());
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
/******/ 	__webpack_require__.h = () => ("4bde91a0aaebea6f788f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTdhOTQ4ZWU5N2VlZjI4ODNmNGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNVOztBQUVzQztBQUNKOztBQUVGO0FBQ0o7O0FBRXlCO0FBQ0o7O0FBRVg7QUFDSjs7QUFFcUM7QUFDSjs7QUFFcEY7O0FBRWY7QUFDQTs7QUFFQSxJQUFJLDZDQUFDLHNDQUFzQyxpR0FBeUIsQ0FBQztBQUNyRSxRQUFRLG1HQUF1QjtBQUMvQixLQUFLOztBQUVMLElBQUksNkNBQUMsK0JBQStCLDBFQUFjLENBQUM7QUFDbkQsUUFBUSw0RUFBWTtBQUNwQixLQUFLOztBQUVMLElBQUksNkNBQUMseUJBQXlCLHNFQUFZLENBQUM7QUFDM0MsUUFBUSx3RUFBVTtBQUNsQixLQUFLOztBQUVMLElBQUksNkNBQUMsaUNBQWlDLG9GQUFtQixDQUFDO0FBQzFELFFBQVEsc0ZBQWlCO0FBQ3pCLEtBQUs7O0FBRUwsSUFBSSw2Q0FBQywyQkFBMkIsMEVBQWMsQ0FBQztBQUMvQyxRQUFRLDRFQUFZO0FBQ3BCLEtBQUs7OztBQUdMOztBQUVBO0FBQ0EsSUFBSSw2Q0FBQztBQUNMLDBCQUEwQiw2Q0FBQztBQUMzQjtBQUNBLFFBQVEsNkNBQUM7O0FBRVQsUUFBUSw2Q0FBQztBQUNULFFBQVEsNkNBQUM7O0FBRVQsUUFBUSw2Q0FBQztBQUNULFFBQVEsNkNBQUM7O0FBRVQsaUNBQWlDLDZDQUFDO0FBQ2xDLEtBQUs7O0FBRUwsSUFBSSw2Q0FBQztBQUNMLDBCQUEwQiw2Q0FBQztBQUMzQiwrQkFBK0IsNkNBQUM7O0FBRWhDO0FBQ0EsUUFBUSw2Q0FBQztBQUNULEtBQUs7O0FBRUw7QUFDQSxJQUFJLDZDQUFDO0FBQ0wsMEJBQTBCLDZDQUFDO0FBQzNCOztBQUVBLDBCQUEwQiw2Q0FBQzs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBQztBQUNqQixhQUFhO0FBQ2I7QUFDQSxLQUFLOztBQUVMLElBQUksNkNBQUM7QUFDTCxRQUFRLDZDQUFDO0FBQ1QsWUFBWSw2Q0FBQztBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMOztBQUVBO0FBQ0EsSUFBSSw2Q0FBQztBQUNMOztBQUVBLDZDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVELDZDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyw2Q0FBQztBQUNqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw2Q0FBQztBQUNMO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7OztVQ3BIRCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZWVkb21fY2h1cmNoLy4vc3JjL3BhZ2VzL2JlbGllZnMvYmVsaWVmc3BhZ2UuanMiLCJ3ZWJwYWNrOi8vZnJlZWRvbV9jaHVyY2gvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmltcG9ydCBGb290ZXJQYWdlSHRtbCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3RlcnBhZ2UuaHRtbCdcbmltcG9ydCBGb290ZXJQYWdlSlMgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJwYWdlLmpzJ1xuXG5pbXBvcnQgTWVudVBhZ2VIdG1sIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9tZW51L21lbnVwYWdlLmh0bWwnXG5pbXBvcnQgTWVudVBhZ2VKUyBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51cGFnZS5qcydcblxuaW1wb3J0IFdlbGNvbWVGb3JtUGFnZUh0bWwgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL3dlbGNvbWVmb3JtL3dlbGNvbWVmb3JtcGFnZS5odG1sJ1xuaW1wb3J0IFdlbGNvbWVGb3JtUGFnZUpTIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy93ZWxjb21lZm9ybS93ZWxjb21lZm9ybXBhZ2UuanMnXG5cbmltcG9ydCBOYXZiYXJQYWdlSHRtbCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhcnBhZ2UuaHRtbCdcbmltcG9ydCBOYXZiYXJQYWdlSlMgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXJwYWdlLmpzJ1xuXG5pbXBvcnQgVW5kZXJDb25zdHJ1Y3Rpb25QYWdlSHRtbCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvdW5kZXJjb25zdHJ1Y3Rpb24vdW5kZXJjb25zdHJ1Y3Rpb25wYWdlLmh0bWwnXG5pbXBvcnQgVW5kZXJDb25zdHJ1Y3Rpb25QYWdlSlMgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL3VuZGVyY29uc3RydWN0aW9uL3VuZGVyY29uc3RydWN0aW9ucGFnZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmVsaWVmc3BhZ2UoKSB7XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lcGFnZS1ib2R5LWlkXCIpLnNjcm9sbEludG9WaWV3KCk7XG5cbiAgICAkKFwiI3VuZGVyLWNvbnN0cnVjdGlvbi1tb2RhbFwiKS5sb2FkKGAke1VuZGVyQ29uc3RydWN0aW9uUGFnZUh0bWx9YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBVbmRlckNvbnN0cnVjdGlvblBhZ2VKUygpXG4gICAgfSk7XG5cbiAgICAkKFwiI2dpdmluZy1mb290ZXItYWxsXCIpLmxvYWQoYCR7Rm9vdGVyUGFnZUh0bWx9YCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBGb290ZXJQYWdlSlMoKVxuICAgIH0pO1xuXG4gICAgJChcIiNnaXZpbmctbWVudVwiKS5sb2FkKGAke01lbnVQYWdlSHRtbH1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIE1lbnVQYWdlSlMoKVxuICAgIH0pO1xuXG4gICAgJChcIiNnaXZpbmctd2VsY29tZS1mb3JtXCIpLmxvYWQoYCR7V2VsY29tZUZvcm1QYWdlSHRtbH1gLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFdlbGNvbWVGb3JtUGFnZUpTKClcbiAgICB9KTtcblxuICAgICQoXCIjZ2l2aW5nLW5hdmJhclwiKS5sb2FkKGAke05hdmJhclBhZ2VIdG1sfWAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTmF2YmFyUGFnZUpTKClcbiAgICB9KTtcblxuXG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICQoXCIuc2VsZWN0b3ItZGV0YWlsXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheUlkID0gJCh0aGlzKS5kYXRhKFwiZGlzcGxheVwiKTtcbiAgICAgICAgaGlkZUFsbERpc3BsYXlzKCk7XG4gICAgICAgICQoXCIjXCIgKyBkaXNwbGF5SWQpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpO1xuXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJzZWxlY3Rvci1idXR0b25cIikucmVtb3ZlQ2xhc3MoXCJzZWxlY3Rvci1idXR0b24tcGxhaW5cIik7XG4gICAgICAgICQoXCIuc2VsZWN0b3ItZGV0YWlsXCIpLm5vdCh0aGlzKS5yZW1vdmVDbGFzcyhcInNlbGVjdG9yLWJ1dHRvblwiKS5hZGRDbGFzcyhcInNlbGVjdG9yLWJ1dHRvbi1wbGFpblwiKTtcblxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiY2hhbmdlLWNvbG9yLXRvXCIpLnJlbW92ZUNsYXNzKFwiY2hhbmdlLWNvbG9yLWZyb21cIik7XG4gICAgICAgICQoXCIuc2VsZWN0b3ItZGV0YWlsXCIpLm5vdCh0aGlzKS5yZW1vdmVDbGFzcyhcImNoYW5nZS1jb2xvci10b1wiKS5cblxuICAgICAgICAkKFwiLnNlbGVjdG9yLXRleHRcIikudGV4dCgkKHRoaXMpLnRleHQoKSk7XG4gICAgfSk7XG5cbiAgICAkKFwiLmJlbGllZnMtcG9pbnRcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkaXNwbGF5SWQgPSAkKHRoaXMpLmRhdGEoXCJkaXNwbGF5XCIpO1xuICAgICAgICBjb25zdCBkaXNwbGF5RWxlbWVudCA9ICQoXCIjXCIgKyBkaXNwbGF5SWQpO1xuXG4gICAgICAgIGRpc3BsYXlFbGVtZW50LnNsaWRlVG9nZ2xlKDYwMCk7XG4gICAgICAgICQodGhpcykuZmluZCgnLmFycm93LXNpemUnKS50b2dnbGVDbGFzcygnbm8tdHJhbnNmb3JtJyk7XG4gICAgfSk7XG5cbiAgICAvLyBtb2JpbGUgdG9nZ2xlIGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBzZWxlY3RvclxuICAgICQoXCIuc2VsZWN0b3ItbW9iaWxlLCAucy1kLW1vYmlsZVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICBpZiAod2luZG93V2lkdGggPD0gNzY4KSB7XG5cbiAgICAgICAgICAgIGxldCBkaXNwbGF5ID0gJChcIi5zLWQtYy1tb2JpbGVcIikuY3NzKFwibm9uZVwiKVxuXG4gICAgICAgICAgICBsZXQgZGVsYXkgPSBkaXNwbGF5ICE9PSBcIm5vbmVcIiA/IDIwMCA6IDA7XG5cbiAgICAgICAgICAgIC8vICQoXCIucy1kLWMtbW9iaWxlXCIpLnNsaWRlVG9nZ2xlKDIwMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnMtZC1jLW1vYmlsZVwiKS5zbGlkZVRvZ2dsZSg1MDApO1xuICAgICAgICAgICAgfSwgZGVsYXkpXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnNsaWRpbmctdW5kZXJsaW5lJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgICB9KVxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gaGlkZUFsbERpc3BsYXlzKCkge1xuICAgICQoXCIuYmVsaWVmcy12YWx1ZSA+IGRpdlwiKS5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG59KVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgLy8gRnVuY3Rpb24gdG8gdXBkYXRlIGJhc2VkIG9uIHNjcmVlbiB3aWR0aFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcmVlbigpIHtcbiAgICAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICBpZiAoc2NyZWVuV2lkdGggPj0gNzY5KSAkKFwiLnMtZC1jLW1vYmlsZVwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbCBjYWxsIHRvIHNldCBzdHlsZXMgb24gcGFnZSBsb2FkXG4gICAgdXBkYXRlU2NyZWVuKCk7XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3Igc2NyZWVuIHJlc2l6ZVxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xuICAgICAgICB1cGRhdGVTY3JlZW4oKTtcbiAgICB9KTtcbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGJkZTkxYTBhYWViZWE2Zjc4OGZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=