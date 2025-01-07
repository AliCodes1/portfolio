import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGraduationCap, FaUsers, FaTools, FaTasks, FaBuilding, FaUserTie, FaCheckCircle, FaHandshake } from 'react-icons/fa'

const ExperienceModal = ({ isOpen, onClose, experience }) => {
  if (!experience) return null

  const handleClose = () => {
    document.body.style.overflow = 'auto'
    onClose()
  }

  // Lock scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[600px] max-h-[90vh] overflow-y-auto z-50 glass p-4 md:p-8 rounded-xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <FaTimes className="w-5 h-5 text-white" />
            </button>

            {/* Content */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden mx-auto md:mx-0">
                  <img
                    src={experience.image}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">
                    {experience.company}
                  </p>
                  <p className="text-white/60 text-sm">
                    {experience.period}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaBuilding className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold text-white">About the Role</h4>
                </div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaTasks className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold text-white">Key Responsibilities</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="w-4 h-4 text-primary mt-1" />
                    <span className="text-white/80 text-sm md:text-base">Led development of internal tools and systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="w-4 h-4 text-primary mt-1" />
                    <span className="text-white/80 text-sm md:text-base">Collaborated with cross-functional teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="w-4 h-4 text-primary mt-1" />
                    <span className="text-white/80 text-sm md:text-base">Implemented best practices and optimizations</span>
                  </li>
                </ul>
              </div>

              {/* Skills & Technologies */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaTools className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold text-white">Skills & Technologies</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Git'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs md:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaHandshake className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold text-white">Key Achievements</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="w-4 h-4 text-primary mt-1" />
                    <span className="text-white/80 text-sm md:text-base">Successfully delivered projects on time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="w-4 h-4 text-primary mt-1" />
                    <span className="text-white/80 text-sm md:text-base">Improved system performance by 40%</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ExperienceModal 