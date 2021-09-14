import React from 'react'
import './ProductDetail.css'

import { connect } from 'react-redux'

import { addToCart } from '../../Redux/Webshop/shop-actions'
const ProductDetail = ({ detail, addToCart }) => {


    return (
        <>
            <div className='containerAll'>
            
                <div className='pDContainer'>
                    <img src={detail.imageTwo} className='imgPD' />
                </div>
                <div className='pDText'>
                    <p >{detail.title}</p>
                    <p >{detail.text}</p>
                    <p>{detail.description}</p>
                </div>
                <button onClick={() => addToCart(detail.id)} className='buttonPD'>add to basket</button>
            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        detail: state.shop.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
