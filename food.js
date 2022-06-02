import { onSnake, expandSnake } from './snake.js'
import { getRandomGridPosition } from './grid.js'

let foodPosition = { x: 20, y: 11 }
const foodElement = document.createElement('div')
foodElement.classList.add('food')

export function update() {
	if (onSnake(foodPosition)) {
		expandSnake()
		foodPosition = getRandomFoodPosition()
	}
}

export function draw(gameBoard) {
	foodElement.style.gridRowStart = foodPosition.y
	foodElement.style.gridColumnStart = foodPosition.x
	gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
	let newPosition
	while (!newPosition || onSnake(newPosition)) {
		newPosition = getRandomGridPosition()
	}
	return newPosition
}
