import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiExpress, SiMongodb } from 'react-icons/si'

const TechIcon = ({ icon: Icon, label, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div
        className="flex flex-col items-center p-4 glass hover:border-primary hover:-translate-y-1 transition-all duration-300"
      >
        <Icon className="w-10 h-10 mb-2 text-primary" />
        <span className="text-white/90">{label}</span>
      </div>
    </motion.div>
  )
}

const SkillBar = ({ skill, level, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-white/90">{skill}</span>
        <span className="text-white/70">{level}%</span>
      </div>
      <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ width: '0%' }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="skills" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Here are some of the technologies I've been working with recently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Skills Progress */}
          <div>
            <SkillBar skill="Frontend Development" level={90} delay={0.2} />
            <SkillBar skill="Backend Development" level={85} delay={0.3} />
            <SkillBar skill="Database Management" level={80} delay={0.4} />
            <SkillBar skill="UI/UX Design" level={75} delay={0.5} />
            <SkillBar skill="DevOps" level={70} delay={0.6} />
          </div>

          {/* Tech Stack */}
          <div className="grid grid-cols-3 gap-4">
            <TechIcon icon={FaReact} label="React" delay={0.2} />
            <TechIcon icon={FaNodeJs} label="Node.js" delay={0.3} />
            <TechIcon icon={SiTypescript} label="TypeScript" delay={0.4} />
            <TechIcon icon={SiJavascript} label="JavaScript" delay={0.5} />
            <TechIcon icon={FaPython} label="Python" delay={0.6} />
            <TechIcon icon={FaJava} label="Java" delay={0.7} />
            <TechIcon icon={SiExpress} label="Express" delay={0.8} />
            <TechIcon icon={SiMongodb} label="MongoDB" delay={0.9} />
            <TechIcon icon={FaGitAlt} label="Git" delay={1.0} />
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div
        className="absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-accent blur-[150px] opacity-15 -z-10"
      />
    </section>
  )
}

export default Skills 