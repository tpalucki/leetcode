function removeElement(nums: number[], val: number): number {
    let last = 0;
    for (let i = 0; i < nums.length; i++) {
        if (val !== nums[i]) {
            nums[last] = nums[i];
            last++;
        }
    }
    return last;
}