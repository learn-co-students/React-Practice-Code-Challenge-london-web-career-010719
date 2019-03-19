import React  from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={props.handleEatenSushi}>
        { 
          props.eatenArray.includes(props.uniqSushi.id)
           ?
            null
          :
          <img src={props.uniqSushi.img_url} alt="sushi" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
      {props.uniqSushi.name} - ${props.uniqSushi.price}
      </h4>
    </div>
  )
}

export default Sushi