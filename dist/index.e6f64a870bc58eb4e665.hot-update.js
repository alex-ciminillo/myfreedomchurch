"use strict";
self["webpackHotUpdatetower_of_dreams"]("index",{

/***/ "./src/avatar.js":
/*!***********************!*\
  !*** ./src/avatar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _images_mana_char_a_p1_5hat_char_a_p1_5hat_pnty_v03_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../images/mana/char_a_p1/5hat/char_a_p1_5hat_pnty_v03.png */ "./images/mana/char_a_p1/5hat/char_a_p1_5hat_pnty_v03.png");
/* harmony import */ var _images_mana_char_a_p4_5hat_char_a_p4_5hat_pnty_v03_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/mana/char_a_p4/5hat/char_a_p4_5hat_pnty_v03.png */ "./images/mana/char_a_p4/5hat/char_a_p4_5hat_pnty_v03.png");
/* harmony import */ var _images_mana_char_a_p1_1out_char_a_p1_1out_fstr_v05_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../images/mana/char_a_p1/1out/char_a_p1_1out_fstr_v05.png */ "./images/mana/char_a_p1/1out/char_a_p1_1out_fstr_v05.png");
/* harmony import */ var _images_mana_char_a_p4_1out_char_a_p4_1out_fstr_v05_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../images/mana/char_a_p4/1out/char_a_p4_1out_fstr_v05.png */ "./images/mana/char_a_p4/1out/char_a_p4_1out_fstr_v05.png");
/* harmony import */ var _images_mana_char_a_p1_4har_char_a_p1_4har_bob1_v01_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../images/mana/char_a_p1/4har/char_a_p1_4har_bob1_v01.png */ "./images/mana/char_a_p1/4har/char_a_p1_4har_bob1_v01.png");
/* harmony import */ var _images_mana_char_a_p4_4har_char_a_p4_4har_bob1_v01_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../images/mana/char_a_p4/4har/char_a_p4_4har_bob1_v01.png */ "./images/mana/char_a_p4/4har/char_a_p4_4har_bob1_v01.png");
/* harmony import */ var _images_mana_char_a_p1_char_a_p1_0bas_humn_v01_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../images/mana/char_a_p1/char_a_p1_0bas_humn_v01.png */ "./images/mana/char_a_p1/char_a_p1_0bas_humn_v01.png");
/* harmony import */ var _images_mana_char_a_p4_char_a_p4_0bas_humn_v01_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../images/mana/char_a_p4/char_a_p4_0bas_humn_v01.png */ "./images/mana/char_a_p4/char_a_p4_0bas_humn_v01.png");
/* harmony import */ var _attachment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attachment */ "./src/attachment.js");















class Avatar extends _component__WEBPACK_IMPORTED_MODULE_0__["default"] {

    constructor(width, height, color, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight, anime, columnLength) {
        super(width, height, color, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight,)
        this.anime = anime;
        this.frame = 0;
        this.columnLength = columnLength;
        this.customAnimation = false;
        this.clickedSpotx = 0;
        this.clickedSpoty = 0;
        this.wearingHat = true;
        this.walking = false;
        this.movingToMouse = true;

        this.currentPage = "p1"
        this.baseSkin = "char_a_p1_0bas_humn_v01";
        this.outfitStyle = "char_a_p1_1out_fstr_v05";
        this.hatStyle = "char_a_p1_5hat_pnty_v03";
        this.hairStyle = "char_a_p1_4har_bob1_v01";

        this.animationDir = {
            p1: ["idleUp", "idleRight", "idleLeft", "idleDown", "walkRight", "walkLeft", "walkDown", "walkUp", "runDown", "runUp", "runLeft", "runRight"],
            p4: ["toeTapDown", "toeTapUp", "toeTapLeft", "toeTapRight", "restArmOnSideDown", "restArmOnSideUp", "restArmOnSideLeft", "restArmOnSideRight", "layingOnBack", "layingOnBelly", "layingOnRight", "layingOnLeft"]
        }

        this.animePageDir = {
            char_a_p1_0bas_humn_v01: _images_mana_char_a_p1_char_a_p1_0bas_humn_v01_png__WEBPACK_IMPORTED_MODULE_7__,
            char_a_p4_0bas_humn_v01: _images_mana_char_a_p4_char_a_p4_0bas_humn_v01_png__WEBPACK_IMPORTED_MODULE_8__,
            char_a_p1_1out_fstr_v05: _images_mana_char_a_p1_1out_char_a_p1_1out_fstr_v05_png__WEBPACK_IMPORTED_MODULE_3__,
            char_a_p4_1out_fstr_v05: _images_mana_char_a_p4_1out_char_a_p4_1out_fstr_v05_png__WEBPACK_IMPORTED_MODULE_4__,
            char_a_p1_4har_bob1_v01: _images_mana_char_a_p1_4har_char_a_p1_4har_bob1_v01_png__WEBPACK_IMPORTED_MODULE_5__,
            char_a_p4_4har_bob1_v01: _images_mana_char_a_p4_4har_char_a_p4_4har_bob1_v01_png__WEBPACK_IMPORTED_MODULE_6__,
            char_a_p1_5hat_pnty_v03: _images_mana_char_a_p1_5hat_char_a_p1_5hat_pnty_v03_png__WEBPACK_IMPORTED_MODULE_1__,
            char_a_p4_5hat_pnty_v03: _images_mana_char_a_p4_5hat_char_a_p4_5hat_pnty_v03_png__WEBPACK_IMPORTED_MODULE_2__,
        }

        this.customAnimationDir = {
            runLeft: {
                columns: [0,1,6,3,4,7],
                row: 7,
                speed: [5, 3, 8, 5, 3, 8],
            },
            runRight: {
                columns: [0,1,6,3,4,7],
                row: 6,
                speed: [5, 3, 8, 5, 3, 8],
            },
            runUp: {
                columns: [0,1,6,3,4,7],
                row: 5,
                speed: [5, 3, 8, 5, 3, 8],
            },
            runDown: {
                columns: [0,1,6,3,4,7],
                row: 4,
                speed: [5, 3, 8, 5, 3, 8],
            },
        }

        
        // at 64, 65, the hair is height, and frameheightsize - 40 and y and rowheight + 20
        // at 55, 55, the hair is height and frameheightsize - 10, and y + 17, and rowheight + 20 
       
        // hair style for wizard hat when avatar height and width is 50 (width is a tiny bit less of course)


        this.outfit = new _attachment__WEBPACK_IMPORTED_MODULE_9__["default"](width, height, _images_mana_char_a_p1_1out_char_a_p1_1out_fstr_v05_png__WEBPACK_IMPORTED_MODULE_3__, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight, anime, columnLength)


        if (this.wearingHat) {
            this.hair = new _attachment__WEBPACK_IMPORTED_MODULE_9__["default"](width, height, _images_mana_char_a_p1_4har_char_a_p1_4har_bob1_v01_png__WEBPACK_IMPORTED_MODULE_5__, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight, anime, columnLength, 20, this.row, this.height, 20, 40)
        } else {
            this.hair = new _attachment__WEBPACK_IMPORTED_MODULE_9__["default"](width, height, _images_mana_char_a_p1_4har_char_a_p1_4har_bob1_v01_png__WEBPACK_IMPORTED_MODULE_5__, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight, anime, columnLength, this.wearingHat, 'hair')
        }

        
        this.hat = new _attachment__WEBPACK_IMPORTED_MODULE_9__["default"](width, height, _images_mana_char_a_p1_5hat_char_a_p1_5hat_pnty_v03_png__WEBPACK_IMPORTED_MODULE_1__, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight, anime, columnLength)


        this.initMove(0, 0, "idleDown")

    }

    toggleHat() {
        if (this.wearingHat) {
            this.wearingHat = false;
            this.hair.height = this.height;
            this.hair.y = this.y;
            this.hair.frameHeightSize = this.frameHeightSize;
            this.hair.rowHeight = this.rowHeight;
        } else {
            this.wearingHat = true;
            this.hair.height = this.height - this.hair.spriteCropRow4And8B;
            this.hair.y = this.y + this.hair.spriteCropRow2And6A;
            this.hair.frameHeightSize = this.frameHeightSize - 40;
            this.hair.rowHeight = this.rowHeight + 20;
         }
    }

    toggleWalking() {
        this.walking = !this.walking;
    }

    toggleLayingInBed() {
        this.layingInBed = !this.layingInBed;
    }

    toggleMoveToMouse() {
        this.movingToMouse = !this.movingToMouse;
    }

    checkSpeed() {
        if (this.speedX > 0 && this.speedX > Math.abs(this.speedY)) {
            this.walking ? this.anime = "walkRight" : this.anime = "runRight"
        } else if (this.speedX < 0 && Math.abs(this.speedX) > Math.abs(this.speedY)) {
            this.walking ? this.anime = "walkLeft" : this.anime = "runLeft"
        } else if (this.speedX === 0 && (this.anime === "walkLeft" || this.anime === "runLeft")) {
            this.initMove(0, 3, "idleLeft")
        } else if (this.speedX === 0 && (this.anime === "walkRight" || this.anime === "runRight")) {
            this.initMove(0, 2, "idleRight")
        } else if (this.speedY > 0) {
            this.walking ? this.anime = "walkDown" : this.anime = "runDown"
        } else if (this.speedY < 0) {
            this.walking ? this.anime = "walkUp" : this.anime = "runUp"
        } else if (this.speedY === 0 && (this.anime === "walkUp" || this.anime === "runUp")) {
            this.initMove(0, 1, "idleUp")
        } else if (this.speedY === 0 && (this.anime === "walkDown" || this.anime === "runDown")) {
            this.initMove(0, 0, "idleDown")
        }
    }


    initMove(start, row, anime) {

        if (anime === 'toeTapDown' || anime === "restArmOnSideDown" ||
        anime === 'toeTapUp' || anime === "restArmOnSideUp" || 
        anime === 'toeTapRight' || anime === "restArmOnSideRight" || 
        anime === 'toeTapLeft' || anime === "restArmOnSideLeft") {

        } else {
            clearTimeout(this.waitingID);
        }

        if (this.animationDir.p1.includes(anime)) {
            this.changeSpritePage("p1")
        } else if (this.animationDir.p4.includes(anime)) {
            this.changeSpritePage("p4")
        }
        if (anime === 'walkLeft') {
            this.y = this.y + 3
        } else if (anime === 'walkRight') {
            this.y = this.y + 3
        } else if (anime === 'idleRight') {
            this.y = this.y - 3
            this.startWait("restArmOnSideRight", 0, 6, 15000)
        } else if (anime === 'idleLeft') {
            this.y = this.y - 3
            this.startWait("restArmOnSideLeft", 0, 7, 15000)
        } else if (anime === 'walkDown') {
            this.y = this.y + 3
        } else if (anime === 'walkUp') {
            this.y = this.y + 3
        } else if (anime === 'idleDown') {
            this.y = this.y - 3
            this.startWait("restArmOnSideDown", 0, 4, 15000)
        } else if (anime === 'idleUp') {
            this.y = this.y - 3
            this.startWait("restArmOnSideUp", 0, 5, 15000)
        }

        if (anime === "restArmOnSideDown"  || 
        anime === "restArmOnSideUp"  || 
        anime === "restArmOnSideRight" || 
        anime === "restArmOnSideLeft") {
            this.y = this.y + 4
        }

        if (anime === 'restArmOnSideDown') {
            this.startWait("toeTapDown", 1, 4, 15000)
        } else if (anime === 'restArmOnSideUp') {
            this.startWait("toeTapUp", 1, 5, 15000)
        } else if (anime === 'restArmOnSideRight') {
            this.startWait("toeTapRight", 1, 6, 15000)
        } else if (anime === 'restArmOnSideLeft') {
            this.startWait("toeTapLeft", 1, 7, 15000)
        }

        this.column = start;
        this.row = row;
        this.anime = anime;
        this.frame = 0;
        this.customArrPos = 0;
        this.customSpeedPos = 0;
    }

    moveWithAnimation(gx, gy) {

        this.clickedSpotx = gx;
        this.clickedSpoty = gy;
        
        if (this.movingToMouse) {
            if (this.dir(gx, gy) === "left") {
            this.walking ? this.initMove(0, 7, "walkLeft") : this.initMove(0, 7, "runLeft")
            } else if (this.dir(gx, gy) === "right") {
            this.walking ? this.initMove(0, 6, "walkRight") : this.initMove(0, 6, "runRight")
            } else if (this.dir(gx, gy) === "up") {
            this.walking ? this.initMove(0, 5, "walkUp") : this.initMove(0, 5, "runUp")
            } else if (this.dir(gx, gy) === "down") {
            this.walking ? this.initMove(0, 4, "walkDown") : this.initMove(0, 4, "runDown")
            }
            this.moveToMouse(gx, gy, 0.8)

            this.checkSpeed()
        }

    }

    layInBed(bedX, bedY) {
        this.layingInBed = true;
        this.x = bedX - this.width / 4;
        this.y = bedY;
        this.speedX = 0;
        this.speedY = 0;

        let sleepArr = {
            1: {
                start: 7,
                row: 4,
                anime: "layingOnBack"
            }, 
            2: {
                start: 7,
                row: 5,
                anime: "layingOnBelly"
            }, 
            3: {
                start: 7,
                row: 6,
                anime: "layingOnRight"
            }, 
            4: {
                start: 7,
                row: 7,
                anime: "layingOnLeft"
            }, 
        }

        let ranPosition = this.randomIntFromInterval(1, 4)

        this.initMove(sleepArr[ranPosition].start, sleepArr[ranPosition].row, sleepArr[ranPosition].anime);

    }

    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    intersecting = (object) => {
        var myleft = Number(this.x + 24);
        var myright = Number(this.x + 24) + (this.width / 3 - 6);
        var mytop = Number(this.y + 11);
        var mybottom = Number(this.y + 11) + (this.height / 2);
        var otherleft = Number(object.x);
        var otherright = Number(object.x) + (object.width);
        var othertop = Number(object.y);
        var otherbottom = Number(object.y) + (object.height);
        var intersect = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
            intersect = false;
        }
        return intersect;
    }

    syncAttachments() {

        this.outfit.x = this.x;
        this.outfit.y = this.y;

        this.hair.x = this.x;
        this.hair.y = this.y;
        
        this.hat.x = this.x;
        this.hat.y = this.y;
        this.outfit.row = this.row;
        this.outfit.column = this.column;
        this.hat.row = this.row;
        this.hat.column = this.column;
        this.hair.row = this.row;
        this.hair.spriteCropRow2B = this.row;
        this.hair.column = this.column;

    }

    changeSpritePage(page) {
        if (this.currentPage === page) return

        this.hatStyle = this.hatStyle.replace(this.currentPage, page)
        this.hat.color = this.animePageDir[this.hatStyle];

        this.hairStyle = this.hairStyle.replace(this.currentPage, page)
        this.hair.color = this.animePageDir[this.hairStyle];

        this.outfitStyle = this.outfitStyle.replace(this.currentPage, page)
        this.outfit.color = this.animePageDir[this.outfitStyle];

        this.baseSkin = this.baseSkin.replace(this.currentPage, page)
        this.color = this.animePageDir[this.baseSkin];

        this.currentPage = page;
    }

    startWait(anime, start, row, time) {
        this.waitingID = setTimeout(()=>{
            this.initMove(start, row, anime)
        }, time)
    }
    

    animate() {

        this.checkSpeed();

        this.checkIfStillMoving(this.clickedSpotx, this.clickedSpoty);

        this.newPos();
        this.update();

        this.syncAttachments();


        if (this.stop !== true) {
            if (this.animationDir.p1.includes(this.anime)) {
                this.changeSpritePage("p1")
                if (this.anime === "idleRight") { this.spriteAnimation(0, 0, 8, 2, 1); }
                else if (this.anime === "idleLeft") { this.spriteAnimation(0, 0, 8, 3, 1); }
                else if (this.anime === 'idleDown') { this.spriteAnimation(0, 0, 8, 0, 1); }
                else if (this.anime === 'idleUp') { this.spriteAnimation(0, 0, 8, 1, 1); }
                else if (this.anime === "walkRight") { this.spriteAnimation(0, 5, 8, 6, 1); }
                else if (this.anime === "walkLeft") { this.spriteAnimation(0, 5, 8, 7, 1); }
                else if (this.anime === "walkDown") { this.spriteAnimation(0, 5, 8, 4, 1); }
                else if (this.anime === "walkUp") { this.spriteAnimation(0, 5, 8, 5, 1); }
                else if (this.anime === "runDown") { this.spriteCustomAnimation(this.customAnimationDir.runDown.columns, this.customAnimationDir.runDown.speed, this.customAnimationDir.runDown.row) }
                else if (this.anime === "runUp") { this.spriteCustomAnimation(this.customAnimationDir.runUp.columns, this.customAnimationDir.runUp.speed, this.customAnimationDir.runUp.row) }
                else if (this.anime === "runLeft") { this.spriteCustomAnimation(this.customAnimationDir.runLeft.columns, this.customAnimationDir.runLeft.speed, this.customAnimationDir.runLeft.row) }
                else if (this.anime === "runRight") { this.spriteCustomAnimation(this.customAnimationDir.runRight.columns, this.customAnimationDir.runRight.speed, this.customAnimationDir.runRight.row) }
            } else if (this.animationDir.p4.includes(this.anime)) {
                this.changeSpritePage("p4")
                if (this.anime === "toeTapDown") { this.spriteAnimation(1, 2, 16, 4, 1) }
                else if (this.anime === "toeTapUp") { this.spriteAnimation(1, 2, 16, 5, 1) }
                else if (this.anime === "toeTapRight") { this.spriteAnimation(1, 2, 16, 6, 1) }
                else if (this.anime === "toeTapLeft") { this.spriteAnimation(1, 2, 16, 7, 1) }
                else if (this.anime === "restArmOnSideDown") { this.spriteAnimation(0, 0, 16, 4, 1)  }
                else if (this.anime === "restArmOnSideUp") { this.spriteAnimation(0, 0, 16, 5, 1)  }
                else if (this.anime === "restArmOnSideRight") { this.spriteAnimation(0, 0, 16, 6, 1)  }
                else if (this.anime === "restArmOnSideLeft") { this.spriteAnimation(0, 0, 16, 7, 1)  }
                else if (this.anime === "layingOnBack") { this.spriteAnimation(7, 7, 16, 4, 1)  }
                else if (this.anime === "layingOnBelly") { this.spriteAnimation(7, 7, 16, 5, 1)  }
                else if (this.anime === "layingOnRight") { this.spriteAnimation(7, 7, 16, 6, 1)  }
                else if (this.anime === "layingOnLeft") { this.spriteAnimation(7, 7, 16, 7, 1)  }
            }
            this.frame++
        }
        
        this.outfit.animate();
        this.hair.animate();
        if (this.wearingHat) this.hat.animate();
        
    }



}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3399029b11d32337d6cf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTZmNjRhODcwYmM1OGViNGU2NjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvQztBQUM4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTDtBQUNBOzs7QUFHdkQ7Ozs7QUFJdkIscUJBQXFCLGtEQUFTOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsK0VBQXVCO0FBQzVELHFDQUFxQywrRUFBdUI7QUFDNUQscUNBQXFDLG9GQUF1QjtBQUM1RCxxQ0FBcUMsb0ZBQXVCO0FBQzVELHFDQUFxQyxvRkFBdUI7QUFDNUQscUNBQXFDLG9GQUF1QjtBQUM1RCxxQ0FBcUMsb0ZBQXVCO0FBQzVELHFDQUFxQyxvRkFBdUI7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwwQkFBMEIsbURBQVUsZ0JBQWdCLG9GQUF1Qjs7O0FBRzNFO0FBQ0EsNEJBQTRCLG1EQUFVLGdCQUFnQixvRkFBdUI7QUFDN0UsVUFBVTtBQUNWLDRCQUE0QixtREFBVSxnQkFBZ0Isb0ZBQXVCO0FBQzdFOztBQUVBO0FBQ0EsdUJBQXVCLG1EQUFVLGdCQUFnQixvRkFBdUI7OztBQUd4RTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELHNEQUFzRDtBQUN0RCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELHVEQUF1RDtBQUN2RCxzREFBc0Q7QUFDdEQsc0RBQXNEO0FBQ3RELG9EQUFvRDtBQUNwRCxxREFBcUQ7QUFDckQsbURBQW1EO0FBQ25ELHFEQUFxRDtBQUNyRCxzREFBc0Q7QUFDdEQsY0FBYztBQUNkO0FBQ0EsbURBQW1EO0FBQ25ELHNEQUFzRDtBQUN0RCx5REFBeUQ7QUFDekQsd0RBQXdEO0FBQ3hELCtEQUErRDtBQUMvRCw2REFBNkQ7QUFDN0QsZ0VBQWdFO0FBQ2hFLCtEQUErRDtBQUMvRCwwREFBMEQ7QUFDMUQsMkRBQTJEO0FBQzNELDJEQUEyRDtBQUMzRCwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7Ozs7Ozs7O1VDcllBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG93ZXJfb2ZfZHJlYW1zLy4vc3JjL2F2YXRhci5qcyIsIndlYnBhY2s6Ly90b3dlcl9vZl9kcmVhbXMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5pbXBvcnQgY2hhcl9hX3AxXzVoYXRfcG50eV92MDMgZnJvbSAnLi8uLi9pbWFnZXMvbWFuYS9jaGFyX2FfcDEvNWhhdC9jaGFyX2FfcDFfNWhhdF9wbnR5X3YwMy5wbmcnO1xuaW1wb3J0IGNoYXJfYV9wNF81aGF0X3BudHlfdjAzIGZyb20gJy4vLi4vaW1hZ2VzL21hbmEvY2hhcl9hX3A0LzVoYXQvY2hhcl9hX3A0XzVoYXRfcG50eV92MDMucG5nJztcbmltcG9ydCBjaGFyX2FfcDFfMW91dF9mc3RyX3YwNSBmcm9tICcuLy4uL2ltYWdlcy9tYW5hL2NoYXJfYV9wMS8xb3V0L2NoYXJfYV9wMV8xb3V0X2ZzdHJfdjA1LnBuZyc7XG5pbXBvcnQgY2hhcl9hX3A0XzFvdXRfZnN0cl92MDUgZnJvbSAnLi8uLi9pbWFnZXMvbWFuYS9jaGFyX2FfcDQvMW91dC9jaGFyX2FfcDRfMW91dF9mc3RyX3YwNS5wbmcnO1xuaW1wb3J0IGNoYXJfYV9wMV80aGFyX2JvYjFfdjAxIGZyb20gJy4vLi4vaW1hZ2VzL21hbmEvY2hhcl9hX3AxLzRoYXIvY2hhcl9hX3AxXzRoYXJfYm9iMV92MDEucG5nJztcbmltcG9ydCBjaGFyX2FfcDRfNGhhcl9ib2IxX3YwMSBmcm9tICcuLy4uL2ltYWdlcy9tYW5hL2NoYXJfYV9wNC80aGFyL2NoYXJfYV9wNF80aGFyX2JvYjFfdjAxLnBuZyc7XG5pbXBvcnQgY2hhcl9hX3AxXzBiYXNfaHVtbl92MDEgZnJvbSAnLi8uLi9pbWFnZXMvbWFuYS9jaGFyX2FfcDEvY2hhcl9hX3AxXzBiYXNfaHVtbl92MDEucG5nJztcbmltcG9ydCBjaGFyX2FfcDRfMGJhc19odW1uX3YwMSBmcm9tICcuLy4uL2ltYWdlcy9tYW5hL2NoYXJfYV9wNC9jaGFyX2FfcDRfMGJhc19odW1uX3YwMS5wbmcnO1xuXG5cbmltcG9ydCBBdHRhY2htZW50IGZyb20gXCIuL2F0dGFjaG1lbnRcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb2xvciwgeCwgeSwgY3R4LCB0eXBlLCByb3csIGNvbHVtbiwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQsIGZyYW1lV2lkdGhTaXplLCBmcmFtZUhlaWdodFNpemUsIHJvd0hlaWdodCwgYW5pbWUsIGNvbHVtbkxlbmd0aCkge1xuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0LCBjb2xvciwgeCwgeSwgY3R4LCB0eXBlLCByb3csIGNvbHVtbiwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQsIGZyYW1lV2lkdGhTaXplLCBmcmFtZUhlaWdodFNpemUsIHJvd0hlaWdodCwpXG4gICAgICAgIHRoaXMuYW5pbWUgPSBhbmltZTtcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgIHRoaXMuY29sdW1uTGVuZ3RoID0gY29sdW1uTGVuZ3RoO1xuICAgICAgICB0aGlzLmN1c3RvbUFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsaWNrZWRTcG90eCA9IDA7XG4gICAgICAgIHRoaXMuY2xpY2tlZFNwb3R5ID0gMDtcbiAgICAgICAgdGhpcy53ZWFyaW5nSGF0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53YWxraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW92aW5nVG9Nb3VzZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IFwicDFcIlxuICAgICAgICB0aGlzLmJhc2VTa2luID0gXCJjaGFyX2FfcDFfMGJhc19odW1uX3YwMVwiO1xuICAgICAgICB0aGlzLm91dGZpdFN0eWxlID0gXCJjaGFyX2FfcDFfMW91dF9mc3RyX3YwNVwiO1xuICAgICAgICB0aGlzLmhhdFN0eWxlID0gXCJjaGFyX2FfcDFfNWhhdF9wbnR5X3YwM1wiO1xuICAgICAgICB0aGlzLmhhaXJTdHlsZSA9IFwiY2hhcl9hX3AxXzRoYXJfYm9iMV92MDFcIjtcblxuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciA9IHtcbiAgICAgICAgICAgIHAxOiBbXCJpZGxlVXBcIiwgXCJpZGxlUmlnaHRcIiwgXCJpZGxlTGVmdFwiLCBcImlkbGVEb3duXCIsIFwid2Fsa1JpZ2h0XCIsIFwid2Fsa0xlZnRcIiwgXCJ3YWxrRG93blwiLCBcIndhbGtVcFwiLCBcInJ1bkRvd25cIiwgXCJydW5VcFwiLCBcInJ1bkxlZnRcIiwgXCJydW5SaWdodFwiXSxcbiAgICAgICAgICAgIHA0OiBbXCJ0b2VUYXBEb3duXCIsIFwidG9lVGFwVXBcIiwgXCJ0b2VUYXBMZWZ0XCIsIFwidG9lVGFwUmlnaHRcIiwgXCJyZXN0QXJtT25TaWRlRG93blwiLCBcInJlc3RBcm1PblNpZGVVcFwiLCBcInJlc3RBcm1PblNpZGVMZWZ0XCIsIFwicmVzdEFybU9uU2lkZVJpZ2h0XCIsIFwibGF5aW5nT25CYWNrXCIsIFwibGF5aW5nT25CZWxseVwiLCBcImxheWluZ09uUmlnaHRcIiwgXCJsYXlpbmdPbkxlZnRcIl1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5pbWVQYWdlRGlyID0ge1xuICAgICAgICAgICAgY2hhcl9hX3AxXzBiYXNfaHVtbl92MDE6IGNoYXJfYV9wMV8wYmFzX2h1bW5fdjAxLFxuICAgICAgICAgICAgY2hhcl9hX3A0XzBiYXNfaHVtbl92MDE6IGNoYXJfYV9wNF8wYmFzX2h1bW5fdjAxLFxuICAgICAgICAgICAgY2hhcl9hX3AxXzFvdXRfZnN0cl92MDU6IGNoYXJfYV9wMV8xb3V0X2ZzdHJfdjA1LFxuICAgICAgICAgICAgY2hhcl9hX3A0XzFvdXRfZnN0cl92MDU6IGNoYXJfYV9wNF8xb3V0X2ZzdHJfdjA1LFxuICAgICAgICAgICAgY2hhcl9hX3AxXzRoYXJfYm9iMV92MDE6IGNoYXJfYV9wMV80aGFyX2JvYjFfdjAxLFxuICAgICAgICAgICAgY2hhcl9hX3A0XzRoYXJfYm9iMV92MDE6IGNoYXJfYV9wNF80aGFyX2JvYjFfdjAxLFxuICAgICAgICAgICAgY2hhcl9hX3AxXzVoYXRfcG50eV92MDM6IGNoYXJfYV9wMV81aGF0X3BudHlfdjAzLFxuICAgICAgICAgICAgY2hhcl9hX3A0XzVoYXRfcG50eV92MDM6IGNoYXJfYV9wNF81aGF0X3BudHlfdjAzLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXN0b21BbmltYXRpb25EaXIgPSB7XG4gICAgICAgICAgICBydW5MZWZ0OiB7XG4gICAgICAgICAgICAgICAgY29sdW1uczogWzAsMSw2LDMsNCw3XSxcbiAgICAgICAgICAgICAgICByb3c6IDcsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IFs1LCAzLCA4LCA1LCAzLCA4XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBydW5SaWdodDoge1xuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFswLDEsNiwzLDQsN10sXG4gICAgICAgICAgICAgICAgcm93OiA2LFxuICAgICAgICAgICAgICAgIHNwZWVkOiBbNSwgMywgOCwgNSwgMywgOF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnVuVXA6IHtcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbMCwxLDYsMyw0LDddLFxuICAgICAgICAgICAgICAgIHJvdzogNSxcbiAgICAgICAgICAgICAgICBzcGVlZDogWzUsIDMsIDgsIDUsIDMsIDhdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJ1bkRvd246IHtcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbMCwxLDYsMyw0LDddLFxuICAgICAgICAgICAgICAgIHJvdzogNCxcbiAgICAgICAgICAgICAgICBzcGVlZDogWzUsIDMsIDgsIDUsIDMsIDhdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICAvLyBhdCA2NCwgNjUsIHRoZSBoYWlyIGlzIGhlaWdodCwgYW5kIGZyYW1laGVpZ2h0c2l6ZSAtIDQwIGFuZCB5IGFuZCByb3doZWlnaHQgKyAyMFxuICAgICAgICAvLyBhdCA1NSwgNTUsIHRoZSBoYWlyIGlzIGhlaWdodCBhbmQgZnJhbWVoZWlnaHRzaXplIC0gMTAsIGFuZCB5ICsgMTcsIGFuZCByb3doZWlnaHQgKyAyMCBcbiAgICAgICBcbiAgICAgICAgLy8gaGFpciBzdHlsZSBmb3Igd2l6YXJkIGhhdCB3aGVuIGF2YXRhciBoZWlnaHQgYW5kIHdpZHRoIGlzIDUwICh3aWR0aCBpcyBhIHRpbnkgYml0IGxlc3Mgb2YgY291cnNlKVxuXG5cbiAgICAgICAgdGhpcy5vdXRmaXQgPSBuZXcgQXR0YWNobWVudCh3aWR0aCwgaGVpZ2h0LCBjaGFyX2FfcDFfMW91dF9mc3RyX3YwNSwgeCwgeSwgY3R4LCB0eXBlLCByb3csIGNvbHVtbiwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQsIGZyYW1lV2lkdGhTaXplLCBmcmFtZUhlaWdodFNpemUsIHJvd0hlaWdodCwgYW5pbWUsIGNvbHVtbkxlbmd0aClcblxuXG4gICAgICAgIGlmICh0aGlzLndlYXJpbmdIYXQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFpciA9IG5ldyBBdHRhY2htZW50KHdpZHRoLCBoZWlnaHQsIGNoYXJfYV9wMV80aGFyX2JvYjFfdjAxLCB4LCB5LCBjdHgsIHR5cGUsIHJvdywgY29sdW1uLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgZnJhbWVXaWR0aFNpemUsIGZyYW1lSGVpZ2h0U2l6ZSwgcm93SGVpZ2h0LCBhbmltZSwgY29sdW1uTGVuZ3RoLCAyMCwgdGhpcy5yb3csIHRoaXMuaGVpZ2h0LCAyMCwgNDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhaXIgPSBuZXcgQXR0YWNobWVudCh3aWR0aCwgaGVpZ2h0LCBjaGFyX2FfcDFfNGhhcl9ib2IxX3YwMSwgeCwgeSwgY3R4LCB0eXBlLCByb3csIGNvbHVtbiwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQsIGZyYW1lV2lkdGhTaXplLCBmcmFtZUhlaWdodFNpemUsIHJvd0hlaWdodCwgYW5pbWUsIGNvbHVtbkxlbmd0aCwgdGhpcy53ZWFyaW5nSGF0LCAnaGFpcicpXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgdGhpcy5oYXQgPSBuZXcgQXR0YWNobWVudCh3aWR0aCwgaGVpZ2h0LCBjaGFyX2FfcDFfNWhhdF9wbnR5X3YwMywgeCwgeSwgY3R4LCB0eXBlLCByb3csIGNvbHVtbiwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQsIGZyYW1lV2lkdGhTaXplLCBmcmFtZUhlaWdodFNpemUsIHJvd0hlaWdodCwgYW5pbWUsIGNvbHVtbkxlbmd0aClcblxuXG4gICAgICAgIHRoaXMuaW5pdE1vdmUoMCwgMCwgXCJpZGxlRG93blwiKVxuXG4gICAgfVxuXG4gICAgdG9nZ2xlSGF0KCkge1xuICAgICAgICBpZiAodGhpcy53ZWFyaW5nSGF0KSB7XG4gICAgICAgICAgICB0aGlzLndlYXJpbmdIYXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaGFpci5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuaGFpci55ID0gdGhpcy55O1xuICAgICAgICAgICAgdGhpcy5oYWlyLmZyYW1lSGVpZ2h0U2l6ZSA9IHRoaXMuZnJhbWVIZWlnaHRTaXplO1xuICAgICAgICAgICAgdGhpcy5oYWlyLnJvd0hlaWdodCA9IHRoaXMucm93SGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53ZWFyaW5nSGF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaGFpci5oZWlnaHQgPSB0aGlzLmhlaWdodCAtIHRoaXMuaGFpci5zcHJpdGVDcm9wUm93NEFuZDhCO1xuICAgICAgICAgICAgdGhpcy5oYWlyLnkgPSB0aGlzLnkgKyB0aGlzLmhhaXIuc3ByaXRlQ3JvcFJvdzJBbmQ2QTtcbiAgICAgICAgICAgIHRoaXMuaGFpci5mcmFtZUhlaWdodFNpemUgPSB0aGlzLmZyYW1lSGVpZ2h0U2l6ZSAtIDQwO1xuICAgICAgICAgICAgdGhpcy5oYWlyLnJvd0hlaWdodCA9IHRoaXMucm93SGVpZ2h0ICsgMjA7XG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlV2Fsa2luZygpIHtcbiAgICAgICAgdGhpcy53YWxraW5nID0gIXRoaXMud2Fsa2luZztcbiAgICB9XG5cbiAgICB0b2dnbGVMYXlpbmdJbkJlZCgpIHtcbiAgICAgICAgdGhpcy5sYXlpbmdJbkJlZCA9ICF0aGlzLmxheWluZ0luQmVkO1xuICAgIH1cblxuICAgIHRvZ2dsZU1vdmVUb01vdXNlKCkge1xuICAgICAgICB0aGlzLm1vdmluZ1RvTW91c2UgPSAhdGhpcy5tb3ZpbmdUb01vdXNlO1xuICAgIH1cblxuICAgIGNoZWNrU3BlZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNwZWVkWCA+IDAgJiYgdGhpcy5zcGVlZFggPiBNYXRoLmFicyh0aGlzLnNwZWVkWSkpIHtcbiAgICAgICAgICAgIHRoaXMud2Fsa2luZyA/IHRoaXMuYW5pbWUgPSBcIndhbGtSaWdodFwiIDogdGhpcy5hbmltZSA9IFwicnVuUmlnaHRcIlxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3BlZWRYIDwgMCAmJiBNYXRoLmFicyh0aGlzLnNwZWVkWCkgPiBNYXRoLmFicyh0aGlzLnNwZWVkWSkpIHtcbiAgICAgICAgICAgIHRoaXMud2Fsa2luZyA/IHRoaXMuYW5pbWUgPSBcIndhbGtMZWZ0XCIgOiB0aGlzLmFuaW1lID0gXCJydW5MZWZ0XCJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwZWVkWCA9PT0gMCAmJiAodGhpcy5hbmltZSA9PT0gXCJ3YWxrTGVmdFwiIHx8IHRoaXMuYW5pbWUgPT09IFwicnVuTGVmdFwiKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0TW92ZSgwLCAzLCBcImlkbGVMZWZ0XCIpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcGVlZFggPT09IDAgJiYgKHRoaXMuYW5pbWUgPT09IFwid2Fsa1JpZ2h0XCIgfHwgdGhpcy5hbmltZSA9PT0gXCJydW5SaWdodFwiKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0TW92ZSgwLCAyLCBcImlkbGVSaWdodFwiKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3BlZWRZID4gMCkge1xuICAgICAgICAgICAgdGhpcy53YWxraW5nID8gdGhpcy5hbmltZSA9IFwid2Fsa0Rvd25cIiA6IHRoaXMuYW5pbWUgPSBcInJ1bkRvd25cIlxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3BlZWRZIDwgMCkge1xuICAgICAgICAgICAgdGhpcy53YWxraW5nID8gdGhpcy5hbmltZSA9IFwid2Fsa1VwXCIgOiB0aGlzLmFuaW1lID0gXCJydW5VcFwiXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcGVlZFkgPT09IDAgJiYgKHRoaXMuYW5pbWUgPT09IFwid2Fsa1VwXCIgfHwgdGhpcy5hbmltZSA9PT0gXCJydW5VcFwiKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0TW92ZSgwLCAxLCBcImlkbGVVcFwiKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3BlZWRZID09PSAwICYmICh0aGlzLmFuaW1lID09PSBcIndhbGtEb3duXCIgfHwgdGhpcy5hbmltZSA9PT0gXCJydW5Eb3duXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRNb3ZlKDAsIDAsIFwiaWRsZURvd25cIilcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgaW5pdE1vdmUoc3RhcnQsIHJvdywgYW5pbWUpIHtcblxuICAgICAgICBpZiAoYW5pbWUgPT09ICd0b2VUYXBEb3duJyB8fCBhbmltZSA9PT0gXCJyZXN0QXJtT25TaWRlRG93blwiIHx8XG4gICAgICAgIGFuaW1lID09PSAndG9lVGFwVXAnIHx8IGFuaW1lID09PSBcInJlc3RBcm1PblNpZGVVcFwiIHx8IFxuICAgICAgICBhbmltZSA9PT0gJ3RvZVRhcFJpZ2h0JyB8fCBhbmltZSA9PT0gXCJyZXN0QXJtT25TaWRlUmlnaHRcIiB8fCBcbiAgICAgICAgYW5pbWUgPT09ICd0b2VUYXBMZWZ0JyB8fCBhbmltZSA9PT0gXCJyZXN0QXJtT25TaWRlTGVmdFwiKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLndhaXRpbmdJRCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25EaXIucDEuaW5jbHVkZXMoYW5pbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNwcml0ZVBhZ2UoXCJwMVwiKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uRGlyLnA0LmluY2x1ZGVzKGFuaW1lKSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTcHJpdGVQYWdlKFwicDRcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW5pbWUgPT09ICd3YWxrTGVmdCcpIHtcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMueSArIDNcbiAgICAgICAgfSBlbHNlIGlmIChhbmltZSA9PT0gJ3dhbGtSaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMueSArIDNcbiAgICAgICAgfSBlbHNlIGlmIChhbmltZSA9PT0gJ2lkbGVSaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMueSAtIDNcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWl0KFwicmVzdEFybU9uU2lkZVJpZ2h0XCIsIDAsIDYsIDE1MDAwKVxuICAgICAgICB9IGVsc2UgaWYgKGFuaW1lID09PSAnaWRsZUxlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgLSAzXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2FpdChcInJlc3RBcm1PblNpZGVMZWZ0XCIsIDAsIDcsIDE1MDAwKVxuICAgICAgICB9IGVsc2UgaWYgKGFuaW1lID09PSAnd2Fsa0Rvd24nKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyAzXG4gICAgICAgIH0gZWxzZSBpZiAoYW5pbWUgPT09ICd3YWxrVXAnKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyAzXG4gICAgICAgIH0gZWxzZSBpZiAoYW5pbWUgPT09ICdpZGxlRG93bicpIHtcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMueSAtIDNcbiAgICAgICAgICAgIHRoaXMuc3RhcnRXYWl0KFwicmVzdEFybU9uU2lkZURvd25cIiwgMCwgNCwgMTUwMDApXG4gICAgICAgIH0gZWxzZSBpZiAoYW5pbWUgPT09ICdpZGxlVXAnKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgLSAzXG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2FpdChcInJlc3RBcm1PblNpZGVVcFwiLCAwLCA1LCAxNTAwMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbmltZSA9PT0gXCJyZXN0QXJtT25TaWRlRG93blwiICB8fCBcbiAgICAgICAgYW5pbWUgPT09IFwicmVzdEFybU9uU2lkZVVwXCIgIHx8IFxuICAgICAgICBhbmltZSA9PT0gXCJyZXN0QXJtT25TaWRlUmlnaHRcIiB8fCBcbiAgICAgICAgYW5pbWUgPT09IFwicmVzdEFybU9uU2lkZUxlZnRcIikge1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgNFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFuaW1lID09PSAncmVzdEFybU9uU2lkZURvd24nKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2FpdChcInRvZVRhcERvd25cIiwgMSwgNCwgMTUwMDApXG4gICAgICAgIH0gZWxzZSBpZiAoYW5pbWUgPT09ICdyZXN0QXJtT25TaWRlVXAnKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0V2FpdChcInRvZVRhcFVwXCIsIDEsIDUsIDE1MDAwKVxuICAgICAgICB9IGVsc2UgaWYgKGFuaW1lID09PSAncmVzdEFybU9uU2lkZVJpZ2h0Jykge1xuICAgICAgICAgICAgdGhpcy5zdGFydFdhaXQoXCJ0b2VUYXBSaWdodFwiLCAxLCA2LCAxNTAwMClcbiAgICAgICAgfSBlbHNlIGlmIChhbmltZSA9PT0gJ3Jlc3RBcm1PblNpZGVMZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5zdGFydFdhaXQoXCJ0b2VUYXBMZWZ0XCIsIDEsIDcsIDE1MDAwKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2x1bW4gPSBzdGFydDtcbiAgICAgICAgdGhpcy5yb3cgPSByb3c7XG4gICAgICAgIHRoaXMuYW5pbWUgPSBhbmltZTtcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgIHRoaXMuY3VzdG9tQXJyUG9zID0gMDtcbiAgICAgICAgdGhpcy5jdXN0b21TcGVlZFBvcyA9IDA7XG4gICAgfVxuXG4gICAgbW92ZVdpdGhBbmltYXRpb24oZ3gsIGd5KSB7XG5cbiAgICAgICAgdGhpcy5jbGlja2VkU3BvdHggPSBneDtcbiAgICAgICAgdGhpcy5jbGlja2VkU3BvdHkgPSBneTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm1vdmluZ1RvTW91c2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcihneCwgZ3kpID09PSBcImxlZnRcIikge1xuICAgICAgICAgICAgdGhpcy53YWxraW5nID8gdGhpcy5pbml0TW92ZSgwLCA3LCBcIndhbGtMZWZ0XCIpIDogdGhpcy5pbml0TW92ZSgwLCA3LCBcInJ1bkxlZnRcIilcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXIoZ3gsIGd5KSA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICB0aGlzLndhbGtpbmcgPyB0aGlzLmluaXRNb3ZlKDAsIDYsIFwid2Fsa1JpZ2h0XCIpIDogdGhpcy5pbml0TW92ZSgwLCA2LCBcInJ1blJpZ2h0XCIpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyKGd4LCBneSkgPT09IFwidXBcIikge1xuICAgICAgICAgICAgdGhpcy53YWxraW5nID8gdGhpcy5pbml0TW92ZSgwLCA1LCBcIndhbGtVcFwiKSA6IHRoaXMuaW5pdE1vdmUoMCwgNSwgXCJydW5VcFwiKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcihneCwgZ3kpID09PSBcImRvd25cIikge1xuICAgICAgICAgICAgdGhpcy53YWxraW5nID8gdGhpcy5pbml0TW92ZSgwLCA0LCBcIndhbGtEb3duXCIpIDogdGhpcy5pbml0TW92ZSgwLCA0LCBcInJ1bkRvd25cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubW92ZVRvTW91c2UoZ3gsIGd5LCAwLjgpXG5cbiAgICAgICAgICAgIHRoaXMuY2hlY2tTcGVlZCgpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGxheUluQmVkKGJlZFgsIGJlZFkpIHtcbiAgICAgICAgdGhpcy5sYXlpbmdJbkJlZCA9IHRydWU7XG4gICAgICAgIHRoaXMueCA9IGJlZFggLSB0aGlzLndpZHRoIC8gNDtcbiAgICAgICAgdGhpcy55ID0gYmVkWTtcbiAgICAgICAgdGhpcy5zcGVlZFggPSAwO1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XG5cbiAgICAgICAgbGV0IHNsZWVwQXJyID0ge1xuICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiA3LFxuICAgICAgICAgICAgICAgIHJvdzogNCxcbiAgICAgICAgICAgICAgICBhbmltZTogXCJsYXlpbmdPbkJhY2tcIlxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAyOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IDcsXG4gICAgICAgICAgICAgICAgcm93OiA1LFxuICAgICAgICAgICAgICAgIGFuaW1lOiBcImxheWluZ09uQmVsbHlcIlxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAzOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IDcsXG4gICAgICAgICAgICAgICAgcm93OiA2LFxuICAgICAgICAgICAgICAgIGFuaW1lOiBcImxheWluZ09uUmlnaHRcIlxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICA0OiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IDcsXG4gICAgICAgICAgICAgICAgcm93OiA3LFxuICAgICAgICAgICAgICAgIGFuaW1lOiBcImxheWluZ09uTGVmdFwiXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYW5Qb3NpdGlvbiA9IHRoaXMucmFuZG9tSW50RnJvbUludGVydmFsKDEsIDQpXG5cbiAgICAgICAgdGhpcy5pbml0TW92ZShzbGVlcEFycltyYW5Qb3NpdGlvbl0uc3RhcnQsIHNsZWVwQXJyW3JhblBvc2l0aW9uXS5yb3csIHNsZWVwQXJyW3JhblBvc2l0aW9uXS5hbmltZSk7XG5cbiAgICB9XG5cbiAgICByYW5kb21JbnRGcm9tSW50ZXJ2YWwobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXG4gICAgfVxuXG4gICAgaW50ZXJzZWN0aW5nID0gKG9iamVjdCkgPT4ge1xuICAgICAgICB2YXIgbXlsZWZ0ID0gTnVtYmVyKHRoaXMueCArIDI0KTtcbiAgICAgICAgdmFyIG15cmlnaHQgPSBOdW1iZXIodGhpcy54ICsgMjQpICsgKHRoaXMud2lkdGggLyAzIC0gNik7XG4gICAgICAgIHZhciBteXRvcCA9IE51bWJlcih0aGlzLnkgKyAxMSk7XG4gICAgICAgIHZhciBteWJvdHRvbSA9IE51bWJlcih0aGlzLnkgKyAxMSkgKyAodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgdmFyIG90aGVybGVmdCA9IE51bWJlcihvYmplY3QueCk7XG4gICAgICAgIHZhciBvdGhlcnJpZ2h0ID0gTnVtYmVyKG9iamVjdC54KSArIChvYmplY3Qud2lkdGgpO1xuICAgICAgICB2YXIgb3RoZXJ0b3AgPSBOdW1iZXIob2JqZWN0LnkpO1xuICAgICAgICB2YXIgb3RoZXJib3R0b20gPSBOdW1iZXIob2JqZWN0LnkpICsgKG9iamVjdC5oZWlnaHQpO1xuICAgICAgICB2YXIgaW50ZXJzZWN0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKChteWJvdHRvbSA8IG90aGVydG9wKSB8fFxuICAgICAgICAobXl0b3AgPiBvdGhlcmJvdHRvbSkgfHxcbiAgICAgICAgKG15cmlnaHQgPCBvdGhlcmxlZnQpIHx8XG4gICAgICAgIChteWxlZnQgPiBvdGhlcnJpZ2h0KSkge1xuICAgICAgICAgICAgaW50ZXJzZWN0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludGVyc2VjdDtcbiAgICB9XG5cbiAgICBzeW5jQXR0YWNobWVudHMoKSB7XG5cbiAgICAgICAgdGhpcy5vdXRmaXQueCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy5vdXRmaXQueSA9IHRoaXMueTtcblxuICAgICAgICB0aGlzLmhhaXIueCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy5oYWlyLnkgPSB0aGlzLnk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmhhdC54ID0gdGhpcy54O1xuICAgICAgICB0aGlzLmhhdC55ID0gdGhpcy55O1xuICAgICAgICB0aGlzLm91dGZpdC5yb3cgPSB0aGlzLnJvdztcbiAgICAgICAgdGhpcy5vdXRmaXQuY29sdW1uID0gdGhpcy5jb2x1bW47XG4gICAgICAgIHRoaXMuaGF0LnJvdyA9IHRoaXMucm93O1xuICAgICAgICB0aGlzLmhhdC5jb2x1bW4gPSB0aGlzLmNvbHVtbjtcbiAgICAgICAgdGhpcy5oYWlyLnJvdyA9IHRoaXMucm93O1xuICAgICAgICB0aGlzLmhhaXIuc3ByaXRlQ3JvcFJvdzJCID0gdGhpcy5yb3c7XG4gICAgICAgIHRoaXMuaGFpci5jb2x1bW4gPSB0aGlzLmNvbHVtbjtcblxuICAgIH1cblxuICAgIGNoYW5nZVNwcml0ZVBhZ2UocGFnZSkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PT0gcGFnZSkgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5oYXRTdHlsZSA9IHRoaXMuaGF0U3R5bGUucmVwbGFjZSh0aGlzLmN1cnJlbnRQYWdlLCBwYWdlKVxuICAgICAgICB0aGlzLmhhdC5jb2xvciA9IHRoaXMuYW5pbWVQYWdlRGlyW3RoaXMuaGF0U3R5bGVdO1xuXG4gICAgICAgIHRoaXMuaGFpclN0eWxlID0gdGhpcy5oYWlyU3R5bGUucmVwbGFjZSh0aGlzLmN1cnJlbnRQYWdlLCBwYWdlKVxuICAgICAgICB0aGlzLmhhaXIuY29sb3IgPSB0aGlzLmFuaW1lUGFnZURpclt0aGlzLmhhaXJTdHlsZV07XG5cbiAgICAgICAgdGhpcy5vdXRmaXRTdHlsZSA9IHRoaXMub3V0Zml0U3R5bGUucmVwbGFjZSh0aGlzLmN1cnJlbnRQYWdlLCBwYWdlKVxuICAgICAgICB0aGlzLm91dGZpdC5jb2xvciA9IHRoaXMuYW5pbWVQYWdlRGlyW3RoaXMub3V0Zml0U3R5bGVdO1xuXG4gICAgICAgIHRoaXMuYmFzZVNraW4gPSB0aGlzLmJhc2VTa2luLnJlcGxhY2UodGhpcy5jdXJyZW50UGFnZSwgcGFnZSlcbiAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuYW5pbWVQYWdlRGlyW3RoaXMuYmFzZVNraW5dO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgIH1cblxuICAgIHN0YXJ0V2FpdChhbmltZSwgc3RhcnQsIHJvdywgdGltZSkge1xuICAgICAgICB0aGlzLndhaXRpbmdJRCA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuaW5pdE1vdmUoc3RhcnQsIHJvdywgYW5pbWUpXG4gICAgICAgIH0sIHRpbWUpXG4gICAgfVxuICAgIFxuXG4gICAgYW5pbWF0ZSgpIHtcblxuICAgICAgICB0aGlzLmNoZWNrU3BlZWQoKTtcblxuICAgICAgICB0aGlzLmNoZWNrSWZTdGlsbE1vdmluZyh0aGlzLmNsaWNrZWRTcG90eCwgdGhpcy5jbGlja2VkU3BvdHkpO1xuXG4gICAgICAgIHRoaXMubmV3UG9zKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgdGhpcy5zeW5jQXR0YWNobWVudHMoKTtcblxuXG4gICAgICAgIGlmICh0aGlzLnN0b3AgIT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbkRpci5wMS5pbmNsdWRlcyh0aGlzLmFuaW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3ByaXRlUGFnZShcInAxXCIpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWUgPT09IFwiaWRsZVJpZ2h0XCIpIHsgdGhpcy5zcHJpdGVBbmltYXRpb24oMCwgMCwgOCwgMiwgMSk7IH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFuaW1lID09PSBcImlkbGVMZWZ0XCIpIHsgdGhpcy5zcHJpdGVBbmltYXRpb24oMCwgMCwgOCwgMywgMSk7IH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFuaW1lID09PSAnaWRsZURvd24nKSB7IHRoaXMuc3ByaXRlQW5pbWF0aW9uKDAsIDAsIDgsIDAsIDEpOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hbmltZSA9PT0gJ2lkbGVVcCcpIHsgdGhpcy5zcHJpdGVBbmltYXRpb24oMCwgMCwgOCwgMSwgMSk7IH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFuaW1lID09PSBcIndhbGtSaWdodFwiKSB7IHRoaXMuc3ByaXRlQW5pbWF0aW9uKDAsIDUsIDgsIDYsIDEpOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hbmltZSA9PT0gXCJ3YWxrTGVmdFwiKSB7IHRoaXMuc3ByaXRlQW5pbWF0aW9uKDAsIDUsIDgsIDcsIDEpOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hbmltZSA9PT0gXCJ3YWxrRG93blwiKSB7IHRoaXMuc3ByaXRlQW5pbWF0aW9uKDAsIDUsIDgsIDQsIDEpOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hbmltZSA9PT0gXCJ3YWxrVXBcIikgeyB0aGlzLnNwcml0ZUFuaW1hdGlvbigwLCA1LCA4LCA1LCAxKTsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYW5pbWUgPT09IFwicnVuRG93blwiKSB7IHRoaXMuc3ByaXRlQ3VzdG9tQW5pbWF0aW9uKHRoaXMuY3VzdG9tQW5pbWF0aW9uRGlyLnJ1bkRvd24uY29sdW1ucywgdGhpcy5jdXN0b21BbmltYXRpb25EaXIucnVuRG93bi5zcGVlZCwgdGhpcy5jdXN0b21BbmltYXRpb25EaXIucnVuRG93bi5yb3cpIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFuaW1lID09PSBcInJ1blVwXCIpIHsgdGhpcy5zcHJpdGVDdXN0b21BbmltYXRpb24odGhpcy5jdXN0b21BbmltYXRpb25EaXIucnVuVXAuY29sdW1ucywgdGhpcy5jdXN0b21BbmltYXRpb25EaXIucnVuVXAuc3BlZWQsIHRoaXMuY3VzdG9tQW5pbWF0aW9uRGlyLnJ1blVwLnJvdykgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYW5pbWUgPT09IFwicnVuTGVmdFwiKSB7IHRoaXMuc3ByaXRlQ3VzdG9tQW5pbWF0aW9uKHRoaXMuY3VzdG9tQW5pbWF0aW9uRGlyLnJ1bkxlZnQuY29sdW1ucywgdGhpcy5jdXN0b21BbmltYXRpb25EaXIucnVuTGVmdC5zcGVlZCwgdGhpcy5jdXN0b21BbmltYXRpb25EaXIucnVuTGVmdC5yb3cpIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFuaW1lID09PSBcInJ1blJpZ2h0XCIpIHsgdGhpcy5zcHJpdGVDdXN0b21BbmltYXRpb24odGhpcy5jdXN0b21BbmltYXRpb25EaXIucnVuUmlnaHQuY29sdW1ucywgdGhpcy5jdXN0b21BbmltYXRpb25EaXIucnVuUmlnaHQuc3BlZWQsIHRoaXMuY3VzdG9tQW5pbWF0aW9uRGlyLnJ1blJpZ2h0LnJvdykgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFuaW1hdGlvbkRpci5wNC5pbmNsdWRlcyh0aGlzLmFuaW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3ByaXRlUGFnZShcInA0XCIpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWUgPT09IFwidG9lVGFwRG93blwiKSB7IHRoaXMuc3ByaXRlQW5pbWF0aW9uKDEsIDIsIDE2LCA0LCAxKSB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hbmltZSA9PT0gXCJ0b2VUYXBVcFwiKSB7IHRoaXMuc3ByaXRlQW5pbWF0aW9uKDEsIDIsIDE2LCA1LCAxKSB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hbmltZSA9PT0gXCJ0b2VUYXBSaWdodFwiKSB7IHRoaXMuc3ByaXRlQW5pbWF0aW9uKDEsIDIsIDE2LCA2LCAxKSB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hbmltZSA9PT0gXCJ0b2VUYXBMZWZ0XCIpIHsgdGhpcy5zcHJpdGVBbmltYXRpb24oMSwgMiwgMTYsIDcsIDEpIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFuaW1lID09PSBcInJlc3RBcm1PblNpZGVEb3duXCIpIHsgdGhpcy5zcHJpdGVBbmltYXRpb24oMCwgMCwgMTYsIDQsIDEpICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5hbmltZSA9PT0gXCJyZXN0QXJtT25TaWRlVXBcIikgeyB0aGlzLnNwcml0ZUFuaW1hdGlvbigwLCAwLCAxNiwgNSwgMSkgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFuaW1lID09PSBcInJlc3RBcm1PblNpZGVSaWdodFwiKSB7IHRoaXMuc3ByaXRlQW5pbWF0aW9uKDAsIDAsIDE2LCA2LCAxKSAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYW5pbWUgPT09IFwicmVzdEFybU9uU2lkZUxlZnRcIikgeyB0aGlzLnNwcml0ZUFuaW1hdGlvbigwLCAwLCAxNiwgNywgMSkgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFuaW1lID09PSBcImxheWluZ09uQmFja1wiKSB7IHRoaXMuc3ByaXRlQW5pbWF0aW9uKDcsIDcsIDE2LCA0LCAxKSAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYW5pbWUgPT09IFwibGF5aW5nT25CZWxseVwiKSB7IHRoaXMuc3ByaXRlQW5pbWF0aW9uKDcsIDcsIDE2LCA1LCAxKSAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYW5pbWUgPT09IFwibGF5aW5nT25SaWdodFwiKSB7IHRoaXMuc3ByaXRlQW5pbWF0aW9uKDcsIDcsIDE2LCA2LCAxKSAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYW5pbWUgPT09IFwibGF5aW5nT25MZWZ0XCIpIHsgdGhpcy5zcHJpdGVBbmltYXRpb24oNywgNywgMTYsIDcsIDEpICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZyYW1lKytcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5vdXRmaXQuYW5pbWF0ZSgpO1xuICAgICAgICB0aGlzLmhhaXIuYW5pbWF0ZSgpO1xuICAgICAgICBpZiAodGhpcy53ZWFyaW5nSGF0KSB0aGlzLmhhdC5hbmltYXRlKCk7XG4gICAgICAgIFxuICAgIH1cblxuXG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMzk5MDI5YjExZDMyMzM3ZDZjZlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==