import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../Redux/Webshop/shop-actions'

const Favorite = ({ addToFavorites, removeFromFavorites, item}) => {

    const [favoriteItem, setFavoriteItem] = useState()

    return (
        <div>
            
        </div>
    )
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        addToFavorites: (itemID) => dispatch(addToFavorites(itemID)),
        removeFromFavorites: (itemID) => dispatch(removeFromFavorites(itemID))
    }
}

export default connect(mapDispatchToProps)(Favorite)
