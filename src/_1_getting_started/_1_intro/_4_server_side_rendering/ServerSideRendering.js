import { motion } from 'framer-motion'

import Wrapper from '../../../components/wrapper/Wrapper'

const list = { hidden: { opacity: 1 } }
const item = { hidden: { x: -50, opacity: 1 } }

const ServerSideRendering = () => {
  return (
    <Wrapper>
      <motion.ul initial={false} style={ul} animate='hidden' variants={list}>
        <motion.li variants={item} style={li} />
        <motion.li variants={item} style={li} />
        <motion.li variants={item} style={li} />
      </motion.ul>
    </Wrapper>
  )
}

export default ServerSideRendering


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
 * 
 * The animated state of a component will be rendered server-side to prevent 
 * flashes of re-styled content after your JavaScript loads.
 */