function weirdAdd(num){
  let runningTotal = 0;
  
  for(let x = 0; x < num + 1; x++){
    runningTotal = runningTotal + x;
  }
  return runningTotal;
}

console.log(weirdAdd(600));
