let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

document.addEventListener('keydown', (event) => {
	lastInputDirection = inputDirection
	switch (event.key) {
		case 'ArrowUp':
			if (lastInputDirection.y !== 0) break
			inputDirection = { x: 0, y: -1 }
			break
		case 'ArrowDown':
			if (lastInputDirection.y !== 0) break
			inputDirection = { x: 0, y: 1 }
			break
		case 'ArrowLeft':
			if (lastInputDirection.x !== 0) break
			inputDirection = { x: -1, y: 0 }
			break
		case 'ArrowRight':
			if (lastInputDirection.x !== 0) break
			inputDirection = { x: 1, y: 0 }
			break
	}
})

const touches = {}
document.addEventListener('touchstart', (event) => {
	event.preventDefault()
	;[...event.changedTouches].forEach((touch) => {
		touches[touch.identifier] = { startX: touch.screenX, startY: touch.screenY }
	})
})

document.addEventListener('touchmove', (event) => {
	event.preventDefault()
})

document.addEventListener('touchend', (event) => {
	lastInputDirection = inputDirection
	;[...event.changedTouches].forEach((touch) => {
		const moveX = touch.screenX - touches[touch.identifier].startX
		const moveY = touch.screenY - touches[touch.identifier].startY
		if (Math.abs(moveX) > Math.abs(moveY)) {
			if (moveX < 0 && lastInputDirection.x === 0)
				inputDirection = { x: -1, y: 0 }
			if (moveX > 0 && lastInputDirection.x === 0)
				inputDirection = { x: 1, y: 0 }
		}
		if (Math.abs(moveY) > Math.abs(moveX)) {
			if (moveY < 0 && lastInputDirection.y === 0)
				inputDirection = { x: 0, y: -1 }
			if (moveY > 0 && lastInputDirection.y === 0)
				inputDirection = { x: 0, y: 1 }
		}
		delete touches[touch.identifier]
	})
})

export function getInputDirection() {
	return inputDirection
}
