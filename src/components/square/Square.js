const Square = ({ ...props }) => {
  return (
    <div {...props} style={{ ...props.style, ...square }} />
  )
}

export default Square

const square = {
  width: '100px',
  height: '100px',
  background: '#fff'
}

