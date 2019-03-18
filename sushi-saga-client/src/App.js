import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './containers/Form';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushiList: [],
    selectedSushiList: [],
    eatenSushiList: [],
    counter: 1,
    balance: 100
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({
      ...this.state,
      sushiList: data,
      selectedSushiList: data.slice(0, 4)
    }))
  }

  eatSushi = (sushi) => {
    if (this.state.balance >= sushi.price && !this.state.eatenSushiList.includes(sushi)) {
      return this.setState({
        ...this.state,
        eatenSushiList: [...this.state.eatenSushiList, sushi],
        balance: this.state.balance - sushi.price
      })
    } 
  }

  selectSushi = () => {
    let n = this.state.counter
    this.setState({
      ...this.state,
      selectedSushiList: this.state.sushiList.slice(4*n, 4*(n+1)),
      counter: 4 * (this.state.counter+1) < this.state.sushiList.length ? this.state.counter + 1 : 0
    })
  }

  addMoney = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      balance: this.state.balance + parseInt(event.target['wallet-money'].value, 10)
    })
    event.target.reset()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushiList={this.state.sushiList} 
          selectedSushiList={this.state.selectedSushiList} 
          eatenSushiList={this.state.eatenSushiList} 
          eatSushi={this.eatSushi}
          selectSushi={this.selectSushi}/>
        <Table 
          eatenSushiList={this.state.eatenSushiList} 
          balance={this.state.balance}/>
        <Form 
          addMoney={this.addMoney} />
      </div>
    );
  }
}

export default App;