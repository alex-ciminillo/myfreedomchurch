import Component from "./component"
import Avatar from './avatar'
import AvatarImg from './../images/mana/char_a_p1/char_a_p1_0bas_humn_v01.png'
import House from './../images/home/avatarStartingHouse.png'


export default class Home {
    constructor(canvas, ctx, dimensions) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;

        const dpi = window.devicePixelRatio;
        this.dpi = dpi;
        // the width is .98461538 of the height
        this.avatarHeight = 65 / dpi * 3
        this.avatarWidth = 64 / dpi * 3
        this.avatarScale = .8
        this.adventureGuy = new Avatar(this.avatarWidth, this.avatarHeight, AvatarImg, this.canvas.width / dpi / 2 - this.avatarWidth / 1.5, this.canvas.height / dpi / 2 - this.avatarHeight / 2, this.ctx, "sprite", 5, 3, 64, 65, 64, 65, 0, 'toeTapDown', 7);
        // this.adventureGuy = new Avatar(65, 65, AvatarImg, this.canvas.width / 8 - this.avatarWidth / 2, this.canvas.height / 8 - this.avatarHeight / 4, this.ctx, "sprite", 5, 3, 64, 65, 50 * .98461538, 50, 0, 'toeTapDown', 7);

        // this.adventureGuy.toggleHat()

        //house width x height
        this.originalHousePixels = [319, 380]
        this.houseWidth = 319 / dpi * 1.3
        this.houseHeight = 380 / dpi * 1.3
        this.houseX = (this.canvas.width / dpi) / 2 - this.houseWidth / 2
        this.houseY = (this.canvas.height / dpi) / 2  - this.houseHeight / 2

        this.house = new Component(this.houseWidth, this.houseHeight, House, this.houseX, this.houseY, this.ctx, "image")



        this.askIfTrainingBox = false;
        this.anime = "idleRight";
        this.frame = 0;
        this.instaElements = [];

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
        }

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



    

    boundaries() {
        let xBoundRight = 0 - this.adventureGuy.width + 125 / this.dpi;
        let xBoundLeft = this.houseWidth - this.adventureGuy.width + 43 / this.dpi;
        let yBoundBottom = this.houseY + this.houseHeight - this.adventureGuy.height + 30 / this.dpi;
        let yBoundTop = this.houseY + 30 / this.dpi;
        if (this.adventureGuy.x < xBoundRight) {
            this.adventureGuy.x = xBoundRight;
            this.adventureGuy.speedX = 0;
            this.adventureGuy.speedY = 0;
        } else if (this.adventureGuy.x > xBoundLeft) {
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
        this.flashBox = new Component(22.22, 14.47, "white", 89.10, 17.13, this.ctx, "circle")
        this.trainingPulse = true;
        this.alphaDir = 0.002
        this.alphaClone = 0;
    }

    startPulsingGlow2() {
        this.flashBox = new Component(24.74, 10.55, "white", 137.07, 60.55, this.ctx, "circle")
        this.trainingPulse = true;
        this.alphaDir = 0.002
        this.alphaClone = 0;
    }


    animate(e) {
        this.boundaries();
        this.house.update();
        

        this.adventureGuy.animate();



        this.frame++
    

    }

}