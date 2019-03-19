import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          // sushi components rendered here
         props.sushis.map(sushi => <Sushi handleClick={() => props.selectSushi(sushi)}  {...sushi}/>)
        }
        <MoreButton onClick={props.showMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer