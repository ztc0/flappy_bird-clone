import { defineConfig } from 'vite'

export default defineConfig({
	test: {
		environment: 'happy-dom',
		globals: true,
		setupFiles: ['./tests/setup.js'],
		include: ['tests/unit/**/*.test.js'],
		exclude: ['tests/e2e/**', 'node_modules', 'dist', '.git', 'coverage'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			exclude: ['node_modules/', 'tests/', '*.config.js', '*.config.ts', 'dist/'],
		},
		server: {
			deps: {
				inline: ['phaser'],
			},
		},
	},
	resolve: {
		alias: {
			phaser3spectorjs: '/tests/mocks/phaser3spectorjs.js',
		},
	},
})
