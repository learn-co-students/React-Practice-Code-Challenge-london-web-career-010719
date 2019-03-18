import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.selectedSushiList.map(sushi => <Sushi key={sushi.id} info={sushi} eatSushi={props.eatSushi} eatenSushiList={props.eatenSushiList}/>)}
        <MoreButton selectSushi={props.selectSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer