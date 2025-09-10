import { motion } from 'framer-motion'
import { FaGraduationCap, FaLaptopCode, FaBrain, FaRocket, FaHeart, FaCode, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const Feature = ({ icon: Icon, title, text, delay = 0, gradient = "from-purple-500 to-pink-500" }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative"
    >
      <div className="floating-card p-8 h-full">
        <motion.div
          className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: 5 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/80 text-lg leading-relaxed">
          {text}
        </p>
        
        {/* Hover effect overlay */}
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
      </div>
    </motion.div>
  )
}

const StatCard = ({ number, label, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold gradient-text mb-2"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.8, delay: delay + 0.2, type: "spring", stiffness: 200 }}
      >
        {number}
      </motion.div>
      <div className="text-white/70 text-lg">{label}</div>
    </motion.div>
  )
}

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            <FaHeart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/90">About Me</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">Passionate</span>{" "}
            <span className="gradient-text">Developer</span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm a fast learner who thrives on adapting to new challenges and technologies. 
            My organized approach to planning ensures maximum productivity while maintaining 
            a healthy work-life balance through cycling and continuous learning.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          <StatCard number="3+" label="Years Learning" delay={0.6} />
          <StatCard number="10+" label="Projects Built" delay={0.7} />
          <StatCard number="5+" label="Technologies" delay={0.8} />
          <StatCard number="∞" label="Passion" delay={0.9} />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <Feature
            icon={FaGraduationCap}
            title="Education"
            text="Currently pursuing Software Engineering at the University of Guelph, focusing on cutting-edge technologies and industry best practices."
            delay={0.1}
            gradient="from-blue-500 to-cyan-500"
          />
          <Feature
            icon={FaLaptopCode}
            title="Development"
            text="Experienced in full-stack development with React, Node.js, and various modern frameworks. Always eager to learn and implement new technologies."
            delay={0.2}
            gradient="from-purple-500 to-pink-500"
          />
          <Feature
            icon={FaBrain}
            title="Problem Solving"
            text="Strong analytical and problem-solving skills, with a focus on creating efficient, scalable, and maintainable solutions."
            delay={0.3}
            gradient="from-green-500 to-emerald-500"
          />
          <Feature
            icon={FaRocket}
            title="Innovation"
            text="Passionate about building innovative solutions that make a real impact. Always exploring new ways to solve complex problems."
            delay={0.4}
            gradient="from-orange-500 to-red-500"
          />
          <Feature
            icon={FaUsers}
            title="Collaboration"
            text="Excellent team player with strong communication skills. Thrives in collaborative environments and enjoys mentoring others."
            delay={0.5}
            gradient="from-indigo-500 to-purple-500"
          />
          <Feature
            icon={FaChartLine}
            title="Growth Mindset"
            text="Committed to continuous learning and personal development. Always seeking new challenges and opportunities to grow."
            delay={0.6}
            gradient="from-pink-500 to-rose-500"
          />
        </div>

        {/* Personal Touch Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative"
        >
          <div className="gradient-border">
            <div className="gradient-border-content">
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCode className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Beyond the Code
                </h3>
                <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                  When I'm not coding, you'll find me cycling through scenic routes, 
                  exploring new technologies, or planning my next adventure. I believe 
                  that a well-rounded developer is one who brings diverse experiences 
                  and perspectives to every project.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
      <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
    </section>
  )
}

export default About 