export function getBubbleSortAnimations(array){
  const animations = []
  let noSwap = false
  let current;
  let next;
  let temp;
  for(let i = array.length;i>0;i--){
    noSwap = true;
    for(let j = 0;j<i-1;j++){
      current = array[j];
      next = array[j+1];
      animations.push([j,j+1])
      animations.push([j,j+1])
      if(current>next){
        animations.push([j,next,j+1,current])
        temp = array[j];
        array[j] = array[j+1];
        array[j+1]= temp
        noSwap= false;
      }
      else{
        animations.push([j,current,j+1,next])
      }
    }
    if(noSwap) break
  }
  return animations
}