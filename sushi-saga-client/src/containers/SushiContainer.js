import React, { Fragment } from "react"
import MoreButton from "../components/MoreButton"
import Sushi from "../components/Sushi"

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => {
          return (
            <Sushi
              key={sushi.id}
              id={sushi.id}
              name={sushi.name}
              img_url={sushi.img_url}
              price={sushi.price}
              eatSushi={props.eatSushi}
              eaten={props.ateSushis.includes(sushi.id) ? true : false}
            />
          )
        })}
        <MoreButton onClick={props.flipPage} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
