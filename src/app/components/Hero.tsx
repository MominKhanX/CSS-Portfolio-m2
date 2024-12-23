import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedinIn, FaLocationArrow, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";


const Hero = () => {
  return (
    <div>
      <section className="home">
          <div className="home-detail">
            <h1>Momin Khan</h1>
            <h2>I&apos;m a {''}
              <span style={{ ['--i' as any]: 4 }} data-text="Web Developer">Web Developer</span>
              <span style={{ ['--i' as any]: 3 }} data-text="Front-End Developer">Front-End Developer</span>
              <span style={{ ['--i' as any]: 2 }} data-text="Web Designer">Web Designer</span>
              <span style={{ ['--i' as any]: 1 }} data-text="UI/UX Designer">UI/UX Designer</span>
            </h2>
            <p>Hi, I&apos;m a 14-Y/O junior front-end developer and UI designer from Karachi, Pakistan. I specialize in building aesthetically pleasing, user-friendly, and responsive web applications. I have experience working with HTML, CSS, TypeScript, and Next.js, focusing on crafting modern, interactive, and functional user interfaces.</p>
            <div className="btn-sci">
              <Link href="https://static-resume-m1.vercel.app/" target="_blank" className="btn">Check CV <FaLocationArrow className="CvArrow"/></Link>
              <div className="sci">
                <Link href="https://www.github.com" target="_blank"><FaGithub /></Link>
                <Link href="https://www.linkedin.com" target="_blank"><FaLinkedinIn /></Link>
                <Link href="https://www.twitter.com" target="_blank"><FaXTwitter /></Link>
                <Link href="https://www.youtube.com" target="_blank"><FaYoutube /></Link>
              </div>
            </div>
          </div>

          <div className="home-img">
            <div className="img-box">
              <div className="img-item">
                <img src="/Images/Me4.jpg" alt="Profile Pic" />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Hero;
