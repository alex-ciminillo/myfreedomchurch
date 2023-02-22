
export default class Component {

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
        this.dpi = 1;
    }


    update = (a) => {
        this.ctx.globalCompositeOperation = 'source-over';
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
            
            
        } else if (this.type === "flashcardimage") {

            

        } else if (this.type === "flashcardcolor") {

            this.ctx.fillStyle = this.color;
            this.ctx.beginPath();
            this.ctx.roundRect(this.x, this.y, this.width, this.height, 10);
            this.ctx.stroke();
            this.ctx.fill();

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
            console.log(this.x)
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

    customAnime(arr, row) {
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

    spriteCustomAnimation(arr, speed, row) {
        this.row = row;
        if (this.frame >= speed[this.customSpeedPos]) {
            this.customArrPos += 1;
            if (this.customArrPos > arr.length - 1) {
                this.customArrPos = 0;
            }
            this.column = arr[this.customArrPos];
            this.frame = 0;
            this.customSpeedPos += 1;
            if (this.customSpeedPos > speed.length - 1) {
                this.customSpeedPos = 0;
            }
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


