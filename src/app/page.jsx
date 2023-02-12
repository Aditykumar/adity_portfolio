import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from '@/component/header'
import HomePage from '@/component/home'
import Skill from '@/component/skill'
import Education from '@/component/education'
import Experience from '@/component/experience'
import Project from '@/component/project'
import Achievements from '@/component/achievements'
import Footer from '@/component/footer'
import About from '@/component/about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
   
    <main>
    <HomePage/>
    <About/>
    <Skill/>
    <Education/>
    <Experience/>
    <Project/>
    <Achievements/>
    </main>
    <Footer/>
    </>
  )
}
