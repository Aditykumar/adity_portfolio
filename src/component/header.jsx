"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import styles from '../styles/header.module.css'


const Header = () => {
  const [mobNav, setMobNav] = useState(false);

  const mobNavFnc = () => {
    if (mobNav == true) {
      setMobNav(false)

      document.body.style.overflow = "auto";

    }
    else {
      setMobNav(true)

      document.body.style.overflow = "hidden";

    }
    console.log("first")

  }


  return (
    <>
      <div className={styles.mobHeader}>
      <Link href="#" className={styles.navTitle}>Adity Kumar</Link>

        <div onClick={mobNavFnc} className={styles.navMob}>  </div>
      </div>
      <div className={mobNav&&styles.blankBg}>
      {mobNav&&<div className={styles.OutSideBox} onClick={mobNavFnc} ></div>}

        <div className={mobNav ? styles.mobNavShow + " " + styles.nav : styles.nav}>

          <div onClick={mobNavFnc} className={mobNav ? styles.close : styles.closeIcon + " " + styles.close}></div>
          <div className={styles.navLinks} >
            <a href="#home" onClick={mobNav && mobNavFnc} className={styles.navLinksItem}>Home</a>
            <a href="#about" onClick={mobNav && mobNavFnc} className={styles.navLinksItem}>About</a>
            <a href="#skills" onClick={mobNav && mobNavFnc} className={styles.navLinksItem}>Skills</a>
            <a href="#experience" onClick={mobNav && mobNavFnc} className={styles.navLinksItem}>Experience</a>
            <a href="#projects" onClick={mobNav && mobNavFnc} className={styles.navLinksItem}>Projects</a>
            <a href="#achievements" onClick={mobNav && mobNavFnc} className={styles.navLinksItem}>Achievements</a>
            <a href="#contact" onClick={mobNav && mobNavFnc} className={styles.navLinksItem}>Contact</a>
          </div>

        </div>
      </div>
    </>

  )
}

export default Header