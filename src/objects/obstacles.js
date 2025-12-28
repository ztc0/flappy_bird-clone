import { Math as PhaserMath } from 'phaser'

class Obstacles {
	constructor(scene) {
		this.scene = scene
		this.obstaclesGroup = this.scene.physics.add.group()

		this.timer = this.scene.time.addEvent({
			delay: 1500,
			callback: this.addObstacle,
			callbackScope: this,
			loop: true,
		})
	}

	addObstacle() {
		const gap = 100
		const { width, height } = this.scene.sys.game.config
		const minY = 60
		const maxY = height - gap - 100
		const velocity = -120

		const gapY = PhaserMath.Between(minY, maxY)

		const topObstacle = this.obstaclesGroup.create(width + 52, gapY - gap / 2, 'pipeGreen')
		const bottomObstacle = this.obstaclesGroup.create(width + 52, gapY + gap / 2, 'pipeGreen')

		topObstacle.setOrigin(0.5, 1)
		bottomObstacle.setOrigin(0.5, 0)

		topObstacle.setFlipY(true)

		this.obstaclesGroup.setVelocityX(velocity)

		topObstacle.body.allowGravity = false
		bottomObstacle.body.allowGravity = false

		topObstacle.checkWorldBounds = true
		bottomObstacle.checkWorldBounds = true

		topObstacle.outOfBoundsKill = true
		bottomObstacle.outOfBoundsKill = true

		topObstacle.refreshBody()
		bottomObstacle.refreshBody()
	}

	update() {
		this.obstaclesGroup.children.iterate((obstacle) => {
			if (obstacle && obstacle.x < -obstacle.width) {
				obstacle.destroy()
			}
		})
	}
}

export default Obstacles
