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
    position: abs;
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
`, "",{"version":3,"sources":["webpack://./stylesheets/beliefs.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,mJAAmJ;IACnJ,eAAe;IACf,mBAAmB;AACvB;;AAEA;;;;;;;;;;;;;;;;GAgBG;;AAEH;;;;;;;;;;;;;GAaG;;AAEH;IACI,uBAAuB;IACvB,eAAe;IACf,2BAA2B;IAC3B,mBAAmB;;IAEnB,mJAAmJ;IACnJ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mJAAmJ;IACnJ,eAAe;IACf,WAAW;;IAEX,sBAAsB;IACtB,oBAAoB;;IAEpB,aAAa;IACb,mBAAmB;;IAEnB,UAAU;;IAEV;QACI,eAAe;QACf,mBAAmB;QACnB,YAAY;IAChB;AACJ;;AAEA,iBAAiB;AACjB;IACI,WAAW;IACX,kCAAkC;IAClC,aAAa;IACb,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,UAAU;IACV,SAAS;IACT,WAAW;;IAEX,oBAAoB;IACpB,sBAAsB;IACtB,oCAAoC;AACxC;;AAEA;;IAEI,oBAAoB;IACpB,oCAAoC;AACxC;;AAEA;IACI,UAAU;AACd;;AAEA;;IAEI,YAAY;AAChB;;;;;AAKA;IACI,mJAAmJ;IACnJ,eAAe;IACf,WAAW;;IAEX,sBAAsB;IACtB,oBAAoB;;IAEpB,kCAAkC;IAClC,YAAY;IACZ,aAAa;IACb,mBAAmB;;IAEnB;QACI,eAAe;QACf,mBAAmB;QACnB,YAAY;IAChB;AACJ;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,yBAAyB;IACzB,+BAA+B;AACnC;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,SAAS;;IAET;QACI,aAAa;QACb,sBAAsB;IAC1B;AACJ;;AAEA;IACI;QACI,aAAa;QACb,sBAAsB;QACtB,0BAA0B;QAC1B,qBAAqB;QACrB,uBAAuB;QACvB,4BAA4B;IAChC;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI,WAAW;;IAEX;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;IACf;AACJ;;AAEA;IACI,aAAa;;IAEb;QACI,uBAAuB;QACvB,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,aAAa;QACb,eAAe;IACnB;AACJ;;AAEA;IACI,gBAAgB;;IAEhB;QACI,aAAa;IACjB;;IAEA;;OAEG;AACP;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;AAClC;;AAEA,oBAAoB;AACpB,kBAAkB;AAClB;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,WAAW;IACX,QAAQ;IACR,uBAAuB;IACvB,uDAAuD;AAC3D;;AAEA;IACI,WAAW;IACX,4BAA4B;AAChC","sourcesContent":[".border {\n    border: 1px solid black;\n}\n\n.border-right {\n    border-right: 1px solid black;\n}\n\n.border-bottom-2 {\n    border-bottom: 2px solid;\n}\n\n.small-text {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    line-height: normal;\n}\n\n/* .small-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    padding: 5%;\n\n    background-color: var(--mainColor);\n    color: white;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    border-radius: 100px;\n} */\n\n/* .small-button-plain {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    padding: 5%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    border-radius: 10px;\n} */\n\n.large-button {\n    color: var(--mainColor);\n    font-size: 30px;\n    padding: 10px 10px 0px 10px;\n    margin-bottom: 10px;\n    ;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    display: flex;\n    align-items: center;\n}\n\n.selector-button-plain {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n\n    display: flex;\n    border-radius: 10px;\n\n    z-index: 1;\n\n    @media screen and (min-width: 769px) {\n        font-size: 20px;\n        border-radius: 15px;\n        padding: 10%;\n    }\n}\n\n/* Button Slide */\n.selector-button-plain::before {\n    content: \"\";\n    background-color: var(--mainColor);\n    position: abs;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0;\n    margin: 0;\n    z-index: 20;\n\n    transform: scaleX(0);\n    transform-origin: left;\n    transition: transform 1s ease-in-out;\n}\n\n.selector-button-plain:hover::before,\n.selector-button-plain:focus::before {\n    transform: scaleX(1);\n    transition: transform 1s ease-in-out;\n}\n\n.selector-button-plain {\n    z-index: 1;\n}\n\n.selector-button-plain:hover,\n.selector-button-plain:focus {\n    color: white;\n}\n\n\n\n\n.selector-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n\n    background-color: var(--mainColor);\n    color: white;\n    display: flex;\n    border-radius: 10px;\n\n    @media screen and (min-width: 769px) {\n        font-size: 20px;\n        border-radius: 15px;\n        padding: 10%;\n    }\n}\n\n.arrow-size {\n    font-size: 25px;\n    display: flex;\n    align-items: center;\n    margin-top: 0.7%;\n    margin-right: 0.5rem;\n    transform: rotate(-90deg);\n    transition: transform 0.6s ease;\n}\n\n.no-transform {\n    transform: none;\n}\n\n\n.beliefs-page-container {\n    padding-top: 7rem;\n    padding-bottom: 7rem;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.about-layout {\n    width: 90vw;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 1rem;\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n    }\n}\n\n.beliefs-key {\n    @media screen and (min-width: 769px) {\n        display: flex;\n        flex-direction: column;\n        align-items: last baseline;\n        align-items: flex-end;\n        padding: 1rem 2rem 1rem;\n        border-right: 1px solid gray;\n    }\n}\n\n.beliefs-value {\n    padding: 1rem 2rem 1rem;\n}\n\n.beliefs-point:hover {\n    font-weight: 500;\n}\n\n.about-selector {\n    @media screen and (min-width: 769px) {\n        width: 7rem;\n    }\n}\n\n.selector-container {\n    width: 8rem;\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n        width: auto;\n    }\n}\n\n.selector {\n    display: none;\n\n    @media screen and (max-width: 768px) {\n        border: 2px solid black;\n        display: flex;\n    }\n}\n\n.selector-text {\n    @media screen and (max-width: 769px) {\n        display: flex;\n        margin-left: 1%;\n    }\n}\n\n.selector-details-container {\n    display: content;\n\n    @media screen and (max-width: 768px) {\n        display: none;\n    }\n\n    /* @media screen and (min-width: 769px) {\n        display: content !important;\n    } */\n}\n\n.point-dropdown-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.belief-details {\n    margin-left: calc(2rem + 10px);\n}\n\n/* Underline Slide */\n/* LEFT TO RIGHT */\n.sliding-underline {\n    display: inline-block;\n    cursor: pointer;\n}\n\n.sliding-underline:after {\n    content: '';\n    display: block;\n    height: 2px;\n    width: 0;\n    background: transparent;\n    transition: width 0.6s ease, background-color 0.6s ease;\n}\n\n.sliding-underline.clicked:after {\n    width: 100%;\n    background: var(--mainColor);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c2a161e13dc5f0657975")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTFlZTE5ODNmNTBiY2Q0ZWEzYjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDaFJ2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZWVkb21fY2h1cmNoLy4vc3R5bGVzaGVldHMvYmVsaWVmcy5jc3MiLCJ3ZWJwYWNrOi8vZnJlZWRvbV9jaHVyY2gvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYm9yZGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJvcmRlci1yaWdodCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib3JkZXItYm90dG9tLTIge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbn1cblxuLnNtYWxsLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLyogLnNtYWxsLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHBhZGRpbmc6IDUlO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59ICovXG5cbi8qIC5zbWFsbC1idXR0b24tcGxhaW4ge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwYWRkaW5nOiA1JTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSAqL1xuXG4ubGFyZ2UtYnV0dG9uIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgO1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWxlY3Rvci1idXR0b24tcGxhaW4ge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgei1pbmRleDogMTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMTAlO1xuICAgIH1cbn1cblxuLyogQnV0dG9uIFNsaWRlICovXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcbiAgICBwb3NpdGlvbjogYWJzO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB6LWluZGV4OiAyMDtcblxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluOmhvdmVyOjpiZWZvcmUsXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluOmZvY3VzOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcbn1cblxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbiB7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpob3Zlcixcbi5zZWxlY3Rvci1idXR0b24tcGxhaW46Zm9jdXMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cblxuLnNlbGVjdG9yLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICB9XG59XG5cbi5hcnJvdy1zaXplIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNyU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlO1xufVxuXG4ubm8tdHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cblxuLmJlbGllZnMtcGFnZS1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA3cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA3cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hYm91dC1sYXlvdXQge1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIGdhcDogMXJlbTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuXG4uYmVsaWVmcy1rZXkge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBsYXN0IGJhc2VsaW5lO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICAgIH1cbn1cblxuLmJlbGllZnMtdmFsdWUge1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtO1xufVxuXG4uYmVsaWVmcy1wb2ludDpob3ZlciB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFib3V0LXNlbGVjdG9yIHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICB3aWR0aDogN3JlbTtcbiAgICB9XG59XG5cbi5zZWxlY3Rvci1jb250YWluZXIge1xuICAgIHdpZHRoOiA4cmVtO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxufVxuXG4uc2VsZWN0b3Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG59XG5cbi5zZWxlY3Rvci10ZXh0IHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgfVxufVxuXG4uc2VsZWN0b3ItZGV0YWlscy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGNvbnRlbnQ7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnQgIWltcG9ydGFudDtcbiAgICB9ICovXG59XG5cbi5wb2ludC1kcm9wZG93bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJlbGllZi1kZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygycmVtICsgMTBweCk7XG59XG5cbi8qIFVuZGVybGluZSBTbGlkZSAqL1xuLyogTEVGVCBUTyBSSUdIVCAqL1xuLnNsaWRpbmctdW5kZXJsaW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGluZy11bmRlcmxpbmU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNnMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XG59XG5cbi5zbGlkaW5nLXVuZGVybGluZS5jbGlja2VkOmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluQ29sb3IpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdHlsZXNoZWV0cy9iZWxpZWZzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1KQUFtSjtJQUNuSixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHOztBQUVIOzs7Ozs7Ozs7Ozs7O0dBYUc7O0FBRUg7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7O0lBRW5CLG1KQUFtSjtJQUNuSixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUpBQW1KO0lBQ25KLGVBQWU7SUFDZixXQUFXOztJQUVYLHNCQUFzQjtJQUN0QixvQkFBb0I7O0lBRXBCLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLFVBQVU7O0lBRVY7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7QUFDSjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXOztJQUVYLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLG9CQUFvQjtJQUNwQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7Ozs7QUFLQTtJQUNJLG1KQUFtSjtJQUNuSixlQUFlO0lBQ2YsV0FBVzs7SUFFWCxzQkFBc0I7SUFDdEIsb0JBQW9COztJQUVwQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTOztJQUVUO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLFdBQVc7O0lBRVg7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksYUFBYTs7SUFFYjtRQUNJLHVCQUF1QjtRQUN2QixhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTs7T0FFRztBQUNQOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQSxvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvcmRlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9yZGVyLXJpZ2h0IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib3JkZXItYm90dG9tLTIge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxufVxcblxcbi5zbWFsbC10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qIC5zbWFsbC1idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHBhZGRpbmc6IDUlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbn0gKi9cXG5cXG4vKiAuc21hbGwtYnV0dG9uLXBsYWluIHtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBwYWRkaW5nOiA1JTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59ICovXFxuXFxuLmxhcmdlLWJ1dHRvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWxlY3Rvci1idXR0b24tcGxhaW4ge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgfVxcbn1cXG5cXG4vKiBCdXR0b24gU2xpZGUgKi9cXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcXG4gICAgcG9zaXRpb246IGFicztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHotaW5kZXg6IDIwO1xcblxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluOmhvdmVyOjpiZWZvcmUsXFxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpmb2N1czo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbiB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zZWxlY3Rvci1idXR0b24tcGxhaW46aG92ZXIsXFxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpmb2N1cyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuXFxuLnNlbGVjdG9yLWJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMCU7XFxuICAgIH1cXG59XFxuXFxuLmFycm93LXNpemUge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDAuNyU7XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlO1xcbn1cXG5cXG4ubm8tdHJhbnNmb3JtIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG5cXG4uYmVsaWVmcy1wYWdlLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiA3cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogN3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQtbGF5b3V0IHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XFxuXFxuLmJlbGllZnMta2V5IHtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGxhc3QgYmFzZWxpbmU7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW0gMXJlbTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIH1cXG59XFxuXFxuLmJlbGllZnMtdmFsdWUge1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW0gMXJlbTtcXG59XFxuXFxuLmJlbGllZnMtcG9pbnQ6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uYWJvdXQtc2VsZWN0b3Ige1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xcbiAgICAgICAgd2lkdGg6IDdyZW07XFxuICAgIH1cXG59XFxuXFxuLnNlbGVjdG9yLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4cmVtO1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgfVxcbn1cXG5cXG4uc2VsZWN0b3Ige1xcbiAgICBkaXNwbGF5OiBub25lO1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxufVxcblxcbi5zZWxlY3Rvci10ZXh0IHtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMSU7XFxuICAgIH1cXG59XFxuXFxuLnNlbGVjdG9yLWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogY29udGVudDtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnQgIWltcG9ydGFudDtcXG4gICAgfSAqL1xcbn1cXG5cXG4ucG9pbnQtZHJvcGRvd24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJlbGllZi1kZXRhaWxzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMnJlbSArIDEwcHgpO1xcbn1cXG5cXG4vKiBVbmRlcmxpbmUgU2xpZGUgKi9cXG4vKiBMRUZUIFRPIFJJR0hUICovXFxuLnNsaWRpbmctdW5kZXJsaW5lIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zbGlkaW5nLXVuZGVybGluZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC42cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcXG59XFxuXFxuLnNsaWRpbmctdW5kZXJsaW5lLmNsaWNrZWQ6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbkNvbG9yKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMyYTE2MWUxM2RjNWYwNjU3OTc1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9