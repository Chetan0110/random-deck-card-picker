import React from "react";
import "../css/card.css";

export default class Card extends React.Component {

  renderSuitIcon(className) {
      return this.props.card.suit === "spades" ?
        <img src = "https://svgsilh.com/svg/145116.svg" alt="" className={className} />
        : this.props.card.suit === "clubs" ?
        <img src = "https://upload.wikimedia.org/wikipedia/en/0/0a/Card_club.svg" alt="" className={className}/>
        :this.props.card.suit === "hearts" ?
        <img src = "https://upload.wikimedia.org/wikipedia/en/0/0b/Card_heart.svg" alt="" className={className} />
        : this.props.card.suit === "diamonds" ?
        <img src = "https://upload.wikimedia.org/wikipedia/en/1/1f/Card_diamond.svg" alt="" className={className}/>
        : null
  }

  render () {
    return (
      <div className="card">
      {
        this.props.isClose ? <div>
        </div> : <div>
        {
          this.renderSuitIcon("small-suit-icon")
        }
        {
          this.props.card.rank
        }
        {
          this.renderSuitIcon("big-suit-icon")
        }
        </div>
      }
      </div>
    )
  }
}