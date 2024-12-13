class Background {
	constructor(scene) {
		this.scene = scene
	}

	create() {
		this.backgroundImage = this.scene.add.image(0, 0, 'background-day').setOrigin(0, 0)
		this.groundImage = this.scene.add.image(0, 365, 'ground').setOrigin(0, 0)

		this.backgroundImage.setScale(1, 0.9)
		this.groundImage.setScale(0.9, 0.5)
	}

	update() {
		this.groundImage.x -= 1
		if (this.groundImage.x <= -20) this.groundImage.x = 0
	}
}

export default Background
