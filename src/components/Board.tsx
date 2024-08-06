import { useState } from "react";
import TileView from "./Tile";
import Cell from "./Cell";
import { Board } from "../aux/functions";
import UseEvent from "../hooks/useEvent";
import GameOverlay from "./GameOverlay";

const BoardView = () => {
  const [board, setBoard] = useState(new Board());

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (board.hasWon()) {
      return;
    }

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37;
      let boardClone = Object.assign(
        Object.create(Object.getPrototypeOf(board)),
        board
      );
      let newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  UseEvent("keydown", handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((_col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });

  const tiles = board.tiles
    .filter((tile) => tile.value != 0)
    .map((tile, index) => {
      return <TileView tile={tile} key={index} />;
    });

  const resetGame = () => {
    alert("lostgame");
  };

  return (
    <div>
      <div className="details-box">
        <div className="resetButton">Reset Game</div>
        <div className="score-box">
          <div className="score-header">SCORE</div>
          <div>{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
      </div>
    </div>
  );
};

export default BoardView;
