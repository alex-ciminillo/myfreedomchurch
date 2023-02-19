"use strict";
self["webpackHotUpdatebit_buddies"]("index",{

/***/ "./src/studyPage.js":
/*!**************************!*\
  !*** ./src/studyPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StudyPage)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar */ "./src/avatar.js");
/* harmony import */ var _images_mana_char_a_p1_char_a_p1_0bas_humn_v01_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/mana/char_a_p1/char_a_p1_0bas_humn_v01.png */ "./images/mana/char_a_p1/char_a_p1_0bas_humn_v01.png");
/* harmony import */ var _images_home_avatarStartingHouse2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../images/home/avatarStartingHouse2.png */ "./images/home/avatarStartingHouse2.png");






class StudyPage {
    constructor(canvas, ctx, dimensions) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;

        let avatarTempWidth = this.canvas.width * 0.49230769230769234
        this.avatarWidth = (avatarTempWidth % 64) >= 2.5 ? parseInt(avatarTempWidth / 64) * 64 + 64 : parseInt(avatarTempWidth / 64) * 64
        this.avatarHeight = (this.avatarWidth / 64) * 65;
        this.canvasAvatarRatio = (this.avatarWidth / 64)
        this.adventureGuy = new _avatar__WEBPACK_IMPORTED_MODULE_1__["default"](this.avatarWidth, this.avatarHeight, _images_mana_char_a_p1_char_a_p1_0bas_humn_v01_png__WEBPACK_IMPORTED_MODULE_2__, this.canvas.width / 2 - this.avatarWidth / 1.5, this.canvas.height / 2 - this.avatarHeight / 2, this.ctx, "sprite", 5, 3, 64, 65, 64, 65, 0, 'toeTapDown', 7, this.canvasAvatarRatio);
       
        

    }

    click(e) {

        if (e.type === "mouseup") {
            this.clickGX = this.gx;
            this.clickGY = this.gy;
            this.adventureGuy.moveWithAnimation(this.gx, this.gy)
        }

    }



    animate(e) {



        this.adventureGuy.animate()

        this.frame++
    }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f245bb0dfce602c2d9e3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNDg0ZWJiNWY5MzkzZjE4NzkwYTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNOO0FBQ2lEO0FBQ2pCOzs7QUFHOUM7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrQ0FBTSxzQ0FBc0MsK0VBQVM7QUFDckY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7OztVQzNDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpdF9idWRkaWVzLy4vc3JjL3N0dWR5UGFnZS5qcyIsIndlYnBhY2s6Ly9iaXRfYnVkZGllcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIlxuaW1wb3J0IEF2YXRhciBmcm9tICcuL2F2YXRhcidcbmltcG9ydCBBdmF0YXJJbWcgZnJvbSAnLi8uLi9pbWFnZXMvbWFuYS9jaGFyX2FfcDEvY2hhcl9hX3AxXzBiYXNfaHVtbl92MDEucG5nJ1xuaW1wb3J0IEhvdXNlIGZyb20gJy4vLi4vaW1hZ2VzL2hvbWUvYXZhdGFyU3RhcnRpbmdIb3VzZTIucG5nJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0dWR5UGFnZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuXG4gICAgICAgIGxldCBhdmF0YXJUZW1wV2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCAqIDAuNDkyMzA3NjkyMzA3NjkyMzRcbiAgICAgICAgdGhpcy5hdmF0YXJXaWR0aCA9IChhdmF0YXJUZW1wV2lkdGggJSA2NCkgPj0gMi41ID8gcGFyc2VJbnQoYXZhdGFyVGVtcFdpZHRoIC8gNjQpICogNjQgKyA2NCA6IHBhcnNlSW50KGF2YXRhclRlbXBXaWR0aCAvIDY0KSAqIDY0XG4gICAgICAgIHRoaXMuYXZhdGFySGVpZ2h0ID0gKHRoaXMuYXZhdGFyV2lkdGggLyA2NCkgKiA2NTtcbiAgICAgICAgdGhpcy5jYW52YXNBdmF0YXJSYXRpbyA9ICh0aGlzLmF2YXRhcldpZHRoIC8gNjQpXG4gICAgICAgIHRoaXMuYWR2ZW50dXJlR3V5ID0gbmV3IEF2YXRhcih0aGlzLmF2YXRhcldpZHRoLCB0aGlzLmF2YXRhckhlaWdodCwgQXZhdGFySW1nLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLmF2YXRhcldpZHRoIC8gMS41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gdGhpcy5hdmF0YXJIZWlnaHQgLyAyLCB0aGlzLmN0eCwgXCJzcHJpdGVcIiwgNSwgMywgNjQsIDY1LCA2NCwgNjUsIDAsICd0b2VUYXBEb3duJywgNywgdGhpcy5jYW52YXNBdmF0YXJSYXRpbyk7XG4gICAgICAgXG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgY2xpY2soZSkge1xuXG4gICAgICAgIGlmIChlLnR5cGUgPT09IFwibW91c2V1cFwiKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrR1ggPSB0aGlzLmd4O1xuICAgICAgICAgICAgdGhpcy5jbGlja0dZID0gdGhpcy5neTtcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlR3V5Lm1vdmVXaXRoQW5pbWF0aW9uKHRoaXMuZ3gsIHRoaXMuZ3kpXG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiAgICBhbmltYXRlKGUpIHtcblxuXG5cbiAgICAgICAgdGhpcy5hZHZlbnR1cmVHdXkuYW5pbWF0ZSgpXG5cbiAgICAgICAgdGhpcy5mcmFtZSsrXG4gICAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjI0NWJiMGRmY2U2MDJjMmQ5ZTNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=