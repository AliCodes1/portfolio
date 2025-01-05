import { motion } from 'framer-motion'
import { FaGraduationCap, FaLaptopCode, FaBrain } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const Feature = ({ icon: Icon, title, text }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="glass p-8 hover:-translate-y-1 hover:border-primary transition-all duration-300"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">
        {title}
      </h3>
      <p className="text-white/80">
        {text}
      </p>
    </motion.div>
  )
}

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="about" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            I am a fast learner who can adapt to different situations. I like to remain organized 
            by planning out my day in order to save time and be productive.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={FaGraduationCap}
            title="Education"
            text="Currently pursuing Software Engineering at the University of Guelph, focusing on cutting-edge technologies and best practices."
          />
          <Feature
            icon={FaLaptopCode}
            title="Development"
            text="Experienced in full-stack development with React, Express, and various modern frameworks. Always eager to learn new technologies."
          />
          <Feature
            icon={FaBrain}
            title="Problem Solving"
            text="Strong analytical and problem-solving skills, with a focus on creating efficient and scalable solutions."
          />
        </div>
      </div>

      {/* Background Elements */}
      <div
        className="absolute top-[20%] left-[5%] w-[300px] h-[300px] bg-secondary blur-[150px] opacity-15 -z-10"
      />
      <div
        className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] bg-primary blur-[150px] opacity-15 -z-10"
      />
    </section>
  )
}

export default About 