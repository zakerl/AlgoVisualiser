import React,{useState, useEffect} from "react";
import "./SortingVisualiser.css"
import Navbar from "./Navbar/Navbar.js"
import Bar from "./Bar"

function SortingVisualiser(){
  const [array, setArray] = useState([]);
  useEffect(()=>resetArray(),[])
  const resetArray = (NUMBER_OF_ARRAY_BARS = 30) => {
    let new_arr = [];
    for(let i = 0;i<NUMBER_OF_ARRAY_BARS;i++){
      new_arr.push(randomIntGenerator(3, 300))
    }
    setArray(new_arr)
  }
  return(
    <>
    <Navbar parentMethod = {resetArray} Array = {array} />
    <div className = "array-container">
      {array.map((value,idx)=>
        <Bar height={value} key = {idx}/>
      )}
    </div>
    </>
  )
}

function randomIntGenerator(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
export default SortingVisualiser