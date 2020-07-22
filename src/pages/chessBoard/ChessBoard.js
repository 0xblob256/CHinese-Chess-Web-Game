import React, { Component } from "react";
import "./ChessBoard.css";
import Xiangqi from "xiangqi.js";

require("@lengyanyu258/xiangqiboardjs/src/xiangqiboard.js");
const Xiangqiboard = window.Xiangqiboard;

export default class ChessBoard extends Component {
  render() {
    const xiangqi = new Xiangqi();
    const board1 = Xiangqiboard("board1", "start");
    console.log("xiangqi", window, xiangqi);
    return <div id="board1" style="width: 450px"></div>;
  }
}
