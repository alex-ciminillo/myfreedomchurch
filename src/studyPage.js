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
       
        

    }

    click(e) {

        if (e.type === "mouseup") {
            this.clickGX = this.gx;
            this.clickGY = this.gy;
            this.adventureGuy.moveWithAnimation(this.gx, this.gy)
        }

    }



    animate(e) {



        this.adventureGuy.animate()

        this.frame++
    }

}