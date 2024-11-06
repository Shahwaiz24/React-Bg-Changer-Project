import { useState } from 'react'
import ColorChangingComponent from './component/color-change-component'

function App() {
  const [color, setColor] = useState("black")


  

  return (
    <div className='w-full h-screen items-center justify-end flex flex-col' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-between inset-x-0 px-5 p-5 rounded-3xl mb-20 ml-20 mr-20' style={{backgroundColor: "white"}}>
         <button onClick={() => setColor("black")}>
          <ColorChangingComponent colorName="black" />
        </button>
        <button onClick={() => setColor("green")}>
          <ColorChangingComponent colorName="green" />
        </button>
        <button onClick={() => setColor("yellow")}>
          <ColorChangingComponent colorName="yellow" />
        </button>
        <button onClick={() => setColor("olive")}>

          <ColorChangingComponent colorName="olive" />
        </button>
        <button onClick={() => setColor("blue")}>
          <ColorChangingComponent colorName="blue" />
        </button>
        <button onClick={() => setColor("grey")}>
          <ColorChangingComponent colorName="grey" />
        </button>  
        <button onClick={() => setColor("purple")}>
          <ColorChangingComponent colorName="purple" />
        </button> 



</div>
    </div>
  )
}

export default App
