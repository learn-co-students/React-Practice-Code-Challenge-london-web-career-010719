import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import API from './adapters/API'


class App extends Component {


  componentDidMount(){
    API.getSushis()
      .then(sushis => this.setState({
        allSushis: sushis
      }))
  }

  state = {
    allSushis: [],
    budget: 100,
    eatenSushi: []
  }

  updateBudget = (price) => {
    this.setState({
      budget: this.state.budget - price
    })
  }
  

  updateEaten = (id) =>{
    console.log(id)
    this.setState({
      eatenSushi: [...this.state.eatenSushi, id]
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  allSushis={this.state.allSushis}
                         eatenArray={this.state.eatenSushi} 
                         updateBudget={(price)=>this.updateBudget(price)} 
                         updateEaten ={(id)=>this.updateEaten(id)}
                         budget = {this.state.budget}
                         />
        <Table budget={this.state.budget} eatenArray={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;