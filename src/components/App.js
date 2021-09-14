import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import Homepage from './Homepage'
import OurStory from './OurStory'
import ProductOverviewData from './ProductOverview/ProductOverviewData'
import Cart from './CartRelated/Cart'
import Dashboard from './FirebaseRelated/Dashboard'
import Signup from './FirebaseRelated/Signup'
import Login from './FirebaseRelated/Login'
import PasswordReset from './FirebaseRelated/PasswordReset'
import ProductDetail from './CartRelated/ProductDetail'
import Checkout from './Checkout'

import Footer from './Footer'
import { connect } from 'react-redux'
import './App.css'



function App({ detail }) {

  return (



    <Router>
      <div className='App'>
        <Navbar />
        <div className='contentSwitch'>
          <Switch>
            <Route exact path='/' component={Homepage}>
            </Route>
            <Route exact path='/ourstory' component={OurStory}>
            </Route>
            <Route exact path='/productoverview' component={ProductOverviewData}>
            </Route>
            <Route exact path='/cart' component={Cart}>
            </Route>
            <Route exact path='/dashboard' component={Dashboard}>
            </Route>
            <Route exact path='/login' component={Login}>
            </Route>
            <Route exact path='/signup' component={Signup}>
            </Route>
            <Route exact path='/passwordreset' component={PasswordReset}>
            </Route>
            <Route exact path='/checkout' component={Checkout}>
            </Route>
            
            {!detail ? (
              <Redirect to='/' component={Homepage} />
            ) : (
              <Route exact path="/productdetail/:id" component={ProductDetail} />
            )}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>

  )
}

const mapStateToProps = (state) => {
  return {
    detail: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App);