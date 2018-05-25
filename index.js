const isOdd = number => number % 2 == 0;

function isPalirome(string) {
    let len = string.length - 1;
    let index_string = 0;
    if (isOdd(string.length)) {
        return new Error("It is not Palirome!");
    }
    const middle_char = ~~(len / 2);
    let flag = 0;
    for (index_string, len; index_string < middle_char, len > middle_char; index_string++, len--) {
        if ((string[index_string]) == (string[len])) {
            flag++;
        }
    };
    return flag == middle_char;
};



function find_the_string(char_) {
    const compare = "the";
    let index = 0;
    const len = char_.length;
    const store_string = [];
    const cpy_array = [];
    while (index++ < len) {
        if (index % 3 == 0) {
            store_string = cpy_array;
        } else {
            store_string.push(store_string);
        }
    };
    return store_string;
};
find_the_string("hello the workd")