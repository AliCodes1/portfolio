import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGraduationCap, FaUsers, FaTools, FaTasks, FaBuilding, FaUserTie, FaCheckCircle, FaHandshake } from 'react-icons/fa'
import { useEffect } from 'react'

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

  const sections = {
    'uog': {
      introduction: "Hey, this was my first work term. As of S24 I was employed at the University of Guelph as a Sharepoint developer and worked under Judi McCuaig. I will now use this opportunity to explain what I had done in this period and other facts about the workplace and the work itself.",
      
      employer: {
        main: "I was hired by the University of Guelph, located in Guelph, Ontario, Canada, it's a renowned public research university known for its dedication to improving life through its comprehensive programs and innovative research. Established in 1964, it has grown into one of Canada's leading institutions, particularly recognized for its programs in veterinary medicine, agriculture, and environmental sciences.",
        socs: "The University of Guelph's School of Computer Science, established in 1971, is a prominent hub for research and education in various areas of computing science, particularly Artificial Intelligence and Machine Learning. The university offers a range of graduate programs, including a Master of Science in Computer Science and a collaborative specialization in AI, which integrates advanced computational thinking and the societal impacts of AI into the curriculum.",
        facts: [
          "The School of Computer Science, specifically the graduate research areas, has 26 faculty members who supervise 37 MSc and 35 PhD students",
          "The university is known for its vibrant community and beautiful campus, which includes features like the Arboretum and the newly renovated Reynolds Building",
          "It has one of the top veterinary medicine programs globally, consistently ranked among the best"
        ]
      },

      supervisor: {
        name: "Dr. Judi McCuaig",
        role: "Associate Professor",
        background: "PhD from University of Saskatchewan (2000), Former Senior Research Scientist at Pacific Northwest Laboratory",
        details: [
          "Dr. Judi McCuaig is an Associate Professor in the School of Computer Science at the University of Guelph. She received her PhD from the University of Saskatchewan in 2000 and subsequently worked as a Senior Research Scientist at Pacific Northwest Laboratory in Richland, Washington, until 2004. She then joined the University of Guelph, where she has been actively involved in research and teaching.",
          "Dr. McCuaig's research focuses on leveraging computer systems to enhance learner engagement in post-secondary education. Her work includes the use of data mining, intelligent software systems, personalization, and user modeling to develop effective learning tools. Key areas of her research include automated formative feedback and the development of conversational agents to assist students with task decomposition and work planning. Her projects aim to improve self-regulation and independent learning among students.",
          "Additionally, Dr. McCuaig has been involved in several funded projects aimed at improving educational outcomes. For example, she received funding from the Physical Science & Engineering Education Research Centre (PSEER) to develop a framework for automated task decomposition and work planning, particularly beneficial for neurodiverse learners."
        ]
      },

      goals: [
        "Communicate effectively with co-workers and supervisor",
        "Learn project management through GitLab",
        "Improve problem-solving skills",
        "Manage time effectively",
        "Develop intercultural competence"
      ],

      goalAchievements: [
        "I'm pleased to say that I successfully met all of these goals. For effective communication, I maintained regular contact with my supervisor through Microsoft Teams, providing daily updates and seeking clarification when needed. I also collaborated closely with my co-workers, often discussing our approach to tasks in person.",
        "In terms of technological literacy, I significantly improved my skills with GitLab. Our team opened an average of 26.8 issues and closed 21.8, demonstrating my ability to create, manage, and resolve tickets effectively.",
        "For problem-solving, my co-worker and I developed several planning documents, breaking down complex tasks like creating an FAQ site for SOCS. We researched existing sites, compiled resources, and consulted with professors to ensure a comprehensive solution.",
        "Regarding time management, I not only met deadlines but also focused on quality. I involved faculty members in reviewing our work, which led to valuable feedback and improvements, such as making our tutorials more user-friendly.",
        "Lastly, I successfully worked on my intercultural competence. I developed strong relationships with my co-worker and supervisor, navigating minor conflicts through open communication and fostering a productive work environment.",
        "The technologies I worked with, including GitLab and Microsoft Teams, along with web development skills, will be invaluable in my future work experiences. These tools are widely used in the industry, and my proficiency will be an asset. I also dabbled in a little bit of API testing towards the end of the work term, this is also something I would've preferred more time with in order to solidify my skills.",
        "Reflecting on my goals, I'm satisfied with my progress in all areas. While I didn't have any unsuccessful goals, I identified areas for continuous improvement, such as further enhancing the user-friendliness of our deliverables based on feedback. This experience has provided me with a strong foundation in project management, communication, problem-solving, and teamwork, which will undoubtedly benefit me in my future professional endeavors."
      ],

      responsibilities: [
        "Research institutional teaching policies - Conduct thorough research on institutional teaching policies and existing instructional informational resources.",
        "Design a SharePoint repository - Design a user-friendly and accessible internal SharePoint repository for sharing teaching resources among course instructors in the School of Computer Science.",
        "Consult with faculty and staff - Consult with faculty and teaching staff in the School of Computer Science to determine the informational resources needed.",
        "Content Management - Gather, curate, and post content on the SharePoint site to ensure it is up-to-date and comprehensive."
      ],

      skills: [
        "GitLab for project management",
        "UI design and Figma",
        "SharePoint development",
        "Microsoft Teams",
        "Web development",
        "API testing (brief exposure)"
      ],

      conclusion: "In conclusion, my work term at the School of Computer Science has been an invaluable experience, marking significant growth in my professional skills and personal development. Through developing a SharePoint repository for teaching resources, I successfully met all my initial goals: improving communication, learning project management with GitLab, enhancing problem-solving skills, managing time effectively, and developing intercultural competence. This experience provided practical application of classroom knowledge and introduced me to new technologies like SharePoint, while reinforcing my proficiency in tools like Microsoft Teams and web development. The collaborative nature of the project, involving consultations with faculty and close teamwork, honed my ability to work effectively in a professional environment. While I achieved my objectives, this experience also highlighted areas for future growth, such as API testing. Overall, this work term has been a crucial stepping stone in my journey, equipping me with the tools, confidence, and insights needed to excel in my future career in the technology sector.",

      acknowledgments: "I would also like to acknowledge the people who have aided my coworker and I through this work term, this includes Prof. Judi McCuaig, Prof. Stacey Scott, Kyle Johnston, Shamsi Shinin, and all those who helped in making this a successful and memorable moment."
    }
  }

  const data = sections[experience.id] || {}

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background/95 backdrop-blur border border-primary/20 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-background/95 backdrop-blur border-b border-primary/20 p-4 flex justify-between items-center z-10">
              <div>
                <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                <p className="text-white/60">{experience.company} • {experience.period}</p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <FaTimes className="w-6 h-6 text-white/60" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Introduction */}
              {data.introduction && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <FaGraduationCap className="text-primary" />
                    Introduction
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    {data.introduction}
                  </p>
                </div>
              )}

              {/* Employer Information */}
              {data.employer && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FaBuilding className="text-primary" />
                    About the Employer
                  </h4>
                  <div className="space-y-4">
                    <p className="text-white/80 leading-relaxed">{data.employer.main}</p>
                    <p className="text-white/80 leading-relaxed">{data.employer.socs}</p>
                    <div className="mt-4">
                      <h5 className="text-white font-medium mb-2">Interesting Facts</h5>
                      <ul className="space-y-2">
                        {data.employer.facts.map((fact, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-white/80">{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Supervisor */}
              {data.supervisor && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FaUserTie className="text-primary" />
                    About My Supervisor
                  </h4>
                  <div className="space-y-4">
                    {data.supervisor.details.map((detail, index) => (
                      <p key={index} className="text-white/80 leading-relaxed">{detail}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Goals */}
              {data.goals && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FaTasks className="text-primary" />
                    Goals
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {data.goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-white/80">{goal}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-4">
                    <h5 className="text-white font-medium mb-2 flex items-center gap-2">
                      <FaCheckCircle className="text-primary" />
                      Goal Achievements
                    </h5>
                    {data.goalAchievements.map((achievement, index) => (
                      <p key={index} className="text-white/80 leading-relaxed">{achievement}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Responsibilities */}
              {data.responsibilities && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FaUsers className="text-primary" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {data.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-white/80">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {data.skills && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FaTools className="text-primary" />
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-white/90 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Conclusion */}
              {data.conclusion && (
                <div className="border-t border-primary/20 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Conclusion</h4>
                  <p className="text-white/80 leading-relaxed">{data.conclusion}</p>
                </div>
              )}

              {/* Acknowledgments */}
              {data.acknowledgments && (
                <div className="border-t border-primary/20 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FaHandshake className="text-primary" />
                    Acknowledgments
                  </h4>
                  <p className="text-white/80">{data.acknowledgments}</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ExperienceModal 