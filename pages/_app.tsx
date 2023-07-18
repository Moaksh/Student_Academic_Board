import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/Layout";
import { motion } from "framer-motion"
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

function Loading() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url: string) => (url === router.asPath) && setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    return loading && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>

    )
}
export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    console.log(router);

    if(router.pathname === '/404') return <Component {...pageProps} />;


    return (
        <>
        <Loading/>
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
        </>
    )
}
