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
        flashcardArea.style.overflow = "hidden"

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
        
        this.card1div.style.position = "absolute";
        this.card1div.style.zIndex = 10003

        this.card1divinner = document.createElement('div');
        this.card1divinner.style.backgroundColor = "blue";
        this.card1divinner.style.borderRadius = "10px";
        this.card1divfront = document.createElement('div');
        this.card1divback = document.createElement('div');

        this.card1div.classList.add("flip-card")
        this.card1divinner.classList.add("flip-card-inner")
        this.card1divfront.classList.add("flip-card-front")
        this.card1divfront.innerHTML = "hello"
        this.card1divback.classList.add("flip-card-back")
        this.card1divback.innerHTML = "goodbye"

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

        this.card1divinner.appendChild(this.card1divfront)
        this.card1divinner.appendChild(this.card1divback)
        this.card1div.appendChild(this.card1divinner)
        flashcardAreaBottom.appendChild(this.card1div)
        flashcardAreaBottom.appendChild(this.card2div)
        flashcardAreaBottom.appendChild(this.card3div)
        flashcardArea.appendChild(flashcardAreaBottom)
        document.body.appendChild(flashcardArea);

        this.card1div.addEventListener("mouseup", ()=>{
            if (this.flipped || this.dragging) {
                return false
             }
             this.flipped = true
            this.card1divinner.classList.add('flip-the-card-action')
        })

        this.card1div.addEventListener("touchstart", (e)=>{
            this.firstTouchY = e.touches[0].clientY
            this.firstTouchX = e.touches[0].clientX
        })

        this.currentTop = this.canvas.height * .4
        this.currentLeft = this.canvas.width / 2 - (this.card1div.style.width.slice(0, -2) / 2)
        console.log(this.currentLeft)

        this.card1div.addEventListener("touchmove", (e)=>{
            
            console.log(e.touches[0].clientX)
            this.card1div.style.top = `${this.currentTop + (e.touches[0].clientY - this.firstTouchY)}px`
            this.card1div.style.left = `${this.currentLeft + (e.touches[0].clientX - this.firstTouchX)}px`
            
            if (this.card1div.style.left.slice(0,-2) < this.currentLeft) {
                console.log("forget")
                this.card1div.style.transform = `rotate(-${(Math.abs(this.currentLeft - this.card1div.style.left.slice(0,-2))) / 10}deg)`
            } else {
                console.log("remember")
                this.card1div.style.transform = `rotate(${(Math.abs(this.currentLeft - this.card1div.style.left.slice(0,-2))) / 10}deg)`
            }
            
        })

        this.card1div.addEventListener("touchend", (e)=>{
            console.log(this.card1div.style.left)
            if (Math.abs(this.currentLeft - this.card1div.style.left.slice(0,-2)) > (this.card1div.style.width.slice(0,-2) / 5)) {
                if (this.card1div.style.left.slice(0,-2) < this.currentLeft) {
                    console.log("forget")
                    this.throwCardLeft(this)
                } else {
                    console.log("remember")
                    this.throwCardRight(this)
                }
            } else {
                if (this.card1div.style.left.slice(0,-2) < this.currentLeft) {
                    
                    this.moveCardBackLeft(this)

                    console.log("don't forget")

                } else {
                    this.moveCardBackRight(this)
                    console.log("don't remember")
                }
            }
            
        })
        
    }

    throwCardLeft(that) {

        let originalLeftDiff = Math.abs(that.card1div.style.left.slice(0,-2) - this.currentLeft)
        let originalTopDiff = Math.abs(that.card1div.style.top.slice(0,-2) - this.currentTop)

        let speedRatio = .1

        console.log("moving?")
        
        if (originalLeftDiff > originalTopDiff) {
            while (originalLeftDiff * speedRatio > 15) {
            speedRatio -= 0.01
            }
            while (originalLeftDiff * speedRatio < 15) {
                speedRatio += 0.01
            }
        } else {
            while (originalTopDiff * speedRatio > 15) {
            speedRatio -= 0.01
            }
            while (originalTopDiff * speedRatio < 15) {
                speedRatio += 0.01
            }
        }

        
        console.log(originalLeftDiff * speedRatio)
        console.log(originalTopDiff * speedRatio)
        if (originalLeftDiff * speedRatio )
        setTimeout(function moveBack() {
            if (that.card1div.style.left.slice(0,-2) < that.currentLeft && that.card1div.style.top.slice(0,-2) < that.currentTop) {
                
                that.card1div.style.left = `${Number(that.card1div.style.left.slice(0,-2)) - (originalLeftDiff * speedRatio)}px`
                that.card1div.style.top = `${Number(that.card1div.style.top.slice(0,-2)) - (originalTopDiff * speedRatio)}px`
                // that.card1div.style.transform = `rotate(-${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0,-2))) / 10}deg)`
                console.log(that.card1div.style.left)
                console.log('moving!')
                setTimeout(moveBack, 10)
            } else if (that.card1div.style.left.slice(0,-2) < that.currentLeft && that.card1div.style.top.slice(0,-2) > that.currentTop) {
                
                that.card1div.style.left = `${Number(that.card1div.style.left.slice(0,-2)) - (originalLeftDiff * speedRatio)}px`
                that.card1div.style.top = `${Number(that.card1div.style.top.slice(0,-2)) + (originalTopDiff * speedRatio)}px`
                // that.card1div.style.transform = `rotate(-${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0,-2))) / 10}deg)`
                console.log(that.card1div.style.left)
                console.log('moving!')
                setTimeout(moveBack, 10)
            }
        }, 10)

    }

    throwCardRight(that) {

        let originalLeftDiff = Math.abs(that.card1div.style.left.slice(0,-2) - this.currentLeft)
        let originalTopDiff = Math.abs(that.card1div.style.top.slice(0,-2) - this.currentTop)

        let speedRatio = .1

        console.log("moving?")
        
        if (originalLeftDiff > originalTopDiff) {
            while (originalLeftDiff * speedRatio > 15) {
            speedRatio -= 0.01
            }
            while (originalLeftDiff * speedRatio < 15) {
                speedRatio += 0.01
            }
        } else {
            while (originalTopDiff * speedRatio > 15) {
            speedRatio -= 0.01
            }
            while (originalTopDiff * speedRatio < 15) {
                speedRatio += 0.01
            }
        }

        
        console.log(originalLeftDiff * speedRatio)
        console.log(originalTopDiff * speedRatio)
        if (originalLeftDiff * speedRatio )
        setTimeout(function moveBack() {
            if (that.card1div.style.left.slice(0,-2) > that.currentLeft && that.card1div.style.top.slice(0,-2) > that.currentTop) {
                
                that.card1div.style.left = `${Number(that.card1div.style.left.slice(0,-2)) + (originalLeftDiff * speedRatio)}px`
                that.card1div.style.top = `${Number(that.card1div.style.top.slice(0,-2)) + (originalTopDiff * speedRatio)}px`
                // that.card1div.style.transform = `rotate(-${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0,-2))) / 10}deg)`
                console.log(that.card1div.style.left)
                console.log('moving!')
                setTimeout(moveBack, 10)
            } else if (that.card1div.style.left.slice(0,-2) > that.currentLeft && that.card1div.style.top.slice(0,-2) < that.currentTop) {
                
                that.card1div.style.left = `${Number(that.card1div.style.left.slice(0,-2)) + (originalLeftDiff * speedRatio)}px`
                that.card1div.style.top = `${Number(that.card1div.style.top.slice(0,-2)) - (originalTopDiff * speedRatio)}px`
                // that.card1div.style.transform = `rotate(-${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0,-2))) / 10}deg)`
                console.log(that.card1div.style.left)
                console.log('moving!')
                setTimeout(moveBack, 10)
            }
        }, 10)

    }

    moveCardBackLeft(that) {
        
        let originalLeftDiff = Math.abs(that.card1div.style.left.slice(0,-2) - this.currentLeft)
        let originalTopDiff = Math.abs(that.card1div.style.top.slice(0,-2) - this.currentTop)

        console.log("moving?")
        setTimeout(function moveBack() {
            if (that.card1div.style.left.slice(0,-2) < that.currentLeft && that.card1div.style.top.slice(0,-2) < that.currentTop) {
                
                that.card1div.style.left = `${Number(that.card1div.style.left.slice(0,-2)) + (originalLeftDiff * .1)}px`
                that.card1div.style.top = `${Number(that.card1div.style.top.slice(0,-2)) + (originalTopDiff * .1)}px`
                that.card1div.style.transform = `rotate(-${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0,-2))) / 10}deg)`
                console.log(that.card1div.style.left)
                console.log('moving!')
                setTimeout(moveBack, 10)
            } else if (that.card1div.style.left.slice(0,-2) < that.currentLeft && that.card1div.style.top.slice(0,-2) > that.currentTop) {
                
                that.card1div.style.left = `${Number(that.card1div.style.left.slice(0,-2)) + (originalLeftDiff * .1)}px`
                that.card1div.style.top = `${Number(that.card1div.style.top.slice(0,-2)) - (originalTopDiff * .1)}px`
                that.card1div.style.transform = `rotate(-${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0,-2))) / 10}deg)`
                console.log(that.card1div.style.left)
                console.log('moving!')
                setTimeout(moveBack, 10)
            }
        }, 10)

    }

    moveCardBackRight(that) {
        let originalLeftDiff = Math.abs(that.card1div.style.left.slice(0,-2) - this.currentLeft)
        let originalTopDiff = Math.abs(that.card1div.style.top.slice(0,-2) - this.currentTop)

        console.log("moving?")
        setTimeout(function moveBack() {
            if (that.card1div.style.left.slice(0,-2) > that.currentLeft && that.card1div.style.top.slice(0,-2) < that.currentTop) {
                
                that.card1div.style.left = `${Number(that.card1div.style.left.slice(0,-2)) - (originalLeftDiff * .1)}px`
                that.card1div.style.top = `${Number(that.card1div.style.top.slice(0,-2)) + (originalTopDiff * .1)}px`
                that.card1div.style.transform = `rotate(${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0,-2))) / 10}deg)`
                console.log(that.card1div.style.left)
                console.log('moving!')
                setTimeout(moveBack, 10)
            } else if (that.card1div.style.left.slice(0,-2) > that.currentLeft && that.card1div.style.top.slice(0,-2) > that.currentTop) {
                
                that.card1div.style.left = `${Number(that.card1div.style.left.slice(0,-2)) - (originalLeftDiff * .1)}px`
                that.card1div.style.top = `${Number(that.card1div.style.top.slice(0,-2)) - (originalTopDiff * .1)}px`
                that.card1div.style.transform = `rotate(${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0,-2))) / 10}deg)`
                console.log(that.card1div.style.left)
                console.log('moving!')
                setTimeout(moveBack, 10)
            }
        }, 10)
    }

    click(e) {

        if (e.type === "mousedown") {

        }

        if (e.type === "mouseup") {
            this.clickGX = this.gx;
            this.clickGY = this.gy;
            this.adventureGuy.moveWithAnimation(this.gx, this.gy)
            if (this.card1.clicked(this.gx, this.gy)) this.flipCard()
        }



    }


    resetCard() {
        console.log("reset")
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
/******/ 	__webpack_require__.h = () => ("7f35c922f3274b3df302")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTVkOGJhYWRjZTFlOGRmYjkxOTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNOO0FBQ2lEO0FBQ2pCOzs7QUFHOUM7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrQ0FBTSxzQ0FBc0MsK0VBQVM7QUFDckY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLGtEQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrREFBUzs7QUFFbEM7QUFDQTtBQUNBLHlCQUF5QixrREFBUzs7O0FBR2xDOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0QsV0FBVyxZQUFZLFlBQVksWUFBWSxnQkFBZ0I7QUFDckg7QUFDQSx1Q0FBdUMsd0JBQXdCO0FBQy9EO0FBQ0E7QUFDQSw0Q0FBNEMsc0NBQXNDO0FBQ2xGLFVBQVU7QUFDViw0Q0FBNEMsNENBQTRDO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLDZDQUE2QztBQUNyRix1Q0FBdUMsNENBQTRDO0FBQ25GO0FBQ0EsMkNBQTJDLHNGQUFzRjtBQUNqSTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsNkNBQTZDO0FBQ3JGLHVDQUF1Qyw0Q0FBNEM7QUFDbkY7QUFDQSwyQ0FBMkMsa0xBQWtMO0FBQzdOO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0RBQVM7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNERBQTREO0FBQ3JHLDBDQUEwQyw2REFBNkQ7QUFDdkc7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELHlFQUF5RTtBQUNwSSxjQUFjO0FBQ2Q7QUFDQSwwREFBMEQseUVBQXlFO0FBQ25JO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsK0VBQStFO0FBQzdILDZDQUE2Qyw2RUFBNkU7QUFDMUgsOERBQThELHlFQUF5RTtBQUN2STtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSw4Q0FBOEMsK0VBQStFO0FBQzdILDZDQUE2Qyw2RUFBNkU7QUFDMUgsOERBQThELHlFQUF5RTtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsK0VBQStFO0FBQzdILDZDQUE2Qyw2RUFBNkU7QUFDMUgsOERBQThELHlFQUF5RTtBQUN2STtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSw4Q0FBOEMsK0VBQStFO0FBQzdILDZDQUE2Qyw2RUFBNkU7QUFDMUgsOERBQThELHlFQUF5RTtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdUVBQXVFO0FBQ3JILDZDQUE2QyxxRUFBcUU7QUFDbEgsMkRBQTJELHlFQUF5RTtBQUNwSTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSw4Q0FBOEMsdUVBQXVFO0FBQ3JILDZDQUE2QyxxRUFBcUU7QUFDbEgsMkRBQTJELHlFQUF5RTtBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHVFQUF1RTtBQUNySCw2Q0FBNkMscUVBQXFFO0FBQ2xILDBEQUEwRCx5RUFBeUU7QUFDbkk7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsOENBQThDLHVFQUF1RTtBQUNySCw2Q0FBNkMscUVBQXFFO0FBQ2xILDBEQUEwRCx5RUFBeUU7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7VUN0WEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaXRfYnVkZGllcy8uL3NyYy9zdHVkeVBhZ2UuanMiLCJ3ZWJwYWNrOi8vYml0X2J1ZGRpZXMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi9hdmF0YXInXG5pbXBvcnQgQXZhdGFySW1nIGZyb20gJy4vLi4vaW1hZ2VzL21hbmEvY2hhcl9hX3AxL2NoYXJfYV9wMV8wYmFzX2h1bW5fdjAxLnBuZydcbmltcG9ydCBIb3VzZSBmcm9tICcuLy4uL2ltYWdlcy9ob21lL2F2YXRhclN0YXJ0aW5nSG91c2UyLnBuZydcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHVkeVBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBkaW1lbnNpb25zKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcblxuICAgICAgICBsZXQgYXZhdGFyVGVtcFdpZHRoID0gdGhpcy5jYW52YXMud2lkdGggKiAwLjQ5MjMwNzY5MjMwNzY5MjM0XG4gICAgICAgIHRoaXMuYXZhdGFyV2lkdGggPSAoYXZhdGFyVGVtcFdpZHRoICUgNjQpID49IDIuNSA/IHBhcnNlSW50KGF2YXRhclRlbXBXaWR0aCAvIDY0KSAqIDY0ICsgNjQgOiBwYXJzZUludChhdmF0YXJUZW1wV2lkdGggLyA2NCkgKiA2NFxuICAgICAgICB0aGlzLmF2YXRhckhlaWdodCA9ICh0aGlzLmF2YXRhcldpZHRoIC8gNjQpICogNjU7XG4gICAgICAgIHRoaXMuY2FudmFzQXZhdGFyUmF0aW8gPSAodGhpcy5hdmF0YXJXaWR0aCAvIDY0KVxuICAgICAgICB0aGlzLmFkdmVudHVyZUd1eSA9IG5ldyBBdmF0YXIodGhpcy5hdmF0YXJXaWR0aCwgdGhpcy5hdmF0YXJIZWlnaHQsIEF2YXRhckltZywgdGhpcy5jYW52YXMud2lkdGggLyAyIC0gdGhpcy5hdmF0YXJXaWR0aCAvIDEuNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIHRoaXMuYXZhdGFySGVpZ2h0IC8gMiwgdGhpcy5jdHgsIFwic3ByaXRlXCIsIDUsIDMsIDY0LCA2NSwgNjQsIDY1LCAwLCAndG9lVGFwRG93bicsIDcsIHRoaXMuY2FudmFzQXZhdGFyUmF0aW8pO1xuICAgICAgIFxuICAgICAgICB0aGlzLmNhcmQxV2lkdGggPSA5NSAqIHRoaXMuY2FudmFzQXZhdGFyUmF0aW87XG4gICAgICAgIHRoaXMuY2FyZDFXaWR0aE9yaWdpbmFsID0gdGhpcy5jYXJkMVdpZHRoXG5cbiAgICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoID4gdGhpcy5jYW52YXMuaGVpZ2h0ICogLjYpIHtcbiAgICAgICAgICAgIC8vIHNxdWFyZSBjYXJkcyBmb3IgaXBhZHNcbiAgICAgICAgICAgIHRoaXMuY2FyZDFIZWlnaHQgPSB0aGlzLmNhcmQxV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhcmQxSGVpZ2h0ID0gdGhpcy5jYXJkMVdpZHRoICogMS4zO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuY2FyZDEgPSBuZXcgQ29tcG9uZW50KHRoaXMuY2FyZDFXaWR0aCwgdGhpcy5jYXJkMUhlaWdodCwgXCJibHVlXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIHRoaXMuY2FyZDFXaWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDMsIHRoaXMuY3R4LCBcImZsYXNoY2FyZGNvbG9yXCIpXG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhcmQySGVpZ2h0ID0gdGhpcy5jYXJkMUhlaWdodCAqIC45XG4gICAgICAgIHRoaXMuY2FyZDJXaWR0aCA9IHRoaXMuY2FyZDFXaWR0aCAqIC45XG4gICAgICAgIHRoaXMuY2FyZDIgPSBuZXcgQ29tcG9uZW50KHRoaXMuY2FyZDJXaWR0aCwgdGhpcy5jYXJkMkhlaWdodCwgXCJyZWRcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyIC0gdGhpcy5jYXJkMldpZHRoIC8gMiwgdGhpcy5jYXJkMS55ICsgdGhpcy5jYXJkMUhlaWdodCAtIHRoaXMuY2FyZDJIZWlnaHQgKyAoMiAqIHRoaXMuY2FudmFzQXZhdGFyUmF0aW8pLCB0aGlzLmN0eCwgXCJmbGFzaGNhcmRjb2xvclwiKVxuXG4gICAgICAgIHRoaXMuY2FyZDNIZWlnaHQgPSB0aGlzLmNhcmQySGVpZ2h0ICogLjlcbiAgICAgICAgdGhpcy5jYXJkM1dpZHRoID0gdGhpcy5jYXJkMldpZHRoICogLjlcbiAgICAgICAgdGhpcy5jYXJkMyA9IG5ldyBDb21wb25lbnQodGhpcy5jYXJkM1dpZHRoLCB0aGlzLmNhcmQzSGVpZ2h0LCBcImdyZWVuXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIHRoaXMuY2FyZDNXaWR0aCAvIDIsIHRoaXMuY2FyZDIueSArIHRoaXMuY2FyZDJIZWlnaHQgLSB0aGlzLmNhcmQzSGVpZ2h0ICsgKDIgKiB0aGlzLmNhbnZhc0F2YXRhclJhdGlvKSwgdGhpcy5jdHgsIFwiZmxhc2hjYXJkY29sb3JcIilcblxuXG4gICAgICAgIHRoaXMuc2V0VXBGbGFzaENhcmRzKClcblxuICAgIH1cblxuICAgIHNldFVwRmxhc2hDYXJkcygpIHtcblxuXG5cbiAgICAgICAgbGV0IGZsYXNoY2FyZEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmxhc2hjYXJkQXJlYS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiXG4gICAgICAgIGZsYXNoY2FyZEFyZWEuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCJcbiAgICAgICAgZmxhc2hjYXJkQXJlYS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgZmxhc2hjYXJkQXJlYS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCJcbiAgICAgICAgZmxhc2hjYXJkQXJlYS5zdHlsZS5hbGlnbkl0ZW1zID0gXCJmbGV4LWVuZFwiXG4gICAgICAgIGZsYXNoY2FyZEFyZWEuc3R5bGUuekluZGV4ID0gMTAwMDA7XG4gICAgICAgIGZsYXNoY2FyZEFyZWEuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIGZsYXNoY2FyZEFyZWEuc3R5bGUudG9wID0gMDtcbiAgICAgICAgZmxhc2hjYXJkQXJlYS5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgZmxhc2hjYXJkQXJlYS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcblxuICAgICAgICBsZXQgZmxhc2hjYXJkQXJlYUJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmbGFzaGNhcmRBcmVhQm90dG9tLnN0eWxlLndpZHRoID0gXCIxMDAlXCJcbiAgICAgICAgZmxhc2hjYXJkQXJlYUJvdHRvbS5zdHlsZS5oZWlnaHQgPSBcIjYwJVwiXG4gICAgICAgIGZsYXNoY2FyZEFyZWFCb3R0b20uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIGZsYXNoY2FyZEFyZWFCb3R0b20uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiXG4gICAgICAgIGZsYXNoY2FyZEFyZWFCb3R0b20uc3R5bGUuYWxpZ25JdGVtcyA9IFwiZmxleC1zdGFydFwiXG5cbiAgICAgICAgdGhpcy5jYXJkMWRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBlbGVtRGl2LnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvcGFjaXR5OjAuMzt6LWluZGV4OjEwMDtiYWNrZ3JvdW5kOiMwMDA7JztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2FyZDFkaXYuc3R5bGUud2lkdGggPSBgJHt0aGlzLmNhbnZhcy53aWR0aCAqIC43NX1weGA7XG4gICAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCA+IHRoaXMuY2FudmFzLmhlaWdodCAqIC42KSB7XG4gICAgICAgICAgICAvLyBzcXVhcmUgY2FyZHMgZm9yIGlwYWRzXG4gICAgICAgICAgICB0aGlzLmNhcmQxZGl2LnN0eWxlLmhlaWdodCA9IGAke3RoaXMuY2FyZDFkaXYuc3R5bGUud2lkdGguc2xpY2UoMCwtMil9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYXJkMWRpdi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmNhcmQxZGl2LnN0eWxlLndpZHRoLnNsaWNlKDAsLTIpICogMS4zfXB4YDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5jYXJkMWRpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5jYXJkMWRpdi5zdHlsZS56SW5kZXggPSAxMDAwM1xuXG4gICAgICAgIHRoaXMuY2FyZDFkaXZpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNhcmQxZGl2aW5uZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibHVlXCI7XG4gICAgICAgIHRoaXMuY2FyZDFkaXZpbm5lci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICAgICAgdGhpcy5jYXJkMWRpdmZyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY2FyZDFkaXZiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGhpcy5jYXJkMWRpdi5jbGFzc0xpc3QuYWRkKFwiZmxpcC1jYXJkXCIpXG4gICAgICAgIHRoaXMuY2FyZDFkaXZpbm5lci5jbGFzc0xpc3QuYWRkKFwiZmxpcC1jYXJkLWlubmVyXCIpXG4gICAgICAgIHRoaXMuY2FyZDFkaXZmcm9udC5jbGFzc0xpc3QuYWRkKFwiZmxpcC1jYXJkLWZyb250XCIpXG4gICAgICAgIHRoaXMuY2FyZDFkaXZmcm9udC5pbm5lckhUTUwgPSBcImhlbGxvXCJcbiAgICAgICAgdGhpcy5jYXJkMWRpdmJhY2suY2xhc3NMaXN0LmFkZChcImZsaXAtY2FyZC1iYWNrXCIpXG4gICAgICAgIHRoaXMuY2FyZDFkaXZiYWNrLmlubmVySFRNTCA9IFwiZ29vZGJ5ZVwiXG5cbiAgICAgICAgdGhpcy5jYXJkMmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNhcmQyZGl2LnN0eWxlLmhlaWdodCA9IGAke3RoaXMuY2FyZDFkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSAqIC45fXB4YDtcbiAgICAgICAgdGhpcy5jYXJkMmRpdi5zdHlsZS53aWR0aCA9IGAke3RoaXMuY2FyZDFkaXYuc3R5bGUud2lkdGguc2xpY2UoMCwgLTIpICogLjl9cHhgO1xuICAgICAgICB0aGlzLmNhcmQyZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgdGhpcy5jYXJkMmRpdi5zdHlsZS5tYXJnaW5Ub3AgPSBgJHt0aGlzLmNhcmQxZGl2LnN0eWxlLmhlaWdodC5zbGljZSgwLCAtMikgLSB0aGlzLmNhcmQyZGl2LnN0eWxlLmhlaWdodC5zbGljZSgwLCAtMikgKyA3fXB4YFxuICAgICAgICB0aGlzLmNhcmQyZGl2LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICAgICAgICB0aGlzLmNhcmQyZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB0aGlzLmNhcmQyZGl2LnN0eWxlLnpJbmRleCA9IDEwMDAyXG5cbiAgICAgICAgdGhpcy5jYXJkM2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNhcmQzZGl2LnN0eWxlLmhlaWdodCA9IGAke3RoaXMuY2FyZDJkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSAqIC45fXB4YDtcbiAgICAgICAgdGhpcy5jYXJkM2Rpdi5zdHlsZS53aWR0aCA9IGAke3RoaXMuY2FyZDJkaXYuc3R5bGUud2lkdGguc2xpY2UoMCwgLTIpICogLjl9cHhgO1xuICAgICAgICB0aGlzLmNhcmQzZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICAgIHRoaXMuY2FyZDNkaXYuc3R5bGUubWFyZ2luVG9wID0gYCR7KHRoaXMuY2FyZDFkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSAtIHRoaXMuY2FyZDJkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSkgKyA3ICsgKHRoaXMuY2FyZDJkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSAtIHRoaXMuY2FyZDNkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSkgKyA3fXB4YFxuICAgICAgICB0aGlzLmNhcmQzZGl2LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICAgICAgICB0aGlzLmNhcmQzZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB0aGlzLmNhcmQzZGl2LnN0eWxlLnpJbmRleCA9IDEwMDAxXG5cbiAgICAgICAgdGhpcy5jYXJkMyA9IG5ldyBDb21wb25lbnQodGhpcy5jYXJkM1dpZHRoLCB0aGlzLmNhcmQzSGVpZ2h0LCBcImdyZWVuXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIHRoaXMuY2FyZDNXaWR0aCAvIDIsIHRoaXMuY2FyZDIueSArIHRoaXMuY2FyZDJIZWlnaHQgLSB0aGlzLmNhcmQzSGVpZ2h0ICsgKDIgKiB0aGlzLmNhbnZhc0F2YXRhclJhdGlvKSwgdGhpcy5jdHgsIFwiZmxhc2hjYXJkY29sb3JcIilcblxuICAgICAgICB0aGlzLmNhcmQxZGl2aW5uZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXJkMWRpdmZyb250KVxuICAgICAgICB0aGlzLmNhcmQxZGl2aW5uZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXJkMWRpdmJhY2spXG4gICAgICAgIHRoaXMuY2FyZDFkaXYuYXBwZW5kQ2hpbGQodGhpcy5jYXJkMWRpdmlubmVyKVxuICAgICAgICBmbGFzaGNhcmRBcmVhQm90dG9tLmFwcGVuZENoaWxkKHRoaXMuY2FyZDFkaXYpXG4gICAgICAgIGZsYXNoY2FyZEFyZWFCb3R0b20uYXBwZW5kQ2hpbGQodGhpcy5jYXJkMmRpdilcbiAgICAgICAgZmxhc2hjYXJkQXJlYUJvdHRvbS5hcHBlbmRDaGlsZCh0aGlzLmNhcmQzZGl2KVxuICAgICAgICBmbGFzaGNhcmRBcmVhLmFwcGVuZENoaWxkKGZsYXNoY2FyZEFyZWFCb3R0b20pXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZmxhc2hjYXJkQXJlYSk7XG5cbiAgICAgICAgdGhpcy5jYXJkMWRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKT0+e1xuICAgICAgICAgICAgaWYgKHRoaXMuZmxpcHBlZCB8fCB0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHRoaXMuZmxpcHBlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuY2FyZDFkaXZpbm5lci5jbGFzc0xpc3QuYWRkKCdmbGlwLXRoZS1jYXJkLWFjdGlvbicpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jYXJkMWRpdi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZSk9PntcbiAgICAgICAgICAgIHRoaXMuZmlyc3RUb3VjaFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICAgICAgdGhpcy5maXJzdFRvdWNoWCA9IGUudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jdXJyZW50VG9wID0gdGhpcy5jYW52YXMuaGVpZ2h0ICogLjRcbiAgICAgICAgdGhpcy5jdXJyZW50TGVmdCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtICh0aGlzLmNhcmQxZGl2LnN0eWxlLndpZHRoLnNsaWNlKDAsIC0yKSAvIDIpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudExlZnQpXG5cbiAgICAgICAgdGhpcy5jYXJkMWRpdi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIChlKT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRvdWNoZXNbMF0uY2xpZW50WClcbiAgICAgICAgICAgIHRoaXMuY2FyZDFkaXYuc3R5bGUudG9wID0gYCR7dGhpcy5jdXJyZW50VG9wICsgKGUudG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5maXJzdFRvdWNoWSl9cHhgXG4gICAgICAgICAgICB0aGlzLmNhcmQxZGl2LnN0eWxlLmxlZnQgPSBgJHt0aGlzLmN1cnJlbnRMZWZ0ICsgKGUudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5maXJzdFRvdWNoWCl9cHhgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikgPCB0aGlzLmN1cnJlbnRMZWZ0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb3JnZXRcIilcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmQxZGl2LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoLSR7KE1hdGguYWJzKHRoaXMuY3VycmVudExlZnQgLSB0aGlzLmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpKSAvIDEwfWRlZylgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtZW1iZXJcIilcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmQxZGl2LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHsoTWF0aC5hYnModGhpcy5jdXJyZW50TGVmdCAtIHRoaXMuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLC0yKSkpIC8gMTB9ZGVnKWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY2FyZDFkaXYuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIChlKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXJkMWRpdi5zdHlsZS5sZWZ0KVxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuY3VycmVudExlZnQgLSB0aGlzLmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpID4gKHRoaXMuY2FyZDFkaXYuc3R5bGUud2lkdGguc2xpY2UoMCwtMikgLyA1KSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikgPCB0aGlzLmN1cnJlbnRMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9yZ2V0XCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dDYXJkTGVmdCh0aGlzKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtZW1iZXJcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0NhcmRSaWdodCh0aGlzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLC0yKSA8IHRoaXMuY3VycmVudExlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUNhcmRCYWNrTGVmdCh0aGlzKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9uJ3QgZm9yZ2V0XCIpXG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDYXJkQmFja1JpZ2h0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9uJ3QgcmVtZW1iZXJcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdGhyb3dDYXJkTGVmdCh0aGF0KSB7XG5cbiAgICAgICAgbGV0IG9yaWdpbmFsTGVmdERpZmYgPSBNYXRoLmFicyh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikgLSB0aGlzLmN1cnJlbnRMZWZ0KVxuICAgICAgICBsZXQgb3JpZ2luYWxUb3BEaWZmID0gTWF0aC5hYnModGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwtMikgLSB0aGlzLmN1cnJlbnRUb3ApXG5cbiAgICAgICAgbGV0IHNwZWVkUmF0aW8gPSAuMVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW92aW5nP1wiKVxuICAgICAgICBcbiAgICAgICAgaWYgKG9yaWdpbmFsTGVmdERpZmYgPiBvcmlnaW5hbFRvcERpZmYpIHtcbiAgICAgICAgICAgIHdoaWxlIChvcmlnaW5hbExlZnREaWZmICogc3BlZWRSYXRpbyA+IDE1KSB7XG4gICAgICAgICAgICBzcGVlZFJhdGlvIC09IDAuMDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChvcmlnaW5hbExlZnREaWZmICogc3BlZWRSYXRpbyA8IDE1KSB7XG4gICAgICAgICAgICAgICAgc3BlZWRSYXRpbyArPSAwLjAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxUb3BEaWZmICogc3BlZWRSYXRpbyA+IDE1KSB7XG4gICAgICAgICAgICBzcGVlZFJhdGlvIC09IDAuMDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChvcmlnaW5hbFRvcERpZmYgKiBzcGVlZFJhdGlvIDwgMTUpIHtcbiAgICAgICAgICAgICAgICBzcGVlZFJhdGlvICs9IDAuMDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhvcmlnaW5hbExlZnREaWZmICogc3BlZWRSYXRpbylcbiAgICAgICAgY29uc29sZS5sb2cob3JpZ2luYWxUb3BEaWZmICogc3BlZWRSYXRpbylcbiAgICAgICAgaWYgKG9yaWdpbmFsTGVmdERpZmYgKiBzcGVlZFJhdGlvIClcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiBtb3ZlQmFjaygpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikgPCB0aGF0LmN1cnJlbnRMZWZ0ICYmIHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wLnNsaWNlKDAsLTIpIDwgdGhhdC5jdXJyZW50VG9wKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0ID0gYCR7TnVtYmVyKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLC0yKSkgLSAob3JpZ2luYWxMZWZ0RGlmZiAqIHNwZWVkUmF0aW8pfXB4YFxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wID0gYCR7TnVtYmVyKHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wLnNsaWNlKDAsLTIpKSAtIChvcmlnaW5hbFRvcERpZmYgKiBzcGVlZFJhdGlvKX1weGBcbiAgICAgICAgICAgICAgICAvLyB0aGF0LmNhcmQxZGl2LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoLSR7KE1hdGguYWJzKHRoYXQuY3VycmVudExlZnQgLSB0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpKSAvIDEwfWRlZylgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3ZpbmchJylcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KG1vdmVCYWNrLCAxMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpIDwgdGhhdC5jdXJyZW50TGVmdCAmJiB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLC0yKSA+IHRoYXQuY3VycmVudFRvcCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdCA9IGAke051bWJlcih0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpIC0gKG9yaWdpbmFsTGVmdERpZmYgKiBzcGVlZFJhdGlvKX1weGBcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcCA9IGAke051bWJlcih0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLC0yKSkgKyAob3JpZ2luYWxUb3BEaWZmICogc3BlZWRSYXRpbyl9cHhgXG4gICAgICAgICAgICAgICAgLy8gdGhhdC5jYXJkMWRpdi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKC0keyhNYXRoLmFicyh0aGF0LmN1cnJlbnRMZWZ0IC0gdGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpKSkgLyAxMH1kZWcpYFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbW92aW5nIScpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChtb3ZlQmFjaywgMTApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwKVxuXG4gICAgfVxuXG4gICAgdGhyb3dDYXJkUmlnaHQodGhhdCkge1xuXG4gICAgICAgIGxldCBvcmlnaW5hbExlZnREaWZmID0gTWF0aC5hYnModGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpIC0gdGhpcy5jdXJyZW50TGVmdClcbiAgICAgICAgbGV0IG9yaWdpbmFsVG9wRGlmZiA9IE1hdGguYWJzKHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wLnNsaWNlKDAsLTIpIC0gdGhpcy5jdXJyZW50VG9wKVxuXG4gICAgICAgIGxldCBzcGVlZFJhdGlvID0gLjFcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmluZz9cIilcbiAgICAgICAgXG4gICAgICAgIGlmIChvcmlnaW5hbExlZnREaWZmID4gb3JpZ2luYWxUb3BEaWZmKSB7XG4gICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxMZWZ0RGlmZiAqIHNwZWVkUmF0aW8gPiAxNSkge1xuICAgICAgICAgICAgc3BlZWRSYXRpbyAtPSAwLjAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxMZWZ0RGlmZiAqIHNwZWVkUmF0aW8gPCAxNSkge1xuICAgICAgICAgICAgICAgIHNwZWVkUmF0aW8gKz0gMC4wMVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKG9yaWdpbmFsVG9wRGlmZiAqIHNwZWVkUmF0aW8gPiAxNSkge1xuICAgICAgICAgICAgc3BlZWRSYXRpbyAtPSAwLjAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxUb3BEaWZmICogc3BlZWRSYXRpbyA8IDE1KSB7XG4gICAgICAgICAgICAgICAgc3BlZWRSYXRpbyArPSAwLjAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2cob3JpZ2luYWxMZWZ0RGlmZiAqIHNwZWVkUmF0aW8pXG4gICAgICAgIGNvbnNvbGUubG9nKG9yaWdpbmFsVG9wRGlmZiAqIHNwZWVkUmF0aW8pXG4gICAgICAgIGlmIChvcmlnaW5hbExlZnREaWZmICogc3BlZWRSYXRpbyApXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gbW92ZUJhY2soKSB7XG4gICAgICAgICAgICBpZiAodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpID4gdGhhdC5jdXJyZW50TGVmdCAmJiB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLC0yKSA+IHRoYXQuY3VycmVudFRvcCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdCA9IGAke051bWJlcih0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpICsgKG9yaWdpbmFsTGVmdERpZmYgKiBzcGVlZFJhdGlvKX1weGBcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcCA9IGAke051bWJlcih0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLC0yKSkgKyAob3JpZ2luYWxUb3BEaWZmICogc3BlZWRSYXRpbyl9cHhgXG4gICAgICAgICAgICAgICAgLy8gdGhhdC5jYXJkMWRpdi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKC0keyhNYXRoLmFicyh0aGF0LmN1cnJlbnRMZWZ0IC0gdGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpKSkgLyAxMH1kZWcpYFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbW92aW5nIScpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChtb3ZlQmFjaywgMTApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLC0yKSA+IHRoYXQuY3VycmVudExlZnQgJiYgdGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwtMikgPCB0aGF0LmN1cnJlbnRUb3ApIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQgPSBgJHtOdW1iZXIodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpKSArIChvcmlnaW5hbExlZnREaWZmICogc3BlZWRSYXRpbyl9cHhgXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS50b3AgPSBgJHtOdW1iZXIodGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwtMikpIC0gKG9yaWdpbmFsVG9wRGlmZiAqIHNwZWVkUmF0aW8pfXB4YFxuICAgICAgICAgICAgICAgIC8vIHRoYXQuY2FyZDFkaXYuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgtJHsoTWF0aC5hYnModGhhdC5jdXJyZW50TGVmdCAtIHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLC0yKSkpIC8gMTB9ZGVnKWBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyEnKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobW92ZUJhY2ssIDEwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMClcblxuICAgIH1cblxuICAgIG1vdmVDYXJkQmFja0xlZnQodGhhdCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IG9yaWdpbmFsTGVmdERpZmYgPSBNYXRoLmFicyh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikgLSB0aGlzLmN1cnJlbnRMZWZ0KVxuICAgICAgICBsZXQgb3JpZ2luYWxUb3BEaWZmID0gTWF0aC5hYnModGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwtMikgLSB0aGlzLmN1cnJlbnRUb3ApXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJtb3Zpbmc/XCIpXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gbW92ZUJhY2soKSB7XG4gICAgICAgICAgICBpZiAodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpIDwgdGhhdC5jdXJyZW50TGVmdCAmJiB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLC0yKSA8IHRoYXQuY3VycmVudFRvcCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdCA9IGAke051bWJlcih0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpICsgKG9yaWdpbmFsTGVmdERpZmYgKiAuMSl9cHhgXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS50b3AgPSBgJHtOdW1iZXIodGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwtMikpICsgKG9yaWdpbmFsVG9wRGlmZiAqIC4xKX1weGBcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoLSR7KE1hdGguYWJzKHRoYXQuY3VycmVudExlZnQgLSB0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpKSAvIDEwfWRlZylgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3ZpbmchJylcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KG1vdmVCYWNrLCAxMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpIDwgdGhhdC5jdXJyZW50TGVmdCAmJiB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLC0yKSA+IHRoYXQuY3VycmVudFRvcCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdCA9IGAke051bWJlcih0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpICsgKG9yaWdpbmFsTGVmdERpZmYgKiAuMSl9cHhgXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS50b3AgPSBgJHtOdW1iZXIodGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwtMikpIC0gKG9yaWdpbmFsVG9wRGlmZiAqIC4xKX1weGBcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoLSR7KE1hdGguYWJzKHRoYXQuY3VycmVudExlZnQgLSB0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpKSAvIDEwfWRlZylgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3ZpbmchJylcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KG1vdmVCYWNrLCAxMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTApXG5cbiAgICB9XG5cbiAgICBtb3ZlQ2FyZEJhY2tSaWdodCh0aGF0KSB7XG4gICAgICAgIGxldCBvcmlnaW5hbExlZnREaWZmID0gTWF0aC5hYnModGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpIC0gdGhpcy5jdXJyZW50TGVmdClcbiAgICAgICAgbGV0IG9yaWdpbmFsVG9wRGlmZiA9IE1hdGguYWJzKHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wLnNsaWNlKDAsLTIpIC0gdGhpcy5jdXJyZW50VG9wKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW92aW5nP1wiKVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIG1vdmVCYWNrKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLC0yKSA+IHRoYXQuY3VycmVudExlZnQgJiYgdGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwtMikgPCB0aGF0LmN1cnJlbnRUb3ApIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQgPSBgJHtOdW1iZXIodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpKSAtIChvcmlnaW5hbExlZnREaWZmICogLjEpfXB4YFxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wID0gYCR7TnVtYmVyKHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wLnNsaWNlKDAsLTIpKSArIChvcmlnaW5hbFRvcERpZmYgKiAuMSl9cHhgXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7KE1hdGguYWJzKHRoYXQuY3VycmVudExlZnQgLSB0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpKSAvIDEwfWRlZylgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3ZpbmchJylcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KG1vdmVCYWNrLCAxMClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpID4gdGhhdC5jdXJyZW50TGVmdCAmJiB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLC0yKSA+IHRoYXQuY3VycmVudFRvcCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdCA9IGAke051bWJlcih0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpIC0gKG9yaWdpbmFsTGVmdERpZmYgKiAuMSl9cHhgXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS50b3AgPSBgJHtOdW1iZXIodGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwtMikpIC0gKG9yaWdpbmFsVG9wRGlmZiAqIC4xKX1weGBcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHsoTWF0aC5hYnModGhhdC5jdXJyZW50TGVmdCAtIHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLC0yKSkpIC8gMTB9ZGVnKWBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyEnKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobW92ZUJhY2ssIDEwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMClcbiAgICB9XG5cbiAgICBjbGljayhlKSB7XG5cbiAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIikge1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50eXBlID09PSBcIm1vdXNldXBcIikge1xuICAgICAgICAgICAgdGhpcy5jbGlja0dYID0gdGhpcy5neDtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tHWSA9IHRoaXMuZ3k7XG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS5tb3ZlV2l0aEFuaW1hdGlvbih0aGlzLmd4LCB0aGlzLmd5KVxuICAgICAgICAgICAgaWYgKHRoaXMuY2FyZDEuY2xpY2tlZCh0aGlzLmd4LCB0aGlzLmd5KSkgdGhpcy5mbGlwQ2FyZCgpXG4gICAgICAgIH1cblxuXG5cbiAgICB9XG5cblxuICAgIHJlc2V0Q2FyZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNldFwiKVxuICAgIH1cblxuICAgIGFuaW1hdGUoZSkge1xuXG5cblxuICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS5hbmltYXRlKClcbiAgICAgICAgLy8gdGhpcy5jYXJkMy51cGRhdGUoKVxuICAgICAgICAvLyB0aGlzLmNhcmQyLnVwZGF0ZSgpXG4gICAgICAgIC8vIHRoaXMuY2FyZDEudXBkYXRlKClcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5mcmFtZSsrXG4gICAgfVxuXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2YzNWM5MjJmMzI3NGIzZGYzMDJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=