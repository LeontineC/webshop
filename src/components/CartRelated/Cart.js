import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Basket from './Basket'
import './Basket.css'

import { connect } from 'react-redux'
// import Favorites from '../Favorites'

const Cart = ({ cart }) => {


    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {
        let quantity = 0
        let price = 0

        cart.forEach(item => {
            quantity += item.qty;
            price += item.qty * item.price;
        })

        setTotalQuantity(quantity)
        setTotalPrice(price)

    }, [cart, totalPrice, totalQuantity, setTotalPrice, setTotalQuantity])


    return (
        <>



            <div>
                {cart.map((item) =>
                    <Basket key={item.id} item={item} />
                )}
            </div>
            <div className='contentBasket'>
                <h3>the content of your basket</h3>
            </div>
            <div className='summaryBasket'>
                <span>{totalQuantity} &nbsp;egg warmers&nbsp;</span>
                <span> &euro;{totalPrice}</span>
            </div>
            <Link to='./checkout'><button className='linkCheckout'>to the checkout</button></Link>


        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart

    }
}

export default connect(mapStateToProps)(Cart)