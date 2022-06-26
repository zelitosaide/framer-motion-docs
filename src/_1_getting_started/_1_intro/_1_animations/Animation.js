import { motion } from 'framer-motion'

import Wrapper from '../../../components/wrapper/Wrapper'

const Animation = () => {
  return (
    <Wrapper>
      <motion.div style={box} animate={{ x: 100 }} />
    </Wrapper>
  )
}

export default Animation

const box = {
  width: '200px',
  height: '200px',
  background: '#fff'
}


/**
 * Making animations is as easy as setting values on the animate prop. 
 * Motion will automatically generate an animation for you, and this 
 * can be overridden with the powerful transition prop.
 */