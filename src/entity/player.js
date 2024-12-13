import { Physics } from 'phaser'

class Player extends Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'playerMid')

		this.scene = scene
		this.initialX = x
		this.initialY = y

		this.scene.add.existing(this)
		this.scene.physics.add.existing(this)

		this.setGravityY(500)
		this.setCollideWorldBounds(false)
		this.refreshBody()

		this.jumpSound = this.scene.sound.add('jumpSound')

		if (!this.scene.anims.exists('fly')) {
			this.scene.anims.create({
				key: 'fly',
				frames: [{ key: 'playerUp' }, { key: 'playerMid' }, { key: 'playerDown' }],
				frameRate: 5,
				repeat: -1,
			})
		}

		this.play('fly')
		this.isJumping = false
	}

	idle() {
		const velocity = 27
		this.body.allowGravity = false

		if (this.y <= this.initialY) this.setVelocityY(velocity)
		if (this.y >= 270) this.setVelocityY(-velocity)
	}

	jump() {
		this.setVelocityY(-160)
		this.body.allowGravity = true

		if (this.isJumping) return
		this.isJumping = true

		this.jumpSound.play()
		this.scene.time.delayedCall(600, () => {
			this.jumpSound.stop()
			this.isJumping = false
		})
	}
}

export default Player
