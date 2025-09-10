import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaTwitter, FaCode, FaRocket, FaHeart } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const SocialLink = ({ href, icon: Icon, label, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative w-14 h-14 rounded-full flex items-center justify-center bg-white/[0.08] hover:bg-primary/20 border border-white/[0.1] hover:border-primary/50 transition-all duration-500 overflow-hidden"
    whileHover={{ 
      y: -8, 
      scale: 1.1,
      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
    }}
    initial={{ opacity: 0, y: 30, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <Icon className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-300 relative z-10" aria-label={label} />
    <motion.div
      className="absolute inset-0 rounded-full border-2 border-primary/30"
      initial={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.2, opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
)

const FloatingElement = ({ children, delay = 0, duration = 4 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0, 1, 0.8, 1],
      y: [20, -10, 10, 0]
    }}
    transition={{ 
      duration, 
      delay, 
      repeat: Infinity, 
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
)

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center py-16 md:py-0 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-[120px]"
          style={{
            background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4)',
            opacity: 0.3
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full filter blur-[100px]"
          style={{
            background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
            opacity: 0.25
          }}
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 25, -15, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingElement key={i} delay={i * 0.2} duration={3 + Math.random() * 2}>
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-primary/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          </FloatingElement>
        ))}
      </div>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 pt-16 md:pt-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.1] backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCode className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-white/90">Software Engineer</span>
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block text-white">Hi, I'm</span>
                  <span className="block gradient-text text-glow">Muhammad Ali</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                  A passionate third year software engineering student at the University of Guelph.
                  I love creating innovative solutions, cycling adventures, and continuous learning.
                </p>
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex gap-6 justify-center lg:justify-start"
              >
                <SocialLink
                  href="https://github.com/AliCodes1"
                  icon={FaGithub}
                  label="GitHub"
                  delay={0.9}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/muhammad-ali-052908152/"
                  icon={FaLinkedinIn}
                  label="LinkedIn"
                  delay={1.0}
                />
                <SocialLink
                  href="https://x.com/muhammad_Ali_94"
                  icon={FaTwitter}
                  label="Twitter"
                  delay={1.1}
                />
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="https://github.com/AliCodes1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaRocket className="w-5 h-5" />
                    View My Work
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/muhammad-ali-052908152/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold text-lg hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <FaHeart className="w-5 h-5" />
                    Get In Touch
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Enhanced Profile Picture Section */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex justify-center"
            >
              <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
                {/* Multiple rotating rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border-2 border-dashed border-pink-500/30"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border-2 border-dashed border-cyan-500/30"
                />
                
                {/* Profile Picture with enhanced effects */}
                <div className="absolute inset-[8%] rounded-full overflow-hidden bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 backdrop-blur-sm">
                  <motion.img
                    src="/images/pfp.png"
                    alt="Muhammad Ali"
                    className="w-full h-full object-cover object-center rounded-full p-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Enhanced floating elements */}
                <motion.div
                  className="absolute top-4 right-8 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-8 left-4 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 shadow-lg"
                  animate={{ 
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 