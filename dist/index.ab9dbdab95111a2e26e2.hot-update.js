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
`, "",{"version":3,"sources":["webpack://./stylesheets/beliefs.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;AAC3B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,mJAAmJ;IACnJ,eAAe;IACf,mBAAmB;AACvB;;AAEA;;;;;;;;;;;;;;;;GAgBG;;AAEH;;;;;;;;;;;;;GAaG;;AAEH;IACI,uBAAuB;IACvB,eAAe;IACf,2BAA2B;IAC3B,mBAAmB;;IAEnB,mJAAmJ;IACnJ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mJAAmJ;IACnJ,eAAe;IACf,WAAW;;IAEX,sBAAsB;IACtB,oBAAoB;;IAEpB,aAAa;IACb,mBAAmB;;IAEnB,UAAU;;IAEV;QACI,eAAe;QACf,mBAAmB;QACnB,YAAY;IAChB;AACJ;;AAEA,iBAAiB;AACjB;;;;;;;;;;qBAUqB;;IAEjB;;2CAEuC;AAC3C,OAAO;;AAEP;;;;GAIG;;AAEH;IACI,UAAU;EACZ;;EAEA;;IAEE,YAAY;EACd;;;;;AAKF;IACI,mJAAmJ;IACnJ,eAAe;IACf,WAAW;;IAEX,sBAAsB;IACtB,oBAAoB;;IAEpB,kCAAkC;IAClC,YAAY;IACZ,aAAa;IACb,mBAAmB;;IAEnB;QACI,eAAe;QACf,mBAAmB;QACnB,YAAY;IAChB;AACJ;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;AACxB;;;AAGA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,SAAS;;IAET;QACI,aAAa;QACb,sBAAsB;IAC1B;AACJ;;AAEA;IACI;QACI,aAAa;QACb,sBAAsB;QACtB,0BAA0B;QAC1B,qBAAqB;QACrB,uBAAuB;QACvB,4BAA4B;IAChC;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI,WAAW;;IAEX;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;IACf;AACJ;;AAEA;IACI,aAAa;;IAEb;QACI,uBAAuB;QACvB,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,aAAa;QACb,eAAe;IACnB;AACJ;;AAEA;IACI,gBAAgB;;IAEhB;QACI,aAAa;IACjB;;IAEA;;OAEG;AACP;;;;AAIA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;AAClC;;AAEA,oBAAoB;AACpB,kBAAkB;AAClB;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,WAAW;IACX,QAAQ;IACR,uBAAuB;IACvB,uDAAuD;AAC3D;;AAEA;IACI,WAAW;IACX,4BAA4B;AAChC","sourcesContent":[".border {\n    border: 1px solid black;\n}\n\n.border-right {\n    border-right: 1px solid black;\n}\n\n.border-bottom-2 {\n    border-bottom: 2px solid;\n}\n\n.small-text {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    line-height: normal;\n}\n\n/* .small-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    padding: 5%;\n\n    background-color: var(--mainColor);\n    color: white;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    border-radius: 100px;\n} */\n\n/* .small-button-plain {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    padding: 5%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    border-radius: 10px;\n} */\n\n.large-button {\n    color: var(--mainColor);\n    font-size: 30px;\n    padding: 10px 10px 0px 10px;\n    margin-bottom: 10px;\n    ;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    display: flex;\n    align-items: center;\n}\n\n.selector-button-plain {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n\n    display: flex;\n    border-radius: 10px;\n\n    z-index: 1;\n\n    @media screen and (min-width: 769px) {\n        font-size: 20px;\n        border-radius: 15px;\n        padding: 10%;\n    }\n}\n\n/* Button Slide */\n/* .selector-button-plain::before {\n    content: \"\";\n    background-color: var(--mainColor);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0;\n    margin: 0;\n    /* z-index: -1; */\n\n    /* transform: scaleX(0);\n    transform-origin: left;\n    transition: transform 1s ease-in-out; */\n/* }  */\n\n/* .selector-button-plain:hover::before,\n.selector-button-plain:focus::before {\n  transform: scaleX(1);\n  transition: transform 1s ease-in-out;\n} */\n\n.selector-button-plain {\n    z-index: 1;\n  }\n\n  .selector-button-plain:hover,\n  .selector-button-plain:focus {\n    color: white;\n  }\n\n\n\n\n.selector-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n\n    background-color: var(--mainColor);\n    color: white;\n    display: flex;\n    border-radius: 10px;\n\n    @media screen and (min-width: 769px) {\n        font-size: 20px;\n        border-radius: 15px;\n        padding: 10%;\n    }\n}\n\n.arrow-size {\n    font-size: 25px;\n    display: flex;\n    align-items: center;\n    margin-top: 0.7%;\n    margin-right: 0.5rem;\n}\n\n\n.beliefs-page-container {\n    padding-top: 7rem;\n    padding-bottom: 7rem;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.about-layout {\n    width: 90vw;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 1rem;\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n    }\n}\n\n.beliefs-key {\n    @media screen and (min-width: 769px) {\n        display: flex;\n        flex-direction: column;\n        align-items: last baseline;\n        align-items: flex-end;\n        padding: 1rem 2rem 1rem;\n        border-right: 1px solid gray;\n    }\n}\n\n.beliefs-value {\n    padding: 1rem 2rem 1rem;\n}\n\n.about-selector {\n    @media screen and (min-width: 769px) {\n        width: 7rem;\n    }\n}\n\n.selector-container {\n    width: 8rem;\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n        width: auto;\n    }\n}\n\n.selector {\n    display: none;\n\n    @media screen and (max-width: 768px) {\n        border: 2px solid black;\n        display: flex;\n    }\n}\n\n.selector-text {\n    @media screen and (max-width: 769px) {\n        display: flex;\n        margin-left: 1%;\n    }\n}\n\n.selector-details-container {\n    display: content;\n\n    @media screen and (max-width: 768px) {\n        display: none;\n    }\n\n    /* @media screen and (min-width: 769px) {\n        display: content !important;\n    } */\n}\n\n\n\n.point-dropdown-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.belief-details {\n    margin-left: calc(2rem + 10px);\n}\n\n/* Underline Slide */\n/* LEFT TO RIGHT */\n.sliding-underline {\n    display: inline-block;\n    cursor: pointer;\n}\n\n.sliding-underline:after {\n    content: '';\n    display: block;\n    height: 2px;\n    width: 0;\n    background: transparent;\n    transition: width 0.6s ease, background-color 0.6s ease;\n}\n\n.sliding-underline.clicked:after {\n    width: 100%;\n    background: var(--mainColor);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("da514f402f10b52f0395")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYWI5ZGJkYWI5NTExMWEyZTI2ZTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LDBKQUEwSixzQkFBc0Isa0JBQWtCLCtCQUErQiwyQkFBMkIsMkNBQTJDLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhDQUE4QywwQkFBMEIsOEJBQThCLHVCQUF1QixPQUFPLEdBQUcsaUJBQWlCLHNCQUFzQixvQkFBb0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsR0FBRywrQkFBK0Isd0JBQXdCLDJCQUEyQiw4QkFBOEIsb0JBQW9CLDhCQUE4QixHQUFHLG1CQUFtQixrQkFBa0Isb0JBQW9CLHFDQUFxQyxnQkFBZ0IsOENBQThDLHdCQUF3QixpQ0FBaUMsT0FBTyxHQUFHLGtCQUFrQiw0Q0FBNEMsd0JBQXdCLGlDQUFpQyxxQ0FBcUMsZ0NBQWdDLGtDQUFrQyx1Q0FBdUMsT0FBTyxHQUFHLG9CQUFvQiw4QkFBOEIsR0FBRyxxQkFBcUIsNENBQTRDLHNCQUFzQixPQUFPLEdBQUcseUJBQXlCLGtCQUFrQiw4Q0FBOEMsd0JBQXdCLGlDQUFpQyxzQkFBc0IsT0FBTyxHQUFHLGVBQWUsb0JBQW9CLDhDQUE4QyxrQ0FBa0Msd0JBQXdCLE9BQU8sR0FBRyxvQkFBb0IsNENBQTRDLHdCQUF3QiwwQkFBMEIsT0FBTyxHQUFHLGlDQUFpQyx1QkFBdUIsOENBQThDLHdCQUF3QixPQUFPLGlEQUFpRCxzQ0FBc0MsUUFBUSxLQUFLLG1DQUFtQyxvQkFBb0IsNkJBQTZCLEdBQUcscUJBQXFCLHFDQUFxQyxHQUFHLG9FQUFvRSw0QkFBNEIsc0JBQXNCLEdBQUcsOEJBQThCLGtCQUFrQixxQkFBcUIsa0JBQWtCLGVBQWUsOEJBQThCLDhEQUE4RCxHQUFHLHNDQUFzQyxrQkFBa0IsbUNBQW1DLEdBQUcscUJBQXFCO0FBQ242TjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUN4UXZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJlZWRvbV9jaHVyY2gvLi9zdHlsZXNoZWV0cy9iZWxpZWZzLmNzcyIsIndlYnBhY2s6Ly9mcmVlZG9tX2NodXJjaC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ib3JkZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYm9yZGVyLXJpZ2h0IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJvcmRlci1ib3R0b20tMiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xufVxuXG4uc21hbGwtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4vKiAuc21hbGwtYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgcGFkZGluZzogNSU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn0gKi9cblxuLyogLnNtYWxsLWJ1dHRvbi1wbGFpbiB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHBhZGRpbmc6IDUlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59ICovXG5cbi5sYXJnZS1idXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICA7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbiB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICB6LWluZGV4OiAxO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgfVxufVxuXG4vKiBCdXR0b24gU2xpZGUgKi9cbi8qIC5zZWxlY3Rvci1idXR0b24tcGxhaW46OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLyogei1pbmRleDogLTE7ICovXG5cbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDsgKi9cbi8qIH0gICovXG5cbi8qIC5zZWxlY3Rvci1idXR0b24tcGxhaW46aG92ZXI6OmJlZm9yZSxcbi5zZWxlY3Rvci1idXR0b24tcGxhaW46Zm9jdXM6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7XG59ICovXG5cbi5zZWxlY3Rvci1idXR0b24tcGxhaW4ge1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAuc2VsZWN0b3ItYnV0dG9uLXBsYWluOmhvdmVyLFxuICAuc2VsZWN0b3ItYnV0dG9uLXBsYWluOmZvY3VzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuXG5cblxuLnNlbGVjdG9yLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICB9XG59XG5cbi5hcnJvdy1zaXplIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNyU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cblxuLmJlbGllZnMtcGFnZS1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA3cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA3cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hYm91dC1sYXlvdXQge1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIGdhcDogMXJlbTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuXG4uYmVsaWVmcy1rZXkge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBsYXN0IGJhc2VsaW5lO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICAgIH1cbn1cblxuLmJlbGllZnMtdmFsdWUge1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtO1xufVxuXG4uYWJvdXQtc2VsZWN0b3Ige1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIHdpZHRoOiA3cmVtO1xuICAgIH1cbn1cblxuLnNlbGVjdG9yLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDhyZW07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG59XG5cbi5zZWxlY3RvciB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbn1cblxuLnNlbGVjdG9yLXRleHQge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICB9XG59XG5cbi5zZWxlY3Rvci1kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogY29udGVudDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgZGlzcGxheTogY29udGVudCAhaW1wb3J0YW50O1xuICAgIH0gKi9cbn1cblxuXG5cbi5wb2ludC1kcm9wZG93bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJlbGllZi1kZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogY2FsYygycmVtICsgMTBweCk7XG59XG5cbi8qIFVuZGVybGluZSBTbGlkZSAqL1xuLyogTEVGVCBUTyBSSUdIVCAqL1xuLnNsaWRpbmctdW5kZXJsaW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGluZy11bmRlcmxpbmU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNnMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XG59XG5cbi5zbGlkaW5nLXVuZGVybGluZS5jbGlja2VkOmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluQ29sb3IpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdHlsZXNoZWV0cy9iZWxpZWZzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1KQUFtSjtJQUNuSixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHOztBQUVIOzs7Ozs7Ozs7Ozs7O0dBYUc7O0FBRUg7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7O0lBRW5CLG1KQUFtSjtJQUNuSixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUpBQW1KO0lBQ25KLGVBQWU7SUFDZixXQUFXOztJQUVYLHNCQUFzQjtJQUN0QixvQkFBb0I7O0lBRXBCLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLFVBQVU7O0lBRVY7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7QUFDSjs7QUFFQSxpQkFBaUI7QUFDakI7Ozs7Ozs7Ozs7cUJBVXFCOztJQUVqQjs7MkNBRXVDO0FBQzNDLE9BQU87O0FBRVA7Ozs7R0FJRzs7QUFFSDtJQUNJLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxZQUFZO0VBQ2Q7Ozs7O0FBS0Y7SUFDSSxtSkFBbUo7SUFDbkosZUFBZTtJQUNmLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCLG9CQUFvQjs7SUFFcEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQjtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUzs7SUFFVDtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2Qiw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSSxXQUFXOztJQUVYO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGFBQWE7O0lBRWI7UUFDSSx1QkFBdUI7UUFDdkIsYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCOztJQUVoQjtRQUNJLGFBQWE7SUFDakI7O0lBRUE7O09BRUc7QUFDUDs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQSxvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvcmRlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9yZGVyLXJpZ2h0IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib3JkZXItYm90dG9tLTIge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxufVxcblxcbi5zbWFsbC10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qIC5zbWFsbC1idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHBhZGRpbmc6IDUlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbn0gKi9cXG5cXG4vKiAuc21hbGwtYnV0dG9uLXBsYWluIHtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBwYWRkaW5nOiA1JTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59ICovXFxuXFxuLmxhcmdlLWJ1dHRvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWxlY3Rvci1idXR0b24tcGxhaW4ge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgfVxcbn1cXG5cXG4vKiBCdXR0b24gU2xpZGUgKi9cXG4vKiAuc2VsZWN0b3ItYnV0dG9uLXBsYWluOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogei1pbmRleDogLTE7ICovXFxuXFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1pbi1vdXQ7ICovXFxuLyogfSAgKi9cXG5cXG4vKiAuc2VsZWN0b3ItYnV0dG9uLXBsYWluOmhvdmVyOjpiZWZvcmUsXFxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpmb2N1czo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xcbn0gKi9cXG5cXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluIHtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIC5zZWxlY3Rvci1idXR0b24tcGxhaW46aG92ZXIsXFxuICAuc2VsZWN0b3ItYnV0dG9uLXBsYWluOmZvY3VzIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcblxcblxcblxcbi5zZWxlY3Rvci1idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTAlO1xcbiAgICB9XFxufVxcblxcbi5hcnJvdy1zaXplIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAwLjclO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuXFxuLmJlbGllZnMtcGFnZS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogN3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDdyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0LWxheW91dCB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblxcbi5iZWxpZWZzLWtleSB7XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBsYXN0IGJhc2VsaW5lO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW07XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xcbiAgICB9XFxufVxcblxcbi5iZWxpZWZzLXZhbHVlIHtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW07XFxufVxcblxcbi5hYm91dC1zZWxlY3RvciB7XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICB3aWR0aDogN3JlbTtcXG4gICAgfVxcbn1cXG5cXG4uc2VsZWN0b3ItY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDhyZW07XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICB9XFxufVxcblxcbi5zZWxlY3RvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG59XFxuXFxuLnNlbGVjdG9yLXRleHQge1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcXG4gICAgfVxcbn1cXG5cXG4uc2VsZWN0b3ItZGV0YWlscy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBjb250ZW50O1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAvKiBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xcbiAgICAgICAgZGlzcGxheTogY29udGVudCAhaW1wb3J0YW50O1xcbiAgICB9ICovXFxufVxcblxcblxcblxcbi5wb2ludC1kcm9wZG93bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYmVsaWVmLWRldGFpbHMge1xcbiAgICBtYXJnaW4tbGVmdDogY2FsYygycmVtICsgMTBweCk7XFxufVxcblxcbi8qIFVuZGVybGluZSBTbGlkZSAqL1xcbi8qIExFRlQgVE8gUklHSFQgKi9cXG4uc2xpZGluZy11bmRlcmxpbmUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNsaWRpbmctdW5kZXJsaW5lOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC42cyBlYXNlO1xcbn1cXG5cXG4uc2xpZGluZy11bmRlcmxpbmUuY2xpY2tlZDphZnRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluQ29sb3IpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGE1MTRmNDAyZjEwYjUyZjAzOTVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=