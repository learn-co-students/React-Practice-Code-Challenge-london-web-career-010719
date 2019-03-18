import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis:[],
    sushisDisplay:[],
    displayMarker:0,
    sushisEaten:[],
    balance:50
  }

  componentDidMount(){
    fetch(API)
      .then(res=>res.json())
      .then(data=>this.setState({sushis:[...data]}))
      .then(()=>this.setState({
        sushisDisplay:this.state.sushis.slice(0,4),
        displayMarker:4
      }))
  }

  displayMore = () => {
    const nextFour = []
    let marker = this.state.displayMarker
    while (nextFour.length<4){
      if(!this.state.sushisEaten.includes(this.state.sushis[marker])){
        nextFour.push(this.state.sushis[marker])
      }
      if (marker === this.state.sushis.length - 1) {
        marker = 0
      }
      else {
        marker += 1
      }
    }
    this.setState({
      sushisDisplay:nextFour,
      displayMarker:marker
    })
  }

  eatSushi = (sushi) => {
    if (this.state.balance - sushi.price > 0) {
      this.setState({
        sushisEaten:this.state.sushisEaten.concat(sushi),
        balance:this.state.balance - sushi.price
      })
    }
  }

  isConsumed = (sushi) => {
    return this.state.sushisEaten.includes(sushi)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushisDisplay={this.state.sushisDisplay} displayMore={this.displayMore} eatSushi={this.eatSushi} isConsumed={this.isConsumed}/>
        <Table balance={this.state.balance} sushisEaten={this.state.sushisEaten}/>
      </div>
    );
  }
}

export default App;
