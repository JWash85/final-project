import { Scene } from 'phaser';
import logoImg from "../assets/logo.png"


class PreloadScene extends Scene {

    constructor() { 
        super('preload')

    }
    preload() {
        this.load.image('logo', logoImg)
    }

    create() {
        this.add.image(400, 300, 'logo')
        //this adds a click function and starts scene by inputing key to the scene you want to load
        this.input.on('pointerdown', () => this.scene.start('game'))
    }

}

export default PreloadScene