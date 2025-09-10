import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { FaGraduationCap, FaUsers, FaTools, FaTasks, FaBuilding, FaUserTie, FaCheckCircle, FaHandshake, FaArrowLeft } from 'react-icons/fa'

const ExperiencePage = () => {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  
  // Get experience data from state or find it in our data based on ID
  const experiences = useMemo(() => ({
    'cognizant': {
      title: "Software Engineering Co-op",
      company: "Cognizant",
      period: "Summer 2025",
      image: "/images/cognizant-logo.jpeg",
    },
    'uog': {
      title: "Sharepoint Developer",
      company: "University of Guelph",
      period: "June 2024 - August 2024",
      image: "/images/download.png",
    },
    'fif': {
      title: "Fullstack Developer",
      company: "Fill it Forward",
      period: "September 2024 - December 2024",
      image: "/images/fillitforward.png",
    },
    'lernr': {
      title: "Founder",
      company: "lernr.ai",
      period: "May 2024 - Present",
      image: "/images/lernr logo.png",
    },
    'buildspace': {
      title: "Participant",
      company: "Buildspace",
      period: "June 2024",
      image: "/images/buildpacelogo.jpeg",
    }
  }), [])

  const experience = location.state?.experience || experiences[id]
  const scrollPosition = location.state?.scrollPosition || 0

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  useEffect(() => {
    if (!experience && !experiences[id]) {
      console.log('No experience data found, redirecting to home')
      navigate('/')
    }
  }, [experience, id, navigate, experiences])

  const handleBack = () => {
    document.documentElement.style.scrollBehavior = 'auto'
    navigate('/', { state: { scrollPosition } })
  }

  if (!experience && !experiences[id]) {
    return null
  }



  const sections = {
    'cognizant': {
      introduction: "During the summer of 2025, I joined Cognizant as a Software Engineering Co-op. My primary project involved developing a production-ready application for a Fortune 500 client. This experience gave me the opportunity to contribute directly to a real-world project rather than working on a mock or internal training task. In this report, I will reflect on my responsibilities, the skills I developed, and the overall work environment at Cognizant. My goal is to provide insight into how this role helped me grow both technically and professionally.",
      
      employer: {
        main: "Cognizant is a leading multinational professional services company that provides consulting, information technology, and business process outsourcing. Founded in 1994 and headquartered in Teaneck, New Jersey, Cognizant has grown into one of the largest IT services firms in the world, employing more than 350,000 people across 40+ countries.",
        tech: "The company focuses on digital innovation, helping clients transform their businesses through artificial intelligence, data analytics, cloud computing, cybersecurity, software engineering, and digital transformation. Cognizant's teams assist organizations with modernizing IT systems, migrating to the cloud, building secure platforms, and implementing data-driven strategies.",
        facts: [
          "Originally founded as the technology arm of Dun & Bradstreet before becoming independent",
          "Operates large delivery centers in India (Chennai, Bengaluru, Hyderabad, Pune, etc.), making India central to its global operations",
          "Frequently listed among the top IT service providers worldwide and recognized for digital innovation and sustainability",
          "Clients span across healthcare, finance, retail, and manufacturing industries",
          "Strong focus on next-generation technologies such as machine learning, Internet of Things (IoT), blockchain, and cloud-native applications"
        ]
      },

      supervisor: {
        name: "Saktikrishna",
        role: "Project Supervisor",
        background: "Oversaw the project and ensured alignment with client needs",
        details: [
          "Saktikrishna served as my supervisor during the co-op, providing project oversight and ensuring our development work stayed aligned with client requirements and business objectives.",
          "Under his guidance, our team successfully delivered a production-ready application that met all specified requirements and quality standards.",
          "His leadership style emphasized both technical excellence and professional development, creating an environment where interns could learn while contributing meaningfully to client projects."
        ]
      },

      goals: [
        "Expand knowledge of Artificial Intelligence (AI) and its practical applications",
        "Learn to plan and run sprints effectively, improving understanding of Agile project management",
        "Deepen knowledge of AWS infrastructure, with a focus on serverless architecture",
        "Improve communication skills with teammates, mentors, and stakeholders"
      ],

      goalAchievements: [
        "Successfully expanded knowledge of AWS, especially serverless services such as Lambda, DynamoDB, and SQS. This was a major milestone, since cloud skills are in high demand across the industry.",
        "Learned to work within Agile sprint cycles, including backlog grooming, sprint planning, and retrospectives, which gave practical experience in project management.",
        "While gained exposure to AI services such as Bedrock, this is an area where I can still continue to grow.",
        "Improved communication skills significantly, but also realized that effective stakeholder communication requires ongoing practice,especially when explaining technical details to non-technical audiences.",
        "Mentorship played a huge role in helping achieve these goals. Cognizant provided access to Udemy courses, training resources, and consistent feedback from mentors, which accelerated learning."
      ],

      responsibilities: [
        "Frontend development using React.js for building responsive and dynamic user interfaces",
        "Backend development with AWS serverless architecture, leveraging Lambda for event-driven logic",
        "Database management using DynamoDB & RDS for scalable data storage solutions",
        "Implementing asynchronous messaging with SQS (Simple Queue Service)",
        "AI integration using AWS Bedrock for enhanced application functionality",
        "Version control and collaboration using Git and Agile sprint workflows with excel",
        "Meeting actual business requirements and complying with strict quality standards for real client deployment"
      ],

      skills: [
        "React.js",
        "AWS Lambda",
        "DynamoDB",
        "RDS",
        "SQS (Simple Queue Service)",
        "AWS Bedrock",
        "Git",
        "Jira",
        "Agile Methodology",
        "Serverless Architecture",
        "Full-stack Development"
      ],

      conclusion: "Overall, this co-op was an invaluable learning-by-doing experience. I gained technical expertise in AWS infrastructure and full-stack development while also strengthening my teamwork, problem-solving, and communication skills. The combination of mentorship, hands-on development, and real client impact made this work term stand out. If I had to summarize my experience, I would say it was defined by constant learning, adaptation, and collaboration. I made mistakes, learned from them, and applied those lessons to improve, which is the essence of professional growth.",

      acknowledgments: "I would like to thank my teammates (4 developers) and the 10 fellow interns, who made the collaborative experience enjoyable. My supervisor, Saktikrishna, for overseeing the project and ensuring we stayed aligned with client needs. My mentor, Ebenezer, for providing technical and professional guidance that accelerated my learning."
    },
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
    },
    'fif': {
      introduction: "During my four-month co-op term at Fill it Forward, I worked as a software developer contributing to both web and mobile application development. This experience allowed me to work with an environmentally conscious technology company, develop technical skills, and create features used by thousands of users in production. Through this experience, I gained valuable insights into full-stack development while contributing to a platform that promotes sustainability and charitable giving.",
      
      employer: {
        main: "Fill it Forward is an innovative company headquartered in Guelph, Ontario, that combines environmental sustainability with charitable giving through smart technology. The company specializes in creating environmentally friendly water bottles equipped with QR codes that integrate with their proprietary mobile application.",
        tech: "The company's core technology stack includes React and React Native for front-end development, GraphQL for API interactions, Redis for caching, and TypeScript for type-safe development.",
        facts: [
          "Growing team of 27 employees",
          "Integration allows users to track their reuse habits and measure environmental impact",
          "Users can contribute to charitable causes with each scan",
          "Technology and environmental consciousness intersection"
        ]
      },

      goals: [
        "Gain comprehensive knowledge of the existing codebase",
        "Master the application's architecture and data flow patterns",
        "Develop accurate project estimation skills",
        "Meet development deadlines consistently",
        "Enhance communication with the development team",
        "Learn GraphQL for efficient API operations",
        "Understand Redis caching mechanisms",
        "Develop proficiency in React Native"
      ],

      goalAchievements: [
        "Successfully achieved deep understanding of the codebase, enabling efficient feature development",
        "Mastered key technologies including GraphQL and React Native",
        "Contributed to production features used by thousands of users",
        "Areas identified for improvement include oral communication skills, particularly in expressing technical ideas and concepts",
        "Would benefit from more practice in presenting and discussing solutions with team members"
      ],

      responsibilities: [
        "Full-stack development across both web and mobile platforms",
        "Writing production-quality code for features used by thousands of users",
        "Managing deployment processes and handling real-world application scaling",
        "Implementing GraphQL APIs and Redis caching solutions",
        "Contributing to both web and mobile application development"
      ],

      skills: [
        "React & React Native",
        "TypeScript",
        "GraphQL",
        "Redis",
        "Production Deployment",
        "Mobile Development",
        "Full-stack Development"
      ],

      conclusion: "My work term at Fill it Forward provided comprehensive exposure to modern software development practices while contributing to environmental sustainability. The opportunity to create features that directly contributed to environmental awareness and charitable giving made this experience particularly meaningful. The combination of technical growth and positive social impact exemplifies the potential for technology to drive positive change.",

      acknowledgments: "Special appreciation goes to David, Sid, and Marcos for their mentorship and guidance, the entire Fill it Forward team for creating an inclusive and supportive learning environment, and the company's commitment to both technological innovation and environmental sustainability."
    }
  }

  const data = sections[id] || {}

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 md:space-y-12"
          >
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-white/10">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.error('Image failed to load:', experience.image);
                    e.target.style.display = 'none';
                  }}
                  onLoad={() => console.log('Image loaded successfully:', experience.image)}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {experience.title}
                </h1>
                <p className="text-xl text-white/80 mb-2">
                  {experience.company}
                </p>
                <p className="text-lg text-white/60">
                  {experience.period}
                </p>
              </div>
            </div>

            {/* Introduction */}
            {data.introduction && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-white">Introduction</h3>
                </div>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  {data.introduction}
                </p>
              </div>
            )}

            {/* Employer Information */}
            {data.employer && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaBuilding className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-white">About the Employer</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">{data.employer.main}</p>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed">{data.employer.socs}</p>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Interesting Facts</h4>
                    <ul className="space-y-3">
                      {data.employer.facts.map((fact, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                          <span className="text-white/80 text-base md:text-lg">{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Tech Stack - For Fill it Forward and Cognizant */}
            {(id === 'fif' || id === 'cognizant') && data.employer?.tech && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaTools className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
                </div>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  {data.employer.tech}
                </p>
              </div>
            )}

            {/* Supervisor */}
            {data.supervisor && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaUserTie className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-white">About My Supervisor</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white font-semibold mb-1">{data.supervisor.name}</p>
                    <p className="text-white/80">{data.supervisor.role}</p>
                    <p className="text-white/60 text-sm">{data.supervisor.background}</p>
                  </div>
                  {data.supervisor.details.map((detail, index) => (
                    <p key={index} className="text-white/80 text-base md:text-lg leading-relaxed">{detail}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Goals */}
            {data.goals && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaTasks className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-white">Goals</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {data.goals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span className="text-white/80 text-base">{goal}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Goal Achievements</h4>
                  {data.goalAchievements.map((achievement, index) => (
                    <p key={index} className="text-white/80 text-base md:text-lg leading-relaxed">{achievement}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Responsibilities */}
            {data.responsibilities && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaUsers className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-white">Key Responsibilities</h3>
                </div>
                <ul className="space-y-3">
                  {data.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="w-5 h-5 text-primary mt-1" />
                      <span className="text-white/80 text-base md:text-lg">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills */}
            {data.skills && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaTools className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-white">Technologies & Skills</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {data.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-base hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Conclusion */}
            {data.conclusion && (
              <div className="space-y-4 border-t border-white/10 pt-8">
                <h3 className="text-xl font-semibold text-white">Conclusion</h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">{data.conclusion}</p>
              </div>
            )}

            {/* Acknowledgments */}
            {data.acknowledgments && (
              <div className="space-y-4 border-t border-white/10 pt-8">
                <div className="flex items-center gap-2">
                  <FaHandshake className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-white">Acknowledgments</h3>
                </div>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">{data.acknowledgments}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed top-[20%] left-[5%] w-[300px] h-[300px] bg-primary/30 blur-[100px] opacity-10 pointer-events-none -z-10" />
      <div className="fixed bottom-[20%] right-[5%] w-[300px] h-[300px] bg-secondary/30 blur-[100px] opacity-10 pointer-events-none -z-10" />
      
      {/* Additional subtle gradients */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-background/50 pointer-events-none -z-20" />
    </div>
  )
}

export default ExperiencePage 