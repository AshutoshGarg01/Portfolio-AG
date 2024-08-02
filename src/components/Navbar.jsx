import React from 'react'
import logo from "../assets/ag.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
})

const Navbar = () => {
  return (
    <nav className=' mb-10 flex items-center justify-between py-6'>
      <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className='flex flex-shrink-0 items-center'>
        <img className=' mx-2 w-20' src={logo} alt="logo" />
      </motion.div>
      <div className=" m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  )
}

export default Navbar
