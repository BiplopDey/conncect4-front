import "./cell.css";
import Token from "./token";
import { player } from "./player";
import { cellState } from "./state";

export default function Cell({ state, onClick }) {
  return (
    <div className="cell" onClick={onClick}>
      {getTokenIfNotEmpty(state)}
    </div>
  );
}

const getTokenIfNotEmpty = (state) =>
  isEmpty(state) ? (
    <></>
  ) : (
    <Token color={isPlayer1(state) ? "red" : "blue"}></Token>
  );

const isEmpty = (state) => state === cellState.empty;

const isPlayer1 = (state) => state === cellState.player.player1;
