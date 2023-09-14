import React from 'react'

import Navbar from './nav/Navbar'

import Footer from './footer/Footer'
import Banner from './banner/banner'


export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      <div className="developer_skills" unique-script-id="w-w-dm-id">
        <div className="responsive-container-block bg">
          <p className="text-blk title">
            Hobbies
          </p>
          <p className="text-blk heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
          </p>
          <div className="responsive-container-block content">
            <div className="responsive-container-block card">
              <div className="responsive-container-block img">
              </div>
              <p className="text-blk desc">
                Photography
              </p>
              <p className="text-blk info">
                I love capturing moments with my camera and exploring the art of photography.
              </p>
            </div>
            <div className="responsive-container-block card">
              <div className="responsive-container-block img">
              </div>
              <p className="text-blk desc">
                Hiking
              </p>
              <p className="text-blk info">
                Exploring nature trails and mountains is one of my favorite ways to unwind.
              </p>
            </div>
            <div className="responsive-container-block card">
              <div className="responsive-container-block img">
              </div>
              <p className="text-blk desc">
                Reading
              </p>
              <p className="text-blk info">
                I'm an avid reader and enjoy getting lost in a good book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className='lg-heading text-dark text-center'>Skills</h1>
      <div className="skills_chart" unique-script-id="w-w-dm-id">
        <div className="responsive-container-block big-cont">
          <div className="responsive-container-block bg">
            <p className="text-blk title" id="w-c-s-fc_p-1-dm-id-2">
              Skills
            </p>

            <div className="responsive-container-block prog-cont">
              <div className="responsive-container-block prog">
                <p className="text-blk head">
                  Web Development:
                </p>
                <div className="responsive-container-block outer">
                  <div className="responsive-container-block inner i1" style={{ width: '80%' }} data-pg="70%">
                  </div>
                </div>
              </div>
              <div className="responsive-container-block prog">
                <p className="text-blk head">
                  Graphic Design
                </p>
                <div className="responsive-container-block outer">
                  <div className="responsive-container-block inner i1" style={{ width: '60%' }}>
                  </div>
                </div>
              </div>
              <div className="responsive-container-block prog">
                <p className="text-blk head">
                  Data Analysis
                </p>
                <div className="responsive-container-block outer">
                  <div className="responsive-container-block inner i2" style={{ width: '50%' }} data-pg="85%">
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <section className='showcase'>
          <div className="container">
            <h1 className='lg-heading text-dark text-center'>Ambition</h1>
            <h2 className=' text-black'>I'm passionate about [mention your ambitions here]. My goal is to [describe your ambitions and what you aim to achieve].</h2>
          </div>
        </section >
      </div>
      <Footer />
    </div>
  )
}
