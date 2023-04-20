import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/Layout";
import { motion } from "framer-motion"
2
export default function App({ Component, pageProps }: AppProps) {

    return (

        <Layout>

            <motion.div
                initial = {{opacity: 0, y: 5}}
                animate={{opacity:1, y: 0 }}
                transition={{  duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01] }}
            >
            <Component {...pageProps} />

            </motion.div>
        </Layout>
    )
}
