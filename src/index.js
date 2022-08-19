import Phaser from 'phaser';
import GameScene from './Scenes/GameScene';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scale: {
        mode: Phaser.Scale.FIT,
        width: 800,
        height: 600,
    },
    scene: GameScene
};

const game = new Phaser.Game(config);




