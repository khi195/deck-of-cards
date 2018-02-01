import React, { Component } from 'react';
import './App.css';
import ConstructDeckOfCards from './initialise';
import Cards from '../src/components/cards/cards';
import Button from './components/buttons';
import { shuffleCards, sorting } from '../src/actions'

class App extends Component {
  state={
    cards:ConstructDeckOfCards(),
    drawnCards: [],
    disabled: true,
    disableCheckbox: false
  }
  
  handleShuffle = () => {
    const shuffledCards = shuffleCards(this.state.cards)
    this.setState({
      cards: shuffledCards
    })
  }
  
  handleCheckedcards = (checked) => {
    const index = this.state.drawnCards.indexOf(checked.card);
    if(index >-1) this.state.drawnCards.splice(index,1);
    this.setState({
      drawnCards: this.state.drawnCards.concat(checked.card)
    })
    if(this.state.drawnCards.length) this.setState({disabled: false })  
  }

  handleDrawnCards = () => {
    this.setState({
      cards: this.state.drawnCards,
      disableCheckbox: true
    })
  }

  handleSorting = () => {
    const shuffledCards = sorting(this.state.cards)
    this.setState({
      cards: shuffledCards
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shuffle, Draw and Sort</h1>
        </header>
        <Button Label={"Shuffle"} onClick={this.handleShuffle}/>
        <Button Label={"Draw"} onClick={this.handleDrawnCards} disabled={this.state.disabled}/>
        <Button Label={"Sort"} onClick={this.handleSorting}/>
        <Cards cards={this.state.cards} onChange={this.handleCheckedcards} disableCheckbox ={this.state.disableCheckbox}/>
      </div>
    );
  }
}

export default App;
