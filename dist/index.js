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
var Encipher = /** @class */ (function () {
    function Encipher() {
    }
    Encipher.prototype.prepare_key = function (str) {
        if (str == " " || str == null) {
            return 0;
        }
        else {
            str.split("").map(function (x) { return x.toUpperCase(); }).join("");
            return 1;
        }
        ;
    };
    ;
    Encipher.prototype.encrpty = function (data) {
        if (this.prepare_key(data) == 0) {
            return new ReferenceError("The input value that unexpect");
        }
        var characters = [];
        var i = 65;
        while (i++ < 90) {
            characters.push(i);
        }
        ;
        var comparet_chars = characters.map(function (x) { return String.fromCharCode(x).toUpperCase(); });
        var comparet_data = comparet_chars
            .filter(function (el) { return data.split("")
            .some(function (x) { return x == el; }) &&
            (el.charCodeAt(0) > 65 && el.charCodeAt(0) < 90); });
        var split_data = data.split("");
        var index = 0;
        while (index++ < comparet_data.length) {
            split_data.push(comparet_data[index]);
        }
        ;
        var cpy_split_data = split_data.slice();
        var collect_comparet_data = [];
        for (var comparet_chars_index = 0; comparet_chars_index < comparet_chars.length; comparet_chars_index++) {
            for (var cpy_split_data_index = 0; cpy_split_data_index < data.length; cpy_split_data_index++) {
                if (comparet_chars[comparet_chars_index] === data[cpy_split_data_index]) {
                    collect_comparet_data.push(comparet_chars_index);
                }
                ;
            }
            ;
        }
        ;
        cpy_split_data.filter(function (x, index) {
            collect_comparet_data.map(function (number) { });
        });
    };
    ;
    return Encipher;
}());
;
var Number_compose = /** @class */ (function () {
    function Number_compose() {
    }
    return Number_compose;
}());
var Long_number = /** @class */ (function () {
    function Long_number() {
        this.joint_number = this.connection_number(new Number_compose());
    }
    Long_number.prototype.connection_number = function (val) {
        var joint = (val.column_number + val.change_number + val.staion_number);
        return parseInt(joint);
    };
    ;
    return Long_number;
}());
;
