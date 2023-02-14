"use strict";
self["webpackHotUpdatetower_of_dreams"]("index",{

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });

class Component {

    constructor(width, height, color, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight, spriteCropRow2, spriteCropRow2B, spriteCropRow4A, spriteCropRow6A, spriteCropRow4And8B) {
        this.width = width;
        this.type = type;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;    
        this.x = x;
        this.y = y;
        this.color = color;
        this.ctx = ctx;
        this.row = row;
        this.column = column;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.direction = "right";
        this.moving = false;
        this.frameWidthSize = frameWidthSize;
        this.frameHeightSize = frameHeightSize;
        this.rowHeight = rowHeight;
        this.spriteCropRow2 = spriteCropRow2 ? spriteCropRow2 : 0;
        this.spriteCropRow2B = spriteCropRow2B ? spriteCropRow2B : 0;
        this.spriteCropRow4A = spriteCropRow4A ? spriteCropRow4A : this.frameHeight;
        this.spriteCropRow6A = spriteCropRow6A ? spriteCropRow6A : 0;
        this.spriteCropRow4And8B = spriteCropRow4And8B ? spriteCropRow4And8B : 0;
        this.dpi = window.devicePixelRatio;
    }


    update = (a) => {
        if (this.type === "text") {
            this.ctx.font = this.width + " " + this.height;
            this.ctx.fillStyle = this.color;
            this.ctx.fillText(this.text, this.x, this.y);
        } else if (this.type === "image" || this.type === "background") {
            this.image = new Image();
            this.image.src = this.color;
            this.ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
                if (this.type === "background") {
                    this.ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
                }
        } else if (this.type === "sprite") {
            this.image = new Image();
            this.image.src = this.color;
            
            // to cut off hair

            // this.ctx.drawImage(this.image,
            //1 this.column * this.frameWidth, 
            //2 this.row * this.frameHeight, needs to increase same as this.y and needs to minus this.row
            //3 this.frameWidth, 
            //4 this.frameHeightSize, needs to decrease and be equal to this.height
            //5 this.x, 
            //6 this.y, needs to increase same as this.frameHeight (but no this.row?)
            //7 this.width, 
            //8 this.height); needs to decrease and be equal to this.frameHeightSize

            //example with valies
            // this.ctx.drawImage(this.image,
            // this.column * this.frameWidth, 
            // this.row * this.frameHeight + 20 - this.row, 
            // this.frameWidth, 
            // this.frameHeightSize - 20, 
            // this.x, 
            // this.y + 20, 
            // this.width, 
            // this.height - 20);

            //row meaning
            // 2 -> up inside frame
            // 4 -> ratio of stretch
            // 8 -> actual size of frame
            // 6 -> position of box

            // steps to cut hair -> 1. Move hair up inside frame. 2. Position hair in place. 3. Change size of frame

            // example with variables
            let rowModifier = this.height / this.frameHeight 
            this.ctx.drawImage(this.image,
            this.column * this.frameWidth, 
            (this.row * this.frameHeight) + this.spriteCropRow2 - (this.spriteCropRow2B), 
            this.frameWidth, 
            this.spriteCropRow4A - this.spriteCropRow4And8B, 
            this.x, 
            this.y + this.spriteCropRow6A - this.spriteCropRow2B*rowModifier, 
            this.width, 
            this.height - this.spriteCropRow4And8B);
            
            
        } else {
            if (this.color === "invisible") {
                this.ctx.fillStyle = 'rgba(0,0,0,0)'
            } else if (this.color === "transparent") {
                this.ctx.fillStyle = 'rgba(255,255,255, 0.1)'
            } else if (this.color === "transparent2") {
                this.ctx.fillStyle = 'rgba(255,255,255, 0.4)'
            } else {
                this.ctx.fillStyle = this.color;
                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = "black";
                this.ctx.fill();
                this.ctx.stroke();
            }
            
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
        }
   }

    newPos = (a) => {
        this.x += this.speedX;
        this.y += this.speedY;  
        if (this.type === "background") {
            if (this.x === -(this.width)) {
                this.x = 0;
            }
        }      
    }  

    clicked = (gx, gy) => {
        var myleft = this.x * this.dpi;
        var myright = this.x * this.dpi + (this.width * this.dpi);
        var mytop = this.y * this.dpi;
        var mybottom = this.y * this.dpi + (this.height * this.dpi);
        var clicked = true;
        if ((mybottom < gy) || (mytop > gy) || (myright < gx) || (myleft > gx)) {
            clicked = false;
        }
        return clicked;
    }

    intersecting = (object) => {
        var myleft = Number(this.x);
        var myright = Number(this.x) + (this.width);
        var mytop = Number(this.y);
        var mybottom = Number(this.y) + (this.height);
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

    initMove(start, row, anime) {

        this.column = start;
        this.row = row;
        this.anime = anime;
        this.frame = 0;
    }
    

    dir = (gx, gy) => {
        let posX = this.x * this.dpi;
        let posY = this.y  * this.dpi;
        let myright = this.x * this.dpi + (this.width * this.dpi);
        let heightDiff = Math.abs((posY + (this.height  * this.dpi)/2) - gy)
        if (gx < posX + (this.width * this.dpi)/2 && Math.abs(gx - (posX + (this.width * this.dpi)/2)) > heightDiff) {
            return "left"
        } else if (gx > posX + (this.width * this.dpi)/2  && Math.abs(posX - gx) > heightDiff) {
            return "right"
        } else if (gy > (posY + (this.height * this.dpi)/2)) {
            return "down"
        } else {
            return "up"
        }
    }

    startNewAnime(newAnime, nextAnime, playNum, cb) {
        this.customAnimation = false;
        this.frame = 0;
        this.anime = newAnime;
        this.firstAnimation = true;
        this.nextAnime = nextAnime;
        this.playNum = playNum;
        if (cb !== undefined) {
            cb();
        }
    }

    startNewCustomAnime(newAnimeArr, nextAnime, speed, cb) {
        this.frame = 0;
        this.customArr = newAnimeArr;
        this.firstAnimation = true;
        this.nextAnime = nextAnime;
        this.speed = speed;
        this.customAnimation = true;
        if (cb !== undefined) {
            cb();
        }
    }

    customAnime(arr) {
        this.customArr = arr
        if (this.firstAnimation === true) { 
            this.row = this.customArr[0][0];
            this.column = this.customArr[0][1];
            this.customArr = this.customArr.slice(1)
            this.firstAnimation = false;
            this.lastCustomFrame = this.customArr.slice(-1);
        }
        if (this.frame >= this.speed) {
            if (this.customArr.length === 0) {
                if (this.pause === true) {
                    this.row = this.lastCustomFrame[0][0];
                    this.column = this.lastCustomFrame[0][1];
                } else {
                    this.customAnimation = false;
                    this.anime = this.nextAnime;
                    this.frame = 0;
                    this.firstAnimation = true;
                    return;
                }
            }
            if (this.customArr[0] !== undefined) {
                this.row = this.customArr[0][0];
                this.column = this.customArr[0][1];
                this.customArr = this.customArr.slice(1)
            }
            
            this.frame = 0; 
        }
    }

    pauseAnime() {
        this.pause = true;
    }

    spriteAnimation(start, stop, speed, row, colDir) {
        if (this.firstAnimation === true) { 
            this.row = row;
            this.column = start;
            this.firstAnimation = false;
        }
        if (this.frame >= speed) {
            
            if (this.column === stop - colDir + colDir && this.row === row) {
                this.playNum -= 1;
                if (this.pause !== true) {
                    if (this.playNum === 0) {
                        this.playNum -= 1;
                        this.anime = this.nextAnime;
                        this.firstAnimation = true;
                        this.frame = 0;
                        return;
                    }
                    
                        this.column = start - colDir;
                        this.row = row;
                } else {
                    this.stop = true;
                    return;
                }
                
            } else if (this.row > row) {
                if (this.column === stop - colDir - this.columnLength) {
                    this.playNum -= 1;
                    if (this.pause !== true) {
                        if (this.playNum === 0) {
                            this.playNum -= 1;
                            this.anime = this.nextAnime;
                            this.firstAnimation = true;
                            this.frame = 0;
                            return;
                        }
                        
                            this.column = start - colDir;
                            this.row = row;
                    } else {
                        this.stop = true;
                        return;
                    }
                    
                }
            } else if (this.column === this.columnLength) {
                this.row += 1;
                this.column = -1;
            }
            this.column += colDir;
            this.frame = 0;
        }
    }

    checkIfStillMoving(clickx, clicky) {

        if (this.directionOfClick === "left" && this.x > clickx/this.dpi - this.width/2) {
            
        } else if (this.directionOfClick === "right" && this.x < clickx/this.dpi - this.width/2) {
            
        } else if (this.directionOfClickUp === "up" && this.y > clicky/this.dpi - this.height/2) {
            
        } else if (this.directionOfClickUp === "down" && this.y < clicky/this.dpi - this.height/2) {
            
        } else {
            this.speedX = 0;
            this.speedY = 0;
        }
        
    }

    checkSpeed() {
        if (this.speedX > 0 && this.speedX > Math.abs(this.speedY)) {
            this.anime = "walkRight"
        } else if (this.speedX < 0 && Math.abs(this.speedX) > Math.abs(this.speedY)) {
            this.anime = "walkLeft"
        } else if (this.speedX === 0 && this.anime === "walkLeft") {
            this.initMove(0, 3, "idleLeft")
        } else if (this.speedX === 0 && this.anime === "walkRight") {
            this.initMove(0, 2, "idleRight")
        } else if (this.speedY > 0) {
            this.anime = "walkDown"
        } else if (this.speedY < 0) {
            this.anime = "walkUp"
        } else if (this.speedY === 0 && this.anime === "walkUp") {
            this.initMove(0, 1, "idleUp")
        } else if (this.speedY === 0 && this.anime === "walkDown") {
            this.initMove(0, 0, "idleDown")
        }
    }

    moveToMouse = (gx, gy, speed) => {
        this.moving = true;
        let xspeed = Math.abs((this.x - (gx/this.dpi - this.width/2)) * speed);
        let yspeed = Math.abs((this.y - (gy/this.dpi - this.height/2)) * speed);
        
        xspeed > yspeed ? speed = xspeed : speed = yspeed;

        if (this.x > gx/this.dpi - this.width/2) {
            this.directionOfClick = "left"
            this.speedX = -(this.x - (gx/this.dpi - this.width/2))/speed;
            
        } else {
            this.directionOfClick = "right"
            this.speedX = -(this.x - (gx/this.dpi - this.width/2))/speed;
        }
        if (this.y > gy/this.dpi - this.height/2) {
            this.directionOfClickUp = "up"
            this.speedY = -(this.y - (gy/this.dpi - this.height/2))/speed;
        } else {
            this.directionOfClickUp = "down"
            this.speedY = -(this.y - (gy/this.dpi - this.height/2))/speed;
        }
    }


}




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d507ec19f364fefeeb1d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOGQyZWU1OGZiZTNhMDgxZGFkNGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7O1VDcFdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG93ZXJfb2ZfZHJlYW1zLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b3dlcl9vZl9kcmVhbXMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGNvbG9yLCB4LCB5LCBjdHgsIHR5cGUsIHJvdywgY29sdW1uLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgZnJhbWVXaWR0aFNpemUsIGZyYW1lSGVpZ2h0U2l6ZSwgcm93SGVpZ2h0LCBzcHJpdGVDcm9wUm93Miwgc3ByaXRlQ3JvcFJvdzJCLCBzcHJpdGVDcm9wUm93NEEsIHNwcml0ZUNyb3BSb3c2QSwgc3ByaXRlQ3JvcFJvdzRBbmQ4Qikge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnNwZWVkWCA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMDsgICAgXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgdGhpcy5mcmFtZVdpZHRoID0gZnJhbWVXaWR0aDtcbiAgICAgICAgdGhpcy5mcmFtZUhlaWdodCA9IGZyYW1lSGVpZ2h0O1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZVdpZHRoU2l6ZSA9IGZyYW1lV2lkdGhTaXplO1xuICAgICAgICB0aGlzLmZyYW1lSGVpZ2h0U2l6ZSA9IGZyYW1lSGVpZ2h0U2l6ZTtcbiAgICAgICAgdGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XG4gICAgICAgIHRoaXMuc3ByaXRlQ3JvcFJvdzIgPSBzcHJpdGVDcm9wUm93MiA/IHNwcml0ZUNyb3BSb3cyIDogMDtcbiAgICAgICAgdGhpcy5zcHJpdGVDcm9wUm93MkIgPSBzcHJpdGVDcm9wUm93MkIgPyBzcHJpdGVDcm9wUm93MkIgOiAwO1xuICAgICAgICB0aGlzLnNwcml0ZUNyb3BSb3c0QSA9IHNwcml0ZUNyb3BSb3c0QSA/IHNwcml0ZUNyb3BSb3c0QSA6IHRoaXMuZnJhbWVIZWlnaHQ7XG4gICAgICAgIHRoaXMuc3ByaXRlQ3JvcFJvdzZBID0gc3ByaXRlQ3JvcFJvdzZBID8gc3ByaXRlQ3JvcFJvdzZBIDogMDtcbiAgICAgICAgdGhpcy5zcHJpdGVDcm9wUm93NEFuZDhCID0gc3ByaXRlQ3JvcFJvdzRBbmQ4QiA/IHNwcml0ZUNyb3BSb3c0QW5kOEIgOiAwO1xuICAgICAgICB0aGlzLmRwaSA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgIH1cblxuXG4gICAgdXBkYXRlID0gKGEpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSB0aGlzLndpZHRoICsgXCIgXCIgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLnRleHQsIHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IFwiaW1hZ2VcIiB8fCB0aGlzLnR5cGUgPT09IFwiYmFja2dyb3VuZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuY29sb3I7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSxcbiAgICAgICAgICAgICAgICB0aGlzLngsXG4gICAgICAgICAgICAgICAgdGhpcy55LFxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSBcImJhY2tncm91bmRcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gXCJzcHJpdGVcIikge1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB0byBjdXQgb2ZmIGhhaXJcblxuICAgICAgICAgICAgLy8gdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICAvLzEgdGhpcy5jb2x1bW4gKiB0aGlzLmZyYW1lV2lkdGgsIFxuICAgICAgICAgICAgLy8yIHRoaXMucm93ICogdGhpcy5mcmFtZUhlaWdodCwgbmVlZHMgdG8gaW5jcmVhc2Ugc2FtZSBhcyB0aGlzLnkgYW5kIG5lZWRzIHRvIG1pbnVzIHRoaXMucm93XG4gICAgICAgICAgICAvLzMgdGhpcy5mcmFtZVdpZHRoLCBcbiAgICAgICAgICAgIC8vNCB0aGlzLmZyYW1lSGVpZ2h0U2l6ZSwgbmVlZHMgdG8gZGVjcmVhc2UgYW5kIGJlIGVxdWFsIHRvIHRoaXMuaGVpZ2h0XG4gICAgICAgICAgICAvLzUgdGhpcy54LCBcbiAgICAgICAgICAgIC8vNiB0aGlzLnksIG5lZWRzIHRvIGluY3JlYXNlIHNhbWUgYXMgdGhpcy5mcmFtZUhlaWdodCAoYnV0IG5vIHRoaXMucm93PylcbiAgICAgICAgICAgIC8vNyB0aGlzLndpZHRoLCBcbiAgICAgICAgICAgIC8vOCB0aGlzLmhlaWdodCk7IG5lZWRzIHRvIGRlY3JlYXNlIGFuZCBiZSBlcXVhbCB0byB0aGlzLmZyYW1lSGVpZ2h0U2l6ZVxuXG4gICAgICAgICAgICAvL2V4YW1wbGUgd2l0aCB2YWxpZXNcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLFxuICAgICAgICAgICAgLy8gdGhpcy5jb2x1bW4gKiB0aGlzLmZyYW1lV2lkdGgsIFxuICAgICAgICAgICAgLy8gdGhpcy5yb3cgKiB0aGlzLmZyYW1lSGVpZ2h0ICsgMjAgLSB0aGlzLnJvdywgXG4gICAgICAgICAgICAvLyB0aGlzLmZyYW1lV2lkdGgsIFxuICAgICAgICAgICAgLy8gdGhpcy5mcmFtZUhlaWdodFNpemUgLSAyMCwgXG4gICAgICAgICAgICAvLyB0aGlzLngsIFxuICAgICAgICAgICAgLy8gdGhpcy55ICsgMjAsIFxuICAgICAgICAgICAgLy8gdGhpcy53aWR0aCwgXG4gICAgICAgICAgICAvLyB0aGlzLmhlaWdodCAtIDIwKTtcblxuICAgICAgICAgICAgLy9yb3cgbWVhbmluZ1xuICAgICAgICAgICAgLy8gMiAtPiB1cCBpbnNpZGUgZnJhbWVcbiAgICAgICAgICAgIC8vIDQgLT4gcmF0aW8gb2Ygc3RyZXRjaFxuICAgICAgICAgICAgLy8gOCAtPiBhY3R1YWwgc2l6ZSBvZiBmcmFtZVxuICAgICAgICAgICAgLy8gNiAtPiBwb3NpdGlvbiBvZiBib3hcblxuICAgICAgICAgICAgLy8gc3RlcHMgdG8gY3V0IGhhaXIgLT4gMS4gTW92ZSBoYWlyIHVwIGluc2lkZSBmcmFtZS4gMi4gUG9zaXRpb24gaGFpciBpbiBwbGFjZS4gMy4gQ2hhbmdlIHNpemUgb2YgZnJhbWVcblxuICAgICAgICAgICAgLy8gZXhhbXBsZSB3aXRoIHZhcmlhYmxlc1xuICAgICAgICAgICAgbGV0IHJvd01vZGlmaWVyID0gdGhpcy5oZWlnaHQgLyB0aGlzLmZyYW1lSGVpZ2h0IFxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICB0aGlzLmNvbHVtbiAqIHRoaXMuZnJhbWVXaWR0aCwgXG4gICAgICAgICAgICAodGhpcy5yb3cgKiB0aGlzLmZyYW1lSGVpZ2h0KSArIHRoaXMuc3ByaXRlQ3JvcFJvdzIgLSAodGhpcy5zcHJpdGVDcm9wUm93MkIpLCBcbiAgICAgICAgICAgIHRoaXMuZnJhbWVXaWR0aCwgXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUNyb3BSb3c0QSAtIHRoaXMuc3ByaXRlQ3JvcFJvdzRBbmQ4QiwgXG4gICAgICAgICAgICB0aGlzLngsIFxuICAgICAgICAgICAgdGhpcy55ICsgdGhpcy5zcHJpdGVDcm9wUm93NkEgLSB0aGlzLnNwcml0ZUNyb3BSb3cyQipyb3dNb2RpZmllciwgXG4gICAgICAgICAgICB0aGlzLndpZHRoLCBcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0IC0gdGhpcy5zcHJpdGVDcm9wUm93NEFuZDhCKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2xvciA9PT0gXCJpbnZpc2libGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDApJ1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbG9yID09PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwgMC4xKSdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2xvciA9PT0gXCJ0cmFuc3BhcmVudDJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LCAwLjQpJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICB9XG5cbiAgICBuZXdQb3MgPSAoYSkgPT4ge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTsgIFxuICAgICAgICBpZiAodGhpcy50eXBlID09PSBcImJhY2tncm91bmRcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMueCA9PT0gLSh0aGlzLndpZHRoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICBcbiAgICB9ICBcblxuICAgIGNsaWNrZWQgPSAoZ3gsIGd5KSA9PiB7XG4gICAgICAgIHZhciBteWxlZnQgPSB0aGlzLnggKiB0aGlzLmRwaTtcbiAgICAgICAgdmFyIG15cmlnaHQgPSB0aGlzLnggKiB0aGlzLmRwaSArICh0aGlzLndpZHRoICogdGhpcy5kcGkpO1xuICAgICAgICB2YXIgbXl0b3AgPSB0aGlzLnkgKiB0aGlzLmRwaTtcbiAgICAgICAgdmFyIG15Ym90dG9tID0gdGhpcy55ICogdGhpcy5kcGkgKyAodGhpcy5oZWlnaHQgKiB0aGlzLmRwaSk7XG4gICAgICAgIHZhciBjbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKChteWJvdHRvbSA8IGd5KSB8fCAobXl0b3AgPiBneSkgfHwgKG15cmlnaHQgPCBneCkgfHwgKG15bGVmdCA+IGd4KSkge1xuICAgICAgICAgICAgY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGlja2VkO1xuICAgIH1cblxuICAgIGludGVyc2VjdGluZyA9IChvYmplY3QpID0+IHtcbiAgICAgICAgdmFyIG15bGVmdCA9IE51bWJlcih0aGlzLngpO1xuICAgICAgICB2YXIgbXlyaWdodCA9IE51bWJlcih0aGlzLngpICsgKHRoaXMud2lkdGgpO1xuICAgICAgICB2YXIgbXl0b3AgPSBOdW1iZXIodGhpcy55KTtcbiAgICAgICAgdmFyIG15Ym90dG9tID0gTnVtYmVyKHRoaXMueSkgKyAodGhpcy5oZWlnaHQpO1xuICAgICAgICB2YXIgb3RoZXJsZWZ0ID0gTnVtYmVyKG9iamVjdC54KTtcbiAgICAgICAgdmFyIG90aGVycmlnaHQgPSBOdW1iZXIob2JqZWN0LngpICsgKG9iamVjdC53aWR0aCk7XG4gICAgICAgIHZhciBvdGhlcnRvcCA9IE51bWJlcihvYmplY3QueSk7XG4gICAgICAgIHZhciBvdGhlcmJvdHRvbSA9IE51bWJlcihvYmplY3QueSkgKyAob2JqZWN0LmhlaWdodCk7XG4gICAgICAgIHZhciBpbnRlcnNlY3QgPSB0cnVlO1xuICAgICAgICBpZiAoKG15Ym90dG9tIDwgb3RoZXJ0b3ApIHx8XG4gICAgICAgIChteXRvcCA+IG90aGVyYm90dG9tKSB8fFxuICAgICAgICAobXlyaWdodCA8IG90aGVybGVmdCkgfHxcbiAgICAgICAgKG15bGVmdCA+IG90aGVycmlnaHQpKSB7XG4gICAgICAgICAgICBpbnRlcnNlY3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50ZXJzZWN0O1xuICAgIH1cblxuICAgIGluaXRNb3ZlKHN0YXJ0LCByb3csIGFuaW1lKSB7XG5cbiAgICAgICAgdGhpcy5jb2x1bW4gPSBzdGFydDtcbiAgICAgICAgdGhpcy5yb3cgPSByb3c7XG4gICAgICAgIHRoaXMuYW5pbWUgPSBhbmltZTtcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgfVxuICAgIFxuXG4gICAgZGlyID0gKGd4LCBneSkgPT4ge1xuICAgICAgICBsZXQgcG9zWCA9IHRoaXMueCAqIHRoaXMuZHBpO1xuICAgICAgICBsZXQgcG9zWSA9IHRoaXMueSAgKiB0aGlzLmRwaTtcbiAgICAgICAgbGV0IG15cmlnaHQgPSB0aGlzLnggKiB0aGlzLmRwaSArICh0aGlzLndpZHRoICogdGhpcy5kcGkpO1xuICAgICAgICBsZXQgaGVpZ2h0RGlmZiA9IE1hdGguYWJzKChwb3NZICsgKHRoaXMuaGVpZ2h0ICAqIHRoaXMuZHBpKS8yKSAtIGd5KVxuICAgICAgICBpZiAoZ3ggPCBwb3NYICsgKHRoaXMud2lkdGggKiB0aGlzLmRwaSkvMiAmJiBNYXRoLmFicyhneCAtIChwb3NYICsgKHRoaXMud2lkdGggKiB0aGlzLmRwaSkvMikpID4gaGVpZ2h0RGlmZikge1xuICAgICAgICAgICAgcmV0dXJuIFwibGVmdFwiXG4gICAgICAgIH0gZWxzZSBpZiAoZ3ggPiBwb3NYICsgKHRoaXMud2lkdGggKiB0aGlzLmRwaSkvMiAgJiYgTWF0aC5hYnMocG9zWCAtIGd4KSA+IGhlaWdodERpZmYpIHtcbiAgICAgICAgICAgIHJldHVybiBcInJpZ2h0XCJcbiAgICAgICAgfSBlbHNlIGlmIChneSA+IChwb3NZICsgKHRoaXMuaGVpZ2h0ICogdGhpcy5kcGkpLzIpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJkb3duXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcInVwXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0TmV3QW5pbWUobmV3QW5pbWUsIG5leHRBbmltZSwgcGxheU51bSwgY2IpIHtcbiAgICAgICAgdGhpcy5jdXN0b21BbmltYXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgIHRoaXMuYW5pbWUgPSBuZXdBbmltZTtcbiAgICAgICAgdGhpcy5maXJzdEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMubmV4dEFuaW1lID0gbmV4dEFuaW1lO1xuICAgICAgICB0aGlzLnBsYXlOdW0gPSBwbGF5TnVtO1xuICAgICAgICBpZiAoY2IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0TmV3Q3VzdG9tQW5pbWUobmV3QW5pbWVBcnIsIG5leHRBbmltZSwgc3BlZWQsIGNiKSB7XG4gICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgICAgICB0aGlzLmN1c3RvbUFyciA9IG5ld0FuaW1lQXJyO1xuICAgICAgICB0aGlzLmZpcnN0QW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5uZXh0QW5pbWUgPSBuZXh0QW5pbWU7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5jdXN0b21BbmltYXRpb24gPSB0cnVlO1xuICAgICAgICBpZiAoY2IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGN1c3RvbUFuaW1lKGFycikge1xuICAgICAgICB0aGlzLmN1c3RvbUFyciA9IGFyclxuICAgICAgICBpZiAodGhpcy5maXJzdEFuaW1hdGlvbiA9PT0gdHJ1ZSkgeyBcbiAgICAgICAgICAgIHRoaXMucm93ID0gdGhpcy5jdXN0b21BcnJbMF1bMF07XG4gICAgICAgICAgICB0aGlzLmNvbHVtbiA9IHRoaXMuY3VzdG9tQXJyWzBdWzFdO1xuICAgICAgICAgICAgdGhpcy5jdXN0b21BcnIgPSB0aGlzLmN1c3RvbUFyci5zbGljZSgxKVxuICAgICAgICAgICAgdGhpcy5maXJzdEFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q3VzdG9tRnJhbWUgPSB0aGlzLmN1c3RvbUFyci5zbGljZSgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZnJhbWUgPj0gdGhpcy5zcGVlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tQXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93ID0gdGhpcy5sYXN0Q3VzdG9tRnJhbWVbMF1bMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uID0gdGhpcy5sYXN0Q3VzdG9tRnJhbWVbMF1bMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXN0b21BbmltYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltZSA9IHRoaXMubmV4dEFuaW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyYW1lID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdEFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jdXN0b21BcnJbMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm93ID0gdGhpcy5jdXN0b21BcnJbMF1bMF07XG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW4gPSB0aGlzLmN1c3RvbUFyclswXVsxXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbUFyciA9IHRoaXMuY3VzdG9tQXJyLnNsaWNlKDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZnJhbWUgPSAwOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlQW5pbWUoKSB7XG4gICAgICAgIHRoaXMucGF1c2UgPSB0cnVlO1xuICAgIH1cblxuICAgIHNwcml0ZUFuaW1hdGlvbihzdGFydCwgc3RvcCwgc3BlZWQsIHJvdywgY29sRGlyKSB7XG4gICAgICAgIGlmICh0aGlzLmZpcnN0QW5pbWF0aW9uID09PSB0cnVlKSB7IFxuICAgICAgICAgICAgdGhpcy5yb3cgPSByb3c7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbiA9IHN0YXJ0O1xuICAgICAgICAgICAgdGhpcy5maXJzdEFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZyYW1lID49IHNwZWVkKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbiA9PT0gc3RvcCAtIGNvbERpciArIGNvbERpciAmJiB0aGlzLnJvdyA9PT0gcm93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5TnVtIC09IDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGF1c2UgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheU51bSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5TnVtIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1lID0gdGhpcy5uZXh0QW5pbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0QW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW4gPSBzdGFydCAtIGNvbERpcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucm93ID4gcm93KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sdW1uID09PSBzdG9wIC0gY29sRGlyIC0gdGhpcy5jb2x1bW5MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5TnVtIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhdXNlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5TnVtID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5TnVtIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltZSA9IHRoaXMubmV4dEFuaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RBbmltYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uID0gc3RhcnQgLSBjb2xEaXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3cgPSByb3c7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2x1bW4gPT09IHRoaXMuY29sdW1uTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3cgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbiA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb2x1bW4gKz0gY29sRGlyO1xuICAgICAgICAgICAgdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0lmU3RpbGxNb3ZpbmcoY2xpY2t4LCBjbGlja3kpIHtcblxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25PZkNsaWNrID09PSBcImxlZnRcIiAmJiB0aGlzLnggPiBjbGlja3gvdGhpcy5kcGkgLSB0aGlzLndpZHRoLzIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uT2ZDbGljayA9PT0gXCJyaWdodFwiICYmIHRoaXMueCA8IGNsaWNreC90aGlzLmRwaSAtIHRoaXMud2lkdGgvMikge1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb25PZkNsaWNrVXAgPT09IFwidXBcIiAmJiB0aGlzLnkgPiBjbGlja3kvdGhpcy5kcGkgLSB0aGlzLmhlaWdodC8yKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbk9mQ2xpY2tVcCA9PT0gXCJkb3duXCIgJiYgdGhpcy55IDwgY2xpY2t5L3RoaXMuZHBpIC0gdGhpcy5oZWlnaHQvMikge1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkWCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNwZWVkWSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY2hlY2tTcGVlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3BlZWRYID4gMCAmJiB0aGlzLnNwZWVkWCA+IE1hdGguYWJzKHRoaXMuc3BlZWRZKSkge1xuICAgICAgICAgICAgdGhpcy5hbmltZSA9IFwid2Fsa1JpZ2h0XCJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwZWVkWCA8IDAgJiYgTWF0aC5hYnModGhpcy5zcGVlZFgpID4gTWF0aC5hYnModGhpcy5zcGVlZFkpKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1lID0gXCJ3YWxrTGVmdFwiXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcGVlZFggPT09IDAgJiYgdGhpcy5hbmltZSA9PT0gXCJ3YWxrTGVmdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRNb3ZlKDAsIDMsIFwiaWRsZUxlZnRcIilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwZWVkWCA9PT0gMCAmJiB0aGlzLmFuaW1lID09PSBcIndhbGtSaWdodFwiKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRNb3ZlKDAsIDIsIFwiaWRsZVJpZ2h0XCIpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcGVlZFkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1lID0gXCJ3YWxrRG93blwiXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcGVlZFkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1lID0gXCJ3YWxrVXBcIlxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3BlZWRZID09PSAwICYmIHRoaXMuYW5pbWUgPT09IFwid2Fsa1VwXCIpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdE1vdmUoMCwgMSwgXCJpZGxlVXBcIilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwZWVkWSA9PT0gMCAmJiB0aGlzLmFuaW1lID09PSBcIndhbGtEb3duXCIpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdE1vdmUoMCwgMCwgXCJpZGxlRG93blwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVRvTW91c2UgPSAoZ3gsIGd5LCBzcGVlZCkgPT4ge1xuICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIGxldCB4c3BlZWQgPSBNYXRoLmFicygodGhpcy54IC0gKGd4L3RoaXMuZHBpIC0gdGhpcy53aWR0aC8yKSkgKiBzcGVlZCk7XG4gICAgICAgIGxldCB5c3BlZWQgPSBNYXRoLmFicygodGhpcy55IC0gKGd5L3RoaXMuZHBpIC0gdGhpcy5oZWlnaHQvMikpICogc3BlZWQpO1xuICAgICAgICBcbiAgICAgICAgeHNwZWVkID4geXNwZWVkID8gc3BlZWQgPSB4c3BlZWQgOiBzcGVlZCA9IHlzcGVlZDtcblxuICAgICAgICBpZiAodGhpcy54ID4gZ3gvdGhpcy5kcGkgLSB0aGlzLndpZHRoLzIpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uT2ZDbGljayA9IFwibGVmdFwiXG4gICAgICAgICAgICB0aGlzLnNwZWVkWCA9IC0odGhpcy54IC0gKGd4L3RoaXMuZHBpIC0gdGhpcy53aWR0aC8yKSkvc3BlZWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uT2ZDbGljayA9IFwicmlnaHRcIlxuICAgICAgICAgICAgdGhpcy5zcGVlZFggPSAtKHRoaXMueCAtIChneC90aGlzLmRwaSAtIHRoaXMud2lkdGgvMikpL3NwZWVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgPiBneS90aGlzLmRwaSAtIHRoaXMuaGVpZ2h0LzIpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uT2ZDbGlja1VwID0gXCJ1cFwiXG4gICAgICAgICAgICB0aGlzLnNwZWVkWSA9IC0odGhpcy55IC0gKGd5L3RoaXMuZHBpIC0gdGhpcy5oZWlnaHQvMikpL3NwZWVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25PZkNsaWNrVXAgPSBcImRvd25cIlxuICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSAtKHRoaXMueSAtIChneS90aGlzLmRwaSAtIHRoaXMuaGVpZ2h0LzIpKS9zcGVlZDtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDUwN2VjMTlmMzY0ZmVmZWViMWRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=