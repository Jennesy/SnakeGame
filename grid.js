const GRID_SIZE = 21
export function getRandomGridPosition() {
	return {
		x: Math.ceil(Math.random() * GRID_SIZE),
		y: Math.ceil(Math.random() * GRID_SIZE),
	}
}

export function outsideGrid(position) {
	return (
		position.x < 1 ||
		position.x > GRID_SIZE ||
		position.y < 1 ||
		position.y > GRID_SIZE
	)
}
