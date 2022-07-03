import { useState } from "react";
import Menu from "../components/menu";
import { cellState } from "../components/state";
import Table from "../components/table";
import axios from "axios";

const player1 = cellState.player.player1;
const player2 = cellState.player.player2;
const empty = cellState.empty;
const herokuapp = "https://connect4-api.herokuapp.com";
const localapp = "http://localhost:8080";
const url = localapp + "/connect4/placeToken";

export default function Connect4() {
  const rowSize = 3;
  const columnSize = 4;
  const [gameData, setGameData] = useState(getIninitalGameData());

  function restartGame() {
    setGameData(getIninitalGameData());
  }

  function placeToken(columnIndex) {
    axios
      .post(url, getRequestBody(columnIndex))
      .then((response) => {
        setGameData({
          table: response.data.table,
          status: response.data.status,
          currentPlayer: nextPlayer(),
        });
      })
      .catch((error) => {});
  }

  function getIninitalGameData() {
    return {
      table: getEmptyTable(),
      status: "PLAYING",
      currentPlayer: player1,
    };
  }

  function getEmptyTable() {
    return range(columnSize).map((_) => []);
  }

  function nextPlayer() {
    return gameData.currentPlayer === player1 ? player2 : player1;
  }

  function getRequestBody(columnIndex) {
    return {
      table: gameData.table,
      player: gameData.currentPlayer,
      column: columnIndex + 1,
      row_size: rowSize,
    };
  }

  if (gameData.status !== "PLAYING") {
    alert(gameData.status);
  }

  return (
    <>
      <Menu onRestartGame={restartGame}></Menu>
      <Table
        table={mapColumnTableToRowTable(gameData.table, rowSize)}
        onColumnClick={placeToken}
      ></Table>
    </>
  );
}

const range = (end) => [...Array(end).keys()];

const mapColumnTableToRowTable = (columnTable, rowSize) =>
  [...range(rowSize)]
    .reverse()
    .map((rowIndex) => getRowOfColumnTable(columnTable, rowIndex));

const getRowOfColumnTable = (columnTable, rowIndex) => [
  ...columnTable.map((column) => getCellOfColumnOrEmptyCell(column, rowIndex)),
];

const getCellOfColumnOrEmptyCell = (column, rowIndex) =>
  column.length > rowIndex ? column[rowIndex] : cellState.empty;
