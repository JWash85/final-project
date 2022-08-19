import { Scene } from 'Phaser'
import logoImg from '../assets/logo.png';
import skyImg  from '../assets/sky.png'
import bombImg from '../assets/bomb.png'
import groundImg from '../assets/platform.png'
import starImg from '../assets/star.png'
import spriteImg from '../assets/dude.png'

class GameScene extends Scene
{
   

    preload ()
    {
       this.load.image('sky', skyImg)
       this.load.image('ground', groundImg );
       this.load.image('star', starImg );
       this.load.image('bomb', bombImg);
       this.load.spritesheet('dude', spriteImg,
           { frameWidth: 32, frameHeight: 48 }
       );
    }
      
    create ()
    {
        const sky = this.add.image(0, 0, 'sky')
        sky.setOrigin(0, 0)

        this.createPlatforms()
    }

    createPlatforms() {
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');
    }
}

export default GameScene