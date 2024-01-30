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
.selector-button-plain::before {
    content: "";
    background-color: var(--mainColor);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0;
    margin: 0;
    z-index: 20;

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1s ease-in-out;
}

.selector-button-plain:hover::before,
.selector-button-plain:focus::before {
    transform: scaleX(1);
    transition: transform 1s ease-in-out;
}

.selector-button-plain {
    z-index: 1;
}

.selector-button-plain:hover,
.selector-button-plain:focus {
    color: white;
}




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
    transition: transform 0.6s ease;
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

.beliefs-point:hover {
    font-weight: 500;
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
`, "",{"version":3,"sources":["webpack://./stylesheets/beliefs.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,mJAAmJ;IACnJ,eAAe;IACf,mBAAmB;AACvB;;AAEA;;;;;;;;;;;;;;;;GAgBG;;AAEH;;;;;;;;;;;;;GAaG;;AAEH;IACI,uBAAuB;IACvB,eAAe;IACf,2BAA2B;IAC3B,mBAAmB;;IAEnB,mJAAmJ;IACnJ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mJAAmJ;IACnJ,eAAe;IACf,WAAW;;IAEX,sBAAsB;IACtB,oBAAoB;;IAEpB,aAAa;IACb,mBAAmB;;IAEnB,UAAU;;IAEV;QACI,eAAe;QACf,mBAAmB;QACnB,YAAY;IAChB;AACJ;;AAEA,iBAAiB;AACjB;IACI,WAAW;IACX,kCAAkC;IAClC,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,UAAU;IACV,SAAS;IACT,WAAW;;IAEX,oBAAoB;IACpB,sBAAsB;IACtB,oCAAoC;AACxC;;AAEA;;IAEI,oBAAoB;IACpB,oCAAoC;AACxC;;AAEA;IACI,UAAU;AACd;;AAEA;;IAEI,YAAY;AAChB;;;;;AAKA;IACI,mJAAmJ;IACnJ,eAAe;IACf,WAAW;;IAEX,sBAAsB;IACtB,oBAAoB;;IAEpB,kCAAkC;IAClC,YAAY;IACZ,aAAa;IACb,mBAAmB;;IAEnB;QACI,eAAe;QACf,mBAAmB;QACnB,YAAY;IAChB;AACJ;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,yBAAyB;IACzB,+BAA+B;AACnC;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,SAAS;;IAET;QACI,aAAa;QACb,sBAAsB;IAC1B;AACJ;;AAEA;IACI;QACI,aAAa;QACb,sBAAsB;QACtB,0BAA0B;QAC1B,qBAAqB;QACrB,uBAAuB;QACvB,4BAA4B;IAChC;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI,WAAW;;IAEX;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;IACf;AACJ;;AAEA;IACI,aAAa;;IAEb;QACI,uBAAuB;QACvB,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,aAAa;QACb,eAAe;IACnB;AACJ;;AAEA;IACI,gBAAgB;;IAEhB;QACI,aAAa;IACjB;;IAEA;;OAEG;AACP;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;AAClC;;AAEA,oBAAoB;AACpB,kBAAkB;AAClB;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,WAAW;IACX,QAAQ;IACR,uBAAuB;IACvB,uDAAuD;AAC3D;;AAEA;IACI,WAAW;IACX,4BAA4B;AAChC","sourcesContent":[".border {\n    border: 1px solid black;\n}\n\n.border-right {\n    border-right: 1px solid black;\n}\n\n.border-bottom-2 {\n    border-bottom: 2px solid;\n}\n\n.small-text {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    line-height: normal;\n}\n\n/* .small-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    padding: 5%;\n\n    background-color: var(--mainColor);\n    color: white;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    border-radius: 100px;\n} */\n\n/* .small-button-plain {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    padding: 5%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    border-radius: 10px;\n} */\n\n.large-button {\n    color: var(--mainColor);\n    font-size: 30px;\n    padding: 10px 10px 0px 10px;\n    margin-bottom: 10px;\n    ;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    display: flex;\n    align-items: center;\n}\n\n.selector-button-plain {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n\n    display: flex;\n    border-radius: 10px;\n\n    z-index: 1;\n\n    @media screen and (min-width: 769px) {\n        font-size: 20px;\n        border-radius: 15px;\n        padding: 10%;\n    }\n}\n\n/* Button Slide */\n.selector-button-plain::before {\n    content: \"\";\n    background-color: var(--mainColor);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0;\n    margin: 0;\n    z-index: 20;\n\n    transform: scaleX(0);\n    transform-origin: left;\n    transition: transform 1s ease-in-out;\n}\n\n.selector-button-plain:hover::before,\n.selector-button-plain:focus::before {\n    transform: scaleX(1);\n    transition: transform 1s ease-in-out;\n}\n\n.selector-button-plain {\n    z-index: 1;\n}\n\n.selector-button-plain:hover,\n.selector-button-plain:focus {\n    color: white;\n}\n\n\n\n\n.selector-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n\n    background-color: var(--mainColor);\n    color: white;\n    display: flex;\n    border-radius: 10px;\n\n    @media screen and (min-width: 769px) {\n        font-size: 20px;\n        border-radius: 15px;\n        padding: 10%;\n    }\n}\n\n.arrow-size {\n    font-size: 25px;\n    display: flex;\n    align-items: center;\n    margin-top: 0.7%;\n    margin-right: 0.5rem;\n    transform: rotate(-90deg);\n    transition: transform 0.6s ease;\n}\n\n.no-transform {\n    transform: none;\n}\n\n\n.beliefs-page-container {\n    padding-top: 7rem;\n    padding-bottom: 7rem;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.about-layout {\n    width: 90vw;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 1rem;\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n    }\n}\n\n.beliefs-key {\n    @media screen and (min-width: 769px) {\n        display: flex;\n        flex-direction: column;\n        align-items: last baseline;\n        align-items: flex-end;\n        padding: 1rem 2rem 1rem;\n        border-right: 1px solid gray;\n    }\n}\n\n.beliefs-value {\n    padding: 1rem 2rem 1rem;\n}\n\n.beliefs-point:hover {\n    font-weight: 500;\n}\n\n.about-selector {\n    @media screen and (min-width: 769px) {\n        width: 7rem;\n    }\n}\n\n.selector-container {\n    width: 8rem;\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n        width: auto;\n    }\n}\n\n.selector {\n    display: none;\n\n    @media screen and (max-width: 768px) {\n        border: 2px solid black;\n        display: flex;\n    }\n}\n\n.selector-text {\n    @media screen and (max-width: 769px) {\n        display: flex;\n        margin-left: 1%;\n    }\n}\n\n.selector-details-container {\n    display: content;\n\n    @media screen and (max-width: 768px) {\n        display: none;\n    }\n\n    /* @media screen and (min-width: 769px) {\n        display: content !important;\n    } */\n}\n\n.point-dropdown-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.belief-details {\n    margin-left: calc(2rem + 10px);\n}\n\n/* Underline Slide */\n/* LEFT TO RIGHT */\n.sliding-underline {\n    display: inline-block;\n    cursor: pointer;\n}\n\n.sliding-underline:after {\n    content: '';\n    display: block;\n    height: 2px;\n    width: 0;\n    background: transparent;\n    transition: width 0.6s ease, background-color 0.6s ease;\n}\n\n.sliding-underline.clicked:after {\n    width: 100%;\n    background: var(--mainColor);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8e6351f15a2c2857ab97")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZDQ4NDI1OThiMWU4ZjMwZDVmMmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDaFJ2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZWVkb21fY2h1cmNoLy4vc3R5bGVzaGVldHMvYmVsaWVmcy5jc3MiLCJ3ZWJwYWNrOi8vZnJlZWRvbV9jaHVyY2gvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYm9yZGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJvcmRlci1yaWdodCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib3JkZXItYm90dG9tLTIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbn1cblxuLnNtYWxsLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLyogLnNtYWxsLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHBhZGRpbmc6IDUlO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59ICovXG5cbi8qIC5zbWFsbC1idXR0b24tcGxhaW4ge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwYWRkaW5nOiA1JTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSAqL1xuXG4ubGFyZ2UtYnV0dG9uIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWxlY3Rvci1idXR0b24tcGxhaW4ge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgei1pbmRleDogMTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMTAlO1xuICAgIH1cbn1cblxuLyogQnV0dG9uIFNsaWRlICovXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHotaW5kZXg6IDIwO1xuXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zZWxlY3Rvci1idXR0b24tcGxhaW46aG92ZXI6OmJlZm9yZSxcbi5zZWxlY3Rvci1idXR0b24tcGxhaW46Zm9jdXM6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluIHtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluOmhvdmVyLFxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpmb2N1cyB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuXG4uc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxJSAwJSAxJSA1JTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMTAlO1xuICAgIH1cbn1cblxuLmFycm93LXNpemUge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMC43JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XG59XG5cbi5uby10cmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuXG4uYmVsaWVmcy1wYWdlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDdyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDdyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFib3V0LWxheW91dCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbi5iZWxpZWZzLWtleSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGxhc3QgYmFzZWxpbmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW07XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gICAgfVxufVxuXG4uYmVsaWVmcy12YWx1ZSB7XG4gICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW07XG59XG5cbi5iZWxpZWZzLXBvaW50OmhvdmVyIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYWJvdXQtc2VsZWN0b3Ige1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIHdpZHRoOiA3cmVtO1xuICAgIH1cbn1cblxuLnNlbGVjdG9yLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDhyZW07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG59XG5cbi5zZWxlY3RvciB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbn1cblxuLnNlbGVjdG9yLXRleHQge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICB9XG59XG5cbi5zZWxlY3Rvci1kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogY29udGVudDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgZGlzcGxheTogY29udGVudCAhaW1wb3J0YW50O1xuICAgIH0gKi9cbn1cblxuLnBvaW50LWRyb3Bkb3duLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYmVsaWVmLWRldGFpbHMge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDJyZW0gKyAxMHB4KTtcbn1cblxuLyogVW5kZXJsaW5lIFNsaWRlICovXG4vKiBMRUZUIFRPIFJJR0hUICovXG4uc2xpZGluZy11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbGlkaW5nLXVuZGVybGluZTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC42cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbn1cblxuLnNsaWRpbmctdW5kZXJsaW5lLmNsaWNrZWQ6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW5Db2xvcik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlc2hlZXRzL2JlbGllZnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUpBQW1KO0lBQ25KLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7O0FBRUg7Ozs7Ozs7Ozs7Ozs7R0FhRzs7QUFFSDtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLG1CQUFtQjs7SUFFbkIsbUpBQW1KO0lBQ25KLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtSkFBbUo7SUFDbkosZUFBZTtJQUNmLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCLG9CQUFvQjs7SUFFcEIsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsVUFBVTs7SUFFVjtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjtBQUNKOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7O0lBRVgsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOzs7OztBQUtBO0lBQ0ksbUpBQW1KO0lBQ25KLGVBQWU7SUFDZixXQUFXOztJQUVYLHNCQUFzQjtJQUN0QixvQkFBb0I7O0lBRXBCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkI7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7O0lBRVQ7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksV0FBVzs7SUFFWDtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSSxhQUFhOztJQUViO1FBQ0ksdUJBQXVCO1FBQ3ZCLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjs7SUFFaEI7UUFDSSxhQUFhO0lBQ2pCOztJQUVBOztPQUVHO0FBQ1A7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEI7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9yZGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib3JkZXItcmlnaHQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvcmRlci1ib3R0b20tMiB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG59XFxuXFxuLnNtYWxsLXRleHQge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyogLnNtYWxsLWJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgcGFkZGluZzogNSU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufSAqL1xcblxcbi8qIC5zbWFsbC1idXR0b24tcGxhaW4ge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHBhZGRpbmc6IDUlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn0gKi9cXG5cXG4ubGFyZ2UtYnV0dG9uIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICA7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTAlO1xcbiAgICB9XFxufVxcblxcbi8qIEJ1dHRvbiBTbGlkZSAqL1xcbi5zZWxlY3Rvci1idXR0b24tcGxhaW46OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB6LWluZGV4OiAyMDtcXG5cXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpob3Zlcjo6YmVmb3JlLFxcbi5zZWxlY3Rvci1idXR0b24tcGxhaW46Zm9jdXM6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zZWxlY3Rvci1idXR0b24tcGxhaW4ge1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluOmhvdmVyLFxcbi5zZWxlY3Rvci1idXR0b24tcGxhaW46Zm9jdXMge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcblxcbi5zZWxlY3Rvci1idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTAlO1xcbiAgICB9XFxufVxcblxcbi5hcnJvdy1zaXplIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAwLjclO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcXG59XFxuXFxuLm5vLXRyYW5zZm9ybSB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuXFxuLmJlbGllZnMtcGFnZS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogN3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDdyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0LWxheW91dCB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblxcbi5iZWxpZWZzLWtleSB7XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBsYXN0IGJhc2VsaW5lO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW07XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xcbiAgICB9XFxufVxcblxcbi5iZWxpZWZzLXZhbHVlIHtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW07XFxufVxcblxcbi5iZWxpZWZzLXBvaW50OmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmFib3V0LXNlbGVjdG9yIHtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gICAgICAgIHdpZHRoOiA3cmVtO1xcbiAgICB9XFxufVxcblxcbi5zZWxlY3Rvci1jb250YWluZXIge1xcbiAgICB3aWR0aDogOHJlbTtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG59XFxuXFxuLnNlbGVjdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbn1cXG5cXG4uc2VsZWN0b3ItdGV4dCB7XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xcbiAgICB9XFxufVxcblxcbi5zZWxlY3Rvci1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGNvbnRlbnQ7XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICBkaXNwbGF5OiBjb250ZW50ICFpbXBvcnRhbnQ7XFxuICAgIH0gKi9cXG59XFxuXFxuLnBvaW50LWRyb3Bkb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5iZWxpZWYtZGV0YWlscyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDJyZW0gKyAxMHB4KTtcXG59XFxuXFxuLyogVW5kZXJsaW5lIFNsaWRlICovXFxuLyogTEVGVCBUTyBSSUdIVCAqL1xcbi5zbGlkaW5nLXVuZGVybGluZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2xpZGluZy11bmRlcmxpbmU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNnMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XFxufVxcblxcbi5zbGlkaW5nLXVuZGVybGluZS5jbGlja2VkOmFmdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW5Db2xvcik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ZTYzNTFmMTVhMmMyODU3YWI5N1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==