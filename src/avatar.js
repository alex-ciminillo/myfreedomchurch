import Component from "./component";
import char_a_p1_5hat_pnty_v03 from './../images/mana/char_a_p1/5hat/char_a_p1_5hat_pnty_v03.png';
import char_a_p4_5hat_pnty_v03 from './../images/mana/char_a_p4/5hat/char_a_p4_5hat_pnty_v03.png';
import char_a_p1_1out_fstr_v05 from './../images/mana/char_a_p1/1out/char_a_p1_1out_fstr_v05.png';
import char_a_p4_1out_fstr_v05 from './../images/mana/char_a_p4/1out/char_a_p4_1out_fstr_v05.png';
import char_a_p1_4har_bob1_v01 from './../images/mana/char_a_p1/4har/char_a_p1_4har_bob1_v01.png';
import char_a_p4_4har_bob1_v01 from './../images/mana/char_a_p4/4har/char_a_p4_4har_bob1_v01.png';
import char_a_p1_0bas_humn_v01 from './../images/mana/char_a_p1/char_a_p1_0bas_humn_v01.png';
import char_a_p4_0bas_humn_v01 from './../images/mana/char_a_p4/char_a_p4_0bas_humn_v01.png';


import Attachment from "./attachment";



export default class Avatar extends Component {

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
            char_a_p1_0bas_humn_v01: char_a_p1_0bas_humn_v01,
            char_a_p4_0bas_humn_v01: char_a_p4_0bas_humn_v01,
            char_a_p1_1out_fstr_v05: char_a_p1_1out_fstr_v05,
            char_a_p4_1out_fstr_v05: char_a_p4_1out_fstr_v05,
            char_a_p1_4har_bob1_v01: char_a_p1_4har_bob1_v01,
            char_a_p4_4har_bob1_v01: char_a_p4_4har_bob1_v01,
            char_a_p1_5hat_pnty_v03: char_a_p1_5hat_pnty_v03,
            char_a_p4_5hat_pnty_v03: char_a_p4_5hat_pnty_v03,
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


        this.outfit = new Attachment(width, height, char_a_p1_1out_fstr_v05, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight, anime, columnLength)


        if (this.wearingHat) {
            this.hair = new Attachment(width, height, char_a_p1_4har_bob1_v01, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight, anime, columnLength, 20, this.row, this.height, 20, 40)
        } else {
            this.hair = new Attachment(width, height, char_a_p1_4har_bob1_v01, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight, anime, columnLength, this.wearingHat, 'hair')
        }

        
        this.hat = new Attachment(width, height, char_a_p1_5hat_pnty_v03, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight, anime, columnLength)


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