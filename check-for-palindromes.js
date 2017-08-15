//Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
    var stringArray = [];
    var ogString = str.toLowerCase();
    var newString = "";
    var reverseString = "";
    ogString = ogString.replace(/[^a-z0-9+]+/gi, ''); 
    stringArray = ogString.split('');
    stringArray = stringArray.reverse();
    newString = stringArray.join('');
    if(ogString == newString){
      return true;
    }else{
      return false;
    }
  }
palindrome("eye");
palindrome("nose");