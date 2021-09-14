import React from 'react'
import './Homepage.css'

const Homepage = () => {

    window.onload = function () {

        document.documentElement.classList.add('once');


    };
    return (
        <>
            <div className='homepage'>
                <h1 className='letters'>
                    <span>T</span>
                    <span>H</span>
                    <span>E</span>
                    &nbsp;
                    <span>N</span>
                    <span>A</span>
                    <span>K</span>
                    <span>E</span>
                    <span>D</span>
                    &nbsp;
                    <span>E</span>
                    <span>G</span>
                    <span>G</span>
                </h1>

                <div className='eggHome'>
                    <img src='./egg.png' alt='egg' />
                    <img src='./egg.png' alt='egg' />
                    <img src='./egg.png' alt='egg' />
                    <img src='./egg.png' alt='egg' />
                </div>

                <div className='wordsHome'>
                    <h2>eggwarmers for your eggs, 100% wool, from the isle of Shetland, lovingly knitted</h2>
                </div>

            </div>
        </>
    )
}

export default Homepage

