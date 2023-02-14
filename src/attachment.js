import Component from "./component";



export default class Attachment extends Component {

    constructor(width, height, color, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight, anime, columnLength, spriteCropRow2, spriteCropRow2B, spriteCropRow4A, spriteCropRow6A, spriteCropRow4And8B) {
        super(width, height, color, x, y, ctx, type, row, column, frameWidth, frameHeight, frameWidthSize, frameHeightSize, rowHeight, spriteCropRow2, spriteCropRow2B, spriteCropRow4A, spriteCropRow6A, spriteCropRow4And8B)
        this.anime = anime;
        this.frame = 0;
        this.columnLength = columnLength;
        this.customAnimation = false;
        this.clickedSpotx = 0;
        this.clickedSpoty = 0;
    }



    initMove(start, row, anime) {
        if (this.anime === 'walkLeft') {
            this.y = this.y - 2
        } else if (this.anime === 'walkRight') {
            this.y = this.y - 2
        } else if (this.anime === 'idleRight') {
            this.y = this.y + 2
        } else if (this.anime === 'idleLeft') {
            this.y = this.y + 2
        } 
        this.column = start;
        this.row = row;
        this.anime = anime;
        this.frame = 0;
    }
    
    moveWithAnimation(gx, gy) {

        this.clickedSpotx = gx;
        this.clickedSpoty = gy;
        
        if (this.dir(gx, gy) === "left") {
            this.initMove(0, 7, "walkLeft")

        }
        if (this.dir(gx, gy) === "right") {
            this.initMove(0, 6, "walkRight")
        }
        this.moveToMouse(gx, gy, 0.8)
        this.checkSpeed()
    }

    animate() {

        
        this.update();
        
        
        
    }



}