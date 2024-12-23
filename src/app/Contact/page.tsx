import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'

const page = () => {
  return (
    <div>
      <section className="contact">
          <div className="contact-container">
            <div className="contact-box">
              <h2>Let&apos;s Work Together!</h2>
              <p className="desc">Let&apos;s work together to transform your ideas into reality. Whether you need a stunning website, a seamless user experience, or innovative solutions, I&apos;m here to bring your vision to life with precision and creativity.</p>
              <div className="contact-detail">
                <FaPhoneAlt className="cntct"/>
                <div className="detail">
                  <p>Phone:</p>
                  <p>+92 319-6987355</p>
                </div>
              </div>
              <div className="contact-detail">
                <FaEnvelope className="cntct"/>
                <div className="detail">
                  <p>Email:</p>
                  <p>momin.khan.khi23@gmail.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <FaMapLocationDot className="cntct"/>
                <div className="detail">
                  <p>Address:</p>
                  <p>North Karachi, Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="contact-box">
              <form action="">
                  <h2 className="heading">Contact <span>Me!</span></h2>
                  <div className="field-box">
                    <input type="text" placeholder="First Name" required/>
                    <input type="text" placeholder="Last Name (Optional)"/>
                    <input type="number" placeholder="Phone Number" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea name="" id="" placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </section>
    </div>
  )
}

export default page
