import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaUniversity } from 'react-icons/fa'
import { useState } from 'react'
import ExperienceModal from './ExperienceModal'

const TimelineCard = ({ title, company, period, description, icon: Icon, delay, image, isLeft, onClick }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'} items-center`}
    >
      <div 
        onClick={onClick}
        className={`glass p-6 rounded-lg hover:border-primary hover:scale-[1.02] transition-all duration-300 relative max-w-xl ${isLeft ? 'mr-8' : 'ml-8'} cursor-pointer group`}
      >
        <div className="flex items-start gap-4">
          {image && (
            <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
              <img
                src={image}
                alt={company}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-primary rounded-lg">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {title}
              </h3>
            </div>
            <p className="text-white/80 text-sm mb-2">
              {company} • {period}
            </p>
            <p className="text-white/70 text-sm">
              {description}
            </p>
          </div>
        </div>
        
        {/* Timeline connector */}
        <div className={`absolute top-1/2 ${isLeft ? 'right-[-2rem]' : 'left-[-2rem]'} w-8 h-[2px] bg-primary/50`} />
        <div className={`absolute top-1/2 -mt-1.5 ${isLeft ? 'right-[-2.5rem]' : 'left-[-2.5rem]'} w-3 h-3 rounded-full border-2 border-primary bg-background`} />
        
        {/* Click indicator */}
        <div className="absolute bottom-2 right-2 text-xs text-white/40 group-hover:text-white/60 transition-colors">
          Click to view details
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [selectedExperience, setSelectedExperience] = useState(null)

  const experiences = [
    {
      id: 'uog',
      title: "Sharepoint Developer",
      company: "University of Guelph",
      period: "2024",
      description: "Building an intranet for the School of Computer Science, focusing on creating a user-friendly and accessible internal SharePoint repository for sharing teaching resources among course instructors.",
      icon: FaBriefcase,
      delay: 0.2,
      image: "/images/download.png",
      isLeft: true
    },
    {
      id: 'fif',
      title: "Frontend Developer",
      company: "Fill it Forward",
      period: "Incoming",
      description: "Incoming frontend developer position, focusing on developing sustainable and eco-friendly solutions.",
      icon: FaBriefcase,
      delay: 0.3,
      image: "/images/fillitforward.png",
      isLeft: false
    },
    {
      id: 'lernr',
      title: "Founder",
      company: "lernr.ai",
      period: "2023 - Present",
      description: "Working on an early stage startup that allows students to make notes, quizzes, and flashcards easily using AI. Building innovative solutions for education technology.",
      icon: FaBriefcase,
      delay: 0.4,
      image: "/images/lernr logo.png",
      isLeft: true
    },
    {
      id: 'buildspace',
      title: "Participant",
      company: "Buildspace",
      period: "2023",
      description: "Joined buildspace S5 to build lernr.ai. Collaborated with developers and received valuable feedback on product development.",
      icon: FaUniversity,
      delay: 0.5,
      image: "/images/buildpacelogo.jpeg",
      isLeft: false
    }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            My professional journey and experiences
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/30 -translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp) => (
              <TimelineCard
                key={exp.id}
                {...exp}
                onClick={() => setSelectedExperience(exp)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-[40%] left-[5%] w-[300px] h-[300px] bg-secondary blur-[150px] opacity-15 -z-10" />
      <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-primary blur-[150px] opacity-15 -z-10" />

      {/* Modal */}
      <ExperienceModal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        experience={selectedExperience}
      />
    </section>
  )
}

export default Experience 