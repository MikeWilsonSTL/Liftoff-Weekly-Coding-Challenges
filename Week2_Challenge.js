function FirstReverse(str) { 
  let reversedArr = [];
  for(let x = str.length - 1; x > 0; x--){
    reversedArr.push(str[x]);
  }
  return reversedArr.join("");
}
