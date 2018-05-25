const isOdd = (number: number) => number % 2 == 0;

function isPalirome(string: string) {
    let len = string.length - 1;
    let index_string = 0;
    if (isOdd(string.length)) {
        return new Error("It is not Palirome!");
    }
    const middle_char = ~~(len / 2);
    let flag = 0;
    for (index_string; index_string < middle_char; index_string++ , len--) {
        if ((string[index_string]) == (string[len])) {
            flag++;
        }
    };
    return flag == middle_char;
};



function find_the_string(char_: string) {
    let index = -1;
    const handle_white = (string: string) => string.split("").filter(x => x !== " ").join("");
    let cursh_white_string: string = handle_white(char_);
    let len = cursh_white_string.length;
    let flag = 0;
    while (index++ < len) {
        if (cursh_white_string[index - 1] == 't' && cursh_white_string[index] == 'h' && cursh_white_string[index + 1] == 'e') {
            flag++;
        }
    };
    return flag;
};

