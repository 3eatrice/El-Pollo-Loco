class MoveableObject {
    x = 120;
    y = 280;
    height =  150
    width =  100;
    img;
    imageCache = [];
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

    applyGravitiy() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 180;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

/**
 * 
 * @param {Array} arr - ['img/image1.png', 'img/image2.png',....]
 */

    loadImages(arr) {
        arr.forEach((path) => {                 // Pfad nur als string
            let img = new Image();
            img.src = path;                     // Pfad zum jeweiligen Bild damit es geladen wird
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;   // let i = 0 % 6; 
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }
}