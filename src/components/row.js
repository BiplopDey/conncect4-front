import "./row.css";
import Cell from "./cell";

export default function Row({ cells, onColumnClick }) {
  return (
    <div className="row">
      {cells.map((state, index) => (
        <Cell
          key={index}
          onClick={() => onColumnClick(index)}
          state={state}
        ></Cell>
      ))}
    </div>
  );
}
