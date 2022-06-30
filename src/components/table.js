import Row from "./row";
import { cellState } from "./state";

export default function Table() {
  const player1 = cellState.player.player1;
  const player2 = cellState.player.player2;
  const empty = cellState.empty;
  return (
    <div className="table">
      <Row cells={[player1, player2, empty]}></Row>
      <Row cells={[player1, player2, player1]}></Row>
    </div>
  );
}
