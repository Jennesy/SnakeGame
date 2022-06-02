import { getInputDirection } from './input.js'
export const SNAKE_SPEED = 4 //seconds
const snakeBody = [{ x: 11, y: 11 }]
const EXPANSION_RATE = 1
let newSegmentsNum = 0

export function update() {
	addNewSegments()
	newSegmentsNum = 0
	const inputDirection = getInputDirection()
	for (let i = snakeBody.length - 1; i > 0; i--) {
		snakeBody[i] = { ...snakeBody[i - 1] }
	}
	snakeBody[0].x += inputDirection.x
	snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
	snakeBody.forEach((segment) => {
		const snakeElement = document.createElement('div')
		snakeElement.classList.add('snake')
		snakeElement.style.gridRowStart = segment.y
		snakeElement.style.gridColumnStart = segment.x
		gameBoard.appendChild(snakeElement)
	})
}

export function onSnake(foodPosition, { ignoreHead = false } = {}) {
	return snakeBody.some((segment, index) => {
		if (ignoreHead && index === 0) return false
		return equalPositions(segment, foodPosition)
	})
}

export function expandSnake() {
	newSegmentsNum += EXPANSION_RATE
}

function addNewSegments() {
	for (let i = 0; i < newSegmentsNum; i++) {
		snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
	}
}

function equalPositions(pos1, pos2) {
	return pos1.x === pos2.x && pos1.y === pos2.y
}

export function getSnakeHead() {
	return snakeBody[0]
}

export function snakeIntersection() {
	return onSnake(snakeBody[0], { ignoreHead: true })
}
