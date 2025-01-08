import { motion } from 'framer-motion'
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { Hero, About, Experience, Skills, Contact, Navbar } from './components'
import ExperiencePage from './components/ExperiencePage'

const MainContent = () => {
  useEffect(() => {
    // Reset scroll position when MainContent mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
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
      <div className="fixed top-0 left-1/2 -translate-x-1/2 max-w-[90vw] w-[1000px] h-[600px] bg-primary/30 opacity-20 blur-[100px] pointer-events-none" />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[90vw] w-[1000px] h-[600px] bg-secondary/30 opacity-20 blur-[100px] pointer-events-none" />
    </div>
  )
}

const Root = () => (
  <div className="relative w-full overflow-hidden bg-background text-foreground selection:bg-primary/20 selection:text-primary">
    {/* Background gradient */}
    <div className="fixed inset-0 bg-gradient-radial from-background to-background/50 pointer-events-none -z-50" />
    <Outlet />
  </div>
)

const router = createHashRouter(
  [
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
          element: <ExperiencePage />,
        },
      ],
    },
  ],
  {
    basename: "", // Ensure no basename is set for hash router
  }
)

function App() {
  return <RouterProvider router={router} />
}

export default App
