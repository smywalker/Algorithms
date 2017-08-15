//Return the provided string with the first letter of each word capitalized.
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
} 
titleCase("javascript is the best language ever.");