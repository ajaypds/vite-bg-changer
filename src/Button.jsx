import React from 'react'

const Button = ({color, setColor}) => {
    const changeColor = (color) => {
        setColor(color)
    }
  return (
    <button className='text-center px-4 py-2 rounded-full' onClick={()=>{changeColor(color)}} style={{backgroundColor: color}} >{color}</button>
  )
}

export default Button