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
        
        this.add.image(400, 300, 'sky')
        this.add.image(400, 150, 'bomb')
      
    }
}

export default GameScene