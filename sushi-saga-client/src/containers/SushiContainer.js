import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    sushiIndexes: [0, 1, 2, 3]
  }

  getSushiPage = () => this.props.allSushis.filter((s, i) => this.state.sushiIndexes.includes(i))

  nextFour = () => {
    this.setState( { sushiIndexes: this.state.sushiIndexes.map((i) => i + 4)} )
  }


  render() {
    return (
        <div className="belt">
          {
            this.getSushiPage().map(sushi => <Sushi key={sushi.id} {...sushi} onClick={() => this.props.eatSushi(sushi)} />)
          }
          <MoreButton onClick={this.nextFour} />
        </div>
    )
  }


}

export default SushiContainer
