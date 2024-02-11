function twoSum(nums: number[], target: number): number[] {
    let numberMap = new Map();

    for (let i = 0; i < nums.length; i++ ) {
        const difference = target - nums[i];

        if (numberMap.has(difference)) {
            return [numberMap.get(difference), i]
        }
        numberMap.set(nums[i], i);
    }
}
