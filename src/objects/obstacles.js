import { Math } from 'phaser'

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
		const gap = 40
		const { width, height } = this.scene.sys.game.config
		const minHeight = 149
		const maxHeight = height - gap - 50
		const velocity = -120

		const obstacleHeight = Math.Between(minHeight, maxHeight)

		const topObstacle = this.obstaclesGroup.create(width + 52, obstacleHeight - gap, 'pipeGreen')
		const bottomObstacle = this.obstaclesGroup.create(width + 52, obstacleHeight + gap, 'pipeGreen')

		topObstacle.setOrigin(0, 0)
		bottomObstacle.setOrigin(0, 0)

		topObstacle.angle = 180

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
		this.obstaclesGroup.children.iterate(obstacle => {
			if (obstacle && obstacle.x < -obstacle.width) {
				obstacle.destroy()
			}
		})
	}
}

export default Obstacles
