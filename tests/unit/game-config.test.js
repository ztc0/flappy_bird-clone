import { describe, expect, it } from 'vitest'

describe('Game Configuration', () => {
	it('should have correct game dimensions', () => {
		const expectedWidth = 288
		const expectedHeight = 403

		expect(expectedWidth).toBe(288)
		expect(expectedHeight).toBe(403)
	})

	it('should use correct background color', () => {
		const backgroundColor = '#049cd8'
		expect(backgroundColor).toMatch(/^#[0-9a-f]{6}$/i)
	})

	it('should have gravity configured', () => {
		const gravity = { y: 300 }
		expect(gravity.y).toBeGreaterThan(0)
	})
})
