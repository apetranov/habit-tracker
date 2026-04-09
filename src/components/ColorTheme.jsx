import React from 'react'
import { LuSun, LuMoon } from "react-icons/lu";
import './styles/ColorTheme.css'

function ColorTheme({ setColorTheme, colorTheme }) {
  return (
    <div onClick={() => {
        if (colorTheme === 'light') {
            setColorTheme('dark')
            localStorage.setItem('colorTheme', JSON.stringify('dark'));
        } else {
            setColorTheme('light')
            localStorage.setItem('colorTheme', JSON.stringify('light'));
        }
    }} className='theme-box'>
        {colorTheme === 'light' ? <LuSun /> : <LuMoon />}
    </div>
  )
}

export default ColorTheme