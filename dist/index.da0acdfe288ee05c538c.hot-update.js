"use strict";
self["webpackHotUpdatebit_buddies"]("index",{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar */ "./src/avatar.js");
/* harmony import */ var _images_mana_char_a_p1_char_a_p1_0bas_humn_v01_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/mana/char_a_p1/char_a_p1_0bas_humn_v01.png */ "./images/mana/char_a_p1/char_a_p1_0bas_humn_v01.png");
/* harmony import */ var _images_home_avatarStartingHouse2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../images/home/avatarStartingHouse2.png */ "./images/home/avatarStartingHouse2.png");






class Home {
    constructor(canvas, ctx, dimensions) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;

        const dpi = 1;
        this.dpi = 1;

        // 65, 64
        // 86.66666666, 85.33333333
        // 97.5, 96
        // 108.3333333, 106.66666666
        // 130, 128
        // 151.6666666, 149.333333333

        // this.avatarHeight = this.houseHeight * .19 * 2
        // this.avatarWidth = this.avatarHeight * .98461538

        let avatarTempWidth = this.canvas.width * 0.49230769230769234


        this.avatarWidth = (avatarTempWidth % 64) >= 2.5 ? parseInt(avatarTempWidth / 64) * 64 + 64 : parseInt(avatarTempWidth / 64) * 64
        this.avatarHeight = (this.avatarWidth / 64) * 65;
        
        this.canvasAvatarRatio = (this.avatarWidth / 64)

        console.log(this.avatarWidth)
        console.log((64 * 3) / this.canvas.width)
        // 0.49230769230769234

        this.avatarScale = .8
        this.adventureGuy = new _avatar__WEBPACK_IMPORTED_MODULE_1__["default"](this.avatarWidth, this.avatarHeight, _images_mana_char_a_p1_char_a_p1_0bas_humn_v01_png__WEBPACK_IMPORTED_MODULE_2__, this.canvas.width / dpi / 2 - this.avatarWidth / 1.5, this.canvas.height / dpi / 2 - this.avatarHeight / 2, this.ctx, "sprite", 5, 3, 64, 65, 64, 65, 0, 'toeTapDown', 7, this.canvasAvatarRatio);
        // this.adventureGuyBoundingBox = new Component(this.avatarWidth / 4.99, this.avatarHeight / 2.15, "blue", this.adventureGuy.x * this.avatarWidth / 90, this.adventureGuy.y * this.avatarHeight / 175, this.ctx, "block")
        // this.adventureGuy = new Avatar(65, 65, AvatarImg, this.canvas.width / 8 - this.avatarWidth / 2, this.canvas.height / 8 - this.avatarHeight / 4, this.ctx, "sprite", 5, 3, 64, 65, 50 * .98461538, 50, 0, 'toeTapDown', 7);

        // this.adventureGuy.toggleHat()

        //house width x height

        this.houseRatio = 170/136
        this.houseWidth = 136 * this.canvasAvatarRatio;
        this.houseHeight = 170 * this.canvasAvatarRatio;
        this.houseX = (this.canvas.width) / 2 - this.houseWidth / 2
        this.houseY = (this.canvas.height) / 2  - this.houseHeight / 2

        this.house = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](this.houseWidth, this.houseHeight, _images_home_avatarStartingHouse2_png__WEBPACK_IMPORTED_MODULE_3__, this.houseX, this.houseY, this.ctx, "image")
        
        
        this.bedX = this.canvas.width / 2 - 64 * this.canvasAvatarRatio;
        this.bedY = this.canvas.height / 2 - 10 * this.canvasAvatarRatio;
        this.bedWidth = 32 * this.canvasAvatarRatio;
        this.bedHeight = 55 * this.canvasAvatarRatio;
        this.bed = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](this.bedWidth, this.bedHeight, "invisible", this.bedX, this.bedY, this.ctx, "block")

        this.doorX = 147;
        this.doorY = 230; 
        this.doorWidth = 93;
        this.doorHeight = 88;
        this.door = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](this.doorWidth, this.doorHeight, "invisible", this.doorX, this.doorY, this.ctx, "block")


        this.askIfTrainingBox = false;
        this.anime = "idleRight";
        this.frame = 0;
        this.instaElements = [];

        this.clickedBed = false;

    }


    idleCharacter(start, stop, speed, row, colDir) {
        if (this.frame >= speed) {
            this.adventureGuy.column += colDir;
            this.frame = 0;
            if (this.adventureGuy.column === stop + colDir) {
                this.adventureGuy.column = start;
                this.adventureGuy.row = row;
            }
        }
    }

    click(e) {

        if (e.type === "mouseup") {
            this.clickGX = this.gx;
            this.clickGY = this.gy;
            this.adventureGuy.moveWithAnimation(this.gx, this.gy)
            this.checkIfClickedObject()
        }

    }

    checkIfClickedObject() {
        this.checkIfClickedBed(this.gx, this.gy)
        // this.checkIfClickedDoor(this.gx, this.gy)
    }

    askIfTraining() {
        this.trainingBoxImage.update();
        this.startTrainingTextShadow.update();
        this.startTrainingText.update();
        this.yesTextShadow.update();
        this.yesText.update();
        this.noTextShadow.update();
        this.noText.update();
        this.noInvisibleBox.update();
        this.yesInvisibleBox.update();
    }

    checkIfLayingInBed() {
        if (this.adventureGuy.intersecting(this.bed) && this.clickedBed) {
            this.adventureGuy.layInBed(this.bedX, this.bedY, this.bedWidth, this.bedHeight)
            this.clickedBed = false;
        } 
    }

    checkIfClickedBed(gx, gy) {
        this.clickedBed = this.bed.clicked(gx, gy)
        if (this.adventureGuy.layingInBed && !this.clickedBed) {
            this.adventureGuy.x = this.adventureGuy.x + this.bed.width / 2
            this.adventureGuy.toggleLayingInBed();
        }
    }

    checkIfTouchingDoor() {
        if (this.adventureGuy.intersecting(this.door) && this.clickedDoor) {
            return true;
        } 
    }

    checkIfClickedDoor(gx, gy) {
        this.clickedDoor = this.door.clicked(gx, gy)
    }
    

    boundaries() {
        let xBoundRight = this.houseX + this.houseWidth - 40 * this.canvasAvatarRatio
        let xBoundLeft = this.houseX - 20 * this.canvasAvatarRatio;
        let yBoundBottom = this.houseY + this.houseHeight - this.adventureGuy.height + 15 * this.canvasAvatarRatio;
        let yBoundTop = this.houseY + 12 * this.canvasAvatarRatio;



        if (this.adventureGuy.x > xBoundRight) {
            this.adventureGuy.x = xBoundRight;
            this.adventureGuy.speedX = 0;
            this.adventureGuy.speedY = 0;
        } else if (this.adventureGuy.x < xBoundLeft) {
            this.adventureGuy.x = xBoundLeft;
            this.adventureGuy.speedX = 0;
            this.adventureGuy.speedY = 0;
        } else if (this.adventureGuy.y > yBoundBottom) {
            this.adventureGuy.y = yBoundBottom;
            this.adventureGuy.speedX = 0;
            this.adventureGuy.speedY = 0;
        } else if (this.adventureGuy.y < yBoundTop) {
            this.adventureGuy.y = yBoundTop;
            this.adventureGuy.speedX = 0;
            this.adventureGuy.speedY = 0;
        }
    }


    pulsingGlow() {
        if (this.alphaClone >= 0.2) { this.alphaDir = -0.002; }
        this.alphaClone += this.alphaDir;
        this.ctx.globalAlpha = this.alphaClone;
        this.flashBox.update();
        this.ctx.globalAlpha = 1;
        if (this.alphaClone <= 0.002) {
            this.alphaDir = 0.002;
            this.alphaClone = 0.003
        }
    }

    startPulsingGlow() {
        this.flashBox = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](22.22, 14.47, "white", 89.10, 17.13, this.ctx, "circle")
        this.trainingPulse = true;
        this.alphaDir = 0.002
        this.alphaClone = 0;
    }

    startPulsingGlow2() {
        this.flashBox = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](24.74, 10.55, "white", 137.07, 60.55, this.ctx, "circle")
        this.trainingPulse = true;
        this.alphaDir = 0.002
        this.alphaClone = 0;
    }


    animate(e) {

        this.checkIfLayingInBed()

        this.boundaries();

        this.house.update();
        this.bed.update();
        this.door.update();

        this.adventureGuy.animate();
        // this.adventureGuyBoundingBox.update();



        this.frame++
    

    }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e063730dd2fc07bba6df")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGEwYWNkZmUyODhlZTA1YzUzOGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNOO0FBQ2lEO0FBQ2pCOzs7QUFHOUM7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsK0NBQU0sc0NBQXNDLCtFQUFTO0FBQ3JGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0RBQVMsb0NBQW9DLGtFQUFLO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrREFBUzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQVM7OztBQUdqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGtEQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGtEQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7O1VDMU5BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYml0X2J1ZGRpZXMvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9iaXRfYnVkZGllcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIlxuaW1wb3J0IEF2YXRhciBmcm9tICcuL2F2YXRhcidcbmltcG9ydCBBdmF0YXJJbWcgZnJvbSAnLi8uLi9pbWFnZXMvbWFuYS9jaGFyX2FfcDEvY2hhcl9hX3AxXzBiYXNfaHVtbl92MDEucG5nJ1xuaW1wb3J0IEhvdXNlIGZyb20gJy4vLi4vaW1hZ2VzL2hvbWUvYXZhdGFyU3RhcnRpbmdIb3VzZTIucG5nJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBkaW1lbnNpb25zKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcblxuICAgICAgICBjb25zdCBkcGkgPSAxO1xuICAgICAgICB0aGlzLmRwaSA9IDE7XG5cbiAgICAgICAgLy8gNjUsIDY0XG4gICAgICAgIC8vIDg2LjY2NjY2NjY2LCA4NS4zMzMzMzMzM1xuICAgICAgICAvLyA5Ny41LCA5NlxuICAgICAgICAvLyAxMDguMzMzMzMzMywgMTA2LjY2NjY2NjY2XG4gICAgICAgIC8vIDEzMCwgMTI4XG4gICAgICAgIC8vIDE1MS42NjY2NjY2LCAxNDkuMzMzMzMzMzMzXG5cbiAgICAgICAgLy8gdGhpcy5hdmF0YXJIZWlnaHQgPSB0aGlzLmhvdXNlSGVpZ2h0ICogLjE5ICogMlxuICAgICAgICAvLyB0aGlzLmF2YXRhcldpZHRoID0gdGhpcy5hdmF0YXJIZWlnaHQgKiAuOTg0NjE1MzhcblxuICAgICAgICBsZXQgYXZhdGFyVGVtcFdpZHRoID0gdGhpcy5jYW52YXMud2lkdGggKiAwLjQ5MjMwNzY5MjMwNzY5MjM0XG5cblxuICAgICAgICB0aGlzLmF2YXRhcldpZHRoID0gKGF2YXRhclRlbXBXaWR0aCAlIDY0KSA+PSAyLjUgPyBwYXJzZUludChhdmF0YXJUZW1wV2lkdGggLyA2NCkgKiA2NCArIDY0IDogcGFyc2VJbnQoYXZhdGFyVGVtcFdpZHRoIC8gNjQpICogNjRcbiAgICAgICAgdGhpcy5hdmF0YXJIZWlnaHQgPSAodGhpcy5hdmF0YXJXaWR0aCAvIDY0KSAqIDY1O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jYW52YXNBdmF0YXJSYXRpbyA9ICh0aGlzLmF2YXRhcldpZHRoIC8gNjQpXG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hdmF0YXJXaWR0aClcbiAgICAgICAgY29uc29sZS5sb2coKDY0ICogMykgLyB0aGlzLmNhbnZhcy53aWR0aClcbiAgICAgICAgLy8gMC40OTIzMDc2OTIzMDc2OTIzNFxuXG4gICAgICAgIHRoaXMuYXZhdGFyU2NhbGUgPSAuOFxuICAgICAgICB0aGlzLmFkdmVudHVyZUd1eSA9IG5ldyBBdmF0YXIodGhpcy5hdmF0YXJXaWR0aCwgdGhpcy5hdmF0YXJIZWlnaHQsIEF2YXRhckltZywgdGhpcy5jYW52YXMud2lkdGggLyBkcGkgLyAyIC0gdGhpcy5hdmF0YXJXaWR0aCAvIDEuNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gZHBpIC8gMiAtIHRoaXMuYXZhdGFySGVpZ2h0IC8gMiwgdGhpcy5jdHgsIFwic3ByaXRlXCIsIDUsIDMsIDY0LCA2NSwgNjQsIDY1LCAwLCAndG9lVGFwRG93bicsIDcsIHRoaXMuY2FudmFzQXZhdGFyUmF0aW8pO1xuICAgICAgICAvLyB0aGlzLmFkdmVudHVyZUd1eUJvdW5kaW5nQm94ID0gbmV3IENvbXBvbmVudCh0aGlzLmF2YXRhcldpZHRoIC8gNC45OSwgdGhpcy5hdmF0YXJIZWlnaHQgLyAyLjE1LCBcImJsdWVcIiwgdGhpcy5hZHZlbnR1cmVHdXkueCAqIHRoaXMuYXZhdGFyV2lkdGggLyA5MCwgdGhpcy5hZHZlbnR1cmVHdXkueSAqIHRoaXMuYXZhdGFySGVpZ2h0IC8gMTc1LCB0aGlzLmN0eCwgXCJibG9ja1wiKVxuICAgICAgICAvLyB0aGlzLmFkdmVudHVyZUd1eSA9IG5ldyBBdmF0YXIoNjUsIDY1LCBBdmF0YXJJbWcsIHRoaXMuY2FudmFzLndpZHRoIC8gOCAtIHRoaXMuYXZhdGFyV2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyA4IC0gdGhpcy5hdmF0YXJIZWlnaHQgLyA0LCB0aGlzLmN0eCwgXCJzcHJpdGVcIiwgNSwgMywgNjQsIDY1LCA1MCAqIC45ODQ2MTUzOCwgNTAsIDAsICd0b2VUYXBEb3duJywgNyk7XG5cbiAgICAgICAgLy8gdGhpcy5hZHZlbnR1cmVHdXkudG9nZ2xlSGF0KClcblxuICAgICAgICAvL2hvdXNlIHdpZHRoIHggaGVpZ2h0XG5cbiAgICAgICAgdGhpcy5ob3VzZVJhdGlvID0gMTcwLzEzNlxuICAgICAgICB0aGlzLmhvdXNlV2lkdGggPSAxMzYgKiB0aGlzLmNhbnZhc0F2YXRhclJhdGlvO1xuICAgICAgICB0aGlzLmhvdXNlSGVpZ2h0ID0gMTcwICogdGhpcy5jYW52YXNBdmF0YXJSYXRpbztcbiAgICAgICAgdGhpcy5ob3VzZVggPSAodGhpcy5jYW52YXMud2lkdGgpIC8gMiAtIHRoaXMuaG91c2VXaWR0aCAvIDJcbiAgICAgICAgdGhpcy5ob3VzZVkgPSAodGhpcy5jYW52YXMuaGVpZ2h0KSAvIDIgIC0gdGhpcy5ob3VzZUhlaWdodCAvIDJcblxuICAgICAgICB0aGlzLmhvdXNlID0gbmV3IENvbXBvbmVudCh0aGlzLmhvdXNlV2lkdGgsIHRoaXMuaG91c2VIZWlnaHQsIEhvdXNlLCB0aGlzLmhvdXNlWCwgdGhpcy5ob3VzZVksIHRoaXMuY3R4LCBcImltYWdlXCIpXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5iZWRYID0gdGhpcy5jYW52YXMud2lkdGggLyAyIC0gNjQgKiB0aGlzLmNhbnZhc0F2YXRhclJhdGlvO1xuICAgICAgICB0aGlzLmJlZFkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gMTAgKiB0aGlzLmNhbnZhc0F2YXRhclJhdGlvO1xuICAgICAgICB0aGlzLmJlZFdpZHRoID0gMzIgKiB0aGlzLmNhbnZhc0F2YXRhclJhdGlvO1xuICAgICAgICB0aGlzLmJlZEhlaWdodCA9IDU1ICogdGhpcy5jYW52YXNBdmF0YXJSYXRpbztcbiAgICAgICAgdGhpcy5iZWQgPSBuZXcgQ29tcG9uZW50KHRoaXMuYmVkV2lkdGgsIHRoaXMuYmVkSGVpZ2h0LCBcImludmlzaWJsZVwiLCB0aGlzLmJlZFgsIHRoaXMuYmVkWSwgdGhpcy5jdHgsIFwiYmxvY2tcIilcblxuICAgICAgICB0aGlzLmRvb3JYID0gMTQ3O1xuICAgICAgICB0aGlzLmRvb3JZID0gMjMwOyBcbiAgICAgICAgdGhpcy5kb29yV2lkdGggPSA5MztcbiAgICAgICAgdGhpcy5kb29ySGVpZ2h0ID0gODg7XG4gICAgICAgIHRoaXMuZG9vciA9IG5ldyBDb21wb25lbnQodGhpcy5kb29yV2lkdGgsIHRoaXMuZG9vckhlaWdodCwgXCJpbnZpc2libGVcIiwgdGhpcy5kb29yWCwgdGhpcy5kb29yWSwgdGhpcy5jdHgsIFwiYmxvY2tcIilcblxuXG4gICAgICAgIHRoaXMuYXNrSWZUcmFpbmluZ0JveCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFuaW1lID0gXCJpZGxlUmlnaHRcIjtcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgIHRoaXMuaW5zdGFFbGVtZW50cyA9IFtdO1xuXG4gICAgICAgIHRoaXMuY2xpY2tlZEJlZCA9IGZhbHNlO1xuXG4gICAgfVxuXG5cbiAgICBpZGxlQ2hhcmFjdGVyKHN0YXJ0LCBzdG9wLCBzcGVlZCwgcm93LCBjb2xEaXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWUgPj0gc3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlR3V5LmNvbHVtbiArPSBjb2xEaXI7XG4gICAgICAgICAgICB0aGlzLmZyYW1lID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmFkdmVudHVyZUd1eS5jb2x1bW4gPT09IHN0b3AgKyBjb2xEaXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS5jb2x1bW4gPSBzdGFydDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS5yb3cgPSByb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGljayhlKSB7XG5cbiAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZXVwXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tHWCA9IHRoaXMuZ3g7XG4gICAgICAgICAgICB0aGlzLmNsaWNrR1kgPSB0aGlzLmd5O1xuICAgICAgICAgICAgdGhpcy5hZHZlbnR1cmVHdXkubW92ZVdpdGhBbmltYXRpb24odGhpcy5neCwgdGhpcy5neSlcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJZkNsaWNrZWRPYmplY3QoKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjaGVja0lmQ2xpY2tlZE9iamVjdCgpIHtcbiAgICAgICAgdGhpcy5jaGVja0lmQ2xpY2tlZEJlZCh0aGlzLmd4LCB0aGlzLmd5KVxuICAgICAgICAvLyB0aGlzLmNoZWNrSWZDbGlja2VkRG9vcih0aGlzLmd4LCB0aGlzLmd5KVxuICAgIH1cblxuICAgIGFza0lmVHJhaW5pbmcoKSB7XG4gICAgICAgIHRoaXMudHJhaW5pbmdCb3hJbWFnZS51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5zdGFydFRyYWluaW5nVGV4dFNoYWRvdy51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5zdGFydFRyYWluaW5nVGV4dC51cGRhdGUoKTtcbiAgICAgICAgdGhpcy55ZXNUZXh0U2hhZG93LnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLnllc1RleHQudXBkYXRlKCk7XG4gICAgICAgIHRoaXMubm9UZXh0U2hhZG93LnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLm5vVGV4dC51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5ub0ludmlzaWJsZUJveC51cGRhdGUoKTtcbiAgICAgICAgdGhpcy55ZXNJbnZpc2libGVCb3gudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY2hlY2tJZkxheWluZ0luQmVkKCkge1xuICAgICAgICBpZiAodGhpcy5hZHZlbnR1cmVHdXkuaW50ZXJzZWN0aW5nKHRoaXMuYmVkKSAmJiB0aGlzLmNsaWNrZWRCZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlR3V5LmxheUluQmVkKHRoaXMuYmVkWCwgdGhpcy5iZWRZLCB0aGlzLmJlZFdpZHRoLCB0aGlzLmJlZEhlaWdodClcbiAgICAgICAgICAgIHRoaXMuY2xpY2tlZEJlZCA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNoZWNrSWZDbGlja2VkQmVkKGd4LCBneSkge1xuICAgICAgICB0aGlzLmNsaWNrZWRCZWQgPSB0aGlzLmJlZC5jbGlja2VkKGd4LCBneSlcbiAgICAgICAgaWYgKHRoaXMuYWR2ZW50dXJlR3V5LmxheWluZ0luQmVkICYmICF0aGlzLmNsaWNrZWRCZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlR3V5LnggPSB0aGlzLmFkdmVudHVyZUd1eS54ICsgdGhpcy5iZWQud2lkdGggLyAyXG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS50b2dnbGVMYXlpbmdJbkJlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJZlRvdWNoaW5nRG9vcigpIHtcbiAgICAgICAgaWYgKHRoaXMuYWR2ZW50dXJlR3V5LmludGVyc2VjdGluZyh0aGlzLmRvb3IpICYmIHRoaXMuY2xpY2tlZERvb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNoZWNrSWZDbGlja2VkRG9vcihneCwgZ3kpIHtcbiAgICAgICAgdGhpcy5jbGlja2VkRG9vciA9IHRoaXMuZG9vci5jbGlja2VkKGd4LCBneSlcbiAgICB9XG4gICAgXG5cbiAgICBib3VuZGFyaWVzKCkge1xuICAgICAgICBsZXQgeEJvdW5kUmlnaHQgPSB0aGlzLmhvdXNlWCArIHRoaXMuaG91c2VXaWR0aCAtIDQwICogdGhpcy5jYW52YXNBdmF0YXJSYXRpb1xuICAgICAgICBsZXQgeEJvdW5kTGVmdCA9IHRoaXMuaG91c2VYIC0gMjAgKiB0aGlzLmNhbnZhc0F2YXRhclJhdGlvO1xuICAgICAgICBsZXQgeUJvdW5kQm90dG9tID0gdGhpcy5ob3VzZVkgKyB0aGlzLmhvdXNlSGVpZ2h0IC0gdGhpcy5hZHZlbnR1cmVHdXkuaGVpZ2h0ICsgMTUgKiB0aGlzLmNhbnZhc0F2YXRhclJhdGlvO1xuICAgICAgICBsZXQgeUJvdW5kVG9wID0gdGhpcy5ob3VzZVkgKyAxMiAqIHRoaXMuY2FudmFzQXZhdGFyUmF0aW87XG5cblxuXG4gICAgICAgIGlmICh0aGlzLmFkdmVudHVyZUd1eS54ID4geEJvdW5kUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlR3V5LnggPSB4Qm91bmRSaWdodDtcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlR3V5LnNwZWVkWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS5zcGVlZFkgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWR2ZW50dXJlR3V5LnggPCB4Qm91bmRMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS54ID0geEJvdW5kTGVmdDtcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlR3V5LnNwZWVkWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS5zcGVlZFkgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWR2ZW50dXJlR3V5LnkgPiB5Qm91bmRCb3R0b20pIHtcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlR3V5LnkgPSB5Qm91bmRCb3R0b207XG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS5zcGVlZFggPSAwO1xuICAgICAgICAgICAgdGhpcy5hZHZlbnR1cmVHdXkuc3BlZWRZID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFkdmVudHVyZUd1eS55IDwgeUJvdW5kVG9wKSB7XG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS55ID0geUJvdW5kVG9wO1xuICAgICAgICAgICAgdGhpcy5hZHZlbnR1cmVHdXkuc3BlZWRYID0gMDtcbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlR3V5LnNwZWVkWSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1bHNpbmdHbG93KCkge1xuICAgICAgICBpZiAodGhpcy5hbHBoYUNsb25lID49IDAuMikgeyB0aGlzLmFscGhhRGlyID0gLTAuMDAyOyB9XG4gICAgICAgIHRoaXMuYWxwaGFDbG9uZSArPSB0aGlzLmFscGhhRGlyO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHRoaXMuYWxwaGFDbG9uZTtcbiAgICAgICAgdGhpcy5mbGFzaEJveC51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICBpZiAodGhpcy5hbHBoYUNsb25lIDw9IDAuMDAyKSB7XG4gICAgICAgICAgICB0aGlzLmFscGhhRGlyID0gMC4wMDI7XG4gICAgICAgICAgICB0aGlzLmFscGhhQ2xvbmUgPSAwLjAwM1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRQdWxzaW5nR2xvdygpIHtcbiAgICAgICAgdGhpcy5mbGFzaEJveCA9IG5ldyBDb21wb25lbnQoMjIuMjIsIDE0LjQ3LCBcIndoaXRlXCIsIDg5LjEwLCAxNy4xMywgdGhpcy5jdHgsIFwiY2lyY2xlXCIpXG4gICAgICAgIHRoaXMudHJhaW5pbmdQdWxzZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxwaGFEaXIgPSAwLjAwMlxuICAgICAgICB0aGlzLmFscGhhQ2xvbmUgPSAwO1xuICAgIH1cblxuICAgIHN0YXJ0UHVsc2luZ0dsb3cyKCkge1xuICAgICAgICB0aGlzLmZsYXNoQm94ID0gbmV3IENvbXBvbmVudCgyNC43NCwgMTAuNTUsIFwid2hpdGVcIiwgMTM3LjA3LCA2MC41NSwgdGhpcy5jdHgsIFwiY2lyY2xlXCIpXG4gICAgICAgIHRoaXMudHJhaW5pbmdQdWxzZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxwaGFEaXIgPSAwLjAwMlxuICAgICAgICB0aGlzLmFscGhhQ2xvbmUgPSAwO1xuICAgIH1cblxuXG4gICAgYW5pbWF0ZShlKSB7XG5cbiAgICAgICAgdGhpcy5jaGVja0lmTGF5aW5nSW5CZWQoKVxuXG4gICAgICAgIHRoaXMuYm91bmRhcmllcygpO1xuXG4gICAgICAgIHRoaXMuaG91c2UudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuYmVkLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmRvb3IudXBkYXRlKCk7XG5cbiAgICAgICAgdGhpcy5hZHZlbnR1cmVHdXkuYW5pbWF0ZSgpO1xuICAgICAgICAvLyB0aGlzLmFkdmVudHVyZUd1eUJvdW5kaW5nQm94LnVwZGF0ZSgpO1xuXG5cblxuICAgICAgICB0aGlzLmZyYW1lKytcbiAgICBcblxuICAgIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUwNjM3MzBkZDJmYzA3YmJhNmRmXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9