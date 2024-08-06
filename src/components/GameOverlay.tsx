import { Board } from "../aux/functions";
import TryAgainLogo from "../assets/img/try-again.gif";

export type WrapperProps = { onRestart: any; board: Board };

const GameOverlay = (props: WrapperProps) => {
  if (props.board.hasWon()) {
    return <div className="tile2048"></div>;
  } else if (props.board.hasLost()) {
    return (
      <div className="gameOver" onClick={props.onRestart}>
        <img
          src={TryAgainLogo}
          alt="Try Again"
          style={{ width: "100%", height: "100%", cursor: "pointer" }}
        />
      </div>
    );
  }

  return null;
};

export default GameOverlay;
