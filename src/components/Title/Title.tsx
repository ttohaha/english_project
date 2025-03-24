import React from 'react'
import './Title.less'

interface text{
  text:String
}

const Title:React.FC<text> = ({text}) => {
  return (
    <h2>
        {text}
    </h2>
  )
}

export default Title