import React from 'react'

const Form = (props) => {
    return(
        <div>
            <form className='sushi-wallet' onSubmit={props.addMoney}>
                <label>Need more sushi? :D </label>
                <input className='wallet-input' type='number' name='wallet-money' placeholder='Add more £££ for sushi!'/>
                <input type='submit' value='Send'/>
            </form>
        </div>
    )
}

export default Form;