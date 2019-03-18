import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(props.info)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eatenSushiList.includes(props.info) ?
          null :
          <img src={props.info.img_url} width="100%" alt={props.info.name}/>
        }
      </div>
      <h4 className="sushi-details">
        {props.info.name} - ${props.info.price}
      </h4>
    </div>
  )
}

export default Sushi