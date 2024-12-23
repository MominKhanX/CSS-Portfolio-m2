'use client'

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
    const pathname = usePathname();
    return (
      <>
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="animate-presence">
                    <Stairs />
                </div>

                <motion.div 
                className="motion-div"
                initial={{opacity: 1}}
                animate={{
                    opacity: 0,
                    transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
                }}
                />
            </div>
        </AnimatePresence>
      </>
  )
}

export default StairTransition;
