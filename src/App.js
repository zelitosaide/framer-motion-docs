import { motion } from 'framer-motion'

const App = () => {
  return (
    <motion.div
      style={app}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      Framer Motion docs
    </motion.div>
  )
}

export default App

const app = {
  padding: '1rem',
  background: 'red'
}