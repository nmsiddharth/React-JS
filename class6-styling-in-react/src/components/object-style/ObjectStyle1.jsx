import React from 'react'

const ObjectStyle1 = () => {
  const Container = {display:"flex",flexDirection:"column"};
  const Header = {
  padding:'10px 20px',
  textAlign:'center',
  color:'white',
  backgroundColor:'blue',
  margin:'15px',
  borderRadius:'10px',}
  return (
    <div style={Container}>
        <h2 style={Header}>4). CREATING A STYLE USING OBJECT VARIABLES</h2>
    </div>
  )
}

export default ObjectStyle1;