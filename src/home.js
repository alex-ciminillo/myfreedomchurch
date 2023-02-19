import Component from "./component"
import Avatar from './avatar'
import AvatarImg from './../images/mana/char_a_p1/char_a_p1_0bas_humn_v01.png'
import House from './../images/home/avatarStartingHouse2.png'


export default class Home {
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
        this.adventureGuy = new Avatar(this.avatarWidth, this.avatarHeight, AvatarImg, this.canvas.width / dpi / 2 - this.avatarWidth / 1.5, this.canvas.height / dpi / 2 - this.avatarHeight / 2, this.ctx, "sprite", 5, 3, 64, 65, 64, 65, 0, 'toeTapDown', 7, this.canvasAvatarRatio);
        // this.adventureGuyBoundingBox = new Component(this.avatarWidth / 4.99, this.avatarHeight / 2.15, "blue", this.adventureGuy.x * this.avatarWidth / 90, this.adventureGuy.y * this.avatarHeight / 175, this.ctx, "block")
        // this.adventureGuy = new Avatar(65, 65, AvatarImg, this.canvas.width / 8 - this.avatarWidth / 2, this.canvas.height / 8 - this.avatarHeight / 4, this.ctx, "sprite", 5, 3, 64, 65, 50 * .98461538, 50, 0, 'toeTapDown', 7);

        // this.adventureGuy.toggleHat()

        //house width x height

        this.houseRatio = 170/136
        this.houseWidth = 136 * this.canvasAvatarRatio;
        this.houseHeight = 170 * this.canvasAvatarRatio;
        this.houseX = (this.canvas.width) / 2 - this.houseWidth / 2
        this.houseY = (this.canvas.height) / 2  - this.houseHeight / 2

        this.house = new Component(this.houseWidth, this.houseHeight, House, this.houseX, this.houseY, this.ctx, "image")
        
        
        this.bedX = this.canvas.width / 2 - 64 * this.canvasAvatarRatio;
        this.bedY = this.canvas.height / 2 - 10 * this.canvasAvatarRatio;
        this.bedWidth = 32 * this.canvasAvatarRatio;
        this.bedHeight = 55 * this.canvasAvatarRatio;
        this.bed = new Component(this.bedWidth, this.bedHeight, "invisible", this.bedX, this.bedY, this.ctx, "block")

        this.doorX = 147;
        this.doorY = 230; 
        this.doorWidth = 93;
        this.doorHeight = 88;
        this.door = new Component(this.doorWidth, this.doorHeight, "invisible", this.doorX, this.doorY, this.ctx, "block")


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