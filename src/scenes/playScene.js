import { Scene } from 'phaser'
import Background from '../objects/background'
import Player from '../entity/player'
import Obstacles from '../objects/obstacles'

class PlayScene extends Scene {
	constructor() {
		super('PlayScene')
		this.cameraEffectTriggered = true
	}

	create() {
		this.isGameOver = false

		if (this.cameraEffectTriggered) {
			this.cameraEffectTriggered = false
			this.hitSound = this.sound.add('hitSound')
			this.handleEffectCamera()
		}

		this.background = new Background(this)
		this.background.create()

		const { width, height } = this.sys.game.config
		this.player = new Player(this, width / 3, height / 2)

		this.cameras.main.fadeIn(1000)

		this.cursors = this.input.keyboard.createCursorKeys()
		this.input.on('pointerdown', () => this.player.jump())

		this.obstacles = new Obstacles(this)

		this.physics.add.collider(this.player, this.obstacles.obstaclesGroup, this.handleGameOver, null, this)
	}

	update() {
		if (this.cursors.space.isDown) this.player.jump()
		if (this.player.y > 344 || this.player.y < 0) this.handleGameOver()

		this.background.update()
		this.obstacles.update()
	}

	handleEffectCamera() {
		this.cameras.main.fadeOut(1000, 0, 0, 0, (_camera, progress) => {
			if (progress === 1) this.scene.start('PlayScene')
		})
	}

	handleGameOver() {
		if (this.isGameOver) return
		this.isGameOver = true

		this.add.image(144, 150, 'gameOverImage').setScale(0.7, 0.5)
		this.hitSound.play()

		document.addEventListener('keydown', this.handleSpacePress)
		document.addEventListener('touchstart', this.handleTouchStart)
		this.scene.pause()
	}

	handleSpacePress = event => {
		if (event.key === ' ') {
			this.restartGame()
			document.removeEventListener('keydown', this.handleSpacePress)
		}
	}

	handleTouchStart = () => {
		this.restartGame()
		document.removeEventListener('touchstart', this.handleTouchStart)
	}

	restartGame() {
		this.isGameOver = false
		this.scene.restart()
	}
}

export default PlayScene
