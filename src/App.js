import Animation from './_1_getting_started/_1_intro/_1_animations/Animation'
import Gestures from './_1_getting_started/_1_intro/_2_gestures/Gestures'
import Variants from './_1_getting_started/_1_intro/_3_variants/Variants'
import ServerSideRendering from './_1_getting_started/_1_intro/_4_server_side_rendering/ServerSideRendering'
import MotionValues from './_1_getting_started/_1_intro/_5_motion_values/MotionValues'
import ScrollBasedAnimations from './_1_getting_started/_1_intro/_6_scroll_based_animations/ScrollBasedAnimations'

const App = () => {
  return (
    <div style={app}>
      {/* <Animation /> */}
      {/* <Gestures /> */}
      {/* <Variants /> */}
      {/* <ServerSideRendering /> */}
      {/* <MotionValues /> */}
      <ScrollBasedAnimations />
    </div>
  )
}

export default App

const app = {
  paddingLeft: '11rem',
  paddingRight: '11rem',
  background: '#1A1A1A',
  width: '100vw',
  // height: '100vh',
  boxSizing: 'border-box'
}