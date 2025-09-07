import { FlipWords } from "./Flipword"
import { motion } from "framer-motion";
const words=["Secure", "Modern", "Scalable"];

const Robosectiontext = () => {
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
        {/* main text for desktop view */}
        <div className=' flex-col hidden md:flex c-space'>
            <motion.h1 
            initial={{opacity: 0, x: -50}}
            animate={{ opacity: 1, x: 0}}
            transition={{delay: 1 }}
            className="text-4xl font-medium ">
            Hi i'm Ridhin</motion.h1>
            <div className="flex flex-col items-start">
               <motion.p initial={{opacity: 0, x: -50}}
            animate={{ opacity: 1, x: 0}}
            transition={{delay: 1.2 }} className="text-5xl font-medium text-neutral-300">A Developer Dedicated to Crafting </motion.p >
               <motion.div><FlipWords words={words} className="font-black text-white text-7xl"/></motion.div>
               <motion.p className="text-neutral-300 font-medium text-2xl">Smart Solutions</motion.p>
            </div>
            </div>
        {/* main text for mobile view */}
        <div className="flex flex-col space-y-6 md:hidden">
            <motion.p  className="text-4xl font-medium ">Hi, i'm Ridhin </motion.p >
            <div>
                <motion.p  className="text-5xl font-black text-neutral-300">Building</motion.p >
                <motion.div>
                    <FlipWords words={words} className="font-bold text-white text-7xl"/>
                </motion.div>
                <motion.p  className="text-4xl font-black text-neutral-300">Smart Solutions</motion.p >
            </div>
        </div>
    </div>
  )
}

export default Robosectiontext