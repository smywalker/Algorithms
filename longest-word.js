//Find the longest word in a string.
function findLongestWord(str) {
    var array = str.split(' ');
    var long = 0;
    for(var i = 0; i < array.length;i++){
      if(array[i].length > long)
        long = array[i].length;
    }
    return long;
}
findLongestWord("The man down the street likes to buy chocolate bars");