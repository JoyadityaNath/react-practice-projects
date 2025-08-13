import React, { useState, useEffect } from "react";


export default function App() {
  const [toggleHex, setToggleHex] = useState(true);
  const [toggleRGB, setToggleRGB] = useState(false);

  useEffect(() => {
    console.log("Hex:", toggleHex, "RGB:", toggleRGB);
  }, [toggleHex, toggleRGB]);

  const handleHex = () => {
    setToggleHex(true);
    setToggleRGB(false);
  };

  const handleRGB = () => {
    setToggleRGB(true);
    setToggleHex(false);
  };
  
  const generateHexColor=()=>{
    const str='ABCDEF0123456789'
    let code='#'
    for(let i=0;i<6;i++){
    code+=str.charAt((Math.floor(Math.random()*17)))  
    }
  }

  const generateRGBColor=()=>{

  }

  return (
    <>
      <button onClick={handleHex}>Generate Hex</button>
      <button onClick={handleRGB}>Generate RGB</button>
      <button onClick={toggleHex?generateHexColor:generateRGBColor}></button>
      {/* {document.body.style="background-color: "} */}
    </>
  );
}
