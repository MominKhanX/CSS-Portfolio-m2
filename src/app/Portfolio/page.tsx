'use client'

import Link from 'next/link';
import { useEffect } from 'react'
import React from 'react';
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const page = () => {

  useEffect(() => {
    const arrowRight = document.querySelector<HTMLDivElement>('.portfolio-box .navigation .arrow-right');
    const arrowLeft = document.querySelector<HTMLDivElement>('.portfolio-box .navigation .arrow-left');

    let index = 0;
    const maxIndex = 3;

    const activePortfolio = () => {
      const imgSlide = document.querySelector<HTMLDivElement>('.portfolio-carousel .img-slide');
      const portfolioDetails = document.querySelectorAll<HTMLDivElement>('.portfolio-detail');

      if (imgSlide) {
        imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
      }

      portfolioDetails.forEach((detail) => detail.classList.remove('Actv'));
      if (portfolioDetails[index]) {
        portfolioDetails[index].classList.add('Actv');
      }
    };

    // Right Arrow Click
    arrowRight?.addEventListener('click', () => {
      if (index < maxIndex) {
        index++;
        arrowLeft?.classList.remove('disabled');
      }
      if (index === maxIndex) {
        arrowRight.classList.add('disabled');
      }
      activePortfolio();
    });

    // Left Arrow Click
    arrowLeft?.addEventListener('click', () => {
      if (index > 0) {
        index--;
        arrowRight?.classList.remove('disabled');
      }
      if (index === 0) {
        arrowLeft.classList.add('disabled');
      }
      activePortfolio();
    });


    return () => {
      arrowRight?.removeEventListener('click', () => { });
      arrowLeft?.removeEventListener('click', () => { });
    };
  }, []);



  return (
    <div>
      <section className="portfolio">
        <h2 className="heading">Latest <span>Projects</span></h2>
        <div className="portfolio-container">

          <div className="portfolio-box">
            <div className="portfolio-detail Actv">
              <p className="numb">01</p>
              <h3>E-Commerce Web Application</h3>
              <p>Next.js and Tailwind CSS power this sleek, responsive E-Commerce site, enhancing user experience with modern design.</p>
              <div className="tech">
                <p>Next.Js, Tailwind CSS</p>
              </div>
              <div className="live-project">
                <Link href="https://ui-ux-hackathon-design-q2.vercel.app/" target="_blank"><FaArrowLeft className="back-arrow" /><span>Live Project</span></Link>
              </div>
            </div>


            <div className="portfolio-detail">
              <p className="numb">02</p>
              <h3>The Coffee Club</h3>
              <p>The Coffee Club website, built with Next.js and Tailwind, offers a sleek, responsive, and user-friendly experience.</p>
              <div className="tech">
                <p>Next.Js, Tailwind CSS, Custom CSS</p>
              </div>
              <div className="live-project">
                <Link href="https://the-coffee-club-next-js.vercel.app/" target="_blank"><FaArrowLeft className="back-arrow" /><span>Live Project</span></Link>
              </div>
            </div>

            <div className="portfolio-detail">
              <p className="numb">03</p>
              <h3>Whitespace Figma Design</h3>
              <p>A Figma design brought to life with Next.js and Tailwind CSS, showcasing a sleek, visually stunning layout.</p>
              <div className="tech">
                <p>Next.Js, Tailwind CSS</p>
              </div>
              <div className="live-project">
                <Link href="https://homework-assignment3-whitespace.vercel.app/" target="_blank"><FaArrowLeft className="back-arrow" /><span>Live Project</span></Link>
              </div>
            </div>

            <div className="portfolio-detail">
              <p className="numb">04</p>
              <h3>Figma Design</h3>
              <p>A pixel-perfect Figma design meticulously implemented using Next.js and Tailwind CSS for flawless visual precision.</p>
              <div className="tech">
                <p>Next.Js, Tailwind CSS</p>
              </div>
              <div className="live-project">
                <Link href="https://homework-figma-design-2.vercel.app/" target="_blank"><FaArrowLeft className="back-arrow" /><span>Live Project</span></Link>
              </div>
            </div>
          </div>

          <div className="portfolio-box">
            <div className="portfolio-carousel">
              <div className="img-slide">

                <div className="img-item">
                  <img src="/Images/E-commerce-web.png" alt="" />
                </div>


                <div className="img-item">
                  <img src="/Images/TheCoffeeClub.png" alt="" />
                </div>

                <div className="img-item">
                  <img src="/Images/Whitespace.png" alt="" />
                </div>

                <div className="img-item">
                  <img src="/Images/Figma2.png" alt="" />
                </div>

              </div>
            </div>

            <div className="navigation">
              <button className="arrow-left disabled"><FaChevronLeft /></button>
              <button className="arrow-right"><FaChevronRight /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
