import React from "react"; 
import './App.css';
import learnjsx from "./learnjsx.png";


function App() {
  return (
   <div>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Amani Bouchnak</h1>
          <br />
          <div className="image">
          <img src="/learntocode.jpg"  style= {{width:"500px"}} alt="" />
          <br />
          <img src= {learnjsx} style={{ width:"500px"}} alt=""/>
          </div>
        </div>
        <div className="video"> 
        <iframe width="853" height="480" src="https://www.youtube.com/embed/7fPXI_MnBOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        </div>
   </div> 
  );
}
export default App

