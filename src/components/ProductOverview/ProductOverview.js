import React from 'react'
import './ProductOverview.css'
import { Link } from 'react-router-dom'
import './ProductOverview.css'

import { connect } from 'react-redux'
import { addToCart, loadCurrentItem, addToFavorites } from '../../Redux/Webshop/shop-actions'

const ProductOverview = ({ items, addToCart, loadCurrentItem, addToFavorites }) => {



    return (
        <>

            <div className='itemContainer'>
                <h3>{items.title}</h3>
                <img src={items.image}
                    // width='200px'
                    alt={items.alt}
                    className='imgPO' />
                <p>{items.description}</p>
                <p>&euro; {items.price}</p>
            </div>

            <div className='addAndViewButtons'>
                <Link to={`/productdetail/${items.id}`}>
                    <button
                        onClick={() => loadCurrentItem(items)}
                        className='buttonPO'>a closer view</button>
                </Link>
                <button onClick={() => addToCart(items.id)} className='buttonPO'>add to basket</button>
                {/* <button onClick={() => addToFavorites(items.id)}>favorites</button> */}
            </div>
            <hr className='hrPO' />

        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (cartItem) => dispatch(loadCurrentItem(cartItem)),
        addToFavorites: (id) => dispatch(addToFavorites(id))
        
    }
}

export default connect(null, mapDispatchToProps)(ProductOverview)
