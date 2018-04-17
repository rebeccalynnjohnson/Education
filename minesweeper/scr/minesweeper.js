


class Game {
	constructor(numberOfRows, numberOfColumns, numberOfBombs) {
		this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
	}

	playMove(rowIndex, columnIndex) {
		this._board.flipTile(rowIndex,columnIndex);
		
		if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
			console.log('Game over! Here was the final board: ');
			this._board.print();
		} else if (this._board.hasNonBombEmptySpaces()) {
			console.log('Current Board: ');
			this._board.print();
		} else {
			console.log('Congratulations on winning! Here was your winning board: ');
			this._board.print();
		}
	}
}


class Board {
	constructor(numberOfRows, numberOfColumns, numberOfBombs) {
		this._numberOfBombs = numberOfBombs;
		this._numberOfEmptySpaces = numberOfRows * numberOfColumns;
		this._playerBoard = Board.generatePlayerBoard(numberOfRows,numberOfColumns);
		this._bombBoard = Board.generateBombBoard(numberOfRows,numberOfColumns, numberOfBombs);
	}

get playerBoard() {
	return this._playerBoard;
}

hasNonBombEmptySpaces() {
	return this._numberOfBombs !== this._numberOfEmptySpaces;
}

getNumberOfSurroundingBombs (flipRow,flipColumn) {
	const offsets = [[0,1,],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];

	const numberOfRows = this._bombBoard.length;
	const numberOfColumns = this._bombBoard[0].length;

	let numberOfSurroundingBombs = 0;
	offsets.forEach(offset => {
		const neighborRowIndex = flipRow + offset[0];
		const neighborColumnIndex = flipColumn + offset[1];

		// Check to see if row and column are valid tile values on the board
		if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns);
		if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
			numberOfSurroundingBombs++;
		}
	});

	return numberOfSurroundingBombs;
}



	flipTile(flipRow, flipColumn) {
	// Check if tile is already flipped if so , return
	if (this._playerBoard[flipRow][flipColumn] !== ' ') {
		return;
}
	this._numberOfEmptySpaces--;
	if (this._bombBoard[flipRow][flipColumn] === 'B') {
		this._playerBoard[flipRow][flipColumn] = 'B';
	} else {
		this._playerBoard[flipRow][flipColumn] = this.getNumberOfSurroundingBombs(flipRow,flipColumn)
	}
	// If tile is not bomb place number of surrouding bombs on player board
}



print() {
	console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
	};
	static generatePlayerBoard(numberOfRows, numberOfColumns) {
	const board = [];
	for (let rowIndex =0; rowIndex < numberOfRows; rowIndex++) {
		const row = [];
		for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
			row.push(' ');
		}
		board.push(row);
	}
	return board;
	}


static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
	const board = [];
	for (let rowIndex =0; rowIndex < numberOfRows; rowIndex++) {
		const row = [];
		for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
			row.push(null);
		}
		board.push(row);
	}

	let numberOfBombsPlaced = 0;
	while (numberOfBombsPlaced < numberOfBombs) {
		const randomRowIndex = Math.floor(Math.random() * numberOfRows);
		const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

		if (board[randomRowIndex][randomColumnIndex] !== 'B') {
			board[randomRowIndex][randomColumnIndex] = 'B';
			numberOfBombsPlaced++;

		}
	}

	return board;
	}
}
 
 
