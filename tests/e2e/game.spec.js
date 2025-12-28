import { expect, test } from '@playwright/test'

test.describe('Flappy Bird Game', () => {
	test('should load the game successfully', async ({ page }) => {
		await page.goto('/')
		await expect(page).toHaveTitle(/Flappy Bird Clone/i)
	})

	test('should display game container', async ({ page }) => {
		await page.goto('/')
		const gameContainer = page.locator('#game-container')
		await expect(gameContainer).toBeVisible()
	})

	test('should have canvas element', async ({ page }) => {
		await page.goto('/')
		await page.waitForSelector('canvas', { timeout: 10000 })
		const canvas = page.locator('canvas')
		await expect(canvas).toBeVisible()
	})

	test('should start game on space press', async ({ page }) => {
		await page.goto('/')
		await page.waitForSelector('canvas', { timeout: 10000 })
		await page.keyboard.press('Space')
		await page.waitForTimeout(1000)
		const canvas = page.locator('canvas')
		await expect(canvas).toBeVisible()
	})

	test('should respond to click events', async ({ page }) => {
		await page.goto('/')
		await page.waitForSelector('canvas', { timeout: 10000 })
		const canvas = page.locator('canvas')
		await canvas.click({ position: { x: 144, y: 200 } })
		await page.waitForTimeout(500)
		await expect(canvas).toBeVisible()
	})

	test('should handle multiple space presses', async ({ page }) => {
		await page.goto('/')
		await page.waitForSelector('canvas', { timeout: 10000 })

		for (let i = 0; i < 5; i++) {
			await page.keyboard.press('Space')
			await page.waitForTimeout(200)
		}

		const canvas = page.locator('canvas')
		await expect(canvas).toBeVisible()
	})

	test('should maintain game state during interaction', async ({ page }) => {
		await page.goto('/')
		await page.waitForSelector('canvas', { timeout: 10000 })

		await page.keyboard.press('Space')
		await page.waitForTimeout(500)

		const canvas = page.locator('canvas')
		const boundingBox = await canvas.boundingBox()

		expect(boundingBox).toBeTruthy()
		expect(boundingBox.width).toBeGreaterThan(0)
		expect(boundingBox.height).toBeGreaterThan(0)
	})

	test('should have correct canvas dimensions', async ({ page }) => {
		await page.goto('/')
		await page.waitForSelector('canvas', { timeout: 10000 })

		const canvas = page.locator('canvas')
		const width = await canvas.evaluate((el) => el.width)
		const height = await canvas.evaluate((el) => el.height)

		expect(width).toBe(288)
		expect(height).toBe(403)
	})

	test('should load all game assets', async ({ page }) => {
		const assetRequests = []

		page.on('request', (request) => {
			if (request.url().includes('/assets/')) {
				assetRequests.push(request.url())
			}
		})

		await page.goto('/')
		await page.waitForSelector('canvas', { timeout: 10000 })
		await page.waitForTimeout(2000)

		expect(assetRequests.length).toBeGreaterThan(0)
	})

	test('should have responsive game container', async ({ page }) => {
		await page.goto('/')
		const gameContainer = page.locator('#game-container')
		const boundingBox = await gameContainer.boundingBox()

		expect(boundingBox).toBeTruthy()
		expect(boundingBox.width).toBeGreaterThan(0)
	})
})
