import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
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
    <div id="home" className="min-h-screen w-full relative overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#00f6ff"
              attach="material"
              distort={0.5}
              speed={2}
              opacity={0.15}
              transparent
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
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

            {/* CTA Buttons */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25">
                View Projects
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                Contact Me
              </button>
            </motion.div> */}

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
      </div>

      {/* Additional Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/30 rounded-full filter blur-[100px] animate-pulse" />
    </div>
  )
}

export default Hero 