import React from 'react'
import Navbar from '../home/nav/Navbar'

export default function About() {
    return (
        <div>
            <nav className='navbar bg-dark'>
                <div className="container">
                    <h1 className='logo lg-heading text-light'>WT</h1>
                    <ul className='nav-items'>
                        <li className="nav-item"><a href="./">Home</a></li>
                        <li className="nav-item"><a href="./personality">favorite Personalities</a></li>
                        <li className="nav-item"><a href="./city">favorite City</a></li>
                        <li className="nav-item"><a href="./tour">favorite Tour Spots</a></li>
                        <li className="nav-item"><a href="./contact">Contact us</a></li>
                    </ul>
                </div>
            </nav>
            <section className="about">
                <div className="container">
                    <h2 className='lg-heading text-black about-heading'>About Us</h2>
                    <p className="text-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur, eum veritatis minima tempore laborum ad aspernatur quod itaque. Nostrum.</p>
                    <div className="about-wrapper">
                        <div className="left">
                            <ul>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="counts">
                        <div className="count-item count-item1">
                            <span>2500</span>
                            <p>Travelled</p>
                        </div>
                        <div className="count-item count-item2">
                            <span>500</span>
                            <p>Places</p>
                        </div>
                        <div className="count-item count-item3">
                            <span>400</span>
                            <p>Guide</p>
                        </div>
                        <div className="count-item count-item4">
                            <span>20</span>
                            <p>Sport</p>
                        </div>
                    </div>
                    <div className="cta-banner">
                        <div className="cta-banner-left">
                            <p className="cta-line">What are you waiting for, reach us right now.</p>
                        </div>
                        <div className="cta-banner-right">
                            <a href="contact.html" className='btn-cta'>Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
