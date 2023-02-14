import Title from './title.js'
import BlackScreen from './blackScreen.js'
import Home from './home.js'
import Component from "./component"
import EventListener from './eventListener.js'
import Tower from './tower.js'
import Training from './training.js'



export default class BitBuddies {
    constructor(canvas) {
        this.alpha = 0.99;
        this.delta = 0.01;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.ctx.imageSmoothingEnabled = false;
        const dpi = window.devicePixelRatio; // should probably use this later (maybe?)
        this.ctx.scale(dpi, dpi);
        // this.tower = new Tower(this.ctx, 0, 0, this.canvas)
        this.dimensions = { width: canvas.width, height: canvas.height };
        // this.title = new Title(this.canvas, this.ctx, this.dimensions);
        this.blackScreen = new BlackScreen(this.canvas, this.ctx, this.dimensions);
        this.home = new Home(this.canvas, this.ctx, this.dimensions);
        this.eventListener = new EventListener(this.canvas, this.ctx, this.dimensions);
        this.editButton = new Component(20.67, 6.21, "invisible", 278.51, 143.57, this.ctx, "other");
        this.gy = 0;
        this.gx = 0;
        this.editMode = false;
        this.showEditButton = false;
        // this.training = new Training(this.ctx, 0, 0, this.canvas)
        this.fadeBoxArr = [];
        this.fadeBoxArr2 = [];

        this.registerEvents();

        // starting values for tracking FPS
        this.stop = false;
        this.frameCount = 0;
        this.results = 0;
        this.fps = 60;
        this.fpsInterval = 0;
        this.startTime = 0;
        this.now = 0;
        this.then = 0;
        this.elapsed = 0;
        // used to start fps function and then animation function
        this.startAnimating(60);

        this.currentScreen = "Home"
        this.fadeScreen = false;

        if (this.checkCookie("reward") === "yes") { this.home.getTheItem = true; }
        if (this.checkCookie("start") === "true") {
            this.currentScreen = "Home"
        } else {
            this.home.startPulsingGlow();
        }




    }

    startAnimating(fps) {
        this.fpsInterval = 1000 / fps;
        this.then = window.performance.now();
        this.startTime = this.then;
        this.animate();
    }

    deleteCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }

    restartGame() {
        this.deleteCookie("reward")
        this.deleteCookie("start")
    }


    checkResetGame() {
        if (this.reset !== undefined) { clearTimeout(this.reset); }
        if (this.resetCounter === undefined) { this.resetCounter = 0 }
        this.resetCounter += 1;
        if (this.resetCounter > 140) {
            this.restartGame();
        }
        this.reset = setTimeout(() => {
            this.resetCounter = 0
        }, 500)

    }

    registerEvents() {
        this.boundClickHandler = this.click.bind(this);
        this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
        this.ctx.canvas.addEventListener("mouseup", this.boundClickHandler);
    }

    updateGxGy(e) {
        this.gxgyArr = this.eventListener.updateGxGy(e);

        this.gx = this.gxgyArr[0]
        this.gy = this.gxgyArr[1]
        
    }


   

    click(e) {
        this.updateGxGy(e)
        this.checkResetGame();
        this.checkForEditModeEnabling(e);
        // if (this.showEditButton === true) { this.enableEditMode(e) }
        if (this.editMode === true) {
            this.editScreen.saveClicks(this.gx, this.gy, e);
        } else {
            if (this.currentScreen === "Title") { this.titleClick(e) }
            else if (this.currentScreen === "Home") { this.homeClick(e) }
            else if (this.currentScreen === "Training") { this.trainingClick(e) }
            else if (this.currentScreen === "Tower") { this.towerClick(e) }
        }
    }

    towerClick(e) {
        // this.tower.click(e)
        // if (this.tower.goHome === true) {
        //     this.currentScreen = "Home"
        //     this.tower.reset();
        // }
    }

    

    trainingClick(e) {
        // this.training.click(e);
        // if (this.training.goHome === true) {
        //     this.currentScreen = "Home";
        //     this.training.goHome = false;
        //     this.home.adventureGuy.y += 25
        //     if (this.checkCookie("triedTower") !== "true") { this.home.startPulsingGlow2(); }
        // } else if (this.training.towerTime === true) {
        //     this.currentScreen = "Tower"
        //     this.towerTime = false;
        // }
    }


    titleClick(e) {
        this.title.titleClick(e);
        if (this.title.beginGame === true) { this.beginGame(); }
    }


    homeClick(e) {
        this.home.gx = this.gx;
        this.home.gy = this.gy;
        this.home.click(e)
        if (this.home.beginTraining === true) {
            this.beginTraining();
        } else if (this.home.beginTower === true) {
            this.currentScreen = "Tower"
            this.home.beginTower = false;
            document.cookie = "triedTower=true"
            this.home.trainingPulse = false;
        }
    }

    beginTraining() {
        this.currentScreen = "Training"
        this.home.beginTraining = false;
        this.home.gx = 0;
        this.home.gy = 0;
    }

    beginGame() {
        this.fadeScreen = true;
        this.fadeUp = false;
        this.nextScreen = "Black Screen"
        setTimeout(() => {
            this.currentScreen = "Home"
        }, 7000)
    }

    fadeOut() {
        if (this.fadeUp) {
            this.alpha += this.delta;
        } else {
            this.alpha -= this.delta;
        }
        if (this.alpha <= 0) {
            this.fadeUp = true;
            this.currentScreen = this.nextScreen;
        } else if (this.alpha >= 1) {
            this.fadeUp = false;
            this.fadeScreen = false;
        }
    }

    checkForEditModeEnabling(e) {
        // this.mousePos = e.type
        // if (e.type === "mousedown") {
        //     let x = this.gx;
        //     let y = this.gy;
        //     setTimeout(() => {
        //         if (x === this.gx && y === this.gy && this.mousePos === "mousedown") {
        //             this.showEditButton = true;
        //         }
        //     }, 1000)
        // } else {
        //     setTimeout(() => {
        //         this.showEditButton = false;
        //     }, 1000)
        // }

    }



    fadeScreenToBlack() {
        if (this.alphaClone >= 1) {
            this.startFade2("white", 0.05, 0);
            this.alphaClone = .99
            this.alphaDir = 0
        }
        this.alphaClone += this.alphaDir;
        this.ctx.globalAlpha = this.alphaClone;
        if (this.alphaClone <= 0) {

        } else {
            this.fadeBoxArr[0].update();
            this.fadeBoxArr[1].update();
        }
        this.ctx.globalAlpha = 1;
    }

    checkCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length)
            }
        }
    }

    fadeScreenToWhite() {
        if (this.alphaClone2 >= .8) {
            if (this.getTheItem === true) { this.home.getTheItem = true; }
            this.fadeBoxArr = [];
            this.screenFade = false;
            this.alphaDir2 = -0.01
            this.currentScreen = "Home"
            if (this.checkCookie("reward") === "yes") { this.home.getTheItem = true; }
            this.tower.reset();
        }
        this.alphaClone2 += this.alphaDir2;
        this.ctx.globalAlpha = this.alphaClone2;
        if (this.alphaClone2 <= 0) {

            this.screenFade2 = false;
        } else {
            this.fadeBoxArr2[0].update();
            this.fadeBoxArr2[1].update();
        }
        this.ctx.globalAlpha = 1;
    }

    startFade2(color, dir, start) {
        this.fadeBoxArr2.push(new Component(300, 150, color, 0, 0, this.ctx, "other"));
        this.fadeBoxArr2.push(new Component(300, 150, color, 0, 0, this.ctx, "other"));
        this.screenFade2 = true;
        this.alphaDir2 = dir
        this.alphaClone2 = start;
        // this.tower.goHome = false;
    }

    startFade(color, dir, start) {
        this.fadeBoxArr.push(new Component(300, 150, color, 0, 0, this.ctx, "other"));
        this.fadeBoxArr.push(new Component(300, 150, color, 0, 0, this.ctx, "other"));
        this.screenFade = true;
        this.alphaDir = dir
        this.alphaClone = start;
    }


    drawAnimation() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.fadeScreen) { this.fadeOut() }


        if (this.currentScreen === "Title") { this.title.animate(); }
        else if (this.currentScreen === "Black Screen") { this.blackScreen.animate(); }
        else if (this.currentScreen === "Home") { this.home.animate(this.e); }
        else if (this.currentScreen === "Training") { this.training.animate(this.gx, this.gy); }
        else if (this.currentScreen === "Tower") { this.tower.animate(this.gx, this.gy); }
        if (this.screenFade === true) {
            this.fadeScreenToBlack();
        }
        if (this.screenFade2 === true) {
            this.fadeScreenToWhite();
        }
        this.ctx.globalAlpha = this.alpha;

        if (this.editMode === true) { this.editScreen.animate(this.gx, this.gy, this.gx2, this.gy2) }
        // if (this.tower.fadeTheScreen === true) { this.startFade("black", 0.005, 0) }
        // if (this.tower.goHome === true) { this.startFade2("white", 0.05, 0); }

    }


    checkfps(newtime) {

        // check if its been enough fps to draw the frames
        this.now = newtime;
        this.elapsed = this.now - this.then;

        if (this.elapsed > this.fpsInterval) {
            this.then = this.now - (this.elapsed % this.fpsInterval);

            //draw the images
            this.drawAnimation()


            this.sinceStart = this.now - this.startTime;
            this.currentFps = Math.round(1000 / (this.sinceStart / ++this.frameCount) * 100) / 100;

        }

    }


    animate(newtime) {

        if (this.stop) {
            return;
        }

        requestAnimationFrame(this.animate.bind(this));

        this.checkfps(newtime);

    }

}