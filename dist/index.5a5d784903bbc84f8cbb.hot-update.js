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
        this.card1divOriginalWidth = this.canvas.width * .75
        if (this.canvas.width > this.canvas.height * .6) {
            // square cards for ipads
            this.card1div.style.height = `${this.card1div.style.width.slice(0, -2)}px`;
        } else {
            this.card1div.style.height = `${this.card1div.style.width.slice(0, -2) * 1.3}px`;
        }

        this.card1divOriginalHeight = this.card1div.style.height.slice(0, -2)

        this.card1div.style.position = "absolute";
        this.card1div.style.zIndex = 10004

        this.card1divinner = document.createElement('div');
        this.card1divinner.style.backgroundColor = "blue";
        this.card1divinner.style.borderRadius = "10px";
        this.card1divfront = document.createElement('div');
        this.card1divback = document.createElement('div');

        this.card1div.classList.add("flip-card")
        this.card1divinner.classList.add("flip-card-inner")
        this.card1divfront.classList.add("flip-card-front")
        this.card1divfront.innerHTML = "card1"
        this.card1divback.classList.add("flip-card-back")
        this.card1divback.innerHTML = "goodbye"

        this.card2div = document.createElement('div');
        this.card2div.style.height = `${this.card1div.style.height.slice(0, -2) * .9}px`;
        this.card2div.style.width = `${this.card1div.style.width.slice(0, -2) * .9}px`;
        // this.card2div.style.backgroundColor = "green";
        this.card2div.style.marginTop = `${this.card1div.style.height.slice(0, -2) - this.card2div.style.height.slice(0, -2) + 6}px`
        this.card2div.style.borderRadius = "10px";
        this.card2div.style.position = "absolute";
        this.card2div.style.zIndex = 10003

        this.card2divinner = document.createElement('div');
        this.card2divinner.style.backgroundColor = "green";
        this.card2divinner.style.borderRadius = "10px";
        this.card2divfront = document.createElement('div');
        this.card2divback = document.createElement('div');

        this.card2div.classList.add("flip-card")
        this.card2divinner.classList.add("flip-card-inner")
        this.card2divfront.classList.add("flip-card-front")
        this.card2divfront.innerHTML = "card2"
        this.card2divback.classList.add("flip-card-back")

        this.card3div = document.createElement('div');
        this.card3div.style.height = `${this.card2div.style.height.slice(0, -2) * .9}px`;
        this.card3div.style.width = `${this.card2div.style.width.slice(0, -2) * .9}px`;
        // this.card3div.style.backgroundColor = "yellow";
        this.card3div.style.marginTop = `${(this.card1div.style.height.slice(0, -2) - this.card2div.style.height.slice(0, -2)) + 7 + (this.card2div.style.height.slice(0, -2) - this.card3div.style.height.slice(0, -2)) + 9}px`
        this.card3div.style.borderRadius = "10px";
        this.card3div.style.position = "absolute";
        this.card3div.style.zIndex = 10002

        this.card3divinner = document.createElement('div');
        this.card3divinner.style.backgroundColor = "yellow";
        this.card3divinner.style.borderRadius = "10px";
        this.card3divfront = document.createElement('div');
        this.card3divback = document.createElement('div');

        this.card3div.classList.add("flip-card")
        this.card3divinner.classList.add("flip-card-inner")
        this.card3divfront.classList.add("flip-card-front")
        this.card3divfront.innerHTML = "card3"
        this.card3divback.classList.add("flip-card-back")

        this.card4div = document.createElement('div');
        this.card4div.style.height = `${this.card3div.style.height.slice(0, -2) * .9}px`;
        this.card4div.style.width = `${this.card3div.style.width.slice(0, -2) * .9}px`;
        // this.card4div.style.backgroundColor = "purple";
        this.card4div.style.marginTop = `${(this.card1div.style.height.slice(0, -2) - this.card2div.style.height.slice(0, -2)) + 7 + (this.card2div.style.height.slice(0, -2) - this.card3div.style.height.slice(0, -2)) + 7 + (this.card3div.style.height.slice(0, -2) - this.card4div.style.height.slice(0, -2)) + 14}px`
        this.card4div.style.borderRadius = "10px";
        this.card4div.style.position = "absolute";
        this.card4div.style.zIndex = 10001
        this.card4div.style.opacity = 0

        this.card4divinner = document.createElement('div');
        this.card4divinner.style.backgroundColor = "purple";
        this.card4divinner.style.borderRadius = "10px";
        this.card4divfront = document.createElement('div');
        this.card4divback = document.createElement('div');

        this.card4div.classList.add("flip-card")
        this.card4divinner.classList.add("flip-card-inner")
        this.card4divfront.classList.add("flip-card-front")
        this.card4divfront.innerHTML = "card4"
        this.card4divback.classList.add("flip-card-back")

        this.card4OriginalHeight = this.card4div.style.height;
        this.card4OriginalWidth = this.card4div.style.width;
        this.card4OriginalMargin = this.card4div.style.marginTop;

        this.card3 = new _component__WEBPACK_IMPORTED_MODULE_0__["default"](this.card3Width, this.card3Height, "green", this.canvas.width / 2 - this.card3Width / 2, this.card2.y + this.card2Height - this.card3Height + (2 * this.canvasAvatarRatio), this.ctx, "flashcardcolor")


        this.card4divinner.appendChild(this.card4divfront)
        this.card4divinner.appendChild(this.card4divback)
        this.card4div.appendChild(this.card4divinner)

        this.card3divinner.appendChild(this.card3divfront)
        this.card3divinner.appendChild(this.card3divback)
        this.card3div.appendChild(this.card3divinner)

        this.card2divinner.appendChild(this.card2divfront)
        this.card2divinner.appendChild(this.card2divback)
        this.card2div.appendChild(this.card2divinner)

        this.card1divinner.appendChild(this.card1divfront)
        this.card1divinner.appendChild(this.card1divback)
        this.card1div.appendChild(this.card1divinner)
        flashcardAreaBottom.appendChild(this.card1div)
        flashcardAreaBottom.appendChild(this.card2div)
        flashcardAreaBottom.appendChild(this.card3div)
        flashcardAreaBottom.appendChild(this.card4div)
        flashcardArea.appendChild(flashcardAreaBottom)
        document.body.appendChild(flashcardArea);

        this.card1div.addEventListener("mouseup", () => {
            if (this.flipped || this.dragging) {
                return false
            }
            this.flipped = true
            this.card1divinner.style.transition = "transform 0.6s";
            this.card1divinner.classList.add('flip-the-card-action')
        })

        this.card1div.addEventListener("touchstart", (e) => {
            this.firstTouchY = e.touches[0].clientY
            this.firstTouchX = e.touches[0].clientX
        })

        this.currentTop = this.canvas.height * .4
        this.currentLeft = this.canvas.width / 2 - (this.card1div.style.width.slice(0, -2) / 2)
        console.log(this.currentLeft)

        this.card1div.addEventListener("touchmove", (e) => {

            this.wasDragging = true;

            console.log(e.touches[0].clientX)
            this.card1div.style.top = `${this.currentTop + (e.touches[0].clientY - this.firstTouchY)}px`
            this.card1div.style.left = `${this.currentLeft + (e.touches[0].clientX - this.firstTouchX)}px`

            if (this.card1div.style.left.slice(0, -2) < this.currentLeft) {
                console.log("forget")
                this.card1div.style.transform = `rotate(-${(Math.abs(this.currentLeft - this.card1div.style.left.slice(0, -2))) / 10}deg)`
            } else {
                console.log("remember")
                this.card1div.style.transform = `rotate(${(Math.abs(this.currentLeft - this.card1div.style.left.slice(0, -2))) / 10}deg)`
            }

        })

        this.card1div.addEventListener("touchend", (e) => {
            console.log(this.card1div.style.left)

            if (this.wasDragging) {
                if (Math.abs(this.currentLeft - this.card1div.style.left.slice(0, -2)) > (this.card1div.style.width.slice(0, -2) / 5)) {
                    this.flipped = false;
                    if (this.card1div.style.left.slice(0, -2) < this.currentLeft) {
                        console.log("forget")
                        this.throwCardLeft(this)
                    } else {
                        console.log("remember")
                        this.throwCardRight(this)
                    }
                } else {
                    if (this.card1div.style.left.slice(0, -2) < this.currentLeft) {

                        this.moveCardBackLeft(this)

                        console.log("don't forget")

                    } else {
                        this.moveCardBackRight(this)
                        console.log("don't remember")
                    }
                }
            }



            this.wasDragging = false;

        })

    }

    moveCardsUp(that) {
        let widthDiff2 = that.card1divOriginalWidth - that.card2div.style.width.slice(0,-2)
        let heightDiff2 = that.card1divOriginalHeight - that.card2div.style.height.slice(0,-2)
        let originalMargin2 = that.card2div.style.marginTop.slice(0, -2)

        let widthDiff3 = that.card1divOriginalWidth * .9 - that.card3div.style.width.slice(0,-2)
        let heightDiff3 = that.card1divOriginalHeight * .9 - that.card3div.style.height.slice(0,-2)
        let originalMargin3 = that.card3div.style.marginTop.slice(0, -2) - originalMargin2

        let widthDiff4 = (that.card1divOriginalWidth * .9) * .9 - that.card4div.style.width.slice(0,-2)
        let heightDiff4 = (that.card1divOriginalHeight * .9) * .9 - that.card4div.style.height.slice(0,-2)
        let originalMargin4 = that.card4div.style.marginTop.slice(0, -2) - originalMargin2 - originalMargin3

        let speedRatio = .1

        setTimeout(function makeBigger() {
            that.card2div.style.width = `${Number(that.card2div.style.width.slice(0,-2)) + (widthDiff2 * speedRatio)}px`
            that.card2div.style.height = `${Number(that.card2div.style.height.slice(0,-2)) + (heightDiff2 * speedRatio)}px`
            that.card2div.style.marginTop = `${Number(that.card2div.style.marginTop.slice(0,-2)) - (Number(originalMargin2) * speedRatio)}px`
            
            that.card3div.style.width = `${Number(that.card3div.style.width.slice(0,-2)) + (widthDiff3 * speedRatio)}px`
            that.card3div.style.height = `${Number(that.card3div.style.height.slice(0,-2)) + (heightDiff3 * speedRatio)}px`
            that.card3div.style.marginTop = `${Number(that.card3div.style.marginTop.slice(0,-2)) - (Number(originalMargin3) * speedRatio)}px`
            
            that.card4div.style.width = `${Number(that.card4div.style.width.slice(0,-2)) + (widthDiff4 * speedRatio)}px`
            that.card4div.style.height = `${Number(that.card4div.style.height.slice(0,-2)) + (heightDiff4 * speedRatio)}px`
            that.card4div.style.marginTop = `${Number(that.card4div.style.marginTop.slice(0,-2)) - (Number(originalMargin4) * speedRatio)}px`
            that.card4div.style.opacity = Number(that.card4div.style.opacity) + speedRatio
            console.log("opacity: ", that.card4div.style.opacity)
            
            if (that.card2div.style.width.slice(0,-2) < that.card1divOriginalWidth) {
                setTimeout(()=>{
                    makeBigger()
                }, 10)
            } else {
                that.transferCards(that)
            }
        }, 10)
        

    }

    transferCards(that) {
        setTimeout(function checkIfDoneThrowing() {
            if (that.throwing) {
                setTimeout(()=>{
                    checkIfDoneThrowing()
                }, 100)
            } else {

                let card1BackgroundColor = that.card1divinner.style.backgroundColor
                let card1InnerHTML = that.card1divfront.innerHTML

                that.card1divinner.style.transition = "transform 0s";
                that.card1divinner.classList.remove('flip-the-card-action')
                that.card1div.style.transform = '';
                that.card1divinner.style.backgroundColor = that.card2divinner.style.backgroundColor
                that.card1divfront.innerHTML = that.card2divfront.innerHTML
                that.card1div.style.removeProperty("left");
                that.card1div.style.removeProperty("top");
                

                that.card2divinner.style.backgroundColor = that.card3divinner.style.backgroundColor
                that.card2divfront.innerHTML = that.card3divfront.innerHTML
                that.card2div.style.width = that.card3div.style.width;
                that.card2div.style.height = that.card3div.style.height;
                that.card2div.style.marginTop = that.card3div.style.marginTop;

                that.card3divinner.style.backgroundColor = that.card4divinner.style.backgroundColor
                that.card3divfront.innerHTML = that.card4divfront.innerHTML
                that.card3div.style.width = that.card4div.style.width;
                that.card3div.style.height = that.card4div.style.height;
                that.card3div.style.marginTop = that.card4div.style.marginTop;

                that.card4divinner.style.backgroundColor = card1BackgroundColor
                that.card4divfront.innerHTML = card1InnerHTML
                that.card4div.style.width = that.card4OriginalWidth;
                that.card4div.style.height = that.card4OriginalHeight;
                that.card4div.style.marginTop = that.card4OriginalMargin;
                that.card4div.style.opacity = 0;
            }
        }, 100)
        
    }

    throwCardLeft(that) {

        that.moveCardsUp(that)

        that.throwing = true;

        setTimeout(() => {
            that.throwing = false;
        }, 300)

        let originalLeftDiff = Math.abs(that.card1div.style.left.slice(0, -2) - this.currentLeft)
        let originalTopDiff = Math.abs(that.card1div.style.top.slice(0, -2) - this.currentTop)

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
        if (originalLeftDiff * speedRatio)
            setTimeout(function moveBack() {
                if (that.card1div.style.left.slice(0, -2) < that.currentLeft && that.card1div.style.top.slice(0, -2) < that.currentTop) {

                    that.card1div.style.left = `${Number(that.card1div.style.left.slice(0, -2)) - (originalLeftDiff * speedRatio)}px`
                    that.card1div.style.top = `${Number(that.card1div.style.top.slice(0, -2)) - (originalTopDiff * speedRatio)}px`
                    // that.card1div.style.transform = `rotate(-${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0,-2))) / 10}deg)`
                    console.log(that.card1div.style.left)
                    console.log('moving!')
                    if (that.throwing) {
                        setTimeout(moveBack, 10)
                    }

                } else if (that.card1div.style.left.slice(0, -2) < that.currentLeft && that.card1div.style.top.slice(0, -2) > that.currentTop) {

                    that.card1div.style.left = `${Number(that.card1div.style.left.slice(0, -2)) - (originalLeftDiff * speedRatio)}px`
                    that.card1div.style.top = `${Number(that.card1div.style.top.slice(0, -2)) + (originalTopDiff * speedRatio)}px`
                    // that.card1div.style.transform = `rotate(-${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0,-2))) / 10}deg)`
                    console.log(that.card1div.style.left)
                    console.log('moving!')
                    if (that.throwing) {
                        setTimeout(moveBack, 10)
                    }
                }
            }, 10)

    }

    throwCardRight(that) {

        that.moveCardsUp(that)


        that.throwing = true;

        setTimeout(() => {
            that.throwing = false;
        }, 300)

        let originalLeftDiff = Math.abs(that.card1div.style.left.slice(0, -2) - this.currentLeft)
        let originalTopDiff = Math.abs(that.card1div.style.top.slice(0, -2) - this.currentTop)

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
        if (originalLeftDiff * speedRatio)
            setTimeout(function moveBack() {
                if (that.card1div.style.left.slice(0, -2) > that.currentLeft && that.card1div.style.top.slice(0, -2) > that.currentTop) {

                    that.card1div.style.left = `${Number(that.card1div.style.left.slice(0, -2)) + (originalLeftDiff * speedRatio)}px`
                    that.card1div.style.top = `${Number(that.card1div.style.top.slice(0, -2)) + (originalTopDiff * speedRatio)}px`
                    // that.card1div.style.transform = `rotate(-${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0,-2))) / 10}deg)`
                    console.log(that.card1div.style.left)
                    console.log('moving!')
                    if (that.throwing) {
                        setTimeout(moveBack, 10)
                    }

                } else if (that.card1div.style.left.slice(0, -2) > that.currentLeft && that.card1div.style.top.slice(0, -2) < that.currentTop) {

                    that.card1div.style.left = `${Number(that.card1div.style.left.slice(0, -2)) + (originalLeftDiff * speedRatio)}px`
                    that.card1div.style.top = `${Number(that.card1div.style.top.slice(0, -2)) - (originalTopDiff * speedRatio)}px`
                    // that.card1div.style.transform = `rotate(-${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0,-2))) / 10}deg)`
                    console.log(that.card1div.style.left)
                    console.log('moving!')
                    if (that.throwing) {
                        setTimeout(moveBack, 10)
                    }

                }
            }, 10)

    }

    moveCardBackLeft(that) {

        let originalLeftDiff = Math.abs(that.card1div.style.left.slice(0, -2) - this.currentLeft)
        let originalTopDiff = Math.abs(that.card1div.style.top.slice(0, -2) - this.currentTop)

        console.log("moving?")
        setTimeout(function moveBack() {
            if (that.card1div.style.left.slice(0, -2) < that.currentLeft && that.card1div.style.top.slice(0, -2) < that.currentTop) {

                that.card1div.style.left = `${Number(that.card1div.style.left.slice(0, -2)) + (originalLeftDiff * .1)}px`
                that.card1div.style.top = `${Number(that.card1div.style.top.slice(0, -2)) + (originalTopDiff * .1)}px`
                that.card1div.style.transform = `rotate(-${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0, -2))) / 10}deg)`
                console.log(that.card1div.style.left)
                console.log('moving!')
                setTimeout(moveBack, 10)
            } else if (that.card1div.style.left.slice(0, -2) < that.currentLeft && that.card1div.style.top.slice(0, -2) > that.currentTop) {

                that.card1div.style.left = `${Number(that.card1div.style.left.slice(0, -2)) + (originalLeftDiff * .1)}px`
                that.card1div.style.top = `${Number(that.card1div.style.top.slice(0, -2)) - (originalTopDiff * .1)}px`
                that.card1div.style.transform = `rotate(-${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0, -2))) / 10}deg)`
                console.log(that.card1div.style.left)
                console.log('moving!')
                setTimeout(moveBack, 10)
            }
        }, 10)

    }

    moveCardBackRight(that) {
        let originalLeftDiff = Math.abs(that.card1div.style.left.slice(0, -2) - this.currentLeft)
        let originalTopDiff = Math.abs(that.card1div.style.top.slice(0, -2) - this.currentTop)

        console.log("moving?")
        setTimeout(function moveBack() {
            if (that.card1div.style.left.slice(0, -2) > that.currentLeft && that.card1div.style.top.slice(0, -2) < that.currentTop) {

                that.card1div.style.left = `${Number(that.card1div.style.left.slice(0, -2)) - (originalLeftDiff * .1)}px`
                that.card1div.style.top = `${Number(that.card1div.style.top.slice(0, -2)) + (originalTopDiff * .1)}px`
                that.card1div.style.transform = `rotate(${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0, -2))) / 10}deg)`
                console.log(that.card1div.style.left)
                console.log('moving!')
                setTimeout(moveBack, 10)
            } else if (that.card1div.style.left.slice(0, -2) > that.currentLeft && that.card1div.style.top.slice(0, -2) > that.currentTop) {

                that.card1div.style.left = `${Number(that.card1div.style.left.slice(0, -2)) - (originalLeftDiff * .1)}px`
                that.card1div.style.top = `${Number(that.card1div.style.top.slice(0, -2)) - (originalTopDiff * .1)}px`
                that.card1div.style.transform = `rotate(${(Math.abs(that.currentLeft - that.card1div.style.left.slice(0, -2))) / 10}deg)`
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
/******/ 	__webpack_require__.h = () => ("dcda74f55647df7eb379")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNWE1ZDc4NDkwM2JiYzg0ZjhjYmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNOO0FBQ2lEO0FBQ2pCOzs7QUFHOUM7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrQ0FBTSxzQ0FBc0MsK0VBQVM7O0FBRXJGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7OztBQUdBLHlCQUF5QixrREFBUzs7QUFFbEM7QUFDQTtBQUNBLHlCQUF5QixrREFBUzs7QUFFbEM7QUFDQTtBQUNBLHlCQUF5QixrREFBUzs7O0FBR2xDOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0QsV0FBVyxZQUFZLFlBQVksWUFBWSxnQkFBZ0I7O0FBRXJILHVDQUF1Qyx3QkFBd0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHVDQUF1QztBQUNuRixVQUFVO0FBQ1YsNENBQTRDLDZDQUE2QztBQUN6Rjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLDZDQUE2QztBQUNyRix1Q0FBdUMsNENBQTRDO0FBQ25GO0FBQ0EsMkNBQTJDLHNGQUFzRjtBQUNqSTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLDZDQUE2QztBQUNyRix1Q0FBdUMsNENBQTRDO0FBQ25GO0FBQ0EsMkNBQTJDLGtMQUFrTDtBQUM3TjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLDZDQUE2QztBQUNyRix1Q0FBdUMsNENBQTRDO0FBQ25GO0FBQ0EsMkNBQTJDLDZRQUE2UTtBQUN4VDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixrREFBUzs7O0FBR2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx5Q0FBeUMsNERBQTREO0FBQ3JHLDBDQUEwQyw2REFBNkQ7O0FBRXZHO0FBQ0E7QUFDQSwyREFBMkQsMEVBQTBFO0FBQ3JJLGNBQWM7QUFDZDtBQUNBLDBEQUEwRCwwRUFBMEU7QUFDcEk7O0FBRUEsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7O0FBRUE7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQ0FBMkMsMEVBQTBFO0FBQ3JILDRDQUE0Qyw0RUFBNEU7QUFDeEgsK0NBQStDLDJGQUEyRjtBQUMxSTtBQUNBLDJDQUEyQywwRUFBMEU7QUFDckgsNENBQTRDLDRFQUE0RTtBQUN4SCwrQ0FBK0MsMkZBQTJGO0FBQzFJO0FBQ0EsMkNBQTJDLDBFQUEwRTtBQUNySCw0Q0FBNEMsNEVBQTRFO0FBQ3hILCtDQUErQywyRkFBMkY7QUFDMUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsY0FBYzs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsZ0ZBQWdGO0FBQ2xJLGlEQUFpRCw4RUFBOEU7QUFDL0gsa0VBQWtFLHlFQUF5RTtBQUMzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjs7QUFFbEIsa0RBQWtELGdGQUFnRjtBQUNsSSxpREFBaUQsOEVBQThFO0FBQy9ILGtFQUFrRSx5RUFBeUU7QUFDM0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsZ0ZBQWdGO0FBQ2xJLGlEQUFpRCw4RUFBOEU7QUFDL0gsa0VBQWtFLHlFQUF5RTtBQUMzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjs7QUFFbEIsa0RBQWtELGdGQUFnRjtBQUNsSSxpREFBaUQsOEVBQThFO0FBQy9ILGtFQUFrRSx5RUFBeUU7QUFDM0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDLHdFQUF3RTtBQUN0SCw2Q0FBNkMsc0VBQXNFO0FBQ25ILDJEQUEyRCwwRUFBMEU7QUFDckk7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCw4Q0FBOEMsd0VBQXdFO0FBQ3RILDZDQUE2QyxzRUFBc0U7QUFDbkgsMkRBQTJELDBFQUEwRTtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsd0VBQXdFO0FBQ3RILDZDQUE2QyxzRUFBc0U7QUFDbkgsMERBQTBELDBFQUEwRTtBQUNwSTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLDhDQUE4Qyx3RUFBd0U7QUFDdEgsNkNBQTZDLHNFQUFzRTtBQUNuSCwwREFBMEQsMEVBQTBFO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7Ozs7VUNyakJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYml0X2J1ZGRpZXMvLi9zcmMvc3R1ZHlQYWdlLmpzIiwid2VicGFjazovL2JpdF9idWRkaWVzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vYXZhdGFyJ1xuaW1wb3J0IEF2YXRhckltZyBmcm9tICcuLy4uL2ltYWdlcy9tYW5hL2NoYXJfYV9wMS9jaGFyX2FfcDFfMGJhc19odW1uX3YwMS5wbmcnXG5pbXBvcnQgSG91c2UgZnJvbSAnLi8uLi9pbWFnZXMvaG9tZS9hdmF0YXJTdGFydGluZ0hvdXNlMi5wbmcnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R1ZHlQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG5cbiAgICAgICAgbGV0IGF2YXRhclRlbXBXaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoICogMC40OTIzMDc2OTIzMDc2OTIzNFxuICAgICAgICB0aGlzLmF2YXRhcldpZHRoID0gKGF2YXRhclRlbXBXaWR0aCAlIDY0KSA+PSAyLjUgPyBwYXJzZUludChhdmF0YXJUZW1wV2lkdGggLyA2NCkgKiA2NCArIDY0IDogcGFyc2VJbnQoYXZhdGFyVGVtcFdpZHRoIC8gNjQpICogNjRcbiAgICAgICAgdGhpcy5hdmF0YXJIZWlnaHQgPSAodGhpcy5hdmF0YXJXaWR0aCAvIDY0KSAqIDY1O1xuICAgICAgICB0aGlzLmNhbnZhc0F2YXRhclJhdGlvID0gKHRoaXMuYXZhdGFyV2lkdGggLyA2NClcbiAgICAgICAgdGhpcy5hZHZlbnR1cmVHdXkgPSBuZXcgQXZhdGFyKHRoaXMuYXZhdGFyV2lkdGgsIHRoaXMuYXZhdGFySGVpZ2h0LCBBdmF0YXJJbWcsIHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIHRoaXMuYXZhdGFyV2lkdGggLyAxLjUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSB0aGlzLmF2YXRhckhlaWdodCAvIDIsIHRoaXMuY3R4LCBcInNwcml0ZVwiLCA1LCAzLCA2NCwgNjUsIDY0LCA2NSwgMCwgJ3RvZVRhcERvd24nLCA3LCB0aGlzLmNhbnZhc0F2YXRhclJhdGlvKTtcblxuICAgICAgICB0aGlzLmNhcmQxV2lkdGggPSA5NSAqIHRoaXMuY2FudmFzQXZhdGFyUmF0aW87XG4gICAgICAgIHRoaXMuY2FyZDFXaWR0aE9yaWdpbmFsID0gdGhpcy5jYXJkMVdpZHRoXG5cbiAgICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoID4gdGhpcy5jYW52YXMuaGVpZ2h0ICogLjYpIHtcbiAgICAgICAgICAgIC8vIHNxdWFyZSBjYXJkcyBmb3IgaXBhZHNcbiAgICAgICAgICAgIHRoaXMuY2FyZDFIZWlnaHQgPSB0aGlzLmNhcmQxV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhcmQxSGVpZ2h0ID0gdGhpcy5jYXJkMVdpZHRoICogMS4zO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmNhcmQxID0gbmV3IENvbXBvbmVudCh0aGlzLmNhcmQxV2lkdGgsIHRoaXMuY2FyZDFIZWlnaHQsIFwiYmx1ZVwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLmNhcmQxV2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAzLCB0aGlzLmN0eCwgXCJmbGFzaGNhcmRjb2xvclwiKVxuXG4gICAgICAgIHRoaXMuY2FyZDJIZWlnaHQgPSB0aGlzLmNhcmQxSGVpZ2h0ICogLjlcbiAgICAgICAgdGhpcy5jYXJkMldpZHRoID0gdGhpcy5jYXJkMVdpZHRoICogLjlcbiAgICAgICAgdGhpcy5jYXJkMiA9IG5ldyBDb21wb25lbnQodGhpcy5jYXJkMldpZHRoLCB0aGlzLmNhcmQySGVpZ2h0LCBcInJlZFwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLmNhcmQyV2lkdGggLyAyLCB0aGlzLmNhcmQxLnkgKyB0aGlzLmNhcmQxSGVpZ2h0IC0gdGhpcy5jYXJkMkhlaWdodCArICgyICogdGhpcy5jYW52YXNBdmF0YXJSYXRpbyksIHRoaXMuY3R4LCBcImZsYXNoY2FyZGNvbG9yXCIpXG5cbiAgICAgICAgdGhpcy5jYXJkM0hlaWdodCA9IHRoaXMuY2FyZDJIZWlnaHQgKiAuOVxuICAgICAgICB0aGlzLmNhcmQzV2lkdGggPSB0aGlzLmNhcmQyV2lkdGggKiAuOVxuICAgICAgICB0aGlzLmNhcmQzID0gbmV3IENvbXBvbmVudCh0aGlzLmNhcmQzV2lkdGgsIHRoaXMuY2FyZDNIZWlnaHQsIFwiZ3JlZW5cIiwgdGhpcy5jYW52YXMud2lkdGggLyAyIC0gdGhpcy5jYXJkM1dpZHRoIC8gMiwgdGhpcy5jYXJkMi55ICsgdGhpcy5jYXJkMkhlaWdodCAtIHRoaXMuY2FyZDNIZWlnaHQgKyAoMiAqIHRoaXMuY2FudmFzQXZhdGFyUmF0aW8pLCB0aGlzLmN0eCwgXCJmbGFzaGNhcmRjb2xvclwiKVxuXG5cbiAgICAgICAgdGhpcy5zZXRVcEZsYXNoQ2FyZHMoKVxuXG4gICAgfVxuXG4gICAgc2V0VXBGbGFzaENhcmRzKCkge1xuXG5cblxuICAgICAgICBsZXQgZmxhc2hjYXJkQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmbGFzaGNhcmRBcmVhLnN0eWxlLndpZHRoID0gXCIxMDAlXCJcbiAgICAgICAgZmxhc2hjYXJkQXJlYS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIlxuICAgICAgICBmbGFzaGNhcmRBcmVhLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICBmbGFzaGNhcmRBcmVhLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIlxuICAgICAgICBmbGFzaGNhcmRBcmVhLnN0eWxlLmFsaWduSXRlbXMgPSBcImZsZXgtZW5kXCJcbiAgICAgICAgZmxhc2hjYXJkQXJlYS5zdHlsZS56SW5kZXggPSAxMDAwMDtcbiAgICAgICAgZmxhc2hjYXJkQXJlYS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgZmxhc2hjYXJkQXJlYS5zdHlsZS50b3AgPSAwO1xuICAgICAgICBmbGFzaGNhcmRBcmVhLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICBmbGFzaGNhcmRBcmVhLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxuXG4gICAgICAgIGxldCBmbGFzaGNhcmRBcmVhQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZsYXNoY2FyZEFyZWFCb3R0b20uc3R5bGUud2lkdGggPSBcIjEwMCVcIlxuICAgICAgICBmbGFzaGNhcmRBcmVhQm90dG9tLnN0eWxlLmhlaWdodCA9IFwiNjAlXCJcbiAgICAgICAgZmxhc2hjYXJkQXJlYUJvdHRvbS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgZmxhc2hjYXJkQXJlYUJvdHRvbS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCJcbiAgICAgICAgZmxhc2hjYXJkQXJlYUJvdHRvbS5zdHlsZS5hbGlnbkl0ZW1zID0gXCJmbGV4LXN0YXJ0XCJcblxuICAgICAgICB0aGlzLmNhcmQxZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIGVsZW1EaXYuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29wYWNpdHk6MC4zO3otaW5kZXg6MTAwO2JhY2tncm91bmQ6IzAwMDsnO1xuXG4gICAgICAgIHRoaXMuY2FyZDFkaXYuc3R5bGUud2lkdGggPSBgJHt0aGlzLmNhbnZhcy53aWR0aCAqIC43NX1weGA7XG4gICAgICAgIHRoaXMuY2FyZDFkaXZPcmlnaW5hbFdpZHRoID0gdGhpcy5jYW52YXMud2lkdGggKiAuNzVcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoID4gdGhpcy5jYW52YXMuaGVpZ2h0ICogLjYpIHtcbiAgICAgICAgICAgIC8vIHNxdWFyZSBjYXJkcyBmb3IgaXBhZHNcbiAgICAgICAgICAgIHRoaXMuY2FyZDFkaXYuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5jYXJkMWRpdi5zdHlsZS53aWR0aC5zbGljZSgwLCAtMil9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYXJkMWRpdi5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmNhcmQxZGl2LnN0eWxlLndpZHRoLnNsaWNlKDAsIC0yKSAqIDEuM31weGA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhcmQxZGl2T3JpZ2luYWxIZWlnaHQgPSB0aGlzLmNhcmQxZGl2LnN0eWxlLmhlaWdodC5zbGljZSgwLCAtMilcblxuICAgICAgICB0aGlzLmNhcmQxZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICB0aGlzLmNhcmQxZGl2LnN0eWxlLnpJbmRleCA9IDEwMDA0XG5cbiAgICAgICAgdGhpcy5jYXJkMWRpdmlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY2FyZDFkaXZpbm5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcbiAgICAgICAgdGhpcy5jYXJkMWRpdmlubmVyLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICAgICAgICB0aGlzLmNhcmQxZGl2ZnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5jYXJkMWRpdmJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aGlzLmNhcmQxZGl2LmNsYXNzTGlzdC5hZGQoXCJmbGlwLWNhcmRcIilcbiAgICAgICAgdGhpcy5jYXJkMWRpdmlubmVyLmNsYXNzTGlzdC5hZGQoXCJmbGlwLWNhcmQtaW5uZXJcIilcbiAgICAgICAgdGhpcy5jYXJkMWRpdmZyb250LmNsYXNzTGlzdC5hZGQoXCJmbGlwLWNhcmQtZnJvbnRcIilcbiAgICAgICAgdGhpcy5jYXJkMWRpdmZyb250LmlubmVySFRNTCA9IFwiY2FyZDFcIlxuICAgICAgICB0aGlzLmNhcmQxZGl2YmFjay5jbGFzc0xpc3QuYWRkKFwiZmxpcC1jYXJkLWJhY2tcIilcbiAgICAgICAgdGhpcy5jYXJkMWRpdmJhY2suaW5uZXJIVE1MID0gXCJnb29kYnllXCJcblxuICAgICAgICB0aGlzLmNhcmQyZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY2FyZDJkaXYuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5jYXJkMWRpdi5zdHlsZS5oZWlnaHQuc2xpY2UoMCwgLTIpICogLjl9cHhgO1xuICAgICAgICB0aGlzLmNhcmQyZGl2LnN0eWxlLndpZHRoID0gYCR7dGhpcy5jYXJkMWRpdi5zdHlsZS53aWR0aC5zbGljZSgwLCAtMikgKiAuOX1weGA7XG4gICAgICAgIC8vIHRoaXMuY2FyZDJkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB0aGlzLmNhcmQyZGl2LnN0eWxlLm1hcmdpblRvcCA9IGAke3RoaXMuY2FyZDFkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSAtIHRoaXMuY2FyZDJkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSArIDZ9cHhgXG4gICAgICAgIHRoaXMuY2FyZDJkaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG4gICAgICAgIHRoaXMuY2FyZDJkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHRoaXMuY2FyZDJkaXYuc3R5bGUuekluZGV4ID0gMTAwMDNcblxuICAgICAgICB0aGlzLmNhcmQyZGl2aW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5jYXJkMmRpdmlubmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgdGhpcy5jYXJkMmRpdmlubmVyLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICAgICAgICB0aGlzLmNhcmQyZGl2ZnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5jYXJkMmRpdmJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aGlzLmNhcmQyZGl2LmNsYXNzTGlzdC5hZGQoXCJmbGlwLWNhcmRcIilcbiAgICAgICAgdGhpcy5jYXJkMmRpdmlubmVyLmNsYXNzTGlzdC5hZGQoXCJmbGlwLWNhcmQtaW5uZXJcIilcbiAgICAgICAgdGhpcy5jYXJkMmRpdmZyb250LmNsYXNzTGlzdC5hZGQoXCJmbGlwLWNhcmQtZnJvbnRcIilcbiAgICAgICAgdGhpcy5jYXJkMmRpdmZyb250LmlubmVySFRNTCA9IFwiY2FyZDJcIlxuICAgICAgICB0aGlzLmNhcmQyZGl2YmFjay5jbGFzc0xpc3QuYWRkKFwiZmxpcC1jYXJkLWJhY2tcIilcblxuICAgICAgICB0aGlzLmNhcmQzZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY2FyZDNkaXYuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5jYXJkMmRpdi5zdHlsZS5oZWlnaHQuc2xpY2UoMCwgLTIpICogLjl9cHhgO1xuICAgICAgICB0aGlzLmNhcmQzZGl2LnN0eWxlLndpZHRoID0gYCR7dGhpcy5jYXJkMmRpdi5zdHlsZS53aWR0aC5zbGljZSgwLCAtMikgKiAuOX1weGA7XG4gICAgICAgIC8vIHRoaXMuY2FyZDNkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgdGhpcy5jYXJkM2Rpdi5zdHlsZS5tYXJnaW5Ub3AgPSBgJHsodGhpcy5jYXJkMWRpdi5zdHlsZS5oZWlnaHQuc2xpY2UoMCwgLTIpIC0gdGhpcy5jYXJkMmRpdi5zdHlsZS5oZWlnaHQuc2xpY2UoMCwgLTIpKSArIDcgKyAodGhpcy5jYXJkMmRpdi5zdHlsZS5oZWlnaHQuc2xpY2UoMCwgLTIpIC0gdGhpcy5jYXJkM2Rpdi5zdHlsZS5oZWlnaHQuc2xpY2UoMCwgLTIpKSArIDl9cHhgXG4gICAgICAgIHRoaXMuY2FyZDNkaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG4gICAgICAgIHRoaXMuY2FyZDNkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHRoaXMuY2FyZDNkaXYuc3R5bGUuekluZGV4ID0gMTAwMDJcblxuICAgICAgICB0aGlzLmNhcmQzZGl2aW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5jYXJkM2RpdmlubmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICAgIHRoaXMuY2FyZDNkaXZpbm5lci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICAgICAgdGhpcy5jYXJkM2RpdmZyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY2FyZDNkaXZiYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGhpcy5jYXJkM2Rpdi5jbGFzc0xpc3QuYWRkKFwiZmxpcC1jYXJkXCIpXG4gICAgICAgIHRoaXMuY2FyZDNkaXZpbm5lci5jbGFzc0xpc3QuYWRkKFwiZmxpcC1jYXJkLWlubmVyXCIpXG4gICAgICAgIHRoaXMuY2FyZDNkaXZmcm9udC5jbGFzc0xpc3QuYWRkKFwiZmxpcC1jYXJkLWZyb250XCIpXG4gICAgICAgIHRoaXMuY2FyZDNkaXZmcm9udC5pbm5lckhUTUwgPSBcImNhcmQzXCJcbiAgICAgICAgdGhpcy5jYXJkM2RpdmJhY2suY2xhc3NMaXN0LmFkZChcImZsaXAtY2FyZC1iYWNrXCIpXG5cbiAgICAgICAgdGhpcy5jYXJkNGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNhcmQ0ZGl2LnN0eWxlLmhlaWdodCA9IGAke3RoaXMuY2FyZDNkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSAqIC45fXB4YDtcbiAgICAgICAgdGhpcy5jYXJkNGRpdi5zdHlsZS53aWR0aCA9IGAke3RoaXMuY2FyZDNkaXYuc3R5bGUud2lkdGguc2xpY2UoMCwgLTIpICogLjl9cHhgO1xuICAgICAgICAvLyB0aGlzLmNhcmQ0ZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicHVycGxlXCI7XG4gICAgICAgIHRoaXMuY2FyZDRkaXYuc3R5bGUubWFyZ2luVG9wID0gYCR7KHRoaXMuY2FyZDFkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSAtIHRoaXMuY2FyZDJkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSkgKyA3ICsgKHRoaXMuY2FyZDJkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSAtIHRoaXMuY2FyZDNkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSkgKyA3ICsgKHRoaXMuY2FyZDNkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSAtIHRoaXMuY2FyZDRkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSkgKyAxNH1weGBcbiAgICAgICAgdGhpcy5jYXJkNGRpdi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICAgICAgdGhpcy5jYXJkNGRpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5jYXJkNGRpdi5zdHlsZS56SW5kZXggPSAxMDAwMVxuICAgICAgICB0aGlzLmNhcmQ0ZGl2LnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICAgICAgdGhpcy5jYXJkNGRpdmlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY2FyZDRkaXZpbm5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInB1cnBsZVwiO1xuICAgICAgICB0aGlzLmNhcmQ0ZGl2aW5uZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG4gICAgICAgIHRoaXMuY2FyZDRkaXZmcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNhcmQ0ZGl2YmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRoaXMuY2FyZDRkaXYuY2xhc3NMaXN0LmFkZChcImZsaXAtY2FyZFwiKVxuICAgICAgICB0aGlzLmNhcmQ0ZGl2aW5uZXIuY2xhc3NMaXN0LmFkZChcImZsaXAtY2FyZC1pbm5lclwiKVxuICAgICAgICB0aGlzLmNhcmQ0ZGl2ZnJvbnQuY2xhc3NMaXN0LmFkZChcImZsaXAtY2FyZC1mcm9udFwiKVxuICAgICAgICB0aGlzLmNhcmQ0ZGl2ZnJvbnQuaW5uZXJIVE1MID0gXCJjYXJkNFwiXG4gICAgICAgIHRoaXMuY2FyZDRkaXZiYWNrLmNsYXNzTGlzdC5hZGQoXCJmbGlwLWNhcmQtYmFja1wiKVxuXG4gICAgICAgIHRoaXMuY2FyZDRPcmlnaW5hbEhlaWdodCA9IHRoaXMuY2FyZDRkaXYuc3R5bGUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhcmQ0T3JpZ2luYWxXaWR0aCA9IHRoaXMuY2FyZDRkaXYuc3R5bGUud2lkdGg7XG4gICAgICAgIHRoaXMuY2FyZDRPcmlnaW5hbE1hcmdpbiA9IHRoaXMuY2FyZDRkaXYuc3R5bGUubWFyZ2luVG9wO1xuXG4gICAgICAgIHRoaXMuY2FyZDMgPSBuZXcgQ29tcG9uZW50KHRoaXMuY2FyZDNXaWR0aCwgdGhpcy5jYXJkM0hlaWdodCwgXCJncmVlblwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLmNhcmQzV2lkdGggLyAyLCB0aGlzLmNhcmQyLnkgKyB0aGlzLmNhcmQySGVpZ2h0IC0gdGhpcy5jYXJkM0hlaWdodCArICgyICogdGhpcy5jYW52YXNBdmF0YXJSYXRpbyksIHRoaXMuY3R4LCBcImZsYXNoY2FyZGNvbG9yXCIpXG5cblxuICAgICAgICB0aGlzLmNhcmQ0ZGl2aW5uZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXJkNGRpdmZyb250KVxuICAgICAgICB0aGlzLmNhcmQ0ZGl2aW5uZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXJkNGRpdmJhY2spXG4gICAgICAgIHRoaXMuY2FyZDRkaXYuYXBwZW5kQ2hpbGQodGhpcy5jYXJkNGRpdmlubmVyKVxuXG4gICAgICAgIHRoaXMuY2FyZDNkaXZpbm5lci5hcHBlbmRDaGlsZCh0aGlzLmNhcmQzZGl2ZnJvbnQpXG4gICAgICAgIHRoaXMuY2FyZDNkaXZpbm5lci5hcHBlbmRDaGlsZCh0aGlzLmNhcmQzZGl2YmFjaylcbiAgICAgICAgdGhpcy5jYXJkM2Rpdi5hcHBlbmRDaGlsZCh0aGlzLmNhcmQzZGl2aW5uZXIpXG5cbiAgICAgICAgdGhpcy5jYXJkMmRpdmlubmVyLmFwcGVuZENoaWxkKHRoaXMuY2FyZDJkaXZmcm9udClcbiAgICAgICAgdGhpcy5jYXJkMmRpdmlubmVyLmFwcGVuZENoaWxkKHRoaXMuY2FyZDJkaXZiYWNrKVxuICAgICAgICB0aGlzLmNhcmQyZGl2LmFwcGVuZENoaWxkKHRoaXMuY2FyZDJkaXZpbm5lcilcblxuICAgICAgICB0aGlzLmNhcmQxZGl2aW5uZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXJkMWRpdmZyb250KVxuICAgICAgICB0aGlzLmNhcmQxZGl2aW5uZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXJkMWRpdmJhY2spXG4gICAgICAgIHRoaXMuY2FyZDFkaXYuYXBwZW5kQ2hpbGQodGhpcy5jYXJkMWRpdmlubmVyKVxuICAgICAgICBmbGFzaGNhcmRBcmVhQm90dG9tLmFwcGVuZENoaWxkKHRoaXMuY2FyZDFkaXYpXG4gICAgICAgIGZsYXNoY2FyZEFyZWFCb3R0b20uYXBwZW5kQ2hpbGQodGhpcy5jYXJkMmRpdilcbiAgICAgICAgZmxhc2hjYXJkQXJlYUJvdHRvbS5hcHBlbmRDaGlsZCh0aGlzLmNhcmQzZGl2KVxuICAgICAgICBmbGFzaGNhcmRBcmVhQm90dG9tLmFwcGVuZENoaWxkKHRoaXMuY2FyZDRkaXYpXG4gICAgICAgIGZsYXNoY2FyZEFyZWEuYXBwZW5kQ2hpbGQoZmxhc2hjYXJkQXJlYUJvdHRvbSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmbGFzaGNhcmRBcmVhKTtcblxuICAgICAgICB0aGlzLmNhcmQxZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZsaXBwZWQgfHwgdGhpcy5kcmFnZ2luZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mbGlwcGVkID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5jYXJkMWRpdmlubmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjZzXCI7XG4gICAgICAgICAgICB0aGlzLmNhcmQxZGl2aW5uZXIuY2xhc3NMaXN0LmFkZCgnZmxpcC10aGUtY2FyZC1hY3Rpb24nKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY2FyZDFkaXYuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RUb3VjaFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICAgICAgdGhpcy5maXJzdFRvdWNoWCA9IGUudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jdXJyZW50VG9wID0gdGhpcy5jYW52YXMuaGVpZ2h0ICogLjRcbiAgICAgICAgdGhpcy5jdXJyZW50TGVmdCA9IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtICh0aGlzLmNhcmQxZGl2LnN0eWxlLndpZHRoLnNsaWNlKDAsIC0yKSAvIDIpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudExlZnQpXG5cbiAgICAgICAgdGhpcy5jYXJkMWRpdi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIChlKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMud2FzRHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRvdWNoZXNbMF0uY2xpZW50WClcbiAgICAgICAgICAgIHRoaXMuY2FyZDFkaXYuc3R5bGUudG9wID0gYCR7dGhpcy5jdXJyZW50VG9wICsgKGUudG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5maXJzdFRvdWNoWSl9cHhgXG4gICAgICAgICAgICB0aGlzLmNhcmQxZGl2LnN0eWxlLmxlZnQgPSBgJHt0aGlzLmN1cnJlbnRMZWZ0ICsgKGUudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5maXJzdFRvdWNoWCl9cHhgXG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpIDwgdGhpcy5jdXJyZW50TGVmdCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9yZ2V0XCIpXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkMWRpdi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKC0keyhNYXRoLmFicyh0aGlzLmN1cnJlbnRMZWZ0IC0gdGhpcy5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSkpIC8gMTB9ZGVnKWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW1lbWJlclwiKVxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZDFkaXYuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgkeyhNYXRoLmFicyh0aGlzLmN1cnJlbnRMZWZ0IC0gdGhpcy5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSkpIC8gMTB9ZGVnKWBcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuY2FyZDFkaXYuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhcmQxZGl2LnN0eWxlLmxlZnQpXG5cbiAgICAgICAgICAgIGlmICh0aGlzLndhc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuY3VycmVudExlZnQgLSB0aGlzLmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpKSA+ICh0aGlzLmNhcmQxZGl2LnN0eWxlLndpZHRoLnNsaWNlKDAsIC0yKSAvIDUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxpcHBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSA8IHRoaXMuY3VycmVudExlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm9yZ2V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93Q2FyZExlZnQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtZW1iZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dDYXJkUmlnaHQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpIDwgdGhpcy5jdXJyZW50TGVmdCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVDYXJkQmFja0xlZnQodGhpcylcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb24ndCBmb3JnZXRcIilcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2FyZEJhY2tSaWdodCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb24ndCByZW1lbWJlclwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgdGhpcy53YXNEcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBtb3ZlQ2FyZHNVcCh0aGF0KSB7XG4gICAgICAgIGxldCB3aWR0aERpZmYyID0gdGhhdC5jYXJkMWRpdk9yaWdpbmFsV2lkdGggLSB0aGF0LmNhcmQyZGl2LnN0eWxlLndpZHRoLnNsaWNlKDAsLTIpXG4gICAgICAgIGxldCBoZWlnaHREaWZmMiA9IHRoYXQuY2FyZDFkaXZPcmlnaW5hbEhlaWdodCAtIHRoYXQuY2FyZDJkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsLTIpXG4gICAgICAgIGxldCBvcmlnaW5hbE1hcmdpbjIgPSB0aGF0LmNhcmQyZGl2LnN0eWxlLm1hcmdpblRvcC5zbGljZSgwLCAtMilcblxuICAgICAgICBsZXQgd2lkdGhEaWZmMyA9IHRoYXQuY2FyZDFkaXZPcmlnaW5hbFdpZHRoICogLjkgLSB0aGF0LmNhcmQzZGl2LnN0eWxlLndpZHRoLnNsaWNlKDAsLTIpXG4gICAgICAgIGxldCBoZWlnaHREaWZmMyA9IHRoYXQuY2FyZDFkaXZPcmlnaW5hbEhlaWdodCAqIC45IC0gdGhhdC5jYXJkM2Rpdi5zdHlsZS5oZWlnaHQuc2xpY2UoMCwtMilcbiAgICAgICAgbGV0IG9yaWdpbmFsTWFyZ2luMyA9IHRoYXQuY2FyZDNkaXYuc3R5bGUubWFyZ2luVG9wLnNsaWNlKDAsIC0yKSAtIG9yaWdpbmFsTWFyZ2luMlxuXG4gICAgICAgIGxldCB3aWR0aERpZmY0ID0gKHRoYXQuY2FyZDFkaXZPcmlnaW5hbFdpZHRoICogLjkpICogLjkgLSB0aGF0LmNhcmQ0ZGl2LnN0eWxlLndpZHRoLnNsaWNlKDAsLTIpXG4gICAgICAgIGxldCBoZWlnaHREaWZmNCA9ICh0aGF0LmNhcmQxZGl2T3JpZ2luYWxIZWlnaHQgKiAuOSkgKiAuOSAtIHRoYXQuY2FyZDRkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsLTIpXG4gICAgICAgIGxldCBvcmlnaW5hbE1hcmdpbjQgPSB0aGF0LmNhcmQ0ZGl2LnN0eWxlLm1hcmdpblRvcC5zbGljZSgwLCAtMikgLSBvcmlnaW5hbE1hcmdpbjIgLSBvcmlnaW5hbE1hcmdpbjNcblxuICAgICAgICBsZXQgc3BlZWRSYXRpbyA9IC4xXG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiBtYWtlQmlnZ2VyKCkge1xuICAgICAgICAgICAgdGhhdC5jYXJkMmRpdi5zdHlsZS53aWR0aCA9IGAke051bWJlcih0aGF0LmNhcmQyZGl2LnN0eWxlLndpZHRoLnNsaWNlKDAsLTIpKSArICh3aWR0aERpZmYyICogc3BlZWRSYXRpbyl9cHhgXG4gICAgICAgICAgICB0aGF0LmNhcmQyZGl2LnN0eWxlLmhlaWdodCA9IGAke051bWJlcih0aGF0LmNhcmQyZGl2LnN0eWxlLmhlaWdodC5zbGljZSgwLC0yKSkgKyAoaGVpZ2h0RGlmZjIgKiBzcGVlZFJhdGlvKX1weGBcbiAgICAgICAgICAgIHRoYXQuY2FyZDJkaXYuc3R5bGUubWFyZ2luVG9wID0gYCR7TnVtYmVyKHRoYXQuY2FyZDJkaXYuc3R5bGUubWFyZ2luVG9wLnNsaWNlKDAsLTIpKSAtIChOdW1iZXIob3JpZ2luYWxNYXJnaW4yKSAqIHNwZWVkUmF0aW8pfXB4YFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGF0LmNhcmQzZGl2LnN0eWxlLndpZHRoID0gYCR7TnVtYmVyKHRoYXQuY2FyZDNkaXYuc3R5bGUud2lkdGguc2xpY2UoMCwtMikpICsgKHdpZHRoRGlmZjMgKiBzcGVlZFJhdGlvKX1weGBcbiAgICAgICAgICAgIHRoYXQuY2FyZDNkaXYuc3R5bGUuaGVpZ2h0ID0gYCR7TnVtYmVyKHRoYXQuY2FyZDNkaXYuc3R5bGUuaGVpZ2h0LnNsaWNlKDAsLTIpKSArIChoZWlnaHREaWZmMyAqIHNwZWVkUmF0aW8pfXB4YFxuICAgICAgICAgICAgdGhhdC5jYXJkM2Rpdi5zdHlsZS5tYXJnaW5Ub3AgPSBgJHtOdW1iZXIodGhhdC5jYXJkM2Rpdi5zdHlsZS5tYXJnaW5Ub3Auc2xpY2UoMCwtMikpIC0gKE51bWJlcihvcmlnaW5hbE1hcmdpbjMpICogc3BlZWRSYXRpbyl9cHhgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoYXQuY2FyZDRkaXYuc3R5bGUud2lkdGggPSBgJHtOdW1iZXIodGhhdC5jYXJkNGRpdi5zdHlsZS53aWR0aC5zbGljZSgwLC0yKSkgKyAod2lkdGhEaWZmNCAqIHNwZWVkUmF0aW8pfXB4YFxuICAgICAgICAgICAgdGhhdC5jYXJkNGRpdi5zdHlsZS5oZWlnaHQgPSBgJHtOdW1iZXIodGhhdC5jYXJkNGRpdi5zdHlsZS5oZWlnaHQuc2xpY2UoMCwtMikpICsgKGhlaWdodERpZmY0ICogc3BlZWRSYXRpbyl9cHhgXG4gICAgICAgICAgICB0aGF0LmNhcmQ0ZGl2LnN0eWxlLm1hcmdpblRvcCA9IGAke051bWJlcih0aGF0LmNhcmQ0ZGl2LnN0eWxlLm1hcmdpblRvcC5zbGljZSgwLC0yKSkgLSAoTnVtYmVyKG9yaWdpbmFsTWFyZ2luNCkgKiBzcGVlZFJhdGlvKX1weGBcbiAgICAgICAgICAgIHRoYXQuY2FyZDRkaXYuc3R5bGUub3BhY2l0eSA9IE51bWJlcih0aGF0LmNhcmQ0ZGl2LnN0eWxlLm9wYWNpdHkpICsgc3BlZWRSYXRpb1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGFjaXR5OiBcIiwgdGhhdC5jYXJkNGRpdi5zdHlsZS5vcGFjaXR5KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhhdC5jYXJkMmRpdi5zdHlsZS53aWR0aC5zbGljZSgwLC0yKSA8IHRoYXQuY2FyZDFkaXZPcmlnaW5hbFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBtYWtlQmlnZ2VyKClcbiAgICAgICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhhdC50cmFuc2ZlckNhcmRzKHRoYXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwKVxuICAgICAgICBcblxuICAgIH1cblxuICAgIHRyYW5zZmVyQ2FyZHModGhhdCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIGNoZWNrSWZEb25lVGhyb3dpbmcoKSB7XG4gICAgICAgICAgICBpZiAodGhhdC50aHJvd2luZykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tJZkRvbmVUaHJvd2luZygpXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGxldCBjYXJkMUJhY2tncm91bmRDb2xvciA9IHRoYXQuY2FyZDFkaXZpbm5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICAgICAgICBsZXQgY2FyZDFJbm5lckhUTUwgPSB0aGF0LmNhcmQxZGl2ZnJvbnQuaW5uZXJIVE1MXG5cbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2aW5uZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDBzXCI7XG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdmlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAtdGhlLWNhcmQtYWN0aW9uJylcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXZpbm5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGF0LmNhcmQyZGl2aW5uZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdmZyb250LmlubmVySFRNTCA9IHRoYXQuY2FyZDJkaXZmcm9udC5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwidG9wXCIpO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMmRpdmlubmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoYXQuY2FyZDNkaXZpbm5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQyZGl2ZnJvbnQuaW5uZXJIVE1MID0gdGhhdC5jYXJkM2RpdmZyb250LmlubmVySFRNTFxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDJkaXYuc3R5bGUud2lkdGggPSB0aGF0LmNhcmQzZGl2LnN0eWxlLndpZHRoO1xuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDJkaXYuc3R5bGUuaGVpZ2h0ID0gdGhhdC5jYXJkM2Rpdi5zdHlsZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMmRpdi5zdHlsZS5tYXJnaW5Ub3AgPSB0aGF0LmNhcmQzZGl2LnN0eWxlLm1hcmdpblRvcDtcblxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDNkaXZpbm5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGF0LmNhcmQ0ZGl2aW5uZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkM2RpdmZyb250LmlubmVySFRNTCA9IHRoYXQuY2FyZDRkaXZmcm9udC5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQzZGl2LnN0eWxlLndpZHRoID0gdGhhdC5jYXJkNGRpdi5zdHlsZS53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQzZGl2LnN0eWxlLmhlaWdodCA9IHRoYXQuY2FyZDRkaXYuc3R5bGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDNkaXYuc3R5bGUubWFyZ2luVG9wID0gdGhhdC5jYXJkNGRpdi5zdHlsZS5tYXJnaW5Ub3A7XG5cbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQ0ZGl2aW5uZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2FyZDFCYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQ0ZGl2ZnJvbnQuaW5uZXJIVE1MID0gY2FyZDFJbm5lckhUTUxcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQ0ZGl2LnN0eWxlLndpZHRoID0gdGhhdC5jYXJkNE9yaWdpbmFsV2lkdGg7XG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkNGRpdi5zdHlsZS5oZWlnaHQgPSB0aGF0LmNhcmQ0T3JpZ2luYWxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkNGRpdi5zdHlsZS5tYXJnaW5Ub3AgPSB0aGF0LmNhcmQ0T3JpZ2luYWxNYXJnaW47XG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkNGRpdi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKVxuICAgICAgICBcbiAgICB9XG5cbiAgICB0aHJvd0NhcmRMZWZ0KHRoYXQpIHtcblxuICAgICAgICB0aGF0Lm1vdmVDYXJkc1VwKHRoYXQpXG5cbiAgICAgICAgdGhhdC50aHJvd2luZyA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LnRocm93aW5nID0gZmFsc2U7XG4gICAgICAgIH0sIDMwMClcblxuICAgICAgICBsZXQgb3JpZ2luYWxMZWZ0RGlmZiA9IE1hdGguYWJzKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLCAtMikgLSB0aGlzLmN1cnJlbnRMZWZ0KVxuICAgICAgICBsZXQgb3JpZ2luYWxUb3BEaWZmID0gTWF0aC5hYnModGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwgLTIpIC0gdGhpcy5jdXJyZW50VG9wKVxuXG4gICAgICAgIGxldCBzcGVlZFJhdGlvID0gLjFcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmluZz9cIilcblxuICAgICAgICBpZiAob3JpZ2luYWxMZWZ0RGlmZiA+IG9yaWdpbmFsVG9wRGlmZikge1xuICAgICAgICAgICAgd2hpbGUgKG9yaWdpbmFsTGVmdERpZmYgKiBzcGVlZFJhdGlvID4gMTUpIHtcbiAgICAgICAgICAgICAgICBzcGVlZFJhdGlvIC09IDAuMDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChvcmlnaW5hbExlZnREaWZmICogc3BlZWRSYXRpbyA8IDE1KSB7XG4gICAgICAgICAgICAgICAgc3BlZWRSYXRpbyArPSAwLjAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxUb3BEaWZmICogc3BlZWRSYXRpbyA+IDE1KSB7XG4gICAgICAgICAgICAgICAgc3BlZWRSYXRpbyAtPSAwLjAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxUb3BEaWZmICogc3BlZWRSYXRpbyA8IDE1KSB7XG4gICAgICAgICAgICAgICAgc3BlZWRSYXRpbyArPSAwLjAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKG9yaWdpbmFsTGVmdERpZmYgKiBzcGVlZFJhdGlvKVxuICAgICAgICBjb25zb2xlLmxvZyhvcmlnaW5hbFRvcERpZmYgKiBzcGVlZFJhdGlvKVxuICAgICAgICBpZiAob3JpZ2luYWxMZWZ0RGlmZiAqIHNwZWVkUmF0aW8pXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIG1vdmVCYWNrKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpIDwgdGhhdC5jdXJyZW50TGVmdCAmJiB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLCAtMikgPCB0aGF0LmN1cnJlbnRUb3ApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQgPSBgJHtOdW1iZXIodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSkgLSAob3JpZ2luYWxMZWZ0RGlmZiAqIHNwZWVkUmF0aW8pfXB4YFxuICAgICAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcCA9IGAke051bWJlcih0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLCAtMikpIC0gKG9yaWdpbmFsVG9wRGlmZiAqIHNwZWVkUmF0aW8pfXB4YFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0LmNhcmQxZGl2LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoLSR7KE1hdGguYWJzKHRoYXQuY3VycmVudExlZnQgLSB0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpKSAvIDEwfWRlZylgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyEnKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC50aHJvd2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChtb3ZlQmFjaywgMTApXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSA8IHRoYXQuY3VycmVudExlZnQgJiYgdGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwgLTIpID4gdGhhdC5jdXJyZW50VG9wKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0ID0gYCR7TnVtYmVyKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLCAtMikpIC0gKG9yaWdpbmFsTGVmdERpZmYgKiBzcGVlZFJhdGlvKX1weGBcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS50b3AgPSBgJHtOdW1iZXIodGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwgLTIpKSArIChvcmlnaW5hbFRvcERpZmYgKiBzcGVlZFJhdGlvKX1weGBcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC5jYXJkMWRpdi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKC0keyhNYXRoLmFicyh0aGF0LmN1cnJlbnRMZWZ0IC0gdGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpKSkgLyAxMH1kZWcpYFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3ZpbmchJylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQudGhyb3dpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobW92ZUJhY2ssIDEwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTApXG5cbiAgICB9XG5cbiAgICB0aHJvd0NhcmRSaWdodCh0aGF0KSB7XG5cbiAgICAgICAgdGhhdC5tb3ZlQ2FyZHNVcCh0aGF0KVxuXG5cbiAgICAgICAgdGhhdC50aHJvd2luZyA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LnRocm93aW5nID0gZmFsc2U7XG4gICAgICAgIH0sIDMwMClcblxuICAgICAgICBsZXQgb3JpZ2luYWxMZWZ0RGlmZiA9IE1hdGguYWJzKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLCAtMikgLSB0aGlzLmN1cnJlbnRMZWZ0KVxuICAgICAgICBsZXQgb3JpZ2luYWxUb3BEaWZmID0gTWF0aC5hYnModGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwgLTIpIC0gdGhpcy5jdXJyZW50VG9wKVxuXG4gICAgICAgIGxldCBzcGVlZFJhdGlvID0gLjFcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmluZz9cIilcblxuICAgICAgICBpZiAob3JpZ2luYWxMZWZ0RGlmZiA+IG9yaWdpbmFsVG9wRGlmZikge1xuICAgICAgICAgICAgd2hpbGUgKG9yaWdpbmFsTGVmdERpZmYgKiBzcGVlZFJhdGlvID4gMTUpIHtcbiAgICAgICAgICAgICAgICBzcGVlZFJhdGlvIC09IDAuMDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChvcmlnaW5hbExlZnREaWZmICogc3BlZWRSYXRpbyA8IDE1KSB7XG4gICAgICAgICAgICAgICAgc3BlZWRSYXRpbyArPSAwLjAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxUb3BEaWZmICogc3BlZWRSYXRpbyA+IDE1KSB7XG4gICAgICAgICAgICAgICAgc3BlZWRSYXRpbyAtPSAwLjAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAob3JpZ2luYWxUb3BEaWZmICogc3BlZWRSYXRpbyA8IDE1KSB7XG4gICAgICAgICAgICAgICAgc3BlZWRSYXRpbyArPSAwLjAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKG9yaWdpbmFsTGVmdERpZmYgKiBzcGVlZFJhdGlvKVxuICAgICAgICBjb25zb2xlLmxvZyhvcmlnaW5hbFRvcERpZmYgKiBzcGVlZFJhdGlvKVxuICAgICAgICBpZiAob3JpZ2luYWxMZWZ0RGlmZiAqIHNwZWVkUmF0aW8pXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIG1vdmVCYWNrKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpID4gdGhhdC5jdXJyZW50TGVmdCAmJiB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLCAtMikgPiB0aGF0LmN1cnJlbnRUb3ApIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQgPSBgJHtOdW1iZXIodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSkgKyAob3JpZ2luYWxMZWZ0RGlmZiAqIHNwZWVkUmF0aW8pfXB4YFxuICAgICAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcCA9IGAke051bWJlcih0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLCAtMikpICsgKG9yaWdpbmFsVG9wRGlmZiAqIHNwZWVkUmF0aW8pfXB4YFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0LmNhcmQxZGl2LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoLSR7KE1hdGguYWJzKHRoYXQuY3VycmVudExlZnQgLSB0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpKSAvIDEwfWRlZylgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyEnKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC50aHJvd2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChtb3ZlQmFjaywgMTApXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSA+IHRoYXQuY3VycmVudExlZnQgJiYgdGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwgLTIpIDwgdGhhdC5jdXJyZW50VG9wKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0ID0gYCR7TnVtYmVyKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLCAtMikpICsgKG9yaWdpbmFsTGVmdERpZmYgKiBzcGVlZFJhdGlvKX1weGBcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS50b3AgPSBgJHtOdW1iZXIodGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwgLTIpKSAtIChvcmlnaW5hbFRvcERpZmYgKiBzcGVlZFJhdGlvKX1weGBcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC5jYXJkMWRpdi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKC0keyhNYXRoLmFicyh0aGF0LmN1cnJlbnRMZWZ0IC0gdGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsLTIpKSkgLyAxMH1kZWcpYFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3ZpbmchJylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQudGhyb3dpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobW92ZUJhY2ssIDEwKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMClcblxuICAgIH1cblxuICAgIG1vdmVDYXJkQmFja0xlZnQodGhhdCkge1xuXG4gICAgICAgIGxldCBvcmlnaW5hbExlZnREaWZmID0gTWF0aC5hYnModGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSAtIHRoaXMuY3VycmVudExlZnQpXG4gICAgICAgIGxldCBvcmlnaW5hbFRvcERpZmYgPSBNYXRoLmFicyh0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLCAtMikgLSB0aGlzLmN1cnJlbnRUb3ApXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJtb3Zpbmc/XCIpXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gbW92ZUJhY2soKSB7XG4gICAgICAgICAgICBpZiAodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSA8IHRoYXQuY3VycmVudExlZnQgJiYgdGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwgLTIpIDwgdGhhdC5jdXJyZW50VG9wKSB7XG5cbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQgPSBgJHtOdW1iZXIodGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSkgKyAob3JpZ2luYWxMZWZ0RGlmZiAqIC4xKX1weGBcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcCA9IGAke051bWJlcih0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLCAtMikpICsgKG9yaWdpbmFsVG9wRGlmZiAqIC4xKX1weGBcbiAgICAgICAgICAgICAgICB0aGF0LmNhcmQxZGl2LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoLSR7KE1hdGguYWJzKHRoYXQuY3VycmVudExlZnQgLSB0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpKSkgLyAxMH1kZWcpYFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbW92aW5nIScpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChtb3ZlQmFjaywgMTApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLCAtMikgPCB0aGF0LmN1cnJlbnRMZWZ0ICYmIHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wLnNsaWNlKDAsIC0yKSA+IHRoYXQuY3VycmVudFRvcCkge1xuXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0ID0gYCR7TnVtYmVyKHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdC5zbGljZSgwLCAtMikpICsgKG9yaWdpbmFsTGVmdERpZmYgKiAuMSl9cHhgXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS50b3AgPSBgJHtOdW1iZXIodGhhdC5jYXJkMWRpdi5zdHlsZS50b3Auc2xpY2UoMCwgLTIpKSAtIChvcmlnaW5hbFRvcERpZmYgKiAuMSl9cHhgXG4gICAgICAgICAgICAgICAgdGhhdC5jYXJkMWRpdi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKC0keyhNYXRoLmFicyh0aGF0LmN1cnJlbnRMZWZ0IC0gdGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSkpIC8gMTB9ZGVnKWBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyEnKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobW92ZUJhY2ssIDEwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMClcblxuICAgIH1cblxuICAgIG1vdmVDYXJkQmFja1JpZ2h0KHRoYXQpIHtcbiAgICAgICAgbGV0IG9yaWdpbmFsTGVmdERpZmYgPSBNYXRoLmFicyh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpIC0gdGhpcy5jdXJyZW50TGVmdClcbiAgICAgICAgbGV0IG9yaWdpbmFsVG9wRGlmZiA9IE1hdGguYWJzKHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wLnNsaWNlKDAsIC0yKSAtIHRoaXMuY3VycmVudFRvcClcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmluZz9cIilcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiBtb3ZlQmFjaygpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpID4gdGhhdC5jdXJyZW50TGVmdCAmJiB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLCAtMikgPCB0aGF0LmN1cnJlbnRUb3ApIHtcblxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdCA9IGAke051bWJlcih0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpKSAtIChvcmlnaW5hbExlZnREaWZmICogLjEpfXB4YFxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wID0gYCR7TnVtYmVyKHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wLnNsaWNlKDAsIC0yKSkgKyAob3JpZ2luYWxUb3BEaWZmICogLjEpfXB4YFxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgkeyhNYXRoLmFicyh0aGF0LmN1cnJlbnRMZWZ0IC0gdGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSkpIC8gMTB9ZGVnKWBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyEnKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobW92ZUJhY2ssIDEwKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpID4gdGhhdC5jdXJyZW50TGVmdCAmJiB0aGF0LmNhcmQxZGl2LnN0eWxlLnRvcC5zbGljZSgwLCAtMikgPiB0aGF0LmN1cnJlbnRUb3ApIHtcblxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUubGVmdCA9IGAke051bWJlcih0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQuc2xpY2UoMCwgLTIpKSAtIChvcmlnaW5hbExlZnREaWZmICogLjEpfXB4YFxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wID0gYCR7TnVtYmVyKHRoYXQuY2FyZDFkaXYuc3R5bGUudG9wLnNsaWNlKDAsIC0yKSkgLSAob3JpZ2luYWxUb3BEaWZmICogLjEpfXB4YFxuICAgICAgICAgICAgICAgIHRoYXQuY2FyZDFkaXYuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgkeyhNYXRoLmFicyh0aGF0LmN1cnJlbnRMZWZ0IC0gdGhhdC5jYXJkMWRpdi5zdHlsZS5sZWZ0LnNsaWNlKDAsIC0yKSkpIC8gMTB9ZGVnKWBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LmNhcmQxZGl2LnN0eWxlLmxlZnQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyEnKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobW92ZUJhY2ssIDEwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMClcbiAgICB9XG5cbiAgICBjbGljayhlKSB7XG5cbiAgICAgICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIikge1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50eXBlID09PSBcIm1vdXNldXBcIikge1xuICAgICAgICAgICAgdGhpcy5jbGlja0dYID0gdGhpcy5neDtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tHWSA9IHRoaXMuZ3k7XG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS5tb3ZlV2l0aEFuaW1hdGlvbih0aGlzLmd4LCB0aGlzLmd5KVxuICAgICAgICAgICAgaWYgKHRoaXMuY2FyZDEuY2xpY2tlZCh0aGlzLmd4LCB0aGlzLmd5KSkgdGhpcy5mbGlwQ2FyZCgpXG4gICAgICAgIH1cblxuXG5cbiAgICB9XG5cblxuICAgIHJlc2V0Q2FyZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNldFwiKVxuICAgIH1cblxuICAgIGFuaW1hdGUoZSkge1xuXG5cblxuICAgICAgICB0aGlzLmFkdmVudHVyZUd1eS5hbmltYXRlKClcbiAgICAgICAgLy8gdGhpcy5jYXJkMy51cGRhdGUoKVxuICAgICAgICAvLyB0aGlzLmNhcmQyLnVwZGF0ZSgpXG4gICAgICAgIC8vIHRoaXMuY2FyZDEudXBkYXRlKClcblxuXG4gICAgICAgIHRoaXMuZnJhbWUrK1xuICAgIH1cblxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRjZGE3NGY1NTY0N2RmN2ViMzc5XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9