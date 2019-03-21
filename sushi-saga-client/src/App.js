import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushis: [],
    eatenSushis: [],
    budget: Math.floor(Math.random() * 100) + 50,
    insufficientFunds: false
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({allSushis: sushis}))
  }

  eatSushi = (sushi) => {
    if (this.state.budget < sushi.price) {
      this.setState({insufficientFunds: true})
      alert('Sorry, insufficient funds.')
    } else {
      if (!this.state.eatenSushis.includes(sushi.id)) {
        this.setState({eatenSushis: [...this.state.eatenSushis, sushi.id]})
        this.setState({budget: this.state.budget - sushi.price})
      }
    }
  }

  // eatSushi = sushi => {
  //   if (this.state.eatenSushis.includes(sushi)) return;
  //   if (this.state.budget < sushi.price) return this.setState({ insufficientFunds: true })
  //
  //   this.setState({
  //     eatenSushis: [...this.state.eatenSushis, sushi.id],
  //     budget: this.state.budget - sushi.price
  //   })
  // }

  render() {

    const sushis = this.state.allSushis.map(sushi => {
      return {
        ...sushi,
        isEaten: this.state.eatenSushis.includes(sushi.id)
      }
    })

    return (
      <div className="app">
        <SushiContainer allSushis={sushis} eatSushi={this.eatSushi} />
        <Table budget={this.state.budget} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;
