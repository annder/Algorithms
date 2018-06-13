const isOdd = (number: number) => number % 2 == 0;

function isPalirome(string: string) {
    let len = string.length - 1;
    let index_string = 0;
    if (isOdd(string.length)) {
        return new Error("It is not Palirome!");
    }
    const middle_char: number = ~~(len / 2);
    let flag: number = 0;
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

class Encipher {
    private encipher_string: string;
    public prepare_key(str: string): number {
        if (str == " " || str == null) {
            return 0;
        }
        else {
            str.split("").map(x => x.toUpperCase()).join("");
            return 1;
        };
    };
    public encrpty(data: string): void | ReferenceError {
        if (this.prepare_key(data) == 0) {
            return new ReferenceError("The input value that unexpect");
        }
        let characters = [];
        let i = 65;
        while (i++ < 90) {
            characters.push(i)
        };
        const comparet_chars: Array<string> = characters.map(x => String.fromCharCode(x).toUpperCase());
        const comparet_data: Array<string> = comparet_chars
            .filter(el => data.split("")
                .some(x => x == el) &&
                (el.charCodeAt(0) > 65 && el.charCodeAt(0) < 90))
        const split_data = data.split("");
        let index = 0;
        while (index++ < comparet_data.length) {
            split_data.push(comparet_data[index]);
        };
        let cpy_split_data = [...split_data];
        let collect_comparet_data: Array<number> = [];
        for (let comparet_chars_index = 0; comparet_chars_index < comparet_chars.length; comparet_chars_index++) {
            for (let cpy_split_data_index = 0; cpy_split_data_index < data.length; cpy_split_data_index++) {
                if (comparet_chars[comparet_chars_index] === data[cpy_split_data_index]) {
                    collect_comparet_data.push(comparet_chars_index);
                };
            };
        };
        cpy_split_data.filter((x, index) => {
            collect_comparet_data.map(number => { })
        })
    };
};


class Number_compose {
    public column_number: string;
    public change_number: string;
    public staion_number: string;
}
class Long_number {
    public joint_number: number = this.connection_number(new Number_compose());
    public connection_number(val: Number_compose): number {
        const joint: string = (val.column_number + val.change_number + val.staion_number);
        return parseInt(joint);
    };
};

function cat_array(array_: Array<number>, other_array: Array<number>): Array<number> {
    let lenght_: number = array_.length;
    const long_lenght: number = other_array.length + lenght_;
    const other_array_lenght: number = other_array.length;
    let index: number = 0;
    for (index = 0, lenght_; lenght_ < long_lenght; lenght_++ , index++) {
        array_[lenght_] = other_array[index];
    }
    return array_;
};

let result: Array<number> = cat_array([1], [2]);

class Statistic_String {
    input: string;
    constructor(input: string) {
        this.input = input;
    }
    private isColtroal_string(): number {
        let result = 0;
        const store_string: Array<string> = ["\a", "\f", "\r", "\v", "\""];
        return result;
    };
}



////////////////////

function toASCII(arg: number | string): number {
    if (typeof arg === "number") {
        return arg + 48;
    };
    if (typeof arg == "string") {
        return arg.charCodeAt(0)
    };
}

function compare_char_number(compare_number_A: string | number, compare_number_B: string | number): void {
    let compare_number_ascii_A = toASCII(compare_number_A);
    let compare_number_ascii_B = toASCII(compare_number_B);
    if (compare_number_A < compare_number_ascii_B) {
        let Temp_ = 0;
        Temp_ = compare_number_ascii_A;
        compare_number_ascii_A = compare_number_ascii_B;
        compare_number_ascii_B = Temp_;
    };
};

function encode_asscii(ascii: number): string | number {
    if (ascii > 49) {
        return ascii - 49;
    }
    else {
        String.fromCharCode(ascii);
    };
};

function encoding_string_number_array(array_: Array<number>): Array<string | number> {
    const len = array_.length;
    let result: Array<string | number> = [];
    for (let i = 0; i < len; i++) {
        result.push(encode_asscii(array_[i]));
    };
    return result;
};

function All_Sort(any_array: Array<string> | Array<number>, lenght_: number,
    compare: (compare_number_A: string | number, compare_number_B: string | number) => void): Array<string | number> {
    for (let i = 0; i < lenght_; i++) {
        compare(any_array[i], any_array[i + 1]);
    };
    console.log(any_array);
    return any_array;
};

