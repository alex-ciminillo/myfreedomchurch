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
       
        this.card1Width = 95 * this.canvasAvatarRatio;
        this.card1WidthOriginal = this.card1Width

        if (this.canvas.width > this.canvas.height * .6) {
            // square cards for ipads
            this.card1Height = this.card1Width;
        } else {
            this.card1Height = this.card1Width * 1.3;
        }
        

        this.card1 = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](this.card1Width, this.card1Height, "blue", this.canvas.width / 2 - this.card1Width / 2, this.canvas.height / 3, this.ctx, "flashcardcolor")
        
        this.card2Height = this.card1Height * .9
        this.card2Width = this.card1Width * .9
        this.card2 = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](this.card2Width, this.card2Height, "red", this.canvas.width / 2 - this.card2Width / 2, this.card1.y + this.card1Height - this.card2Height + (2 * this.canvasAvatarRatio), this.ctx, "flashcardcolor")

        this.card3Height = this.card2Height * .9
        this.card3Width = this.card2Width * .9
        this.card3 = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](this.card3Width, this.card3Height, "green", this.canvas.width / 2 - this.card3Width / 2, this.card2.y + this.card2Height - this.card3Height + (2 * this.canvasAvatarRatio), this.ctx, "flashcardcolor")


        this.setUpFlashCards()

    }

    setUpFlashCards() {

        let flashcardArea = document.createElement('div');
        flashcardArea.style.width = "100%"
        flashcardArea.style.height = "100%"
        flashcardArea.style.display = "flex"
        flashcardArea.style.justifyContent = "center"
        flashcardArea.style.alignItems = "flex-end"
        flashcardArea.style.zIndex = 10000;
        flashcardArea.style.position = "absolute";
        flashcardArea.style.top = 0;
        flashcardArea.style.left = 0;

        let flashcardAreaBottom = document.createElement('div');
        flashcardAreaBottom.style.width = "100%"
        flashcardAreaBottom.style.height = "60%"
        flashcardAreaBottom.style.display = "flex"
        flashcardAreaBottom.style.justifyContent = "center"
        flashcardAreaBottom.style.alignItems = "flex-start"

        this.card1div = document.createElement('div');
        // elemDiv.style.cssText = 'position:relative;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
        
        this.card1div.style.width = `${this.canvas.width * .75}px`;
        if (this.canvas.width > this.canvas.height * .6) {
            // square cards for ipads
            this.card1div.style.height = `${this.card1div.style.width.slice(0,-2)}px`;
        } else {
            this.card1div.style.height = `${this.card1div.style.width.slice(0,-2) * 1.3}px`;
        }
        this.card1div.style.backgroundColor = "blue";
        this.card1div.style.position = "absolute";
        this.card1div.style.borderRadius = "10px";
        this.card1div.style.zIndex = 10003

        this.card2div = document.createElement('div');
        this.card2div.style.height = `${this.card1div.style.height.slice(0, -2) * .9}px`;
        this.card2div.style.width = `${this.card1div.style.width.slice(0, -2) * .9}px`;
        this.card2div.style.backgroundColor = "green";
        this.card2div.style.marginTop = `${this.card1div.style.height.slice(0, -2) - this.card2div.style.height.slice(0, -2) + 7}px`
        this.card2div.style.borderRadius = "10px";
        this.card2div.style.position = "absolute";
        this.card2div.style.zIndex = 10002

        this.card3div = document.createElement('div');
        this.card3div.style.height = `${this.card2div.style.height.slice(0, -2) * .9}px`;
        this.card3div.style.width = `${this.card2div.style.width.slice(0, -2) * .9}px`;
        this.card3div.style.backgroundColor = "yellow";
        this.card3div.style.marginTop = `${(this.card1div.style.height.slice(0, -2) - this.card2div.style.height.slice(0, -2)) + 7 + (this.card2div.style.height.slice(0, -2) - this.card3div.style.height.slice(0, -2)) + 7}px`
        this.card3div.style.borderRadius = "10px";
        this.card3div.style.position = "absolute";
        this.card3div.style.zIndex = 10001

        this.card3 = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](this.card3Width, this.card3Height, "green", this.canvas.width / 2 - this.card3Width / 2, this.card2.y + this.card2Height - this.card3Height + (2 * this.canvasAvatarRatio), this.ctx, "flashcardcolor")



        flashcardAreaBottom.appendChild(this.card1div)
        flashcardAreaBottom.appendChild(this.card2div)
        flashcardAreaBottom.appendChild(this.card3div)
        flashcardArea.appendChild(flashcardAreaBottom)
        document.body.appendChild(flashcardArea);
        
    }

    click(e) {

        if (e.type === "mouseup") {
            this.clickGX = this.gx;
            this.clickGY = this.gy;
            this.adventureGuy.moveWithAnimation(this.gx, this.gy)
            if (this.card1.clicked(this.gx, this.gy)) this.flipCard()
        }



    }


    flipCard() {
        const makeCardSmall = () => {
            this.card1.width -= 8
            this.card1.x += 4
        }
        const makeCardBig = () => {
            this.card1.width += 8
            this.card1.x -= 4
        }
        this.card1Side = "front"
        let that = this
        let newColor;
        if (this.card1.color === "blue") {
            newColor = "yellow"
        } else {
            newColor = "blue"
        }
        setTimeout(function cardTimer() {
            if (that.card1.width > 1 && that.card1Side === "front") {
                makeCardSmall()
                setTimeout(()=>{
                    cardTimer()
                }, 4)
            } else if (that.card1.width < that.card1WidthOriginal) {
                makeCardBig()
                that.card1Side = "back"
                that.card1.color = newColor;
                setTimeout(()=>{
                    cardTimer()
                }, 4)
            }
        }, 4)
    }

    animate(e) {



        this.adventureGuy.animate()
        // this.card3.update()
        // this.card2.update()
        // this.card1.update()
        

        this.frame++
    }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("200809285fda14e8d3d6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjgxM2ZkM2RiYmJjZTM3N2NiMjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNOO0FBQ2lEO0FBQ2pCOzs7QUFHOUM7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrQ0FBTSxzQ0FBc0MsK0VBQVM7QUFDckY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLGtEQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrREFBUzs7QUFFbEM7QUFDQTtBQUNBLHlCQUF5QixrREFBUzs7O0FBR2xDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRCxXQUFXLFlBQVksWUFBWSxZQUFZLGdCQUFnQjtBQUNySDtBQUNBLHVDQUF1Qyx3QkFBd0I7QUFDL0Q7QUFDQTtBQUNBLDRDQUE0QyxzQ0FBc0M7QUFDbEYsVUFBVTtBQUNWLDRDQUE0Qyw0Q0FBNEM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3Qyw2Q0FBNkM7QUFDckYsdUNBQXVDLDRDQUE0QztBQUNuRjtBQUNBLDJDQUEyQyxzRkFBc0Y7QUFDakk7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLDZDQUE2QztBQUNyRix1Q0FBdUMsNENBQTRDO0FBQ25GO0FBQ0EsMkNBQTJDLGtMQUFrTDtBQUM3TjtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLGtEQUFTOzs7O0FBSWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7OztVQzFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpdF9idWRkaWVzLy4vc3JjL3N0dWR5UGFnZS5qcyIsIndlYnBhY2s6Ly9iaXRfYnVkZGllcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIlxuaW1wb3J0IEF2YXRhciBmcm9tICcuL2F2YXRhcidcbmltcG9ydCBBdmF0YXJJbWcgZnJvbSAnLi8uLi9pbWFnZXMvbWFuYS9jaGFyX2FfcDEvY2hhcl9hX3AxXzBiYXNfaHVtbl92MDEucG5nJ1xuaW1wb3J0IEhvdXNlIGZyb20gJy4vLi4vaW1hZ2VzL2hvbWUvYXZhdGFyU3RhcnRpbmdIb3VzZTIucG5nJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0dWR5UGFnZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuXG4gICAgICAgIGxldCBhdmF0YXJUZW1wV2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aCAqIDAuNDkyMzA3NjkyMzA3NjkyMzRcbiAgICAgICAgdGhpcy5hdmF0YXJXaWR0aCA9IChhdmF0YXJUZW1wV2lkdGggJSA2NCkgPj0gMi41ID8gcGFyc2VJbnQoYXZhdGFyVGVtcFdpZHRoIC8gNjQpICogNjQgKyA2NCA6IHBhcnNlSW50KGF2YXRhclRlbXBXaWR0aCAvIDY0KSAqIDY0XG4gICAgICAgIHRoaXMuYXZhdGFySGVpZ2h0ID0gKHRoaXMuYXZhdGFyV2lkdGggLyA2NCkgKiA2NTtcbiAgICAgICAgdGhpcy5jYW52YXNBdmF0YXJSYXRpbyA9ICh0aGlzLmF2YXRhcldpZHRoIC8gNjQpXG4gICAgICAgIHRoaXMuYWR2ZW50dXJlR3V5ID0gbmV3IEF2YXRhcih0aGlzLmF2YXRhcldpZHRoLCB0aGlzLmF2YXRhckhlaWdodCwgQXZhdGFySW1nLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLmF2YXRhcldpZHRoIC8gMS41LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gdGhpcy5hdmF0YXJIZWlnaHQgLyAyLCB0aGlzLmN0eCwgXCJzcHJpdGVcIiwgNSwgMywgNjQsIDY1LCA2NCwgNjUsIDAsICd0b2VUYXBEb3duJywgNywgdGhpcy5jYW52YXNBdmF0YXJSYXRpbyk7XG4gICAgICAgXG4gICAgICAgIHRoaXMuY2FyZDFXaWR0aCA9IDk1ICogdGhpcy5jYW52YXNBdmF0YXJSYXRpbztcbiAgICAgICAgdGhpcy5jYXJkMVdpZHRoT3JpZ2luYWwgPSB0aGlzLmNhcmQxV2lkdGhcblxuICAgICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggPiB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuNikge1xuICAgICAgICAgICAgLy8gc3F1YXJlIGNhcmRzIGZvciBpcGFkc1xuICAgICAgICAgICAgdGhpcy5jYXJkMUhlaWdodCA9IHRoaXMuY2FyZDFXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZDFIZWlnaHQgPSB0aGlzLmNhcmQxV2lkdGggKiAxLjM7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5jYXJkMSA9IG5ldyBDb21wb25lbnQodGhpcy5jYXJkMVdpZHRoLCB0aGlzLmNhcmQxSGVpZ2h0LCBcImJsdWVcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyIC0gdGhpcy5jYXJkMVdpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMywgdGhpcy5jdHgsIFwiZmxhc2hjYXJkY29sb3JcIilcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FyZDJIZWlnaHQgPSB0aGlzLmNhcmQxSGVpZ2h0ICogLjlcbiAgICAgICAgdGhpcy5jYXJkMldpZHRoID0gdGhpcy5jYXJkMVdpZHRoICogLjlcbiAgICAgICAgdGhpcy5jYXJkMiA9IG5ldyBDb21wb25lbnQodGhpcy5jYXJkMldpZHRoLCB0aGlzLmNhcmQySGVpZ2h0LCBcInJlZFwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLmNhcmQyV2lkdGggLyAyLCB0aGlzLmNhcmQxLnkgKyB0aGlzLmNhcmQxSGVpZ2h0IC0gdGhpcy5jYXJkMkhlaWdodCArICgyICogdGhpcy5jYW52YXNBdmF0YXJSYXRpbyksIHRoaXMuY3R4LCBcImZsYXNoY2FyZGNvbG9yXCIpXG5cbiAgICAgICAgdGhpcy5jYXJkM0hlaWdodCA9IHRoaXMuY2FyZDJIZWlnaHQgKiAuOVxuICAgICAgICB0aGlzLmNhcmQzV2lkdGggPSB0aGlzLmNhcmQyV2lkdGggKiAuOVxuICAgICAgICB0aGlzLmNhcmQzID0gbmV3IENvbXBvbmVudCh0aGlzLmNhcmQzV2lkdGgsIHRoaXMuY2FyZDNIZWlnaHQsIFwiZ3JlZW5cIiwgdGhpcy5jYW52YXMud2lkdGggLyAyIC0gdGhpcy5jYXJkM1dpZHRoIC8gMiwgdGhpcy5jYXJkMi55ICsgdGhpcy5jYXJkMkhlaWdodCAtIHRoaXMuY2FyZDNIZWlnaHQgKyAoMiAqIHRoaXMuY2FudmFzQXZhdGFyUmF0aW8pLCB0aGlzLmN0eCwgXCJmbGFzaGNhcmRjb2xvclwiKVxuXG5cbiAgICAgICAgdGhpcy5zZXRVcEZsYXNoQ2FyZHMoKVxuXG4gICAgfVxuXG4gICAgc2V0VXBGbGFzaENhcmRzKCkge1xuXG4gICAgICAgIGxldCBmbGFzaGNhcmRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZsYXNoY2FyZEFyZWEuc3R5bGUud2lkdGggPSBcIjEwMCVcIlxuICAgICAgICBmbGFzaGNhcmRBcmVhLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiXG4gICAgICAgIGZsYXNoY2FyZEFyZWEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIGZsYXNoY2FyZEFyZWEuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiXG4gICAgICAgIGZsYXNoY2FyZEFyZWEuc3R5bGUuYWxpZ25JdGVtcyA9IFwiZmxleC1lbmRcIlxuICAgICAgICBmbGFzaGNhcmRBcmVhLnN0eWxlLnpJbmRleCA9IDEwMDAwO1xuICAgICAgICBmbGFzaGNhcmRBcmVhLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICBmbGFzaGNhcmRBcmVhLnN0eWxlLnRvcCA9IDA7XG4gICAgICAgIGZsYXNoY2FyZEFyZWEuc3R5bGUubGVmdCA9IDA7XG5cbiAgICAgICAgbGV0IGZsYXNoY2FyZEFyZWFCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmxhc2hjYXJkQXJlYUJvdHRvbS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiXG4gICAgICAgIGZsYXNoY2FyZEFyZWFCb3R0b20uc3R5bGUuaGVpZ2h0ID0gXCI2MCVcIlxuICAgICAgICBmbGFzaGNhcmRBcmVhQm90dG9tLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICBmbGFzaGNhcmRBcmVhQm90dG9tLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIlxuICAgICAgICBmbGFzaGNhcmRBcmVhQm90dG9tLnN0eWxlLmFsaWduSXRlbXMgPSBcImZsZXgtc3RhcnRcIlxuXG4gICAgICAgIHRoaXMuY2FyZDFkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gZWxlbURpdi5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3BhY2l0eTowLjM7ei1pbmRleDoxMDA7YmFja2dyb3VuZDojMDAwOyc7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhcmQxZGl2LnN0eWxlLndpZHRoID0gYCR7dGhpcy5jYW52YXMud2lkdGggKiAuNzV9cHhgO1xuICAgICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggPiB0aGlzLmNhbnZhcy5oZWlnaHQgKiAuNikge1xuICAgICAgICAgICAgLy8gc3F1YXJlIGNhcmRzIGZvciBpcGFkc1xuICAgICAgICAgICAgdGhpcy5jYXJkMWRpdi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmNhcmQxZGl2LnN0eWxlLndpZHRoLnNsaWNlKDAsLTIpfXB4YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZDFkaXYuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5jYXJkMWRpdi5zdHlsZS53aWR0aC5zbGljZSgwLC0yKSAqIDEuM31weGA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXJkMWRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcbiAgICAgICAgdGhpcy5jYXJkMWRpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5jYXJkMWRpdi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICAgICAgdGhpcy5jYXJkMWRpdi5zdHlsZS56SW5kZXggPSAxMDAwM1xuXG4gICAgICAgIHRoaXMuY2FyZDJkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5jYXJkMmRpdi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmNhcmQxZGl2LnN0eWxlLmhlaWdodC5zbGljZSgwLCAtMikgKiAuOX1weGA7XG4gICAgICAgIHRoaXMuY2FyZDJkaXYuc3R5bGUud2lkdGggPSBgJHt0aGlzLmNhcmQxZGl2LnN0eWxlLndpZHRoLnNsaWNlKDAsIC0yKSAqIC45fXB4YDtcbiAgICAgICAgdGhpcy5jYXJkMmRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIHRoaXMuY2FyZDJkaXYuc3R5bGUubWFyZ2luVG9wID0gYCR7dGhpcy5jYXJkMWRpdi5zdHlsZS5oZWlnaHQuc2xpY2UoMCwgLTIpIC0gdGhpcy5jYXJkMmRpdi5zdHlsZS5oZWlnaHQuc2xpY2UoMCwgLTIpICsgN31weGBcbiAgICAgICAgdGhpcy5jYXJkMmRpdi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICAgICAgdGhpcy5jYXJkMmRpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5jYXJkMmRpdi5zdHlsZS56SW5kZXggPSAxMDAwMlxuXG4gICAgICAgIHRoaXMuY2FyZDNkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5jYXJkM2Rpdi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmNhcmQyZGl2LnN0eWxlLmhlaWdodC5zbGljZSgwLCAtMikgKiAuOX1weGA7XG4gICAgICAgIHRoaXMuY2FyZDNkaXYuc3R5bGUud2lkdGggPSBgJHt0aGlzLmNhcmQyZGl2LnN0eWxlLndpZHRoLnNsaWNlKDAsIC0yKSAqIC45fXB4YDtcbiAgICAgICAgdGhpcy5jYXJkM2Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuICAgICAgICB0aGlzLmNhcmQzZGl2LnN0eWxlLm1hcmdpblRvcCA9IGAkeyh0aGlzLmNhcmQxZGl2LnN0eWxlLmhlaWdodC5zbGljZSgwLCAtMikgLSB0aGlzLmNhcmQyZGl2LnN0eWxlLmhlaWdodC5zbGljZSgwLCAtMikpICsgNyArICh0aGlzLmNhcmQyZGl2LnN0eWxlLmhlaWdodC5zbGljZSgwLCAtMikgLSB0aGlzLmNhcmQzZGl2LnN0eWxlLmhlaWdodC5zbGljZSgwLCAtMikpICsgN31weGBcbiAgICAgICAgdGhpcy5jYXJkM2Rpdi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICAgICAgdGhpcy5jYXJkM2Rpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5jYXJkM2Rpdi5zdHlsZS56SW5kZXggPSAxMDAwMVxuXG4gICAgICAgIHRoaXMuY2FyZDMgPSBuZXcgQ29tcG9uZW50KHRoaXMuY2FyZDNXaWR0aCwgdGhpcy5jYXJkM0hlaWdodCwgXCJncmVlblwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLmNhcmQzV2lkdGggLyAyLCB0aGlzLmNhcmQyLnkgKyB0aGlzLmNhcmQySGVpZ2h0IC0gdGhpcy5jYXJkM0hlaWdodCArICgyICogdGhpcy5jYW52YXNBdmF0YXJSYXRpbyksIHRoaXMuY3R4LCBcImZsYXNoY2FyZGNvbG9yXCIpXG5cblxuXG4gICAgICAgIGZsYXNoY2FyZEFyZWFCb3R0b20uYXBwZW5kQ2hpbGQodGhpcy5jYXJkMWRpdilcbiAgICAgICAgZmxhc2hjYXJkQXJlYUJvdHRvbS5hcHBlbmRDaGlsZCh0aGlzLmNhcmQyZGl2KVxuICAgICAgICBmbGFzaGNhcmRBcmVhQm90dG9tLmFwcGVuZENoaWxkKHRoaXMuY2FyZDNkaXYpXG4gICAgICAgIGZsYXNoY2FyZEFyZWEuYXBwZW5kQ2hpbGQoZmxhc2hjYXJkQXJlYUJvdHRvbSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmbGFzaGNhcmRBcmVhKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY2xpY2soZSkge1xuXG4gICAgICAgIGlmIChlLnR5cGUgPT09IFwibW91c2V1cFwiKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrR1ggPSB0aGlzLmd4O1xuICAgICAgICAgICAgdGhpcy5jbGlja0dZID0gdGhpcy5neTtcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlR3V5Lm1vdmVXaXRoQW5pbWF0aW9uKHRoaXMuZ3gsIHRoaXMuZ3kpXG4gICAgICAgICAgICBpZiAodGhpcy5jYXJkMS5jbGlja2VkKHRoaXMuZ3gsIHRoaXMuZ3kpKSB0aGlzLmZsaXBDYXJkKClcbiAgICAgICAgfVxuXG5cblxuICAgIH1cblxuXG4gICAgZmxpcENhcmQoKSB7XG4gICAgICAgIGNvbnN0IG1ha2VDYXJkU21hbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhcmQxLndpZHRoIC09IDhcbiAgICAgICAgICAgIHRoaXMuY2FyZDEueCArPSA0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWFrZUNhcmRCaWcgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhcmQxLndpZHRoICs9IDhcbiAgICAgICAgICAgIHRoaXMuY2FyZDEueCAtPSA0XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXJkMVNpZGUgPSBcImZyb250XCJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgICAgIGxldCBuZXdDb2xvcjtcbiAgICAgICAgaWYgKHRoaXMuY2FyZDEuY29sb3IgPT09IFwiYmx1ZVwiKSB7XG4gICAgICAgICAgICBuZXdDb2xvciA9IFwieWVsbG93XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0NvbG9yID0gXCJibHVlXCJcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIGNhcmRUaW1lcigpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LmNhcmQxLndpZHRoID4gMSAmJiB0aGF0LmNhcmQxU2lkZSA9PT0gXCJmcm9udFwiKSB7XG4gICAgICAgICAgICAgICAgbWFrZUNhcmRTbWFsbCgpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjYXJkVGltZXIoKVxuICAgICAgICAgICAgICAgIH0sIDQpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoYXQuY2FyZDEud2lkdGggPCB0aGF0LmNhcmQxV2lkdGhPcmlnaW5hbCkge1xuICAgICAgICAgICAgICAgIG1ha2VDYXJkQmlnKClcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxU2lkZSA9IFwiYmFja1wiXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMS5jb2xvciA9IG5ld0NvbG9yO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2FyZFRpbWVyKClcbiAgICAgICAgICAgICAgICB9LCA0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCA0KVxuICAgIH1cblxuICAgIGFuaW1hdGUoZSkge1xuXG5cblxuICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS5hbmltYXRlKClcbiAgICAgICAgLy8gdGhpcy5jYXJkMy51cGRhdGUoKVxuICAgICAgICAvLyB0aGlzLmNhcmQyLnVwZGF0ZSgpXG4gICAgICAgIC8vIHRoaXMuY2FyZDEudXBkYXRlKClcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5mcmFtZSsrXG4gICAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjAwODA5Mjg1ZmRhMTRlOGQzZDZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=