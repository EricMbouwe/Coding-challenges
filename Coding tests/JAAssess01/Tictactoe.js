import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex',
};

const squareStyle = {
  width: '60px',
  height: '60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white',
  cursor: 'pointer',
};

const boardStyle = {
  backgroundColor: '#eee',
  width: '208px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  border: '3px #eee solid',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
};

const instructionsStyle = {
  marginTop: '5px',
  marginBottom: '5px',
  fontWeight: 'bold',
  fontSize: '16px',
  fontFamily: 'Helvetica',
  color: '#222',
};

const buttonStyle = {
  marginTop: '15px',
  marginBottom: '16px',
  width: '80px',
  height: '40px',
  backgroundColor: '#8acaca',
  color: 'white',
  fontSize: '16px',
  borderRadius: '5px',
  cursor: 'pointer',
};

function Square({ value, onClick, col, row }) {
  const handleClick = () => {
    onClick(row, col);
  };

  return (
    <div className="square" style={squareStyle} onClick={handleClick}>
      {value}
    </div>
  );
}

function Board({ player, gameBoard, onReset, onSetValue, winnerMessage }) {
  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{player}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winnerMessage}</span>
      </div>

      <button style={buttonStyle} onClick={onReset}>
        Reset
      </button>

      <div style={boardStyle}>
        {gameBoard.map((row, rowId) => (
          <div key={rowId} className="board-row" style={rowStyle}>
            {row.map((val, colId) => (
              <Square
                key={`${rowId}-${colId}`}
                value={val}
                row={rowId}
                col={colId}
                onClick={onSetValue}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Game() {
  const [gameBoard, setGameBoard] = useState(
    Array(3)
      .fill()
      .map(() => Array(3).fill('')),
  );
  const [player, setPlayer] = useState('X');
  const [winnerMessage, setWinnerMessage] = useState('None');
  const [endGame, setEndGame] = useState(false);
  const swithPlayer = () => setPlayer(player === 'X' ? 'O' : 'X');

  const checkCombination = (a, b, c) => {
    if (!a || !b || !c) return false;
    return a === b && b === c;
  };

  const checkWin = () => {
    if (
      checkCombination(gameBoard[0][0], gameBoard[0][1], gameBoard[0][2]) ||
      checkCombination(gameBoard[1][0], gameBoard[1][1], gameBoard[1][2]) ||
      checkCombination(gameBoard[2][0], gameBoard[2][1], gameBoard[2][2]) ||
      checkCombination(gameBoard[0][0], gameBoard[1][0], gameBoard[2][0]) ||
      checkCombination(gameBoard[0][1], gameBoard[1][1], gameBoard[2][1]) ||
      checkCombination(gameBoard[0][2], gameBoard[1][2], gameBoard[2][2]) ||
      checkCombination(gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]) ||
      checkCombination(gameBoard[0][2], gameBoard[1][1], gameBoard[2][0])
    ) {
      setWinnerMessage(`${player} wins!`);
      setEndGame(true);
    }
  };

  const handleReset = () => {
    const newGameBoard = gameBoard.map((row) => row.map((val) => (val = '')));
    setGameBoard(newGameBoard);
    setPlayer('X');
    setEndGame(false);
    setWinnerMessage('None');
  };

  const handleSetValue = (rowId, colId) => {
    const newGameBoard = [...gameBoard];

    if (endGame) return;
    if (newGameBoard[rowId][colId] !== '') return;

    newGameBoard[rowId][colId] = player;
    setGameBoard(newGameBoard);
    checkWin();
    swithPlayer();
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          gameBoard={gameBoard}
          player={player}
          winnerMessage={winnerMessage}
          onSetValue={handleSetValue}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById('root'));
