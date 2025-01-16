import React, { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('red');

  const SetBlackcolor = () => {
    setColor('black');
  }

  const SetBluecolor = () => {
    setColor('blue');
  }

  const SetRedcolor = () => {
    setColor('red');
  }

  const SetPinkcolor = () => {
    setColor('pink');
  }

  const SetYellowcolor = () => {
    setColor('yellow');
  }

  const SetGreencolor = () => {
    setColor('green');
  }

  const SetGraycolor = () => {
    setColor('gray');
  }

  return (
    <div className='w-full h-screen duration-300'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-10 px-4 inset-x-0 bg-white shadow-lg'>
        <button className=' rounded-md text-white bg-black p-2 m-2 shadow-lg' onClick={SetBlackcolor}>Black</button>
        <button className='rounded-lg text-white bg-blue-700 p-2 m-2 shadow-lg' onClick={SetBluecolor}>Blue</button>
        <button className='rounded-lg text-white bg-red-600 p-2 m-2 shadow-lg' onClick={SetRedcolor}>Red</button>
        <button className='rounded-lg text-white bg-pink-500 p-2 m-2 shadow-lg' onClick={SetPinkcolor}>Pink</button>
        <button className='rounded-lg text-white bg-yellow-500 p-2 m-2 shadow-lg' onClick={SetYellowcolor}>yellow</button>
        <button className='rounded-lg text-white bg-green-600 p-2 m-2 shadow-lg' onClick={SetGreencolor}>green</button>
        <button className='rounded-lg text-white bg-gray-500 p-2 m-2 shadow-lg' onClick={SetGraycolor}>gray</button>
      </div>
    </div>
  )
}

export default App
