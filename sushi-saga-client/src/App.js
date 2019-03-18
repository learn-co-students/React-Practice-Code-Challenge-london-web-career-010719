import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushiList: [],
    selectedSushiList: [],
    eatenSushiList: [],
    counter: 1,
    remainedMoney: 100
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
    if (this.state.remainedMoney > sushi.price && !this.state.eatenSushiList.includes(sushi)) {
      return this.setState({
        ...this.state,
        eatenSushiList: [...this.state.eatenSushiList, sushi],
        remainedMoney: this.state.remainedMoney - sushi.price
      })
    } 
  }

  selectSushi = () => {
    let n = this.state.counter
    this.setState({
      ...this.state,
      selectedSushiList: this.state.sushiList.slice(4*n, 4*(n+1)),
      counter: this.state.counter + 1
    })
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
          eatenSushiList={this.state.eatenSushiList} remainedMoney={this.state.remainedMoney}/>
      </div>
    );
  }
}

export default App;