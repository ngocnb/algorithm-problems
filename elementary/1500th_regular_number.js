/*
The second problem is to find the 1,500-th number, which only contains factor 2, 3 or 5.
Such numbers are called the regular numbers4. 2, 3, and 5 are definitely regular numbers.
60 = 2²3¹5¹ is the 25-th regular number. 21 = 2º3¹7¹ is not because it has a factor of 7.
Let 1 = 2º3º5º be the 0-th regular number. The first 10 are:
1, 2, 3, 4, 5, 6, 8, 9, 10, 12, ...
 */

const bruteForce = function (n) {
    let x = 1;
    while (n > 0) {
        x++;
        if (validRegularNumber(x)) {
            n--;
        }
    }
    return x;
}

const validRegularNumber = function (num) {
    while (num % 2 === 0) num = num / 2;
    while (num % 3 === 0) num = num / 3;
    while (num % 5 === 0) num = num / 5;
    return num === 1;
}

const queueSolution = function (n) {
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

const multipleQueues = function (n) {
    let x = 1;
    let queue2 = [2];
    let queue23 = [3];
    let queue235 = [5];
    while (n > 0) {
        x = Math.min(queue2[0], queue23[0], queue235[0]);
        if (x === queue2[0]) {
            queue2.splice(0, 1);
            queue2.push(x * 2);
            queue23.push(x * 3);
            queue235.push(x * 5);
        } else if (x === queue23[0]) {
            queue23.splice(0, 1);
            queue23.push(x * 3);
            queue235.push(x * 5);
        } else {
            queue235.splice(0, 1);
            queue235.push(x * 5);
        }
        n--;
    }
    return x;
}

const checkSolution = function (fn, n) {
    const startTime = performance.now();
    const r = fn(n);
    const durationTime = performance.now() - startTime;
    console.log(r === 860934420, `test ${fn.name}: ${durationTime}ms`);
}

checkSolution(bruteForce, 1500);
checkSolution(queueSolution, 1500);
checkSolution(multipleQueues, 1500);
/*
test bruteForce: 12720.840600000001ms
test queueSolution: 11.928499999999985ms
test multipleQueues: 0.5961000000006607ms
 */