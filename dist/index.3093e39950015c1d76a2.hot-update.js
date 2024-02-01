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

    position: relative;
    z-index: 1;
    overflow: hidden;

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
    left: -5%;
    width: 0;
    z-index: 2;
    overflow: hidden;
    transition: width 0.5s ease-in-out;
    transform: skew(30deg)
}

.selector-button-plain:hover::before,
.selector-button-plain:focus::before {
    width: 110%;
    transition: width 0.5s ease-in-out;
}

.selector-button-plain {
    position: relative;
    z-index: 1;
}

.selector-button-plain:hover,
.selector-button-plain:focus {
    color: white;
} */




/* .selector-button {
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
} */

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


/* .selector-button {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    width: 100%;

    box-sizing: border-box;
    padding: 1% 0% 1% 5%;


    background: linear-gradient(to left, salmon 50%, var(--mainColor)) right;
    background-position: left;
    background-size: 500%;
    transition: 1s ease;

    color: white;
    display: flex;
    border-radius: 10px;

    @media screen and (min-width: 769px) {
        font-size: 20px;
        border-radius: 15px;
        padding: 10%;
    }
} */

/* .selector-button::before {
    position: absolute;
    content: '';
    width: 100%;
    border: 1px solid black;
    background: linear-gradient(to right,transparent 50%, blue 0%);
    transform: skew(30deg);
    background-size: 200% 100%;
    background-position: -100% 0;
    animation: slideBackground 3s ease forwards;
} */

/* @keyframes slideBackground {
    to {
        background-position: 100% 0;
    }
} */

.selector-button {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
    padding: 1% 0% 1% 5%;
    background: linear-gradient(to right, var(--mainColor) 50%, transparent 50%);
    transform: skewX(45deg);
    background-size: 200% 100%;
    background-position: 100% 0;
    transition: background-position 1s ease;
    color: white;
    border-radius: 10px;
}

.change-color-to {
    background-position: 0 100%;
}
.change-color-from {
    background-position: 100% 0;
}

/* .selector-button {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
    padding: 1% 0% 1% 5%;
    position: relative;
    overflow: hidden;
    display: flex;
    border-radius: 10px;
    z-index: 1;
}

.selector-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: linear-gradient(to right, var(--mainColor) 0%, var(--mainColor) 50%, salmon 50%);
    background-size: 200% 100%;
    background-position: 100% 0;
    transform: skewX(-30deg);
    transition: background-position 1s ease;
}

.change-color-to {
    background-position: 0 100%;
}
.change-color-from {
    background-position: 100% 0;
} */


.button-container {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    width: auto;
    /* box-sizing: border-box; */
    padding: 1% 0% 1% 5%;

    display: flex;
    border-radius: 10px;

    position: relative;
    z-index: 1;
    overflow: hidden;
    @media screen and (min-width: 769px) {
        transition: color 0.5s ease;
        font-size: 20px;
        border-radius: 15px;
        padding: 10%;
    }
}
.button-text-white {
    color: white;
    transition: color 0.5s ease;
    @media screen and (max-width: 768px) {
        transition: color 0s ease;
    }
}

.moving-background {
    position: absolute;
    z-index: 2;
    width: 130%;
    height: 110%;

    top: -5%;
    left: -140%;

    background-color: var(--mainColor);
    transform: skewX(45deg);
    transition: transform 1s ease;

    @media screen and (max-width: 768px) {
        /* width: 100%;
        height: 100%;
        left: 0;
        top: 0; */
        transition: transform 0s ease;

    }
}

.button-text {
    position: relative;
    z-index: 3;
}

.move-right {
    /* @media screen and (min-width: 769px) { */
        transform: skewX(45deg) translateX(95%);
    /* } */
}

.move-left {
    /* @media screen and (min-width: 769px) { */
        transform: skewX(45deg) translateX(-95%);
    /* } */
}
`, "",{"version":3,"sources":["webpack://./stylesheets/beliefs.css"],"names":[],"mappings":"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","sourcesContent":[".border {\n    border: 1px solid black;\n}\n\n.border-right {\n    border-right: 1px solid black;\n}\n\n.border-bottom-2 {\n    border-bottom: 2px solid;\n}\n\n.small-text {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    line-height: normal;\n}\n\n/* .small-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    padding: 5%;\n\n    background-color: var(--mainColor);\n    color: white;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    border-radius: 100px;\n} */\n\n/* .small-button-plain {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    padding: 5%;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n\n    border-radius: 10px;\n} */\n\n.large-button {\n    color: var(--mainColor);\n    font-size: 30px;\n    padding: 10px 10px 0px 10px;\n    margin-bottom: 10px;\n    ;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    display: flex;\n    align-items: center;\n}\n\n.selector-button-plain {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n\n    display: flex;\n    border-radius: 10px;\n\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\n\n    @media screen and (min-width: 769px) {\n        font-size: 20px;\n        border-radius: 15px;\n        padding: 10%;\n    }\n}\n\n/* Button Slide */\n/* .selector-button-plain::before {\n    content: \"\";\n    background-color: var(--mainColor);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -5%;\n    width: 0;\n    z-index: 2;\n    overflow: hidden;\n    transition: width 0.5s ease-in-out;\n    transform: skew(30deg)\n}\n\n.selector-button-plain:hover::before,\n.selector-button-plain:focus::before {\n    width: 110%;\n    transition: width 0.5s ease-in-out;\n}\n\n.selector-button-plain {\n    position: relative;\n    z-index: 1;\n}\n\n.selector-button-plain:hover,\n.selector-button-plain:focus {\n    color: white;\n} */\n\n\n\n\n/* .selector-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n\n    background-color: var(--mainColor);\n\n    color: white;\n    display: flex;\n    border-radius: 10px;\n\n    @media screen and (min-width: 769px) {\n        font-size: 20px;\n        border-radius: 15px;\n        padding: 10%;\n    }\n} */\n\n.arrow-size {\n    font-size: 25px;\n    display: flex;\n    align-items: center;\n    margin-top: 0.7%;\n    margin-right: 0.5rem;\n    transform: rotate(-90deg);\n    transition: transform 0.6s ease;\n}\n\n.no-transform {\n    transform: none;\n}\n\n\n.beliefs-page-container {\n    padding-top: 7rem;\n    padding-bottom: 7rem;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n}\n\n.about-layout {\n    width: 90vw;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 1rem;\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n    }\n}\n\n.beliefs-key {\n    @media screen and (min-width: 769px) {\n        display: flex;\n        flex-direction: column;\n        align-items: last baseline;\n        align-items: flex-end;\n        padding: 1rem 2rem 1rem;\n        border-right: 1px solid gray;\n    }\n}\n\n.beliefs-value {\n    padding: 1rem 2rem 1rem;\n}\n\n.beliefs-point:hover {\n    font-weight: 500;\n}\n\n.about-selector {\n    @media screen and (min-width: 769px) {\n        width: 7rem;\n    }\n}\n\n.selector-container {\n    width: 8rem;\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n        width: auto;\n    }\n}\n\n.selector {\n    display: none;\n\n    @media screen and (max-width: 768px) {\n        border: 2px solid black;\n        display: flex;\n    }\n}\n\n.selector-text {\n    @media screen and (max-width: 769px) {\n        display: flex;\n        margin-left: 1%;\n    }\n}\n\n.selector-details-container {\n    display: content;\n\n    @media screen and (max-width: 768px) {\n        display: none;\n    }\n\n    /* @media screen and (min-width: 769px) {\n        display: content !important;\n    } */\n}\n\n.point-dropdown-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.belief-details {\n    margin-left: calc(2rem + 10px);\n}\n\n/* Underline Slide */\n/* LEFT TO RIGHT */\n.sliding-underline {\n    display: inline-block;\n    cursor: pointer;\n}\n\n.sliding-underline:after {\n    content: '';\n    display: block;\n    height: 2px;\n    width: 0;\n    background: transparent;\n    transition: width 0.6s ease, background-color 0.6s ease;\n}\n\n.sliding-underline.clicked:after {\n    width: 100%;\n    background: var(--mainColor);\n}\n\n\n/* .selector-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n\n\n    background: linear-gradient(to left, salmon 50%, var(--mainColor)) right;\n    background-position: left;\n    background-size: 500%;\n    transition: 1s ease;\n\n    color: white;\n    display: flex;\n    border-radius: 10px;\n\n    @media screen and (min-width: 769px) {\n        font-size: 20px;\n        border-radius: 15px;\n        padding: 10%;\n    }\n} */\n\n/* .selector-button::before {\n    position: absolute;\n    content: '';\n    width: 100%;\n    border: 1px solid black;\n    background: linear-gradient(to right,transparent 50%, blue 0%);\n    transform: skew(30deg);\n    background-size: 200% 100%;\n    background-position: -100% 0;\n    animation: slideBackground 3s ease forwards;\n} */\n\n/* @keyframes slideBackground {\n    to {\n        background-position: 100% 0;\n    }\n} */\n\n.selector-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n    background: linear-gradient(to right, var(--mainColor) 50%, transparent 50%);\n    transform: skewX(45deg);\n    background-size: 200% 100%;\n    background-position: 100% 0;\n    transition: background-position 1s ease;\n    color: white;\n    border-radius: 10px;\n}\n\n.change-color-to {\n    background-position: 0 100%;\n}\n.change-color-from {\n    background-position: 100% 0;\n}\n\n/* .selector-button {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 1% 0% 1% 5%;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    border-radius: 10px;\n    z-index: 1;\n}\n\n.selector-button::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    background: linear-gradient(to right, var(--mainColor) 0%, var(--mainColor) 50%, salmon 50%);\n    background-size: 200% 100%;\n    background-position: 100% 0;\n    transform: skewX(-30deg);\n    transition: background-position 1s ease;\n}\n\n.change-color-to {\n    background-position: 0 100%;\n}\n.change-color-from {\n    background-position: 100% 0;\n} */\n\n\n.button-container {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 18px;\n    width: auto;\n    /* box-sizing: border-box; */\n    padding: 1% 0% 1% 5%;\n\n    display: flex;\n    border-radius: 10px;\n\n    position: relative;\n    z-index: 1;\n    overflow: hidden;\n    @media screen and (min-width: 769px) {\n        transition: color 0.5s ease;\n        font-size: 20px;\n        border-radius: 15px;\n        padding: 10%;\n    }\n}\n.button-text-white {\n    color: white;\n    transition: color 0.5s ease;\n    @media screen and (max-width: 768px) {\n        transition: color 0s ease;\n    }\n}\n\n.moving-background {\n    position: absolute;\n    z-index: 2;\n    width: 130%;\n    height: 110%;\n\n    top: -5%;\n    left: -140%;\n\n    background-color: var(--mainColor);\n    transform: skewX(45deg);\n    transition: transform 1s ease;\n\n    @media screen and (max-width: 768px) {\n        /* width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0; */\n        transition: transform 0s ease;\n\n    }\n}\n\n.button-text {\n    position: relative;\n    z-index: 3;\n}\n\n.move-right {\n    /* @media screen and (min-width: 769px) { */\n        transform: skewX(45deg) translateX(95%);\n    /* } */\n}\n\n.move-left {\n    /* @media screen and (min-width: 769px) { */\n        transform: skewX(45deg) translateX(-95%);\n    /* } */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c457b754746dedc8dee2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMzA5M2UzOTk1MDAxNWMxZDc2YTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7Ozs7QUFLRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7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Ryx3QkFBd0IseUJBQXlCLGlCQUFpQixrQkFBa0IsbUJBQW1CLGlCQUFpQixrQkFBa0IsMkNBQTJDLDhCQUE4QixvQ0FBb0MsOENBQThDLHlCQUF5Qix1QkFBdUIsa0JBQWtCLGtCQUFrQiwwQ0FBMEMsU0FBUyxHQUFHLGtCQUFrQix5QkFBeUIsaUJBQWlCLEdBQUcsaUJBQWlCLGdEQUFnRCxvREFBb0QsV0FBVyxLQUFLLGdCQUFnQixnREFBZ0QscURBQXFELFdBQVcsS0FBSyxxQkFBcUI7QUFDMzJYO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQzNidkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmVlZG9tX2NodXJjaC8uL3N0eWxlc2hlZXRzL2JlbGllZnMuY3NzIiwid2VicGFjazovL2ZyZWVkb21fY2h1cmNoL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmJvcmRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib3JkZXItcmlnaHQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYm9yZGVyLWJvdHRvbS0yIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG59XG5cbi5zbWFsbC10ZXh0IHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8qIC5zbWFsbC1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwYWRkaW5nOiA1JTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufSAqL1xuXG4vKiAuc21hbGwtYnV0dG9uLXBsYWluIHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgcGFkZGluZzogNSU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0gKi9cblxuLmxhcmdlLWJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluIHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxJSAwJSAxJSA1JTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICB9XG59XG5cbi8qIEJ1dHRvbiBTbGlkZSAqL1xuLyogLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLTUlO1xuICAgIHdpZHRoOiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybTogc2tldygzMGRlZylcbn1cblxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpob3Zlcjo6YmVmb3JlLFxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpmb2N1czo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTEwJTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpob3Zlcixcbi5zZWxlY3Rvci1idXR0b24tcGxhaW46Zm9jdXMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0gKi9cblxuXG5cblxuLyogLnNlbGVjdG9yLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xuXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMTAlO1xuICAgIH1cbn0gKi9cblxuLmFycm93LXNpemUge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMC43JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XG59XG5cbi5uby10cmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuXG4uYmVsaWVmcy1wYWdlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDdyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDdyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFib3V0LWxheW91dCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59XG5cbi5iZWxpZWZzLWtleSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGxhc3QgYmFzZWxpbmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW07XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gICAgfVxufVxuXG4uYmVsaWVmcy12YWx1ZSB7XG4gICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW07XG59XG5cbi5iZWxpZWZzLXBvaW50OmhvdmVyIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYWJvdXQtc2VsZWN0b3Ige1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIHdpZHRoOiA3cmVtO1xuICAgIH1cbn1cblxuLnNlbGVjdG9yLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDhyZW07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG59XG5cbi5zZWxlY3RvciB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbn1cblxuLnNlbGVjdG9yLXRleHQge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICB9XG59XG5cbi5zZWxlY3Rvci1kZXRhaWxzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogY29udGVudDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgZGlzcGxheTogY29udGVudCAhaW1wb3J0YW50O1xuICAgIH0gKi9cbn1cblxuLnBvaW50LWRyb3Bkb3duLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYmVsaWVmLWRldGFpbHMge1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDJyZW0gKyAxMHB4KTtcbn1cblxuLyogVW5kZXJsaW5lIFNsaWRlICovXG4vKiBMRUZUIFRPIFJJR0hUICovXG4uc2xpZGluZy11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbGlkaW5nLXVuZGVybGluZTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC42cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbn1cblxuLnNsaWRpbmctdW5kZXJsaW5lLmNsaWNrZWQ6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW5Db2xvcik7XG59XG5cblxuLyogLnNlbGVjdG9yLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XG5cblxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBzYWxtb24gNTAlLCB2YXIoLS1tYWluQ29sb3IpKSByaWdodDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNTAwJTtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xuXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMTAlO1xuICAgIH1cbn0gKi9cblxuLyogLnNlbGVjdG9yLWJ1dHRvbjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHRyYW5zcGFyZW50IDUwJSwgYmx1ZSAwJSk7XG4gICAgdHJhbnNmb3JtOiBza2V3KDMwZGVnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwJSAwO1xuICAgIGFuaW1hdGlvbjogc2xpZGVCYWNrZ3JvdW5kIDNzIGVhc2UgZm9yd2FyZHM7XG59ICovXG5cbi8qIEBrZXlmcmFtZXMgc2xpZGVCYWNrZ3JvdW5kIHtcbiAgICB0byB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICB9XG59ICovXG5cbi5zZWxlY3Rvci1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxJSAwJSAxJSA1JTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLW1haW5Db2xvcikgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICAgIHRyYW5zZm9ybTogc2tld1goNDVkZWcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDFzIGVhc2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jaGFuZ2UtY29sb3ItdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcbn1cbi5jaGFuZ2UtY29sb3ItZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xufVxuXG4vKiAuc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5zZWxlY3Rvci1idXR0b246OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tbWFpbkNvbG9yKSAwJSwgdmFyKC0tbWFpbkNvbG9yKSA1MCUsIHNhbG1vbiA1MCUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zMGRlZyk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAxcyBlYXNlO1xufVxuXG4uY2hhbmdlLWNvbG9yLXRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XG59XG4uY2hhbmdlLWNvbG9yLWZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbn0gKi9cblxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xuICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZzogMTAlO1xuICAgIH1cbn1cbi5idXR0b24tdGV4dC13aGl0ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwcyBlYXNlO1xuICAgIH1cbn1cblxuLm1vdmluZy1iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICB3aWR0aDogMTMwJTtcbiAgICBoZWlnaHQ6IDExMCU7XG5cbiAgICB0b3A6IC01JTtcbiAgICBsZWZ0OiAtMTQwJTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gICAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAvKiB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7ICovXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcyBlYXNlO1xuXG4gICAgfVxufVxuXG4uYnV0dG9uLXRleHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAzO1xufVxuXG4ubW92ZS1yaWdodCB7XG4gICAgLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHsgKi9cbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZykgdHJhbnNsYXRlWCg5NSUpO1xuICAgIC8qIH0gKi9cbn1cblxuLm1vdmUtbGVmdCB7XG4gICAgLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHsgKi9cbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZykgdHJhbnNsYXRlWCgtOTUlKTtcbiAgICAvKiB9ICovXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlc2hlZXRzL2JlbGllZnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUpBQW1KO0lBQ25KLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7O0FBRUg7Ozs7Ozs7Ozs7Ozs7R0FhRzs7QUFFSDtJQUNJLHVCQUF1QjtJQUN2Qixl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Q0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZOztJQUVaLFFBQVE7SUFDUixXQUFXOztJQUVYLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsNkJBQTZCOztJQUU3QjtRQUNJOzs7aUJBR1M7UUFDVCw2QkFBNkI7O0lBRWpDO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkNBQTJDO1FBQ3ZDLHVDQUF1QztJQUMzQyxNQUFNO0FBQ1Y7O0FBRUE7SUFDSSwyQ0FBMkM7UUFDdkMsd0NBQXdDO0lBQzVDLE1BQU07QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9yZGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib3JkZXItcmlnaHQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvcmRlci1ib3R0b20tMiB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG59XFxuXFxuLnNtYWxsLXRleHQge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyogLnNtYWxsLWJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgcGFkZGluZzogNSU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufSAqL1xcblxcbi8qIC5zbWFsbC1idXR0b24tcGxhaW4ge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIHBhZGRpbmc6IDUlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn0gKi9cXG5cXG4ubGFyZ2UtYnV0dG9uIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICA7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMCU7XFxuICAgIH1cXG59XFxuXFxuLyogQnV0dG9uIFNsaWRlICovXFxuLyogLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IC01JTtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zZm9ybTogc2tldygzMGRlZylcXG59XFxuXFxuLnNlbGVjdG9yLWJ1dHRvbi1wbGFpbjpob3Zlcjo6YmVmb3JlLFxcbi5zZWxlY3Rvci1idXR0b24tcGxhaW46Zm9jdXM6OmJlZm9yZSB7XFxuICAgIHdpZHRoOiAxMTAlO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2VsZWN0b3ItYnV0dG9uLXBsYWluOmhvdmVyLFxcbi5zZWxlY3Rvci1idXR0b24tcGxhaW46Zm9jdXMge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufSAqL1xcblxcblxcblxcblxcbi8qIC5zZWxlY3Rvci1idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcblxcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTAlO1xcbiAgICB9XFxufSAqL1xcblxcbi5hcnJvdy1zaXplIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAwLjclO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcXG59XFxuXFxuLm5vLXRyYW5zZm9ybSB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuXFxuLmJlbGllZnMtcGFnZS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogN3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDdyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0LWxheW91dCB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblxcbi5iZWxpZWZzLWtleSB7XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBsYXN0IGJhc2VsaW5lO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW07XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xcbiAgICB9XFxufVxcblxcbi5iZWxpZWZzLXZhbHVlIHtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtIDFyZW07XFxufVxcblxcbi5iZWxpZWZzLXBvaW50OmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmFib3V0LXNlbGVjdG9yIHtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcXG4gICAgICAgIHdpZHRoOiA3cmVtO1xcbiAgICB9XFxufVxcblxcbi5zZWxlY3Rvci1jb250YWluZXIge1xcbiAgICB3aWR0aDogOHJlbTtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG59XFxuXFxuLnNlbGVjdG9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbn1cXG5cXG4uc2VsZWN0b3ItdGV4dCB7XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xcbiAgICB9XFxufVxcblxcbi5zZWxlY3Rvci1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGNvbnRlbnQ7XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICBkaXNwbGF5OiBjb250ZW50ICFpbXBvcnRhbnQ7XFxuICAgIH0gKi9cXG59XFxuXFxuLnBvaW50LWRyb3Bkb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5iZWxpZWYtZGV0YWlscyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDJyZW0gKyAxMHB4KTtcXG59XFxuXFxuLyogVW5kZXJsaW5lIFNsaWRlICovXFxuLyogTEVGVCBUTyBSSUdIVCAqL1xcbi5zbGlkaW5nLXVuZGVybGluZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2xpZGluZy11bmRlcmxpbmU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNnMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XFxufVxcblxcbi5zbGlkaW5nLXVuZGVybGluZS5jbGlja2VkOmFmdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW5Db2xvcik7XFxufVxcblxcblxcbi8qIC5zZWxlY3Rvci1idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xcblxcblxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgc2FsbW9uIDUwJSwgdmFyKC0tbWFpbkNvbG9yKSkgcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAwJTtcXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgfVxcbn0gKi9cXG5cXG4vKiAuc2VsZWN0b3ItYnV0dG9uOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCx0cmFuc3BhcmVudCA1MCUsIGJsdWUgMCUpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXcoMzBkZWcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMCUgMDtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUJhY2tncm91bmQgM3MgZWFzZSBmb3J3YXJkcztcXG59ICovXFxuXFxuLyogQGtleWZyYW1lcyBzbGlkZUJhY2tncm91bmQge1xcbiAgICB0byB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XFxuICAgIH1cXG59ICovXFxuXFxuLnNlbGVjdG9yLWJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMSUgMCUgMSUgNSU7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tbWFpbkNvbG9yKSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goNDVkZWcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDFzIGVhc2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNoYW5nZS1jb2xvci10byB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTAwJTtcXG59XFxuLmNoYW5nZS1jb2xvci1mcm9tIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xcbn1cXG5cXG4vKiAuc2VsZWN0b3ItYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxJSAwJSAxJSA1JTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2VsZWN0b3ItYnV0dG9uOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLW1haW5Db2xvcikgMCUsIHZhcigtLW1haW5Db2xvcikgNTAlLCBzYWxtb24gNTAlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMzBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDFzIGVhc2U7XFxufVxcblxcbi5jaGFuZ2UtY29sb3ItdG8ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XFxufVxcbi5jaGFuZ2UtY29sb3ItZnJvbSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcXG59ICovXFxuXFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXFxuICAgIHBhZGRpbmc6IDElIDAlIDElIDUlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTAlO1xcbiAgICB9XFxufVxcbi5idXR0b24tdGV4dC13aGl0ZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cyBlYXNlO1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMHMgZWFzZTtcXG4gICAgfVxcbn1cXG5cXG4ubW92aW5nLWJhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHdpZHRoOiAxMzAlO1xcbiAgICBoZWlnaHQ6IDExMCU7XFxuXFxuICAgIHRvcDogLTUlO1xcbiAgICBsZWZ0OiAtMTQwJTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCg0NWRlZyk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwOyAqL1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIGVhc2U7XFxuXFxuICAgIH1cXG59XFxuXFxuLmJ1dHRvbi10ZXh0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ubW92ZS1yaWdodCB7XFxuICAgIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7ICovXFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKDQ1ZGVnKSB0cmFuc2xhdGVYKDk1JSk7XFxuICAgIC8qIH0gKi9cXG59XFxuXFxuLm1vdmUtbGVmdCB7XFxuICAgIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7ICovXFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKDQ1ZGVnKSB0cmFuc2xhdGVYKC05NSUpO1xcbiAgICAvKiB9ICovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNDU3Yjc1NDc0NmRlZGM4ZGVlMlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==