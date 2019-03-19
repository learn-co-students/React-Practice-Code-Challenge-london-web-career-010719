import React, { Component } from "react"
import SushiContainer from "./containers/SushiContainer"
import Table from "./containers/Table"

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    page: 0,
    ateSushis: [],
    budget: 50
  }

  componentDidMount() {
    return fetch(API)
      .then(res => res.json())
      .then(sushis => this.setState({ sushis: sushis }))
  }

  flipPage = () => {
    this.setState({
      page: this.state.page + 1
    })
  }

  eatSushi = (sushiId, sushiPrice = 0) => {
    if (this.state.budget > sushiPrice) {
      if (!this.state.ateSushis.includes(sushiId)) {
        this.setState({
          ateSushis: [...this.state.ateSushis, sushiId],
          budget: this.state.budget - sushiPrice
        })
      }
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={[
            ...this.state.sushis.slice(
              this.state.page * 4,
              this.state.page * 4 + 4
            )
          ]}
          page={this.state.page}
          flipPage={this.flipPage}
          eatSushi={this.eatSushi}
          ateSushis={[...this.state.ateSushis]}
        />
        <Table
          ateSushis={[...this.state.ateSushis]}
          budget={this.state.budget}
        />
      </div>
    )
  }
}

export default App
