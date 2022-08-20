import Phaser from 'phaser';
import GameScene from './Scenes/GameScene';
import PreloadScene from './Scenes/PreloadScene';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scale: {
        mode: Phaser.Scale.FIT,
        width: 800,
        height: 600,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    //for multiply scenes you can use an array. Phaser loads the first scene in the array.
    scene: [ PreloadScene, GameScene ]
};

const game = new Phaser.Game(config);




