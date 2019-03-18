import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {!!props.sushisDisplay.length && props.sushisDisplay.map(sushi=> <Sushi {...sushi} eatSushi={()=>props.eatSushi(sushi)} isConsumed={props.isConsumed(sushi)}/>)}
        <MoreButton displayMore={props.displayMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
