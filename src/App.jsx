import React, { useState } from 'react';


function App() {
 const [color, setColor] = useState('skyblue');

  return (
   <div className="w-full h-screen duration-300" 
    style={{backgroundColor: color}}><h1 className="fixed top-1/2 left-1/2 transform -translate-x-1/2 
    -translate-y-1/2 text-5xl font-bold  text-white hover:text-gray-600 cursor-pointer">
  SANDEEP!
</h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button 
          onClick={() => setColor('green')}
          className="outline-none px-4 py1 rounded-full text-sm font-semibold leading-6 text-gray-900" 
          style={{color: 'green'}}>green</button>
           
            <button 
          onClick={() => setColor('black')}
          className="outline-none px-4 py1 rounded-full text-sm font-semibold leading-6 text-gray-900 " 
          style={{color: 'black'}}>black</button>
          
            <button 
          onClick={() => setColor('blue')}
          className="outline-none px-4 py1 rounded-full text-sm font-semibold leading-6 text-gray-900" 
          style={{color: 'blue'}}>blue</button>
    </div>
    </div>
    </div>
  )
}

export default App
