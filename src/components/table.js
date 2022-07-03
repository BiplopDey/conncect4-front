import "./table.css";
import Row from "./row";
import { cellState } from "./state";

export default function Table({ table, onColumnClick }) {
  return (
    <div className="table">
      {table.map((row, index) => (
        <Row key={index} cells={row} onColumnClick={onColumnClick}></Row>
      ))}
    </div>
  );
}
