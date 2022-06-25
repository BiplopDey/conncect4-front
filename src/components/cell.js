import "./cell.css";
import Token from "./token";
import { player } from "./player";
import { cellState } from "./state";

export default function Cell({ state, column }) {
  if (state === cellState.empty) return <div className="cell"></div>;

  const color = state === player.player1 ? "red" : "blue";
  return (
    <div className="cell">
      <Token color={color}></Token>
    </div>
  );
}
