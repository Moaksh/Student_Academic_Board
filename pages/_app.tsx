import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/Layout";
import { motion } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {

    return (
        <Layout>
            <motion.div
                initial = {{opacity: 0, y: 5}}
                animate={{opacity:1, y: 0 }}
                transition={{ ease: "linear", duration: 0.2 }}
            >
            <Component {...pageProps} />

            </motion.div>
        </Layout>
    )
}
