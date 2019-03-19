import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

export default class SushiContainer extends Component {

state = {
  page: 1,
}

updatePage = () => {
    if (this.state.page <25) {
    this.setState({
    page: this.state.page+1
  })
  } else {
    this.setState({
      page: 1
    })
  }
}

render4Sushi = () => {
  let startNum = (this.state.page*4)-4;
  return this.props.allSushis.slice(startNum, startNum+4)
}

sushiEaten = (sushi) => {
  if (this.props.budget - sushi.price >= 0){
this.props.updateEaten(sushi.id)
this.props.updateBudget(sushi.price)
} else{
  alert('You dont have enough funds!')
}
}





render(){
      return (
          <div className="belt">
            {
              this.render4Sushi().map(sushi => <Sushi uniqSushi={sushi} handleEatenSushi={() => this.sushiEaten(sushi)} eatenArray={this.props.eatenArray}/>)
            }
            <MoreButton handleClick={this.updatePage}/>
          </div>
      )
    }
  }
