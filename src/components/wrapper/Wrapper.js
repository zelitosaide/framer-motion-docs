const Wrapper = ({ children, ...props }) => {
  return (
    <div {...props} style={{ ...wrapper, ...props.style }}>
      {children}
    </div>
  )
}

export default Wrapper

const wrapper = {
  width: '100%',
  minHeight: '100vh',
  background: '#ffaa00',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}