import './style.css'
import { AUTO, Game } from 'phaser'
import PlayScene from './scenes/playScene.js'
import WaitingRoom from './scenes/waitingRoom.js'

/** @type { import ('phaser').Types.Core.GameConfig  } **/
const gameConfig = {
	type: AUTO,
	parent: 'game-container',
	width: 288,
	height: 403,
	backgroundColor: '#049cd8',
	scene: [WaitingRoom, PlayScene],
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: false,
		},
	},
}

function initializeGame() {
	return new Game(gameConfig)
}

initializeGame()
