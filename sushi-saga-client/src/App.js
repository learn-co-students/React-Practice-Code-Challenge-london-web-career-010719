import React, { Component } from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'
import API from './adapters/API'

class App extends Component {
  state = {
    sushi: [],
    page: 0,
    balance: 50,
    eatenSushiIds: []
  }

  seeNextSushi = () => {
    this.setState({ page: this.state.page + 1 })
  }

  componentDidMount() {
    API.getSushi().then(sushi => this.setState({ sushi }))
  }

  eatSushi = sushi => {
    if (this.state.balance - sushi.price < 0) {
      alert('you aint got the wedge for dat fish fella')
      return
    }
    this.setState({
      eatenSushiIds: [...this.state.eatenSushiIds, sushi.id],
      balance: this.state.balance - sushi.price
    })
  }

  beltSushi = () =>
    this.state.sushi.slice(this.state.page * 4, this.state.page * 4 + 4)

  render() {
    return (
      <div className='app'>
        <SushiContainer
          eatenSushiIds={this.state.eatenSushiIds}
          sushi={this.beltSushi()}
          handleClick={this.eatSushi}
          moreSushi={this.seeNextSushi}
        />
        <Table balance={this.state.balance} />
      </div>
    )
  }
}

export default App
