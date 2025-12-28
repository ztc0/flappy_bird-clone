import { Scene } from 'phaser'
import Background from '../objects/background'
import Player from '../entity/player'

class WaitingRoom extends Scene {
	constructor() {
		super('waitingRoom')
	}

	preload() {
		this.load.image('background-day', 'assets/gameObjects/background-day.png')
		this.load.image('ground', 'assets/gameObjects/base.png')

		this.load.image('playerUp', 'assets/gameObjects/yellowbird-upflap.png')
		this.load.image('playerMid', 'assets/gameObjects/yellowbird-midflap.png')
		this.load.image('playerDown', 'assets/gameObjects/yellowbird-downflap.png')

		this.load.image('gameOverImage', 'assets/ui/gameOver.png')

		this.load.audio('jumpSound', 'assets/soundEffects/swoosh.wav')

		this.load.audio('dieEffect', 'assets/soundEffects/die.wav')
		this.load.audio('hitSound', 'assets/soundEffects/hit.wav')

		this.load.image('pipeGreen', 'assets/gameObjects/pipe-green.png')
	}

	create() {
		this.background = new Background(this)
		this.background.create()

		const { width, height } = this.sys.game.config

		this.player = new Player(this, width / 3, height / 2)

		this.add
			.text(width / 2, height / 5, 'Press SPACE to Start', {
				fontFamily: 'system-ui, sans-serif, serif',
				fontStyle: 'bold',
				fontSize: '23px',
				fill: '#fff',
			})
			.setOrigin(0.5, 0.5)

		this.cameras.main.fadeIn(1000)
		this.dieEffect = this.sound.add('dieEffect')

		this.input.keyboard.once('keydown-SPACE', () => this.handleEffectCamera())
		this.input.on('pointerdown', () => this.handleEffectCamera())
	}

	update() {
		this.background.update()
		this.player.idle()
	}

	handleEffectCamera() {
		this.dieEffect.play()
		this.cameras.main.fadeOut(1000, 0, 0, 0, (_camera, progress) => {
			if (progress === 1) this.scene.start('PlayScene')
		})
	}
}

export default WaitingRoom
