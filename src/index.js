const unitMap = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
const decadeMap = [
    ,
    ,
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable(number) {
    if (number < 100) {
        return toReadableTill100(number);
    }

    const hundreds = Math.floor(number / 100);
    const decades = number % 100;
    if (decades) {
        return `${unitMap[hundreds]} hundred ${toReadableTill100(decades)}`;
    }
    return `${unitMap[hundreds]} hundred`;
};

function toReadableTill100(number) {
    if (number < 20) return unitMap[number];

    const [decades, units] = number.toString().split("");
    if (units === "0") {
        return decadeMap[decades];
    }

    return `${decadeMap[decades]} ${unitMap[units]}`;
}
