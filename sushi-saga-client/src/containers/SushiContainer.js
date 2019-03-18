import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = props => {
  return (
    <Fragment>
      <div className='belt'>
        {props.sushi.map(sushi => (
          <Sushi
            eatenSushiIds={props.eatenSushiIds}
            handleClick={props.handleClick}
            key={sushi.id}
            sushi={sushi}
          />
        ))}
        <MoreButton handleClick={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
