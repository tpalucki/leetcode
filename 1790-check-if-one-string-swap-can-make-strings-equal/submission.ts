function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) { return true; }
    let swapIndex;
    for(let i = 0; i< s1.length; i++) {
        if (s1[i] === s2[i]) {
            continue;
        }
        if (swapIndex === undefined) {
            swapIndex = i;
            continue;
        }
        if (swapIndex !== undefined) {
            return s1[i] === s2[swapIndex] && s2[i] === s1[swapIndex] && s1.substring(i+1) === s2.substring(i+1);
        }
    }
    return swapIndex === undefined;
}