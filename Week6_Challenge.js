function charCount(char, string){
  let matchCounter = 0;
  
  for(let x = 0; x < string.length; x++){
    if(string[x] == char){
      matchCounter++;
    }
  }

  return matchCounter;
}

console.log(charCount("a", "aardvark"));
