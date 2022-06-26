import { motion } from 'framer-motion'

import Wrapper from '../../../components/wrapper/Wrapper'

const Gestures = () => {
  return (
    <Wrapper>
      <div style={{ background: 'red', width: '100px' }}>
        <motion.div
          style={square}
          drag='x'
          dragConstraints={{ left: -100, right: 100 }}
        />
      </div>
    </Wrapper>
  )
}

export default Gestures

const square = {
  width: '50px',
  height: '50px',
  background: '#fff',
  cursor: 'grab'
}

/**
 * Motion extends React's event system with powerful gesture 
 * recognisers. It supports hover, tap, pan and drag.
 */