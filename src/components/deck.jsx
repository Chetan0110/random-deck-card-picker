import React from "react";
import Card from "./card";
import "../css/deck.css";


export default class Deck extends React.Component {

  constructor() {
    super();
    this.state = {
      cardSuit: ["clubs", "spades", "diamonds", "hearts"],
      cardRank: ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"],
      deck: [],
      closeCards: [],
      openCards: []
    }
    this.reset = this.reset.bind(this);
    this.onDrawCardsClick = this.onDrawCardsClick.bind(this);
  }

  componentDidMount() {
    this.reset();
  }

  reset = () => {
    let cards = [];
    let closeCards = [];
    let cardObj;
    for(let i = 0; i <= 3; i++) {
      for(let j = 0; j <= 12; j++) {
        cardObj = {
          suit: this.state.cardSuit[i],
          rank: this.state.cardRank[j]
        }
        cards.push(cardObj);
        closeCards.push(cardObj)
      }
    } 
    this.setState({
      deck: cards,
      closeCards: closeCards,
      openCards: []
    });
  }

  onDrawCardsClick = () => {
    let limit = this.state.closeCards.length >= 5 ? 5 : this.state.closeCards.length;
    let newOpenCards = [...this.state.openCards];
    let newClosedCards = [...this.state.closeCards];
    for (let i = 0; i < limit; i++) {
      let cardNum = Math.floor(Math.random() * newClosedCards.length);
      let clonedCard = {...newClosedCards[cardNum]};
      newOpenCards.push(clonedCard);
      newClosedCards.splice(cardNum, 1);
      // newClosedCards = [
      //   ...newClosedCards.slice(0, cardNum),
      //   ...newClosedCards.slice(cardNum + 1)
      // ];
    }
    this.setState({
      openCards: newOpenCards,
      closeCards: newClosedCards
    })
  }

  render() {
    return (
      <div className="deck">
      {
        this.state.closeCards.map((card, index) => 
          <div
            key={("" + card.suit) + card.rank + index} 
            className="close-card"
            style={{ zIndex: index + 1, marginTop: `${index * 5}px`, left: "15px" }}  
          >
            <Card
              isClose={true}
              card={card}
            /> 
          </div>
        )
      }
      {
        this.state.openCards.map((card, index) => 
        <div
          key={("" + card.suit) + card.rank + index} 
          className="open-card"
          style={{
            marginTop: `${index * 25}px`
          }}
        >
          <Card 
            isClose={false}
            card={card}
          /> 
        </div>)
      }
      <div className="actions">
      {
        this.state.closeCards.length > 0 ? <button className="draw-cards-button" onClick={this.onDrawCardsClick}>Draw Cards</button> : null
      }
      {
        this.state.openCards.length > 0 ? <button className="reset-button" onClick={this.reset}>Reset</button> : null
      }
      </div>
    </div>);
  }
}