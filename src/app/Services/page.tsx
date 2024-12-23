import Link from 'next/link'
import React from 'react'
import { FaCode, FaArrowLeft, FaPalette } from 'react-icons/fa'
import { MdOutlineWeb } from 'react-icons/md'
import { SiAffinitydesigner } from 'react-icons/si'

const Services = () => {
  return (
    <div>
      <section className="services">
          <h2 className="heading">My <span>Services</span></h2>
          <div className="services-container">
            <div className="services-box">
              <div className="icon">
                <FaCode className="IC" />
                <Link href="#"><FaArrowLeft className="ico" /></Link>
              </div>
              <h3>Web Development</h3>
              <p>Crafting dynamic, responsive websites that offer seamless functionality, optimized performance, and visually appealing user interfaces.</p>
            </div>

            <div className="services-box">
              <div className="icon">
                <FaPalette className="IC" />
                <Link href="#"><FaArrowLeft className="ico" /></Link>
              </div>
              <h3>UI/UX Design</h3>
              <p>Designing intuitive, user-friendly interfaces with stunning visuals, enhancing user experiences for web and mobile applications.</p>
            </div>

            <div className="services-box">
              <div className="icon">
                <MdOutlineWeb className="IC" />
                <Link href="#"><FaArrowLeft className="ico" /></Link>
              </div>
              <h3>Front-end Development</h3>
              <p>Building dynamic and engaging front-end experiences with clean, efficient code to ensure responsiveness, usability, and seamless interaction across devices.</p>
            </div>

            <div className="services-box">
              <div className="icon">
                <SiAffinitydesigner className="IC" />
                <Link href="#"><FaArrowLeft className="ico" /></Link>
              </div>
              <h3>Web Designing</h3>
              <p>Creating visually appealing and user-friendly web designs that combine aesthetics with functionality, ensuring a smooth and engaging user experience.</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Services
