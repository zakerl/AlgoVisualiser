import React, {useState, useEffect} from "react";
import NavItem from "./NavItem"
import "../stylesheets/navbar.css"
import {getMergeSortAnimations} from "../SortingAlgorithms/MergeSort"
import {getBubbleSortAnimations} from "../SortingAlgorithms/BubbleSort"

const ANIMATION_SPEED_MS = 500;

// Change this value for the number of bars (value) in the array.

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

function Navbar({parentMethod, Array}){
  const [value,setInputValue] = useState(40);
  const animations = [];
  const newInputValue = (event)=>{
    setInputValue(event.target.value)
  }
  useEffect(()=>{
    console.log(value)
    resetarray()},[value])
  const resetarray = () =>{
    parentMethod(value)
  }
  function mergeSort(){
    const animations = getMergeSortAnimations(Array);
    barVisualisation(animations);
  }
  function BubbleSort(){
    const animations = getBubbleSortAnimations(Array);
    swapBarVisualisation(animations);
  }
  return(
    <div className="navbar">
      <div onClick={resetarray} className = "nav-item">Generate New Array</div>
      <input className="nav-item" type="range" min="3" max="80" step="1" value={value} 
      onChange={newInputValue}/>
      <NavItem parentFunction = {mergeSort} navItemName = "Merge Sort"/>
      <NavItem navItemName = "Insertion Sort"/>
      <NavItem navItemName = "Selection Sort"/>
      <NavItem parentFunction = {BubbleSort} navItemName = "Bubble Sort "/>
    </div>
  )
}
function randomIntGenerator(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
function barVisualisation(animations){
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('bar');
    const isColorChange = i % 3 !== 2;
    console.log(animations)
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, (i+1) * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, (i+1) * ANIMATION_SPEED_MS);
    }
  }
}
function swapBarVisualisation(animations){
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('bar');
    const isColorChange = i % 3 !== 2;
    console.log(animations)
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, (i+1) * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight_1, barTwoIdx, newHeight_2] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        barOneStyle.height = `${newHeight_1}px`;
        barTwoStyle.height = `${newHeight_2}px`;
      }, (i+1) * ANIMATION_SPEED_MS);
    }
  }
}
export default Navbar