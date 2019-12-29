import React from 'react'
import '../src/css/index.css' // relative to the lib folder

interface LibProps {
  text: string;
}

const LibName: React.FC<LibProps> = ({ text }) => {

  return (
    <React.Fragment>
      <h3>{text}</h3>
    </React.Fragment>
  )
}

export default LibName