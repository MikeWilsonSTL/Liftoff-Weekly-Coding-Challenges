function LongestWord(sen) { 
  sen = sen.split(" ");
  let currentLongestIndex;
  let currentLongestValue = 0;

  for(let x = 0; x < sen.length; x++){
    sen[x] = sen[x].replace(/[^a-zA-Z]/g, '');
  }

  for(let x = 0; x < sen.length; x++){
    if(sen[x].length > currentLongestValue){
      currentLongestIndex = x;
      currentLongestValue = sen[x].length;
    }
  }
  return currentLongestIndex; 
}
