import React from "react"

function Bar({height, index}){
  return(
  <div 
    style={{height: `${height}px`}} 
    className = "bar" 
    key = {index}>{height}
  </div>
  )
}
export default Bar