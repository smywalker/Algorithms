//Algorithm to reverse a given string.
function reverseString(str) {
  var array = [];
  var string = "";
  array = str.split('');
  array = array.reverse();
  string = array.join("");
  return string;
}
reverseString("hello");