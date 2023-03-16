import Head from 'next/head'
import Image from 'next/image'
import {Abel, Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/Navbar";
import hero from "@/components/Hero";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import CCHome from "@/components/CCHome";
import Contact from "@/components/Contact";
import Grievance from "@/components/Grievance";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <h1 className={"text-4xl p-6 font-black"}>Hi there</h1>
      <div >
        <Hero />
        <AboutUs/>
        <CCHome/>
        <Contact/>
        <Grievance/>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

      </div>
  )
}
