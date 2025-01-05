import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'

const SocialButton = ({ icon: Icon, label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 text-white hover:bg-white/20 hover:-translate-y-1 transition-all duration-200 rounded-full space-x-2"
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </a>
  )
}

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="contact" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          <div className="flex flex-col items-center space-y-8">
            <button
              onClick={() => window.location.href = 'mailto:goldenmaster324@gmail.com'}
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:opacity-90 hover:-translate-y-1 transition-all duration-200 space-x-2"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Send Email</span>
            </button>

            <div className="flex flex-wrap justify-center gap-4">
              <SocialButton
                icon={FaTwitter}
                label="Twitter"
                href="https://x.com/muhammad_Ali_94"
              />
              <SocialButton
                icon={FaLinkedinIn}
                label="LinkedIn"
                href="https://www.linkedin.com/in/muhammad-ali-052908152/"
              />
              <SocialButton
                icon={FaGithub}
                label="GitHub"
                href="https://github.com/AliCodes1"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div
        className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-accent blur-[150px] opacity-15 -z-10"
      />
      <div
        className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-primary blur-[150px] opacity-15 -z-10"
      />
    </section>
  )
}

export default Contact 