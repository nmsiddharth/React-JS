import React from 'react'
import {styles} from './../object-style/style'
import StyledButton from './button'

const StyledComponent = () => {
  return (
   <div>
     <div style={styles.Container}>
        <h2 style={styles.Header}>6). STYLED COMPONENT</h2>
    </div>
    <button>Styled Button</button>
    <StyledButton>STYLED BUTTON-1</StyledButton>
   </div>
  )
}

export default StyledComponent;