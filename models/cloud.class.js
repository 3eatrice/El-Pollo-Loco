class Cloud extends MoveableObject {
    y = 10;   50
    height = 450;  250
    width = 400;   500

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png')
        this.x = Math.random() * 500;
        
        this.animate();
    }

    animate() {
        this.moveLeft();
    }



}