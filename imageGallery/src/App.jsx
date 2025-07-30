import { useState } from 'react'
import sculptureList from './data'
import './App.css'

export default  function App() {
  const [nextIndex,setNextIndex]=useState(0);
  const [showDetails,setShowDetails]=useState(false);

  const handleNext = () => {
    setNextIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
};

const handlePrev=()=>{
  setNextIndex((prevIndex)=>((prevIndex-1)+sculptureList.length)%sculptureList.length)
}

const handleDetails=()=>{
  setShowDetails((prevState)=>!prevState)
}


  return (
    <>
    <button className='next' onClick={handlePrev}>Previous</button>
     <button className='next' onClick={handleNext}>Next</button>
     
      <h2><strong>{sculptureList[nextIndex].name}</strong></h2>
      <p>{`(${nextIndex+1} of ${sculptureList.length})`}</p>
      <button className='details' onClick={handleDetails}>Show Details</button>
      {showDetails ? (
  <>
    <p>{sculptureList[nextIndex].description}</p>
  </>
) : null}

<img
      src={sculptureList[nextIndex].url}
      alt={sculptureList[nextIndex].alt}
    /> 
    </>
  )
}

