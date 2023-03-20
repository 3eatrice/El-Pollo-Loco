class Endboss extends MoveableObject {

    heigt = 400;
    width = 250;
    y = 60;

    IMAGES_WALKING = [
        '/img/4_enemie_boss_chicken/2-walk/G5.png',
        '/img/4_enemie_boss_chicken/2-walk/G6.png',
        '/img/4_enemie_boss_chicken/2-walk/G7.png',
        '/img/4_enemie_boss_chicken/2-walk/G8.png',
        '/img/4_enemie_boss_chicken/2-walk/G9.png',
        '/img/4_enemie_boss_chicken/2-walk/G10.png',
        '/img/4_enemie_boss_chicken/2-walk/G11.png',
        '/img/4_enemie_boss_chicken/2-walk/G12.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 700;
        this.animate();

    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        },200);
    }
}