import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

const Hero = () => {
  return (
    <div id="home" className="h-screen w-full relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute top-0 right-0 w-3/5 h-full z-0">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#00f6ff"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-xl pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-4"
          >
            Hi I'm{" "}
            <span className="text-primary">
              Muhammad Ali
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-8"
          >
            A third year software engineering student at the University of Guelph. 
            I like to code, bike, and learn new things.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:opacity-90 transition-all duration-200 flex items-center gap-2"
              >
                <span className="w-4 h-4 bg-white rounded-full"></span>
                View Projects
              </button>
              <button
                className="px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-white/10 transition-all duration-200"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-background to-transparent z-20"
      />
    </div>
  )
}

export default Hero 