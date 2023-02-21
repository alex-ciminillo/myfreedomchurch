import Component from "./component"
import Avatar from './avatar'
import AvatarImg from './../images/mana/char_a_p1/char_a_p1_0bas_humn_v01.png'
import House from './../images/home/avatarStartingHouse2.png'


export default class StudyPage {
    constructor(canvas, ctx, dimensions) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;

        let avatarTempWidth = this.canvas.width * 0.49230769230769234
        this.avatarWidth = (avatarTempWidth % 64) >= 2.5 ? parseInt(avatarTempWidth / 64) * 64 + 64 : parseInt(avatarTempWidth / 64) * 64
        this.avatarHeight = (this.avatarWidth / 64) * 65;
        this.canvasAvatarRatio = (this.avatarWidth / 64)
        this.adventureGuy = new Avatar(this.avatarWidth, this.avatarHeight, AvatarImg, this.canvas.width / 2 - this.avatarWidth / 1.5, this.canvas.height / 2 - this.avatarHeight / 2, this.ctx, "sprite", 5, 3, 64, 65, 64, 65, 0, 'toeTapDown', 7, this.canvasAvatarRatio);
       
        this.card1Width = 95 * this.canvasAvatarRatio;
        this.card1WidthOriginal = this.card1Width

        if (this.canvas.width > this.canvas.height * .6) {
            // square cards for ipads
            this.card1Height = this.card1Width;
        } else {
            this.card1Height = this.card1Width * 1.3;
        }
        

        this.card1 = new Component(this.card1Width, this.card1Height, "blue", this.canvas.width / 2 - this.card1Width / 2, this.canvas.height / 3, this.ctx, "flashcardcolor")
        
        this.card2Height = this.card1Height * .9
        this.card2Width = this.card1Width * .9
        this.card2 = new Component(this.card2Width, this.card2Height, "red", this.canvas.width / 2 - this.card2Width / 2, this.card1.y + this.card1Height - this.card2Height + (2 * this.canvasAvatarRatio), this.ctx, "flashcardcolor")

        this.card3Height = this.card2Height * .9
        this.card3Width = this.card2Width * .9
        this.card3 = new Component(this.card3Width, this.card3Height, "green", this.canvas.width / 2 - this.card3Width / 2, this.card2.y + this.card2Height - this.card3Height + (2 * this.canvasAvatarRatio), this.ctx, "flashcardcolor")


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

        this.card3 = new Component(this.card3Width, this.card3Height, "green", this.canvas.width / 2 - this.card3Width / 2, this.card2.y + this.card2Height - this.card3Height + (2 * this.canvasAvatarRatio), this.ctx, "flashcardcolor")

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