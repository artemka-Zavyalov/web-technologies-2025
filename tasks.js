//Задача 1

function pickPropArray(arr, prop) {
    return arr.map(obj => obj[prop])
        .filter(Boolean);
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
];

const result = pickPropArray(students, 'name')
console.log(result)


//Задача 2

function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2



//Задача 3

function spinWords(str) {
    const words = str.split(' ');
    const reversedWords = [];
    for (let word of words) {
        if (word.length >= 5) {
            word = word.split('').reverse().join('');
        }
        reversedWords.push(word);
    }
    return reversedWords.join(' ');
}

// Примеры использования
const result1 = spinWords("Привет от Legacy");
console.log(result1); // тевирП от ycageL

const result2 = spinWords("This is a test");
console.log(result2); // This is a test


//Задание 4

function getTarget(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        if (map.has(needed)) return [map.get(needed), i];
        map.set(nums[i], i);
    }
    return [];
}

const nums = [2,7,11,15];
const target = 18;

console.log(getTarget(nums, target)) //Ожидается [1, 2]


//Задание 5

function getLongestLine(strs) {
    if (!strs || strs.length === 0) {
        return "";
    }

    let longest = "";

    for (let length = 2; length <= strs[0].length; length++) {
        for (let start = 0; start <= strs[0].length - length; start++) {

            let substring = strs[0].substring(start, start + length);

            if (strs.every(str => str.includes(substring)) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }

    return longest;
}

const strs1 = ["цветок","поток","хлопок"];
console.log(getLongestLine(strs1)); //Ожидается "ок"

const strs2 = ["собака","гоночная машина","машина"];
console.log(getLongestLine(strs2)); //Ожидается ""