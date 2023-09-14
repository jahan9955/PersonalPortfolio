import React from 'react'
import src from "../../../assets/img/ss.jpg"
import showcasePhoto1 from "/img/showcase-photo1.jpg"
import src2 from "../../../assets/img/suneel.webp"
// import showcasePhoto1 from './img/showcase-photo1.jpg'
// import src from "./assets/img/company-img.jp/g"
// import src3 from "./assets/img/showcase-photo1.jpg"
export default function Banner() {
    return (
        <div className="py-4 px-8 flex flex-col min-h-screen max-w-4xl mx-auto">

            <section className='showcase'>
                <div className="container">
                    <h1 className='lg-heading text-dark text-center'>My Favorite Personalities</h1>
                    <div className="row row1">
                        <div className="img-box">
                            <img src={src} alt="Image Description" />

                        </div>
                        <div className="text-box">
                            <h2 className='lg-heading text-black'>Sikander Hussain Khan</h2>
                            <p className='text-gray text-xs'>Sikander Hussain Khan is the feaudal lord, he was Town Chairman in 2004-2008 after that he countinue his political career. He contest Independent Election in 2015 and won with highest margin.</p>

                        </div>
                    </div>
                    <div className="row row1">
                        <div className="img-box">
                            <img src={showcasePhoto1} alt="Image Description" />

                        </div>
                        <div className="text-box">
                            <h2 className='lg-heading text-black'>Imran Khan</h2>
                            <p className='text-gray text-xs'>Imran Ahmad Khan Niazi is a Pakistani former cricketer and politician who served as the 22nd prime minister of Pakistan from August 2018 until April 2022.</p>
                            <p className='text-gray text-xs'>Imran Khan, in full Imran Ahmad Khan Niazi, (born October 5, 1952, Lahore, Pakistan), Pakistani cricket player, politician, philanthropist, and prime minister of Pakistan (2018–22) who became a national hero by leading Pakistan’s national team to a Cricket World Cup victory in 1992 and later entered politics as a critic of government corruption in Pakistan.</p>
                        </div>
                    </div>

                    <div className="row row1">

                        <div className="text-box">
                            <h2 className='lg-heading text-black'>Suneel Sarfraz Munj</h2>
                            <p className='text-gray text-xs'>Suneel Sarfraz Munj is the Co-Founder of PakWheels, Pakistan's number one automobile website.</p>
                            <p className='text-gray text-xs'>Suneel Sarfraz Munj is graduate of LUMS and Co Founder of Pak Wheels. He is also Director of PKGMC (Pakistan General Merchandising Company),it is an import house whereby we deal in import, clearing and forwarding services of consumer goods including electronics, garments, gift items and other retail products . He is also known as Doctor of Automotive Industry.</p>

                        </div>
                        <div className="img-box">
                            <img src={src2} alt="Image Description" />

                        </div>
                    </div>
                </div>
            </section>
            {/* <Header />
        <Outlet /> */}
        </div>
    )
}
