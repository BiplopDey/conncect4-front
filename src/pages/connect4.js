import { cellState } from "../components/state";
import Table from "../components/table";

const player1 = cellState.player.player1;
const player2 = cellState.player.player2;
const empty = cellState.empty;

export default function Connect4() {
  const rowSize = 3;
  const response = {
    table: [[1], [2, 1], [1]],
    status: "PLAYING",
  };
  const columnTable = response.table;
  return <Table table={mapColumnTableToRowTable(columnTable, rowSize)}></Table>;
}

const mapColumnTableToRowTable = (columnTable, rowSize) =>
  [...Array(rowSize).keys()]
    .reverse()
    .map((rowIndex) => getRowOfColumnTable(columnTable, rowIndex));

const getRowOfColumnTable = (columnTable, rowIndex) => [
  ...columnTable.map((column) => getCellOfColumnOrEmptyCell(column, rowIndex)),
];

const getCellOfColumnOrEmptyCell = (column, rowIndex) =>
  column.length > rowIndex ? column[rowIndex] : cellState.empty;
