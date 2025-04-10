/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        // ignore duplicated cases
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            // ignore duplicated cases
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];
                if (sum > target) {
                    r--;
                    // ignore duplicated cases
                    while (l < r && nums[r] === nums[r + 1]) r--;
                } else if (sum < target) {
                    l++;
                    // ignore duplicated cases
                    while (l < r && nums[l] === nums[l - 1]) l++;
                } else {
                    result.push([nums[i], nums[j], nums[l], nums[r]]);
                    l++;
                    r--;
                    // ignore duplicated cases
                    while (l < r && nums[r] === nums[r + 1]) r--;
                    while (l < r && nums[l] === nums[l - 1]) l++;
                }
            }
        }
    }

    return result;
};