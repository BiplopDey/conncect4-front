import "./row.css";
import Cell from "./cell";

export default function Row({ cells }) {
  return (
    <div className="row">
      {cells.map((state, index) => (
        <Cell key={index} column={index} state={state}></Cell>
      ))}
    </div>
  );
}
