import { motion } from 'framer-motion'
import { createHashRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Hero, About, Experience, Skills, Contact, Navbar } from './components'
import ExperiencePage from './components/ExperiencePage'

const MainContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative z-10">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="relative"
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </motion.main>

      {/* Background decorative elements */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/30 opacity-20 blur-[100px] pointer-events-none" />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-secondary/30 opacity-20 blur-[100px] pointer-events-none" />
    </div>
  )
}

const Root = () => (
  <div className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary/20 selection:text-primary">
    {/* Background gradient */}
    <div className="fixed inset-0 bg-gradient-radial from-background to-background/50 pointer-events-none" />
    <Outlet />
  </div>
)

// Experience data for direct URL access
const experienceData = {
  'uog': {
    id: 'uog',
    title: "Sharepoint Developer",
    company: "University of Guelph",
    period: "June 2024 - August 2024",
    description: "Built an intranet for the School of Computer Science, focusing on creating a user-friendly and accessible internal SharePoint repository for sharing teaching resources among course instructors.",
    image: "/images/download.png",
  },
  'fif': {
    id: 'fif',
    title: "Fullstack Developer",
    company: "Fill it Forward",
    period: "September 2024 - December 2024",
    description: "Fullstack developer position, focusing on developing sustainable and eco-friendly solutions.",
    image: "/images/fillitforward.png",
  },
  'lernr': {
    id: 'lernr',
    title: "Founder",
    company: "lernr.ai",
    period: "May 2024 - Present",
    description: "Working on an early stage startup that allows students to make notes, quizzes, and flashcards easily using AI. Building innovative solutions for education technology.",
    image: "/images/lernr logo.png",
  },
  'buildspace': {
    id: 'buildspace',
    title: "Participant",
    company: "Buildspace",
    period: "June 2024",
    description: "Joined buildspace S5 to build lernr.ai. Collaborated with developers and received valuable feedback on product development.",
    image: "/images/buildpacelogo.jpeg",
  }
}

const ExperienceWrapper = () => {
  const { id } = useParams()
  
  // If experience doesn't exist, redirect to home
  if (!experienceData[id]) {
    return <Navigate to="/" replace />
  }

  // Pass the experience data directly
  return <ExperiencePage experience={experienceData[id]} />
}

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <MainContent />,
      },
      {
        path: "experience/:id",
        element: <ExperienceWrapper />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
