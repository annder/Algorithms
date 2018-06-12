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
function cat_array(array_, other_array) {
    var lenght_ = array_.length;
    var long_lenght = other_array.length + lenght_;
    var other_array_lenght = other_array.length;
    var index = 0;
    for (index = 0, lenght_; lenght_ < long_lenght; lenght_++, index++) {
        array_[lenght_] = other_array[index];
    }
    return array_;
}
;
var result = cat_array([1], [2]);
var Statistic_String = /** @class */ (function () {
    function Statistic_String(input) {
        this.input = input;
    }
    Statistic_String.prototype.isColtroal_string = function () {
        var result = 0;
        var store_string = ["\a", "\f", "\r", "\v", "\""];
        return result;
    };
    ;
    return Statistic_String;
}());
////////////////////
function toASCII(arg) {
    if (typeof arg === "number") {
        return arg + 48;
    }
    ;
    if (typeof arg == "string") {
        return arg.charCodeAt(0);
    }
    ;
}
function compare_char_number(compare_number_A, compare_number_B) {
    var compare_number_ascii_A = toASCII(compare_number_A);
    var compare_number_ascii_B = toASCII(compare_number_B);
    if (compare_number_A < compare_number_ascii_B) {
        var Temp_ = 0;
        Temp_ = compare_number_ascii_A;
        compare_number_ascii_A = compare_number_ascii_B;
        compare_number_ascii_B = Temp_;
    }
    ;
}
;
function encode_asscii(ascii) {
    if (ascii > 49) {
        return ascii - 49;
    }
    else {
        String.fromCharCode(ascii);
    }
    ;
}
;
function encoding_string_number_array(array_) {
    var len = array_.length;
    var result = [];
    for (var i = 0; i < len; i++) {
        result.push(encode_asscii(array_[i]));
    }
    ;
    return result;
}
;
function All_Sort(any_array, lenght_, compare) {
    for (var i = 0; i < lenght_; i++) {
        compare(any_array[i], any_array[i + 1]);
    }
    ;
    console.log(any_array);
    return any_array;
}
;
All_Sort([12, 3, 123], 3, compare_char_number);
