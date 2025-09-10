import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope, FaRocket, FaHeart, FaStar } from 'react-icons/fa'
import PropTypes from 'prop-types'

const SocialButton = ({ icon: Icon, label, href, delay = 0, gradient = "from-purple-500 to-pink-500" }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative floating-card p-6 text-center hover:scale-105 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
      }}
    >
      {/* Gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />
      
      {/* Icon */}
      <motion.div 
        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center`}
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      
      {/* Label */}
      <span className="text-white font-semibold text-lg group-hover:text-primary transition-colors duration-300">
        {label}
      </span>
      
      {/* Hover particles */}
      <motion.div
        className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary/60"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
    </motion.a>
  )
}

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.1] backdrop-blur-sm mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaRocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/90">Let&apos;s Connect</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">Get In</span>{" "}
            <span className="gradient-text">Touch</span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to collaborate on something amazing? I&apos;m always excited to discuss 
            new opportunities, innovative projects, or just have a friendly chat about technology.
          </motion.p>
        </motion.div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-16"
        >
          <div className="gradient-border">
            <div className="gradient-border-content">
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FaStar className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I&apos;d love to hear from you. Let&apos;s create something incredible together!
              </p>
              
              {/* CTA Buttons Container */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                {/* Primary CTA Button */}
                <motion.a
                  href="https://www.linkedin.com/in/muhammad-ali-052908152/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg overflow-hidden"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaHeart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Let&apos;s Connect
                  </span>
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  
                  {/* Pulsing glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30"
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
                
                {/* Secondary CTA Button */}
                <motion.a
                  href="mailto:goldenmaster324@gmail.com"
                  className="group relative inline-block px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    Send Email
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <SocialButton
            icon={FaLinkedinIn}
            label="LinkedIn"
            href="https://www.linkedin.com/in/muhammad-ali-052908152/"
            delay={0.1}
            gradient="from-blue-500 to-cyan-500"
          />
          <SocialButton
            icon={FaGithub}
            label="GitHub"
            href="https://github.com/AliCodes1"
            delay={0.2}
            gradient="from-gray-500 to-gray-700"
          />
          <SocialButton
            icon={FaTwitter}
            label="Twitter"
            href="https://x.com/muhammad_Ali_94"
            delay={0.3}
            gradient="from-sky-500 to-blue-500"
          />
        </motion.div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
      <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
    </section>
  )
}

// PropTypes
SocialButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  delay: PropTypes.number,
  gradient: PropTypes.string
}

export default Contact 