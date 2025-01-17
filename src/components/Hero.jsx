import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-primary hover:scale-110 transition-all duration-300"
    whileHover={{ y: -3 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <Icon className="w-5 h-5 text-white" aria-label={label} />
  </motion.a>
)

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center py-16 md:py-0">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full filter blur-[100px] animate-pulse -z-20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/30 rounded-full filter blur-[100px] animate-pulse -z-20"
      />

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 pt-16 md:pt-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                <h2 className="text-lg md:text-xl text-primary font-medium mb-2">Welcome to my portfolio</h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Hi, I'm{" "}
                  <span className="text-primary">Muhammad Ali</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80">
                  A third year software engineering student at the University of Guelph.
                  I like to code, bike, and learn new things.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-4 justify-center lg:justify-start"
              >
                <SocialLink
                  href="https://github.com/AliCodes1"
                  icon={FaGithub}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/muhammad-ali-052908152/"
                  icon={FaLinkedinIn}
                  label="LinkedIn"
                />
                <SocialLink
                  href="https://x.com/muhammad_Ali_94"
                  icon={FaTwitter}
                  label="Twitter"
                />
              </motion.div>
            </motion.div>

            {/* Profile Picture Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto">
                {/* Rotating Border Effect */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/50"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                  style={{ transform: 'scale(1.1)' }}
                />
                
                {/* Profile Picture */}
                <div className="absolute inset-[10%] rounded-full overflow-hidden bg-gradient-to-b from-primary/20 to-transparent backdrop-blur-sm">
                  <img
                    src="/images/pfp.png"
                    alt="Muhammad Ali"
                    className="w-full h-full object-cover object-center rounded-full p-2"
                  />
                </div>

                {/* Glowing Dots */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 right-[10%] w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-[10%] left-[10%] w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary"
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