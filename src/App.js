import './App.css';
import React,{useState} from 'react';

function App() {
  const [Hori,setHori] =useState(10)
  const [Veri,setVeri] =useState(10)
  const [Blur,setBlur] =useState(10)
  const [color,setColor] =useState("black")
  const [checkout,setCheckOn] =useState(false)
  
 return (
    
    <div className="App">
     <h1>Box Tool Generator</h1>  
     <div className='controls'>
      <label>Horizontal Length</label>
      <input type="range"  min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)}/>
      <label>Vertical Length</label>
      <input type="range"  min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)}/>
      <label>Blur Length</label>
      <input type="range"  min="-200" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)}/>
      <label>Color Length</label>
      <input type="color"  value={color} onChange={(e)=>setColor(e.target.value)}/>
      <div class="switch">
    <label>
      Outline
      <input type="checkbox" value={checkout} onChange={()=>setCheckOn(!setCheckOn)}/>
      <span class="lever"></span>
      inset
    </label>
  </div>
     </div>
     <div className='output'>
      <div className='box' style={{boxShadow:`${Hori}px ${Veri}px ${Blur}px ${color}`}}>
      <p>box-shadow:{Hori}px {Veri}px {Blur}px {color}</p>
      </div>
     </div>
     
    </div>
  );
}
export default App;
