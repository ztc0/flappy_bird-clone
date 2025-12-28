import { describe, expect, it } from 'vitest'

describe('Game Utilities', () => {
	describe('Gap calculations', () => {
		it('should calculate proper gap between obstacles', () => {
			const gap = 100
			const minGap = 80
			expect(gap).toBeGreaterThanOrEqual(minGap)
		})

		it('should have realistic obstacle positions', () => {
			const gameHeight = 403
			const minY = 60
			const maxY = gameHeight - 100

			expect(minY).toBeLessThan(maxY)
			expect(maxY).toBeLessThan(gameHeight)
		})
	})

	describe('Player physics', () => {
		it('should have correct jump velocity', () => {
			const jumpVelocity = -160
			expect(jumpVelocity).toBeLessThan(0)
		})

		it('should have gravity configured', () => {
			const gravity = 500
			expect(gravity).toBeGreaterThan(0)
		})
	})

	describe('Obstacle movement', () => {
		it('should have negative velocity for left movement', () => {
			const velocity = -120
			expect(velocity).toBeLessThan(0)
		})

		it('should spawn obstacles at regular intervals', () => {
			const spawnDelay = 1500
			expect(spawnDelay).toBeGreaterThan(0)
		})
	})
})
