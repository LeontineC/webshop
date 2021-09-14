import React from 'react'
import './Footer.css'


const Footer = () => {
    return (
        <>
            <div className='footer'>
                <hr className='horizontal' />
                <div className='footerContainer'>
                    <div className='row'>
                        <div className='column'>
                            <p>Store Policy</p>
                            <ul className='list'>
                                <a href='faq'><li className='policy'>FAQ</li></a>
                                <a href='orders'><li className='policy'>Orders</li></a>
                                <a href='returns'><li className='policy'>Returns</li></a>
                            </ul>
                        </div>
                        <div className='column'>
                            <p>Follow Us</p>
                            <ul className='list'>
                                <a href='facebook'><li><i className="ri-facebook-circle-line icons"></i></li></a>
                                <a href='insta'><li><i className="ri-instagram-line icons"></i></li></a>
                                <a href='twitter'><li><i className="ri-twitter-line icons"></i></li></a>
                                <a href='whatsapp'><li><i className="ri-whatsapp-line icons"></i></li></a>
                            </ul>
                        </div>
                        <div className='column'>
                            <p>Contact Us</p>
                            <ul className='list'>
                                <li>thenakedegg@mail.com</li>
                                <li>06-690690009</li>
                            </ul>
                        </div>

                        <div className='column'>
                            <p>designed by LeonC</p>
                            <ul className='list'>
                                <li>&copy;TheNakedEgg {new Date().getFullYear()}</li>
                                
                            </ul>
                        </div>

                    </div>
                    <hr className='horizontal' />
                    
                </div>
            </div>


        </>
    )
}

export default Footer
