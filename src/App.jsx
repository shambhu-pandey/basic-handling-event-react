import React , {useState} from "react";
import "./index.css"

const App = () =>{
  const defaultBg = "yellow"
  const defaultText= "Click me "
  const [bg , setBg] = useState(defaultBg)
  const [text , setText] = useState(defaultText);
  

  const bgChanger = () => {
     let currentBg = "#34495e";
     setBg(currentBg);

     let currentText = "wow 💕";
     setText(currentText);
   
   
  };

  const bgBack = ()  => {
    setBg(defaultBg);
    setText("nice");
  };

  return(

  <>
  <div className="container" style = {{backgroundColor : bg}}>
  <button className="button" onClick={bgChanger} onDoubleClick={bgBack}>{text} </button>
  </div>
  
  </>
  );
}

export default App;
