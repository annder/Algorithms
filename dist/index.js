var isOdd = function (number) { return number % 2 == 0; };
function isPalirome(string) {
    var len = string.length - 1;
    var index_string = 0;
    if (isOdd(string.length)) {
        return new Error("It is not Palirome!");
    }
    var middle_char = ~~(len / 2);
    var flag = 0;
    for (index_string; index_string < middle_char; index_string++, len--) {
        if ((string[index_string]) == (string[len])) {
            flag++;
        }
    }
    ;
    return flag == middle_char;
}
;
function find_the_string(char_) {
    var index = -1;
    var handle_white = function (string) { return string.split("").filter(function (x) { return x !== " "; }).join(""); };
    var cursh_white_string = handle_white(char_);
    var len = cursh_white_string.length;
    var flag = 0;
    while (index++ < len) {
        if (cursh_white_string[index - 1] == 't' && cursh_white_string[index] == 'h' && cursh_white_string[index + 1] == 'e') {
            flag++;
        }
    }
    ;
    return flag;
}
;
