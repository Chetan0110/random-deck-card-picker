import React from "react";
import Deck from "./deck";
import "../css/main.css";

export default class Main extends React.Component {
  render () {
    return (
      <div className="main">
        <h2>Draw Cards Randomly!</h2>
        <Deck />
      </div>
    )
  }
}