import Head from 'next/head'
import Image from 'next/image'
import {Abel, Inter} from 'next/font/google'
import styles from '@/styles/nav.module.css'
import Navbar from "@/components/Navbar";
import hero from "@/components/Hero";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import CCHome from "@/components/CCHome";
import Contact from "@/components/Contact";
import Grievance from "@/components/Grievance";
import Back from "@/components/Back";
import Stat from "@/components/Stat";
import Special from "@/components/Special";
import { motion } from "framer-motion"
import Faq from "@/components/Faq";
const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
    // <h1 className={"text-4xl p-6 font-black"}>Hi there</h1>
      <div>
        <div className={"container"}>
            <Hero/>
            <Back/>
        </div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{once: true}}
            transition={{ ease: "easeInOut", duration: 1 }}
           >
        <AboutUs/>
        </motion.div>
          <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{once: true}}
              transition={{
                  delay:0.1,
                  duration: 1.5,
                  ease: [0, 0.71, 0.2, 1.01]
              }}
          >
          <Stat/>
          </motion.div>
        <CCHome/>
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{once: true}}
              transition={{ ease: "easeInOut", duration: 0.5 }}
          >
          <Special/>
          </motion.div>
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{once: true}}
              transition={{ ease: "easeInOut", duration: 0.5 }}
          >
        {/*<Contact/>*/}
          </motion.div>
        <Grievance/>
          <Faq/>

      </div>
  )
}
