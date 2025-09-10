import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { FaCode, FaRocket, FaHeart, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-scroll'

const MenuItem = ({ children, to = '/', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="group relative cursor-pointer text-white/70 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/[0.05]"
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.05 }}
        />
      </Link>
    </motion.div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-background/50 backdrop-blur-lg border-b border-white/5'
      }`}
    >
      <div className="h-20 flex items-center justify-between max-w-7xl mx-auto px-6">
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group cursor-pointer"
        >
          <div className="relative">
            <motion.div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              MA
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-md"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-2">
            <MenuItem to="home" delay={0.3}>Home</MenuItem>
            <MenuItem to="about" delay={0.4}>About</MenuItem>
            <MenuItem to="skills" delay={0.5}>Skills</MenuItem>
            <MenuItem to="experience" delay={0.6}>Experience</MenuItem>
            <MenuItem to="contact" delay={0.7}>Contact</MenuItem>
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden md:flex items-center gap-4"
        >
          {/* GitHub Button */}
          <motion.a
            href="https://github.com/AliCodes1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-5 py-2.5 rounded-full border border-white/20 text-white font-medium hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2 text-sm">
              <FaGithub className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              GitHub
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-full border border-transparent bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100"
              animate={{
                background: [
                  'linear-gradient(45deg, #8b5cf6, #ec4899)',
                  'linear-gradient(45deg, #ec4899, #8b5cf6)',
                  'linear-gradient(45deg, #8b5cf6, #ec4899)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.a>

          {/* LinkedIn Button */}
          <motion.a
            href="https://www.linkedin.com/in/muhammad-ali-052908152/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold overflow-hidden"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 15px 35px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaLinkedinIn className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              Let's Talk
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Animated shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            
            {/* Pulsing glow */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="group relative flex md:hidden w-14 h-14 rounded-2xl bg-white/[0.08] border border-white/[0.1] items-center justify-center text-white hover:bg-white/[0.12] transition-all duration-300 overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(139, 92, 246, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle Navigation"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={isOpen ? { scale: 1.2 } : { scale: 1 }}
          />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative z-10"
              >
                <HiX size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative z-10"
              >
                <HiMenuAlt4 size={24} />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-primary/30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-8 space-y-6">
              <MenuItem to="home" delay={0.1}>Home</MenuItem>
              <MenuItem to="about" delay={0.2}>About</MenuItem>
              <MenuItem to="skills" delay={0.3}>Skills</MenuItem>
              <MenuItem to="experience" delay={0.4}>Experience</MenuItem>
              <MenuItem to="contact" delay={0.5}>Contact</MenuItem>
              
              {/* Mobile CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-6 space-y-4"
              >
                {/* GitHub Button */}
                <motion.a
                  href="https://github.com/AliCodes1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  View My Work
                </motion.a>
                
                {/* LinkedIn Button */}
                <motion.a
                  href="https://www.linkedin.com/in/muhammad-ali-052908152/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full px-6 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaLinkedinIn className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Let's Connect
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar 