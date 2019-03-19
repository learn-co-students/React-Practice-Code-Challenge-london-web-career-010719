import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => (
          <Sushi
            consumedSushis={props.consumedSushis}
            handleClick={props.handleClick}
            key={sushi.id}
            sushi={sushi}
          />
        ))}
        <MoreButton handleClick={props.onMoreSushiClick} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
