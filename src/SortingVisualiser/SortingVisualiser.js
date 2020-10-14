import React,{useState, useEffect} from "react";
import "./SortingVisualiser.css"
import Navbar from "./Navbar/Navbar.js"
import Bar from "./Bar"

function SortingVisualiser(){
  const [array, setArray] = useState([]);
  useEffect(()=>resetArray(),[])
  const resetArray = () => {
    let new_arr = [];
    for(let i = 0;i<20;i++){
      new_arr.push(randomIntGenerator(3, 400))
    }
    setArray(new_arr)
  }
  return(
    <>
    <Navbar parentMethod = {resetArray} />
    <div className = "array-container">
    {array.map((value, idx)=>
      <Bar height={value} index={idx} />
    )}
    </div>
    </>
  )
}

function randomIntGenerator(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
export default SortingVisualiser