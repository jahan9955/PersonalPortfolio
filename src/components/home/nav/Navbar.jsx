import React from 'react'

export default function Navbar() {
    return (
        <div>
            <header className='header'>
                <nav className='navbar'>
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
                <div className="header-content">
                    <h1 className='lg-heading text-light main-heading'>About Me</h1>
                    <p className='text-light'>This page may contain content related to MY personal life details like My hobbies, skills, expertise, ambitions, and profession, among other things.</p>

                </div>
            </header>
        </div>
    )
}
