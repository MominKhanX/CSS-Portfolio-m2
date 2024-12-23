'use client'

import { useEffect } from 'react'
import { FaHtml5, FaReact, FaRoad, FaFigma, FaTools, FaRegUserCircle } from 'react-icons/fa'
import { FaGraduationCap } from 'react-icons/fa6'
import { GiPortal } from 'react-icons/gi'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'

const page = () => {
  useEffect(() => {
    const resumeBtns = document.querySelectorAll<HTMLButtonElement>('.resume-btn');
    const resumeDetails = document.querySelectorAll<HTMLDivElement>('.resume-detail');

    resumeBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        resumeBtns.forEach(btn => btn.classList.remove('Actv'));
        btn.classList.add('Actv');

        resumeDetails.forEach(detail => detail.classList.remove('Actv'));
        if (resumeDetails[idx]) {
          resumeDetails[idx].classList.add('Actv');
        }
      });
    });

    // Cleanup function
    return () => {
      resumeBtns.forEach(btn => {
        const clone = btn.cloneNode(true) as HTMLButtonElement;
        btn.replaceWith(clone);
      });
    };
  }, []);

  return (
    <div>
      <section className="resume">
          <div className="resume-container">
            <div className="resume-box">
              <h2>How I Turn Ideas into Impact<span className="Portal"><GiPortal /></span></h2>
              <p className="desc">I transform creative ideas into impactful digital solutions that enhance user experiences and drive results.</p>
              <button className="resume-btn Actv">Experience</button>
              <button className="resume-btn">Education</button>
              <button className="resume-btn">Skills</button>
              <button className="resume-btn">About Me</button>
            </div>

            <div className="resume-box">

              <div className="resume-detail experience Actv">
                <h2 className="heading">My <span>Experience</span> <FaRoad className="EESAIcons"/></h2>
                <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nobis veritatis tempora quam unde consequuntur voluptatem possimus aspernatur ex quo!</p>
                <div className="resume-list">
                    <div className="resume-item">
                        <p className="year">2023 - Present</p>
                        <h3>Front-end Developer</h3>
                        <p className="company">10 Pearls</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas?</p>
                    </div>

                    <div className="resume-item">
                        <p className="year">2022 - 2023</p>
                        <h3>Front-end Developer</h3>
                        <p className="company">Xyz Technologies.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas?</p>
                    </div>

                    <div className="resume-item">
                        <p className="year">2021 - 2022</p>
                        <h3>Web Developer</h3>
                        <p className="company">123 Pvt Ltd.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas?</p>
                    </div>

                    <div className="resume-item">
                        <p className="year">2020 - 2021</p>
                        <h3>Web Developer</h3>
                        <p className="company">Random Tech.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas?</p>
                    </div>

                    <div className="resume-item">
                        <p className="year">2019 - 2020</p>
                        <h3>Front-end Developer</h3>
                        <p className="company">Nova Industries.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas?</p>
                    </div>

                    <div className="resume-item">
                        <p className="year">2018 - 2019</p>
                        <h3>Junior Developer</h3>
                        <p className="company">Xyz Innovations.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas?</p>
                    </div>

                </div>
              </div>

              <div className="resume-detail education">
                <h2 className="heading">My <span>Education</span>  <FaGraduationCap className="EESAIcons"/></h2>
                <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nobis veritatis tempora quam unde consequuntur voluptatem possimus aspernatur ex quo!</p>
                <div className="resume-list">

                <div className="resume-item">
                    <p className="year">2024 - Present</p>
                    <h3>Certified Agentic and Robotic AI Engineer.</h3>
                    <p className="company">PIAIC</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id!</p>
                  </div>

                  <div className="resume-item">
                    <p className="year">2023</p>
                    <h3>Certified cloud applied Generative AI Engineering.</h3>
                    <p className="company">Governor House Sindh</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id!</p>
                  </div>

                  <div className="resume-item">
                    <p className="year">2021 - 2022</p>
                    <h3>Certified App Development</h3>
                    <p className="company">XYZ institute.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id!</p>
                  </div>

                  <div className="resume-item">
                    <p className="year">2020</p>
                    <h3>Web Development Bootcamp</h3>
                    <p className="company">ABC Services.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id!</p>
                  </div>

                  <div className="resume-item">
                    <p className="year">2017 - 2018</p>
                    <h3>Web Development Bootcamp</h3>
                    <p className="company">123 Institute.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, id!</p>
                  </div>

                </div>
              </div>

              <div className="resume-detail skills">
                <h2 className="heading">My <span>Skills</span> <FaTools className="EESAIcons"/></h2>
                <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nobis veritatis tempora quam unde consequuntur voluptatem possimus aspernatur ex quo!</p>
                <div className="resume-list">
                  <div className="resume-item">
                    <FaHtml5 className="SKL"/>
                    <span>HTML5</span>
                  </div>
                  <div className="resume-item">
                    <IoLogoCss3 className="SKL"/>
                    <span>CSS3</span>
                  </div>
                  <div className="resume-item">
                    <SiTypescript className="SKL"/>
                    <span>TypeScript</span>
                  </div>
                  <div className="resume-item">
                    <IoLogoJavascript className="SKL"/>
                    <span>JavaScript</span>
                  </div>
                  <div className="resume-item">
                    <RiNextjsFill className="SKL"/>
                    <span>Next.js</span>
                  </div>
                  <div className="resume-item">
                    <RiTailwindCssFill className="SKL"/>
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="resume-item">
                    <FaReact className="SKL"/>
                    <span>React.js</span>
                  </div>
                  <div className="resume-item">
                    <FaFigma className="SKL"/>
                    <span>Figma</span>
                  </div>
                </div>
              </div>

              <div className="resume-detail about">
                <h2 className="heading">About <span>Me</span> <FaRegUserCircle className="EESAIcons"/></h2>
                <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nobis veritatis tempora quam unde consequuntur voluptatem possimus aspernatur ex quo!</p>
                <div className="resume-list">

                  <div className="resume-item">
                    <p>Name: <span>Momin</span></p>
                  </div>
                  <div className="resume-item">
                    <p>Gender: <span>Male</span></p>
                  </div>
                  <div className="resume-item">
                    <p>Age: <span>14 Y/O</span></p>
                  </div>
                  <div className="resume-item">
                    <p>City: <span>Karachi</span></p>
                  </div>
                  <div className="resume-item">
                    <p>Nationality: <span>Pakistan</span></p>
                  </div>
                  <div className="resume-item">
                    <p>Experience: <span>1 Year</span></p>
                  </div>
                  <div className="resume-item">
                    <p>Freelance: <span>Available</span></p>
                  </div>
                  <div className="resume-item">
                    <p>Phone: <span>+92 319-6987355</span></p>
                  </div>
                  <div className="resume-item">
                    <p>Languages: <span>Urdu, English</span></p>
                  </div>
                  <div className="resume-item">
                    <p>Email: <span>momin.khan.khi23@gmail.com</span></p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>
    </div>
  )
}

export default page
