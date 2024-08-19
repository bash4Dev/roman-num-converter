const numInput = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

output.style.visibility = "hidden";

const romanNums = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];

const numToRoman = (num, result = "") => {
    if (num === 0) {
        return result;
    }
    
    if (num === "") {
        return "Please enter a valid number";
    } else if (num <= 0) {
        return "Please enter a number greater than or equal to 1";
    } else if (num >= 4000) {
        return "Please enter a number less than or equal to 3999";
    }

    for (const { value, numeral } of romanNums) {
        if (num >= value) {
            return numToRoman(num - value, result + numeral);
        }
    }
}

const outputFunc = (e) => {
    e.preventDefault();
    output.innerText = numToRoman(numInput.value);
    output.style.visibility = "visible";
}

convertBtn.addEventListener("click", outputFunc);
convertBtn.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        outputFunc();
    }
});