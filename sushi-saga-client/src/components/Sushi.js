import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={props.handleClick}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          //true ?
          //  null
          //:
            <img src={props.img_url} alt="sushi" width="100%" />
        }
      </div> 
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi