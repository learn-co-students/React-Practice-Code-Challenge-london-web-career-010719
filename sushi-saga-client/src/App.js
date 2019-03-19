import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const URL = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: {},
    page: 0,
    balance: 100,
    consumedSushis: []
  };

  getSushis = () => {
    fetch(URL)
      .then(resp => resp.json())
      .then(sushis => {
        this.setState({ sushis });
      });
  };

  componentDidMount() {
    this.getSushis();
  }

  getSushiRange = (sushiArray, number) => {
    return [...sushiArray].slice(number * 4, number * 4 + 4);
  };

  increasePage = () => {
    if (this.state.page === 24) {
      this.setState({ page: 0 });
    } else {
      this.setState({ page: this.state.page + 1 });
    }
  };

  eatSushi = sushi => {
    if (this.state.balance < sushi.price) {
      alert("No sushi for you, scrub!");
    } else {
      this.setState({
        consumedSushis: [...this.state.consumedSushis, sushi.id]
      });
      this.setState({ balance: this.state.balance - sushi.price });
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          handleClick={this.eatSushi}
          consumedSushis={this.state.consumedSushis}
          sushis={this.getSushiRange(this.state.sushis, this.state.page)}
          onMoreSushiClick={this.increasePage}
        />
        <Table
          consumedSushis={this.state.consumedSushis}
          balance={this.state.balance}
        />
      </div>
    );
  }
}

export default App;
