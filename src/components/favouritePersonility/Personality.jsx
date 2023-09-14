import React from 'react'
import Banner from '../home/banner/banner'
import Footer from '../home/footer/Footer'

function Personality() {
    return (
        <div> <nav className='navbar bg-dark'>
            <div className="container">
                <ul className='nav-items'>
                    <li className="nav-item"><a href="./">Home</a></li>
                    <li className="nav-item"><a href="./personality">favorite Personalities</a></li>
                    <li className="nav-item"><a href="./city">favorite City</a></li>
                    <li className="nav-item"><a href="./tour">favorite Tour Spots</a></li>
                    <li className="nav-item"><a href="./contact">Contact us</a></li>
                </ul>
                <h1 className='logo lg-heading text-light'>Favorite Personality</h1>
            </div>
        </nav>
            <Banner />
            <Footer />
        </div>
    )
}

export default Personality