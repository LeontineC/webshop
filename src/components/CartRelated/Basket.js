import React, { useState } from 'react'
import './Basket.css'

import { connect } from 'react-redux'
import { adjustItemQuantity, removeFromCart } from '../../Redux/Webshop/shop-actions'

const Basket = ({ item, removeFromCart, adjustQuantity }) => {

    const [input, setInput] = useState(item.qty)
    const onChangeHandler = (e) => {
        setInput(e.target.value)
        adjustQuantity(item.id, e.target.value)
    }

    return (
        <>
            <div className='basketContainer'>
                <h3>{item.title}</h3>
                <img src={item.image}
                    // width='200px'
                    alt={item.alt} 
                    className='imgBasket'/>
                <p>{item.description}</p>
                <p>&euro; {item.price}</p>
            </div>
            <div className='quantity'>
                <label htmlFor='qty'>quantity</label>
                <input min='1' type='number' id='qty' name='qty' className='inputBasket' value={input} onChange={onChangeHandler} />
            
            <button className='buttonBin' onClick={() => removeFromCart(item.id)}
            ><i className="ri-delete-bin-5-line"></i></button>
            </div>
            <hr className='hrBasket'/>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQuantity: (id, value) => dispatch(adjustItemQuantity(id, value))
    }
}

export default connect(null, mapDispatchToProps)(Basket)
