import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaAws, FaDocker, FaCode, FaLightbulb } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiPostgresql, SiRedis, SiGraphql } from 'react-icons/si'

const TechIcon = ({ icon: Icon, label, delay, level = "intermediate" }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })
  const [isHovered, setIsHovered] = useState(false)

  const getLevelColor = (level) => {
    switch (level) {
      case 'expert': return 'from-green-500 to-emerald-500'
      case 'advanced': return 'from-blue-500 to-cyan-500'
      case 'intermediate': return 'from-purple-500 to-pink-500'
      case 'beginner': return 'from-orange-500 to-red-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="floating-card p-6 text-center cursor-pointer"
        whileHover={{ scale: 1.05, y: -8 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${getLevelColor(level)} flex items-center justify-center`}
          whileHover={{ rotate: 5 }}
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {label}
        </h3>
        <div className="text-sm text-white/60 capitalize">{level}</div>
        
        {/* Hover effect overlay */}
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getLevelColor(level)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />
      </motion.div>
    </motion.div>
  )
}

const SkillBar = ({ skill, level, delay, color = "from-purple-500 to-pink-500" }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-semibold text-white">{skill}</span>
        <span className="text-sm text-white/70 bg-white/[0.08] px-3 py-1 rounded-full">{level}%</span>
      </div>
      <div className="relative h-3 bg-white/[0.1] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${color} rounded-full`}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 1 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </motion.div>
  )
}

const SkillCategory = ({ title, icon: Icon, children, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="floating-card p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
            <FaCode className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/90">Skills & Technologies</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">Technical</span>{" "}
            <span className="gradient-text">Expertise</span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive overview of my technical skills and the technologies 
            I use to build amazing digital experiences.
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <SkillCategory title="Programming Languages" icon={FaCode} delay={0.1}>
            <SkillBar skill="JavaScript" level={95} delay={0.2} color="from-yellow-500 to-orange-500" />
            <SkillBar skill="TypeScript" level={90} delay={0.3} color="from-blue-500 to-cyan-500" />
            <SkillBar skill="Python" level={85} delay={0.4} color="from-green-500 to-emerald-500" />
            <SkillBar skill="Java" level={80} delay={0.5} color="from-red-500 to-pink-500" />
          </SkillCategory>

          <SkillCategory title="Frontend Development" icon={FaReact} delay={0.2}>
            <SkillBar skill="React.js" level={95} delay={0.3} color="from-cyan-500 to-blue-500" />
            <SkillBar skill="Next.js" level={85} delay={0.4} color="from-gray-500 to-gray-600" />
            <SkillBar skill="Tailwind CSS" level={90} delay={0.5} color="from-teal-500 to-cyan-500" />
            <SkillBar skill="UI/UX Design" level={80} delay={0.6} color="from-purple-500 to-pink-500" />
          </SkillCategory>

          <SkillCategory title="Backend Development" icon={FaNodeJs} delay={0.3}>
            <SkillBar skill="Node.js" level={90} delay={0.4} color="from-green-500 to-emerald-500" />
            <SkillBar skill="Express.js" level={85} delay={0.5} color="from-gray-500 to-gray-600" />
            <SkillBar skill="REST APIs" level={90} delay={0.6} color="from-blue-500 to-cyan-500" />
            <SkillBar skill="GraphQL" level={75} delay={0.7} color="from-pink-500 to-purple-500" />
          </SkillCategory>

          <SkillCategory title="Database & Cloud" icon={FaDatabase} delay={0.4}>
            <SkillBar skill="MongoDB" level={85} delay={0.5} color="from-green-500 to-emerald-500" />
            <SkillBar skill="PostgreSQL" level={80} delay={0.6} color="from-blue-500 to-cyan-500" />
            <SkillBar skill="AWS" level={75} delay={0.7} color="from-orange-500 to-red-500" />
            <SkillBar skill="Redis" level={70} delay={0.8} color="from-red-500 to-pink-500" />
          </SkillCategory>
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Technology Stack</h3>
            <p className="text-lg text-white/70">Technologies I work with regularly</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <TechIcon icon={FaReact} label="React" delay={0.1} level="expert" />
            <TechIcon icon={SiNextdotjs} label="Next.js" delay={0.2} level="advanced" />
            <TechIcon icon={SiTypescript} label="TypeScript" delay={0.3} level="advanced" />
            <TechIcon icon={SiJavascript} label="JavaScript" delay={0.4} level="expert" />
            <TechIcon icon={SiTailwindcss} label="Tailwind" delay={0.5} level="advanced" />
            <TechIcon icon={FaNodeJs} label="Node.js" delay={0.6} level="advanced" />
            <TechIcon icon={SiExpress} label="Express" delay={0.7} level="intermediate" />
            <TechIcon icon={SiMongodb} label="MongoDB" delay={0.8} level="intermediate" />
            <TechIcon icon={SiPostgresql} label="PostgreSQL" delay={0.9} level="intermediate" />
            <TechIcon icon={SiRedis} label="Redis" delay={1.0} level="beginner" />
            <TechIcon icon={SiGraphql} label="GraphQL" delay={1.1} level="beginner" />
            <TechIcon icon={FaAws} label="AWS" delay={1.2} level="intermediate" />
            <TechIcon icon={FaDocker} label="Docker" delay={1.3} level="beginner" />
            <TechIcon icon={FaGitAlt} label="Git" delay={1.4} level="advanced" />
            <TechIcon icon={FaPython} label="Python" delay={1.5} level="advanced" />
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
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
                  <FaLightbulb className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-2">Problem Solving</div>
                    <div className="text-white/70">Analytical thinking</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-2">Communication</div>
                    <div className="text-white/70">Team collaboration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-2">Adaptability</div>
                    <div className="text-white/70">Quick learning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text mb-2">Leadership</div>
                    <div className="text-white/70">Project management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
      <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
    </section>
  )
}

// PropTypes
TechIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  level: PropTypes.oneOf(['expert', 'advanced', 'intermediate', 'beginner'])
}

SkillBar.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
  color: PropTypes.string
}

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
  delay: PropTypes.number
}

export default Skills 