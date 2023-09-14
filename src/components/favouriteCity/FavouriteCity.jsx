import React from 'react'
import Navbar from '../home/nav/Navbar'
import './CityStyles.css'
import Footer from '../home/footer/Footer'
export default function FavouriteCity() {
    return (
        <div>
            <nav className='navbar bg-dark'>
                <div className="container">
                    <ul className='nav-items'>
                        <li className="nav-item"><a href="./">Home</a></li>
                        <li className="nav-item"><a href="./personality">favorite Personalities</a></li>
                        <li className="nav-item"><a href="./city">favorite City</a></li>
                        <li className="nav-item"><a href="./tour">favorite Tour Spots</a></li>
                        <li className="nav-item"><a href="./contact">Contact us</a></li>
                    </ul>
                    <h1 className='logo lg-heading text-light'>Favorite Tourist City</h1>
                </div>
            </nav>
            <section className='section'>
                <h1>Sargodha</h1>
                <div className="content">
                    <p>
                        Sargodha is a city and capital of Sargodha Division, located in Punjab province, Pakistan. It is Pakistan's 12th largest city by population and one of the fastest-growing cities of the country.Sargodha is also known as the City of Eagles.
                    </p>

                </div>
                <div className="img">

                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dQc7s9FDcU8?si=xq65Dbx5zQbWy4IF" // Replace VIDEO_ID_HERE with your YouTube video's ID
                        title="YouTube Video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>

                </div>

            </section>
            <section className='section' style={{ marginTop: 50 }}>
                <h1>Islamabad</h1>
                <div className="content">
                    <p>
                        Islamabad is the Capital and tenth largest city of Pakistan, having 1.5 million population. Pakistan's new Capital city nestles against the backdrop of the Margalla Hills at the northern end of the Pothowar Plateau that is regarded to be one of the earliest sites of human settlement in Asia.
                    </p>
                    <a href="">Learn more</a>
                </div>
                <div className="img">

                    <div className="img">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/p9HlzrvTU2w?si=0nRSyaikr80eOX-f" // Replace VIDEO_ID_HERE with your YouTube video's ID
                            title="YouTube Video"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}
