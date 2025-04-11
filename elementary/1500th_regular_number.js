/*
The second problem is to find the 1,500-th number, which only contains factor 2, 3 or 5.
Such numbers are called the regular numbers4. 2, 3, and 5 are definitely regular numbers.
60 = 223151 is the 25-th regular number. 21 = 203171 is not because it has a factor of 7.
Let 1 = 203050 be the 0-th regular number. The first 10 are:
1, 2, 3, 4, 5, 6, 8, 9, 10, 12, ...
 */

const regularNumber = function (n) {
    let queue = [1];
    let result = undefined;
    while (n >= 0) {
        result = queue.splice(0, 1)[0];
        queue = addToQueue(queue, result * 2);
        queue = addToQueue(queue, result * 3);
        queue = addToQueue(queue, result * 5);
        n--;
    }
    return result;
}

const addToQueue = function (queue, num) {
    let index = 0;
    while (queue[index] < num && index < queue.length) {
        index++;
    }
    if (queue[index] !== num) {
        queue = [
            ...queue.slice(0, index),
            num,
            ...queue.slice(index)
        ]
    }
    return queue;
}

const startTime = performance.now();
const r = regularNumber(1500);
const durationTime = performance.now() - startTime;
console.log(r === 860934420, `${durationTime}ms`);