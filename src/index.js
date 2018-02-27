module.exports = function check(str, bracketsConfig) {
  var openBrackets = [];
    var closeBrackets = [];
    var result = 0;
    var strLength = str.length;
    var configLenght = bracketsConfig.length;
    var temp = [];

    for (var i = 0; i < configLenght; i++){
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);
    }

    var openLenght = openBrackets.length;

    for (var i = 0; i < strLength; i++){
        for (var j = 0; j < openLenght; j++){
            if (str[i] == openBrackets[j]){
                result++;
            }
            if (str[i] == closeBrackets[j]){
                result--;
            }
        }
        if (result < 0) return false;
    }
    if (result == 0){
        return true;
    } else {
        return false;
    }
}
