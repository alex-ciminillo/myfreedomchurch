"use strict";
self["webpackHotUpdatefreedom_church"]("index",{

/***/ "./node_modules/css-loader/dist/cjs.js!./stylesheets/beliefs.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./stylesheets/beliefs.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.border {
    border: 1px solid black;
}

.border-right {
    border-right: 1px solid black;
}

.border-bottom-2 {
    border-bottom: 2px solid;
}

.small-text {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    line-height: normal;
}

/* .small-button {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    width: 100%;

    padding: 5%;

    background-color: var(--mainColor);
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    border-radius: 100px;
} */

/* .small-button-plain {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    width: 100%;

    padding: 5%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    border-radius: 10px;
} */

.large-button {
    color: var(--mainColor);
    font-size: 30px;
    padding: 10px 10px 0px 10px;
    margin-bottom: 10px;
    ;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    align-items: center;
}

.selector-button-plain {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    width: 100%;

    box-sizing: border-box;
    padding: 1% 0% 1% 5%;

    display: flex;
    border-radius: 10px;

    z-index: 1;

    @media screen and (min-width: 769px) {
        font-size: 20px;
        border-radius: 15px;
        padding: 10%;
    }
}

/* Button Slide */
/* .selector-button-plain::before {
    content: "";
    background-color: var(--mainColor);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0;
    margin: 0;
    /* z-index: -1; */

    /* transform: scaleX(0);
    transform-origin: left;
    transition: transform 1s ease-in-out; */
/* }  */

/* .selector-button-plain:hover::before,
.selector-button-plain:focus::before {
  transform: scaleX(1);
  transition: transform 1s ease-in-out;
} */

/* .selector-button-plain {
    z-index: 1;
  }

  .selector-button-plain:hover,
  .selector-button-plain:focus {
    color: white;
  } */




.selector-button {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    width: 100%;

    box-sizing: border-box;
    padding: 1% 0% 1% 5%;

    background-color: var(--mainColor);
    color: white;
    display: flex;
    border-radius: 10px;

    @media screen and (min-width: 769px) {
        font-size: 20px;
        border-radius: 15px;
        padding: 10%;
    }
}

.arrow-size {
    font-size: 25px;
    display: flex;
    align-items: center;
    margin-top: 0.7%;
    margin-right: 0.5rem;
    transform: rotate(-90deg);
    transition: transform 0.s ease;
}
.no-transform {
    transform: none;
}


.beliefs-page-container {
    padding-top: 7rem;
    padding-bottom: 7rem;
    background-color: white;
    display: flex;
    justify-content: center;
}

.about-layout {
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
}

.beliefs-key {
    @media screen and (min-width: 769px) {
        display: flex;
        flex-direction: column;
        align-items: last baseline;
        align-items: flex-end;
        padding: 1rem 2rem 1rem;
        border-right: 1px solid gray;
    }
}

.beliefs-value {
    padding: 1rem 2rem 1rem;
}

.about-selector {
    @media screen and (min-width: 769px) {
        width: 7rem;
    }
}

.selector-container {
    width: 8rem;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: auto;
    }
}

.selector {
    display: none;

    @media screen and (max-width: 768px) {
        border: 2px solid black;
        display: flex;
    }
}

.selector-text {
    @media screen and (max-width: 769px) {
        display: flex;
        margin-left: 1%;
    }
}

.selector-details-container {
    display: content;

    @media screen and (max-width: 768px) {
        display: none;
    }

    /* @media screen and (min-width: 769px) {
        display: content !important;
    } */
}



.point-dropdown-container {
    display: flex;
    flex-direction: column;
}

.belief-details {
    margin-left: calc(2rem + 10px);
}

/* Underline Slide */
/* LEFT TO RIGHT */
.sliding-underline {
    display: inline-block;
    cursor: pointer;
}

.sliding-underline:after {
    content: '';
    display: block;
    height: 2px;
    width: 0;
    background: transparent;
    transition: width 0.6s ease, background-color 0.6s ease;
}

.sliding-underline.clicked:after {
    width: 100%;
    background: var(--mainColor);
}
`, "",{"version":3,"sources":["webpack://./stylesheets/beliefs.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,mJAAmJ;IACnJ,eAAe;IACf,mBAAmB;AACvB;;AAEA;;;;;;;;;;;;;;;;GAgBG;;AAEH;;;;;;;;;;;;;GAaG;;AAEH;IACI,uBAAuB;IACvB,eAAe;IACf,2BAA2B;IAC3B,mBAAmB;;IAEnB,mJAAmJ;IACnJ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mJAAmJ;IACnJ,eAAe;IACf,WAAW;;IAEX,sBAAsB;IACtB,oBAAoB;;IAEpB,aAAa;IACb,mBAAmB;;IAEnB,UAAU;;IAEV;QACI,eAAe;QACf,mBAAmB;QACnB,YAAY;IAChB;AACJ;;AAEA,iBAAiB;AACjB;;;;;;;;;;qBAUqB;;IAEjB;;2CAEuC;AAC3C,OAAO;;AAEP;;;;GAIG;;AAEH;;;;;;;KAOK;;;;;AAKL;IACI,mJAAmJ;IACnJ,eAAe;IACf,WAAW;;IAEX,sBAAsB;IACtB,oBAAoB;;IAEpB,kCAAkC;IAClC,YAAY;IACZ,aAAa;IACb,mBAAmB;;IAEnB;QACI,eAAe;QACf,mBAAmB;QACnB,YAAY;IAChB;AACJ;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,yBAAyB;IACzB,8BAA8B;AAClC;AACA;IACI,eAAe;AACnB;;;AAGA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,SAAS;;IAET;QACI,aAAa;QACb,sBAAsB;IAC1B;AACJ;;AAEA;IACI;QACI,aAAa;QACb,sBAAsB;QACtB,0BAA0B;QAC1B,qBAAqB;QACrB,uBAAuB;QACvB,4BAA4B;IAChC;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI,WAAW;;IAEX;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;IACf;AACJ;;AAEA;IACI,aAAa;;IAEb;QACI,uBAAuB;QACvB,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,aAAa;QACb,eAAe;IACnB;AACJ;;AAEA;IACI,gBAAgB;;IAEhB;QACI,aAAa;IACjB;;IAEA;;OAEG;AACP;;;;AAIA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;AAClC;;AAEA,oBAAoB;AACpB,kBAAkB;AAClB;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,WAAW;IACX,QAAQ;IACR,uBAAuB;IACvB,uDAAuD;AAC3D;;AAEA;IACI,WAAW;IACX,4BAA4B;AAChC","sourcesContent":[".border {\n    border: 1px solid black;\n}\n\n.border-right {\n    border-right: 1px solid black;\n}\n\n.border-bottom-2 {\n    border-bottom: 2px solid;\n}\n\n.small-text {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    line-height: normal;\n}\n\n/* .small-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    padding: 5%;\n\n    background-color: var(--mainColor);\n    color: white;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    border-radius: 100px;\n} */\n\n/* .small-button-plain {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    padding: 5%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    border-radius: 10px;\n} */\n\n.large-button {\n    color: var(--mainColor);\n    font-size: 30px;\n    padding: 10px 10px 0px 10px;\n    margin-bottom: 10px;\n    ;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    display: flex;\n    align-items: center;\n}\n\n.selector-button-plain {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n\n    display: flex;\n    border-radius: 10px;\n\n    z-index: 1;\n\n    @media screen and (min-width: 769px) {\n        font-size: 20px;\n        border-radius: 15px;\n        padding: 10%;\n    }\n}\n\n/* Button Slide */\n/* .selector-button-plain::before {\n    content: \"\";\n    background-color: var(--mainColor);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0;\n    margin: 0;\n    /* z-index: -1; */\n\n    /* transform: scaleX(0);\n    transform-origin: left;\n    transition: transform 1s ease-in-out; */\n/* }  */\n\n/* .selector-button-plain:hover::before,\n.selector-button-plain:focus::before {\n  transform: scaleX(1);\n  transition: transform 1s ease-in-out;\n} */\n\n/* .selector-button-plain {\n    z-index: 1;\n  }\n\n  .selector-button-plain:hover,\n  .selector-button-plain:focus {\n    color: white;\n  } */\n\n\n\n\n.selector-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n\n    background-color: var(--mainColor);\n    color: white;\n    display: flex;\n    border-radius: 10px;\n\n    @media screen and (min-width: 769px) {\n        font-size: 20px;\n        border-radius: 15px;\n        padding: 10%;\n    }\n}\n\n.arrow-size {\n    font-size: 25px;\n    display: flex;\n    align-items: center;\n    margin-top: 0.7%;\n    margin-right: 0.5rem;\n    transform: rotate(-90deg);\n    transition: transform 0.s ease;\n}\n.no-transform {\n    transform: none;\n}\n\n\n.beliefs-page-container {\n    padding-top: 7rem;\n    padding-bottom: 7rem;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.about-layout {\n    width: 90vw;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 1rem;\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n    }\n}\n\n.beliefs-key {\n    @media screen and (min-width: 769px) {\n        display: flex;\n        flex-direction: column;\n        align-items: last baseline;\n        align-items: flex-end;\n        padding: 1rem 2rem 1rem;\n        border-right: 1px solid gray;\n    }\n}\n\n.beliefs-value {\n    padding: 1rem 2rem 1rem;\n}\n\n.about-selector {\n    @media screen and (min-width: 769px) {\n        width: 7rem;\n    }\n}\n\n.selector-container {\n    width: 8rem;\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n        width: auto;\n    }\n}\n\n.selector {\n    display: none;\n\n    @media screen and (max-width: 768px) {\n        border: 2px solid black;\n        display: flex;\n    }\n}\n\n.selector-text {\n    @media screen and (max-width: 769px) {\n        display: flex;\n        margin-left: 1%;\n    }\n}\n\n.selector-details-container {\n    display: content;\n\n    @media screen and (max-width: 768px) {\n        display: none;\n    }\n\n    /* @media screen and (min-width: 769px) {\n        display: content !important;\n    } */\n}\n\n\n\n.point-dropdown-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.belief-details {\n    margin-left: calc(2rem + 10px);\n}\n\n/* Underline Slide */\n/* LEFT TO RIGHT */\n.sliding-underline {\n    display: inline-block;\n    cursor: pointer;\n}\n\n.sliding-underline:after {\n    content: '';\n    display: block;\n    height: 2px;\n    width: 0;\n    background: transparent;\n    transition: width 0.6s ease, background-color 0.6s ease;\n}\n\n.sliding-underline.clicked:after {\n    width: 100%;\n    background: var(--mainColor);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("95e66b78dc742bcb43f6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDNjMTA0NmM3ZGM1ZTZhMDc2MDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7Ozs7O0FBS0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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Iiwid2VicGFjazovL2ZyZWVkb21fY2h1cmNoL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmJvcmRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib3JkZXItcmlnaHQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYm9yZGVyLWJvdHRvbS0yIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG59XG5cbi5zbWFsbC10ZXh0IHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8qIC5zbWFsbC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwYWRkaW5nOiA1JTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufSAqL1xuXG4vKiAuc21hbGwtYnV0dG9uLXBsYWluIHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgcGFkZGluZzogNSU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0gKi9cblxuLmxhcmdlLWJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluIHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxJSAwJSAxJSA1JTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIHotaW5kZXg6IDE7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICB9XG59XG5cbi8qIEJ1dHRvbiBTbGlkZSAqL1xuLyogLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICAvKiB6LWluZGV4OiAtMTsgKi9cblxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0OyAqL1xuLyogfSAgKi9cblxuLyogLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpob3Zlcjo6YmVmb3JlLFxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpmb2N1czo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcbn0gKi9cblxuLyogLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbiB7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5zZWxlY3Rvci1idXR0b24tcGxhaW46aG92ZXIsXG4gIC5zZWxlY3Rvci1idXR0b24tcGxhaW46Zm9jdXMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfSAqL1xuXG5cblxuXG4uc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxJSAwJSAxJSA1JTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMTAlO1xuICAgIH1cbn1cblxuLmFycm93LXNpemUge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMC43JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLnMgZWFzZTtcbn1cbi5uby10cmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuXG4uYmVsaWVmcy1wYWdlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDdyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDdyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFib3V0LWxheW91dCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbi5iZWxpZWZzLWtleSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGxhc3QgYmFzZWxpbmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW07XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gICAgfVxufVxuXG4uYmVsaWVmcy12YWx1ZSB7XG4gICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW07XG59XG5cbi5hYm91dC1zZWxlY3RvciB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgd2lkdGg6IDdyZW07XG4gICAgfVxufVxuXG4uc2VsZWN0b3ItY29udGFpbmVyIHtcbiAgICB3aWR0aDogOHJlbTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbn1cblxuLnNlbGVjdG9yIHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxufVxuXG4uc2VsZWN0b3ItdGV4dCB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIH1cbn1cblxuLnNlbGVjdG9yLWRldGFpbHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBjb250ZW50O1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAvKiBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICBkaXNwbGF5OiBjb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgfSAqL1xufVxuXG5cblxuLnBvaW50LWRyb3Bkb3duLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYmVsaWVmLWRldGFpbHMge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDJyZW0gKyAxMHB4KTtcbn1cblxuLyogVW5kZXJsaW5lIFNsaWRlICovXG4vKiBMRUZUIFRPIFJJR0hUICovXG4uc2xpZGluZy11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbGlkaW5nLXVuZGVybGluZTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC42cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbn1cblxuLnNsaWRpbmctdW5kZXJsaW5lLmNsaWNrZWQ6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW5Db2xvcik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlc2hlZXRzL2JlbGllZnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUpBQW1KO0lBQ25KLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7O0FBRUg7Ozs7Ozs7Ozs7Ozs7R0FhRzs7QUFFSDtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLG1CQUFtQjs7SUFFbkIsbUpBQW1KO0lBQ25KLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtSkFBbUo7SUFDbkosZUFBZTtJQUNmLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCLG9CQUFvQjs7SUFFcEIsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsVUFBVTs7SUFFVjtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjtBQUNKOztBQUVBLGlCQUFpQjtBQUNqQjs7Ozs7Ozs7OztxQkFVcUI7O0lBRWpCOzsyQ0FFdUM7QUFDM0MsT0FBTzs7QUFFUDs7OztHQUlHOztBQUVIOzs7Ozs7O0tBT0s7Ozs7O0FBS0w7SUFDSSxtSkFBbUo7SUFDbkosZUFBZTtJQUNmLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCLG9CQUFvQjs7SUFFcEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQjtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTOztJQUVUO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLFdBQVc7O0lBRVg7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksYUFBYTs7SUFFYjtRQUNJLHVCQUF1QjtRQUN2QixhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTs7T0FFRztBQUNQOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEI7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9yZGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib3JkZXItcmlnaHQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvcmRlci1ib3R0b20tMiB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG59XFxuXFxuLnNtYWxsLXRleHQge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyogLnNtYWxsLWJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgcGFkZGluZzogNSU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufSAqL1xcblxcbi8qIC5zbWFsbC1idXR0b24tcGxhaW4ge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHBhZGRpbmc6IDUlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn0gKi9cXG5cXG4ubGFyZ2UtYnV0dG9uIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICA7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTAlO1xcbiAgICB9XFxufVxcblxcbi8qIEJ1dHRvbiBTbGlkZSAqL1xcbi8qIC5zZWxlY3Rvci1idXR0b24tcGxhaW46OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICAvKiB6LWluZGV4OiAtMTsgKi9cXG5cXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDsgKi9cXG4vKiB9ICAqL1xcblxcbi8qIC5zZWxlY3Rvci1idXR0b24tcGxhaW46aG92ZXI6OmJlZm9yZSxcXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluOmZvY3VzOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XFxufSAqL1xcblxcbi8qIC5zZWxlY3Rvci1idXR0b24tcGxhaW4ge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpob3ZlcixcXG4gIC5zZWxlY3Rvci1idXR0b24tcGxhaW46Zm9jdXMge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9ICovXFxuXFxuXFxuXFxuXFxuLnNlbGVjdG9yLWJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMCU7XFxuICAgIH1cXG59XFxuXFxuLmFycm93LXNpemUge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDAuNyU7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC5zIGVhc2U7XFxufVxcbi5uby10cmFuc2Zvcm0ge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcblxcbi5iZWxpZWZzLXBhZ2UtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDdyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiA3cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dC1sYXlvdXQge1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cXG5cXG4uYmVsaWVmcy1rZXkge1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogbGFzdCBiYXNlbGluZTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcXG4gICAgfVxcbn1cXG5cXG4uYmVsaWVmcy12YWx1ZSB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtO1xcbn1cXG5cXG4uYWJvdXQtc2VsZWN0b3Ige1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xcbiAgICAgICAgd2lkdGg6IDdyZW07XFxuICAgIH1cXG59XFxuXFxuLnNlbGVjdG9yLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4cmVtO1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgfVxcbn1cXG5cXG4uc2VsZWN0b3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxufVxcblxcbi5zZWxlY3Rvci10ZXh0IHtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMSU7XFxuICAgIH1cXG59XFxuXFxuLnNlbGVjdG9yLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogY29udGVudDtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnQgIWltcG9ydGFudDtcXG4gICAgfSAqL1xcbn1cXG5cXG5cXG5cXG4ucG9pbnQtZHJvcGRvd24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJlbGllZi1kZXRhaWxzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMnJlbSArIDEwcHgpO1xcbn1cXG5cXG4vKiBVbmRlcmxpbmUgU2xpZGUgKi9cXG4vKiBMRUZUIFRPIFJJR0hUICovXFxuLnNsaWRpbmctdW5kZXJsaW5lIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zbGlkaW5nLXVuZGVybGluZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC42cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcXG59XFxuXFxuLnNsaWRpbmctdW5kZXJsaW5lLmNsaWNrZWQ6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbkNvbG9yKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk1ZTY2Yjc4ZGM3NDJiY2I0M2Y2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9