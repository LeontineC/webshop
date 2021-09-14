import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Favorite from './Favorite'


const Favorites = ({favorites}) => {
 
     
     
    return (
        <div>
            {favorites.map((item) =>
                    <Favorite key={item.id} item={item} />
                )}
        </div>
    )
}

// map state to props -> get favorites from redux state (see cart component)

// Move this to individual favorite item component
const mapStateToProps = (state) => {
    return {
        favorites: state.shop.favorites

    }
}

export default connect(mapStateToProps)(Favorites)


