import { useMotionValue, useTransform, motion } from 'framer-motion'
import { useEffect } from 'react'

import Wrapper from '../../../components/wrapper/Wrapper'

const MotionValues = () => {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [-1, 0, 1])

  useEffect(() => {
    x.onChange(latest => {
      console.log(x.get())
    })
  }, [])

  return (
    <Wrapper>
      <motion.div drag='x' style={{ ...square, x, opacity }} />
    </Wrapper>
  )
}

export default MotionValues

const square = {
  width: '50px',
  height: '50px',
  background: '#fff',
  cursor: 'grab'
}

/**
 * 
 * Create declarative, reactive chains of MotionValues that 
 * can update as a result of animations and/or gestures.
 */