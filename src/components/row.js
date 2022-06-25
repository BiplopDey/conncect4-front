import "./row.css";
import Cell from "./cell";
import { cellState } from "./state";

export default function Row() {
  const player1 = cellState.player.player1;
  const player2 = cellState.player.player2;
  const empty = cellState.empty;
  const cellStates = [player1, player2, empty];

  /* {cellStates.map((state, index) => (
        <Cell key={index} column={index} state={state}></Cell>
      ))} */

  return (
    <div className="row">
      <Cell column={0} state={player1}></Cell>
      <Cell column={1} state={player2}></Cell>
      <Cell column={2} state={empty}></Cell>
    </div>
  );
}
