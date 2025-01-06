import { motion } from 'framer-motion'
import { Hero, About, Experience, Skills, Contact, Navbar } from './components'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-radial from-background to-background/50 pointer-events-none" />
      
      {/* Content */}
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
    </div>
  )
}

export default App