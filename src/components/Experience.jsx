import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaUniversity, FaRocket, FaArrowRight, FaCalendarAlt } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const TimelineCard = ({ title, company, period, description, icon: Icon, delay, image, isLeft, onClick, gradient, tags = [] }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    onClick()
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-center items-center`}
    >
      <motion.div 
        onClick={handleClick}
        className={`floating-card p-8 relative w-[95%] md:max-w-2xl ${isLeft ? 'md:mr-12' : 'md:ml-12'} cursor-pointer group overflow-hidden`}
        whileHover={{ 
          scale: 1.02, 
          y: -8,
          boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Gradient overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start gap-6 mb-6">
            {/* Company Logo */}
            {image && (
              <motion.div 
                className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden bg-white/10 border border-white/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={company}
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', image);
                    e.target.style.display = 'none';
                  }}
                />
              </motion.div>
            )}
            
            {/* Title and Company */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <motion.div 
                  className={`p-3 rounded-xl bg-gradient-to-br ${gradient}`}
                  whileHover={{ rotate: 10 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-lg text-white/80 font-medium">
                    {company}
                  </p>
                </div>
              </div>
              
              {/* Period */}
              <div className="flex items-center gap-2 text-white/60 mb-4">
                <FaCalendarAlt className="w-4 h-4" />
                <span className="text-sm font-medium">{period}</span>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            {description}
          </p>
          
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: delay + 0.2 + index * 0.1 }}
                  className="px-3 py-1 bg-white/[0.08] border border-white/20 rounded-full text-sm text-white/70 hover:bg-white/[0.12] transition-colors duration-200"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}
          
          {/* Action Button */}
          <motion.div
            className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            <span>View Details</span>
            <FaArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
        
        {/* Timeline connector */}
        <div className="hidden md:block">
          <motion.div 
            className={`absolute top-1/2 ${isLeft ? 'right-[-3rem]' : 'left-[-3rem]'} w-12 h-12 rounded-full border-4 border-primary/30 bg-background flex items-center justify-center`}
            whileHover={{ scale: 1.2 }}
          >
            <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${gradient}`} />
          </motion.div>
          <div className={`absolute top-1/2 ${isLeft ? 'right-[-1.5rem]' : 'left-[-1.5rem]'} w-6 h-[2px] bg-gradient-to-r ${isLeft ? 'from-primary/50 to-transparent' : 'from-transparent to-primary/50'}`} />
        </div>
        
        {/* Enhanced floating particles on hover */}
        {isHovered && (
          <>
            <motion.div
              className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
              animate={{ 
                y: [0, -15, 0],
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"
              animate={{ 
                y: [0, -12, 0],
                opacity: [0, 1, 0],
                scale: [0.6, 1.4, 0.6]
              }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }}
            />
            <motion.div
              className="absolute top-1/2 right-8 w-1 h-1 rounded-full bg-gradient-to-br from-green-500 to-emerald-500"
              animate={{ 
                x: [0, -20, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
            />
            <motion.div
              className="absolute bottom-1/3 left-8 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-orange-500 to-red-500"
              animate={{ 
                x: [0, 25, 0],
                opacity: [0, 0.6, 0],
                scale: [0.7, 1.3, 0.7]
              }}
              transition={{ duration: 1.3, repeat: Infinity, delay: 0.2 }}
            />
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const navigate = useNavigate()
  const location = useLocation()

  // Restore scroll position if coming back from experience page
  useEffect(() => {
    if (location.state?.scrollPosition) {
      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo(0, location.state.scrollPosition)
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  }, [location])

  const experiences = [
    {
      id: 'cognizant',
      title: "Software Engineering Co-op",
      company: "Cognizant",
      period: "Summer 2025",
      description: "Developed a production-ready application for a Fortune 500 client using React.js and AWS serverless architecture, gaining hands-on experience with Lambda, DynamoDB, SQS, and AI services like Bedrock.",
      iconType: 'briefcase',
      delay: 0.1,
      image: "/images/cognizant-logo.jpeg",
      isLeft: true,
      gradient: "from-purple-500 to-pink-500",
      tags: ["React.js", "AWS", "Lambda", "DynamoDB", "SQS", "Bedrock", "Fortune 500"]
    },
    {
      id: 'fif',
      title: "Fullstack Developer",
      company: "Fill it Forward",
      period: "September 2024 - December 2024",
      description: "Developed sustainable and eco-friendly solutions using React, React Native, GraphQL, and Redis. Created features used by thousands of users in production, focusing on environmental impact and charitable giving integration.",
      iconType: 'briefcase',
      delay: 0.2,
      image: "/images/fillitforward.png",
      isLeft: false,
      gradient: "from-green-500 to-emerald-500",
      tags: ["React", "React Native", "GraphQL", "Redis", "TypeScript", "Production"]
    },
    {
      id: 'uog',
      title: "Sharepoint Developer",
      company: "University of Guelph",
      period: "June 2024 - August 2024",
      description: "Built an intranet for the School of Computer Science, focusing on creating a user-friendly and accessible internal SharePoint repository for sharing teaching resources among course instructors.",
      iconType: 'briefcase',
      delay: 0.3,
      image: "/images/download.png",
      isLeft: true,
      gradient: "from-blue-500 to-cyan-500",
      tags: ["SharePoint", "GitLab", "UI/UX", "Accessibility", "Education"]
    },
    {
      id: 'lernr',
      title: "Founder & CEO",
      company: "lernr.ai",
      period: "May 2024 - Present",
      description: "Building an early-stage AI-powered education platform that allows students to create notes, quizzes, and flashcards effortlessly. Leading product development, user experience design, and technical architecture decisions.",
      iconType: 'briefcase',
      delay: 0.4,
      image: "/images/lernr logo.png",
      isLeft: false,
      gradient: "from-orange-500 to-red-500",
      tags: ["AI", "EdTech", "Startup", "Leadership", "Product Development"]
    },
    {
      id: 'buildspace',
      title: "Participant",
      company: "Buildspace",
      period: "June 2024",
      description: "Joined Buildspace S5 cohort to accelerate lernr.ai development. Collaborated with fellow developers, received mentorship, and gained valuable feedback on product development and technical implementation.",
      iconType: 'university',
      delay: 0.5,
      image: "/images/buildpacelogo.jpeg",
      isLeft: true,
      gradient: "from-indigo-500 to-purple-500",
      tags: ["Accelerator", "Mentorship", "Collaboration", "Product Development"]
    }
  ]

  const getIconComponent = (iconType) => {
    switch (iconType) {
      case 'briefcase':
        return FaBriefcase
      case 'university':
        return FaUniversity
      default:
        return FaBriefcase
    }
  }

  const handleExperienceClick = (exp) => {
    // eslint-disable-next-line no-unused-vars
    const { iconType, ...expWithoutIcon } = exp
    const scrollPosition = window.scrollY
    document.documentElement.style.scrollBehavior = 'auto'
    navigate(`/experience/${exp.id}`, { 
      state: { 
        experience: expWithoutIcon,
        scrollPosition 
      } 
    })
  }

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
            <span className="text-sm font-medium text-white/90">Professional Journey</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">Work</span>{" "}
            <span className="gradient-text">Experience</span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A journey through my professional experiences, showcasing growth, 
            innovation, and impact across diverse roles and industries.
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
              >
                5+
              </motion.div>
              <div className="text-white/70 text-lg group-hover:text-white transition-colors duration-300">Experiences</div>
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 200 }}
              >
                3+
              </motion.div>
              <div className="text-white/70 text-lg group-hover:text-white transition-colors duration-300">Years Learning</div>
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 200 }}
              >
                2
              </motion.div>
              <div className="text-white/70 text-lg group-hover:text-white transition-colors duration-300">Startups</div>
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 200 }}
              >
                ∞
              </motion.div>
              <div className="text-white/70 text-lg group-hover:text-white transition-colors duration-300">Growth</div>
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 -translate-x-1/2 rounded-full -z-10"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, delay: 0.8 }}
            style={{ transformOrigin: "top" }}
          />
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500 -translate-x-1/2 -z-10" />
          
          {/* Enhanced Floating Orbs */}
          <motion.div
            className="absolute left-1/2 top-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full -translate-x-1/2 -translate-y-4 shadow-lg shadow-purple-500/50 -z-10"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute left-1/2 bottom-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full -translate-x-1/2 translate-y-4 shadow-lg shadow-cyan-500/50 -z-10"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
          
          {/* Additional floating particles */}
          <motion.div
            className="absolute left-1/2 top-1/4 w-3 h-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full -translate-x-1/2 -z-10"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute left-1/2 top-3/4 w-2 h-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full -translate-x-1/2 -z-10"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          
          <div className="space-y-16 md:space-y-20">
            {experiences.map((exp) => (
              <TimelineCard
                key={exp.id}
                {...exp}
                icon={getIconComponent(exp.iconType)}
                onClick={() => handleExperienceClick(exp)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
      <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
    </section>
  )
}

// PropTypes
TimelineCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  delay: PropTypes.number.isRequired,
  image: PropTypes.string,
  isLeft: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  gradient: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default Experience 