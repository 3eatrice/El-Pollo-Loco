class Cloud extends MoveableObject {
    y = 10;
    height = 450;
    width = 400;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png')
        this.x = Math.random() * 500;

    }

}