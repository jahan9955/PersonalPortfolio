import React from 'react'
import t1 from "../../assets/img/italy.webp";
import t2 from "../../assets/img/france.webp";
import t3 from "../../assets/img/netherland.webp";
import t4 from "../../assets/img/multan.webp";
import t5 from "../../assets/img/abbotabad.webp";
import t6 from "../../assets/img/swat.webp";
import Footer from '../home/footer/Footer';
export default function Fts() {
    return (
        <>
            <nav className='navbar bg-dark'>
                <div className="container">
                    <ul className='nav-items'>
                        <li className="nav-item"><a href="./">Home</a></li>
                        <li className="nav-item"><a href="./personality">favorite Personalities</a></li>
                        <li className="nav-item"><a href="./city">favorite City</a></li>
                        <li className="nav-item"><a href="./tour">favorite Tour Spots</a></li>
                        <li className="nav-item"><a href="./contact">Contact us</a></li>
                    </ul>
                    <h1 className='logo lg-heading text-light'>Favorite Tourist spots</h1>
                </div>
            </nav>
            <div className="py-4 px-8 flex flex-col min-h-screen max-w-4xl mx-auto">

                <section className='showcase'>
                    <div className="container">
                        <h1 className='lg-heading text-dark text-center'>My Favorite Places</h1>
                        <div className="row row1">
                            <div className="img-box">
                                <img src={t1} alt="Image Description" />

                            </div>
                            <div className="text-box">
                                <h2 className='lg-heading text-black'>The Colosseum in Rome, Italy</h2>
                                <p className='text-gray text-xs'>Topping off the list of most popular tourist attractions is the Colosseum which is no big surprise for those with it on their bucket list.</p>

                            </div>
                        </div>
                        <div className="row row1">
                            <div className="img-box">
                                <img src={t2} alt="Image Description" />

                            </div>
                            <div className="text-box">
                                <h2 className='lg-heading text-black'>The Louvre Museum in Paris, France</h2>
                                <p className='text-gray text-xs'>While known as one of the most impressive museums in the world, the Louvre was originally built as a fortress and later reconstructed to serve as a royal palace.</p>
                            </div>
                        </div>

                        <div className="row row1">

                            <div className="text-box">
                                <h2 className='lg-heading text-black'>Anne Frank House, Amsterdam, Netherlands</h2>
                                <p className='text-gray text-xs'>Even if you have never read The Diary of Anne Frank, you probably know that she and her family once live in the attic of a home in Amsterdam.</p>

                            </div>
                            <div className="img-box">
                                <img src={t3} alt="Image Description" />

                            </div>
                        </div>

                        <div className="row row1">

                            <div className="text-box">
                                <h2 className='lg-heading text-black'>Multan</h2>
                                <p className='text-gray text-xs'>Multan is the favorite spot of tourists who want to experience tradition, culture, and history all in one place. It is the 7th largest city in Pakistan, known for its historical sites and beautiful architecture. Due to an abundance of tombs in the city, Multan is also known as the "city of saints' among the masses.</p>

                            </div>
                            <div className="img-box">
                                <img src={t4} alt="Image Description" />

                            </div>
                        </div>
                        <div className="row row1">

                            <div className="text-box">
                                <h2 className='lg-heading text-black'>Abbottabad</h2>
                                <p className='text-gray text-xs'>Abbottabad is a beautiful city in KPK. It is also known as the "city of the pines''. The city is a hub for tourism due to its pleasant weather. There are thousands of people who visit this stunning place every year. Thandiani Mountain is the highest mountain in the Abbottabad district, which is surrounded by lovely, lush green mountains.</p>

                            </div>
                            <div className="img-box">
                                <img src={t5} alt="Image Description" />

                            </div>
                        </div>
                        <div className="row row1">

                            <div className="text-box">
                                <h2 className='lg-heading text-black'>Swat</h2>
                                <p className='text-gray text-xs'>The Swat Valley is undoubtedly one of the most beautiful tourist destinations in the valleys of northern Pakistan. Swat Valley is known as the 'Switzerland' of Pakistan because of its natural wonders, snow-capped mountains, beautiful scenery, natural wildlife, and breathtaking diverse landscape.</p>

                            </div>
                            <div className="img-box">
                                <img src={t6} alt="Image Description" />

                            </div>
                        </div>
                    </div>
                </section >
                <Footer />
                {/* <Header />
        <Outlet /> */}
            </div >
        </>



    )
}
