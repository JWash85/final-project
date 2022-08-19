import { Scene } from "phaser";
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
        
    }

}

export default PreloadScene