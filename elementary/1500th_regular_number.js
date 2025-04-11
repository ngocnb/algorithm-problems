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