class MoveableObject {
    x = 120;
    y = 400;
    height =  100;
    width =  150;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving Right')
    }

    moveLeft() {
        
    }
}