import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { Link } from 'react-scroll'

const MenuItem = ({ children, to = '/' }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="cursor-pointer text-white/70 hover:text-primary transition-colors duration-200"
    >
      {children}
    </Link>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full z-50 bg-background/75 backdrop-blur-lg border-b border-white/20">
      <div className="h-16 flex items-center justify-between max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-2xl font-bold text-primary">MA</span>
        </motion.div>

        <div className="hidden md:flex items-center">
          <div className="flex space-x-8">
            <MenuItem to="home">Home</MenuItem>
            <MenuItem to="about">About</MenuItem>
            <MenuItem to="skills">Skills</MenuItem>
            <MenuItem to="experience">Experience</MenuItem>
            <MenuItem to="contact">Contact</MenuItem>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="flex md:hidden text-white hover:text-primary transition-colors"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
        </button>
      </div>

      <motion.div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-4`}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: -4 },
        }}
      >
        <div className="flex flex-col space-y-4 px-4">
          <MenuItem to="home">Home</MenuItem>
          <MenuItem to="about">About</MenuItem>
          <MenuItem to="skills">Skills</MenuItem>
          <MenuItem to="experience">Experience</MenuItem>
          <MenuItem to="contact">Contact</MenuItem>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar 