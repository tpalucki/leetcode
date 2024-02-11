function removeDuplicates(nums: number[]): number {
    let curr = 1;
    for (let i=1; i < nums.length; i++) {
        if (nums[i] != nums[curr-1]) {
            nums[curr] = nums[i];
            curr++;
        }
    }
    return curr;
}