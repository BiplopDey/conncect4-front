import "./row.css";
import Cell from "./cell";

export default function Row({ cells }) {
  const func = (index) => {
    console.log(index);
  };
  return (
    <div className="row">
      {cells.map((state, index) => (
        <Cell
          key={index}
          onClick={() => {
            func(index);
          }}
          state={state}
        ></Cell>
      ))}
    </div>
  );
}
