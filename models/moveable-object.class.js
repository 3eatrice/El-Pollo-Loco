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
        console.log('Moving Right')
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}