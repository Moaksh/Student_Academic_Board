import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/Layout";
import {AnimatePresence, motion} from "framer-motion"
import NextNProgress from 'nextjs-progressbar';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress/>
            <Layout>


                <motion.div
                    initial = {{opacity: 0, y: 25}}
                    animate={{opacity:1, y: 0 }}
                    transition={{  duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01] }}
                >
                    <Component {...pageProps} />

                </motion.div>
            </Layout>
            <Analytics/>
        </>
    )
}
