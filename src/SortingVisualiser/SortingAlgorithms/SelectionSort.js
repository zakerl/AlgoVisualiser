function getSelectionSortAnimations(array){
  const animations = [];
  let lowest;
  for(let i = 0;i<array.length;i++){
    lowest = arr[i]
    for(let j = i+1;j<array.length;j++){
      animations.push(lowest,j)
      animations.push(lowest, j)
      if(arr[j]<lowest){
        lowest = j;
      }
    }
  }
}