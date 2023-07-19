import Link from "next/link";
import Fourofour from "@/components/Fourofour";
import Back from "@/components/Back";
import { motion } from "framer-motion";


export default function Home() {
    return(
        <div>
            <motion.div
                initial = {{opacity: 0, y: 25}}
                animate={{opacity:1, y: 0 }}
                transition={{  duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01] }}
            >
            <div >
                <Fourofour/>
            </div>
            </motion.div>
        </div>

    )
}