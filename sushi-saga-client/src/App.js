import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:8089/sushis"

class App extends Component {

  state = {
    sushis: [], 
    budget: 200, 
    selectedSushi: null,
    platesEaten: []
  }

  // fetch data from server and store in state
  componentDidMount() {
    fetch(API).then(r => r.json()).then(sushis => this.setState({sushis: sushis}))
  }

 getRandom = (arr, n)  => {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
       console.log("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

  showMoreSushi = () => {
    console.log("show more sushi")
  }

  selectSushi = (sushi) => {
    if(this.state.budget > 0 && sushi.price <= this.state.budget) {
    this.setState({selectedSushi: sushi}, () => {
    let newBudget = this.state.budget - this.state.selectedSushi.price
      this.setState({budget: newBudget})})
      this.setState({platesEaten: [...this.state.platesEaten, sushi]})
  }
  else {
    window.alert("Check if your budget is enough for the price")
  }
}

  render() {
    return (
      <div className="app">
        <SushiContainer selectSushi={this.selectSushi} showMoreSushi={this.showMoreSushi} sushis={this.getRandom(this.state.sushis, 4)} />
        <br></br>
        <Table money={this.state.budget} platesEaten={this.state.platesEaten}/>
      </div>
    );
  }
}

export default App;