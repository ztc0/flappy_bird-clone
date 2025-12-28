import { vi } from 'vitest'

// Mock canvas for Phaser
global.HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
	fillStyle: '',
	fillRect: vi.fn(),
	clearRect: vi.fn(),
	getImageData: vi.fn(() => ({
		data: new Array(4),
	})),
	putImageData: vi.fn(),
	createImageData: vi.fn(() => []),
	setTransform: vi.fn(),
	drawImage: vi.fn(),
	save: vi.fn(),
	restore: vi.fn(),
	beginPath: vi.fn(),
	moveTo: vi.fn(),
	lineTo: vi.fn(),
	closePath: vi.fn(),
	stroke: vi.fn(),
	translate: vi.fn(),
	scale: vi.fn(),
	rotate: vi.fn(),
	arc: vi.fn(),
	fill: vi.fn(),
	measureText: vi.fn(() => ({ width: 0 })),
	transform: vi.fn(),
	rect: vi.fn(),
	clip: vi.fn(),
}))

global.HTMLCanvasElement.prototype.toDataURL = vi.fn(() => '')

// Mock requestAnimationFrame
global.requestAnimationFrame = vi.fn((cb) => setTimeout(cb, 16))
global.cancelAnimationFrame = vi.fn()

// Mock Audio
global.Audio = vi.fn().mockImplementation(() => ({
	play: vi.fn(),
	pause: vi.fn(),
	addEventListener: vi.fn(),
}))
