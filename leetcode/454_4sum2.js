/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    return solution3(nums1, nums2, nums3, nums4);
};

const solution3 = function(nums1, nums2, nums3, nums4) {
    let map = new Map();
    let count = 0;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            const sum = nums1[i] + nums2[j];
            map.set(sum, map.get(sum) + 1 || 1);
        }
    }

    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            const sum = -1 * (nums3[i] + nums4[j]);
            if (map.get(sum) > 0) {
                count += map.get(sum) || 0;
            }
        }
    }
    return count;
}

const solution1 = function(nums1, nums2, nums3, nums4) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    nums3.sort((a, b) => a - b);
    nums4.sort((a, b) => a - b);

    let count = 0;
    let countK = 0;
    let countJ = 0;
    let countI = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (i > 0 && nums1[i] === nums1[i - 1]) {
            count += countI;
            continue;
        }
        countI = 0;
        for (let j = 0; j < nums2.length; j++) {
            if (j > 0 && nums2[j] === nums2[j - 1]) {
                count += countJ;
                countI += countJ;
                continue;
            }
            countJ = 0;
            for (let k = 0; k < nums3.length; k++) {
                if (k > 0 && nums3[k] === nums3[k - 1]) {
                    count += countK;
                    countJ += countK;
                    continue;
                }
                countK = 0;
                for (let l = nums4.length - 1; l >= 0; l--) {
                    const sum = nums1[i] + nums2[j] + nums3[k] + nums4[l];
                    if (sum === 0) {
                        count++;
                        countK++;
                        while (nums4[l] === nums4[l - 1]) {
                            l--;
                            count++;
                            countK++;
                        }
                    }
                    if (sum < 0) break;
                }
                countJ += countK;
            }
            countI += countJ;
        }
    }
    return count;
}