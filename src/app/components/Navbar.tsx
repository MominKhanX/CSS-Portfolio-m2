"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="Actv">
        <img src="/Images/Sphere.png" alt="" className="sphere"/>
        <Link href="/" className="logo">
          Portfolio
        </Link>

        <TiThMenu id="menu-icon" onClick={toggleMenu} />

        <nav className={isMenuOpen ? "open" : ""}>
          <Link href="/">Home</Link>
          <Link href="/Services">Services</Link>
          <Link href="/Resume">Resume</Link>
          <Link href="/Portfolio">Portfolio</Link>
          <Link href="/Contact">Contact</Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
