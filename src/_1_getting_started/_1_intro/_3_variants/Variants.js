import { motion } from 'framer-motion'

import Wrapper from '../../../components/wrapper/Wrapper'

const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -50, opacity: 0 } }

const Variants = () => {
  return (
    <Wrapper>
      <motion.ul style={ul} animate='hidden' variants={list}>
        <motion.li variants={item} style={li} />
        <motion.li variants={item} style={li} />
        <motion.li variants={item} style={li} />
      </motion.ul>
    </Wrapper>
  )
}

export default Variants

const ul = {
  width: '200px',
  height: '200px',
  background: '#fff',
  padding: 0,
  margin: 0,
  listStyle: 'none'
}

const li = {
  width: '200px',
  height: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  background: 'hsla(0, 0%, 10%, 0.5)'
}

/**
 * Variants can be used to animate entire sub-trees of components with a 
 * single animate prop. Options like when and staggerChildren can be 
 * used to declaratively orchestrate these animations.
 */